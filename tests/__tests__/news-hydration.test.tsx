import React, { StrictMode } from 'react';

import { afterAll, beforeAll, it, jest } from '@jest/globals';
import { act } from '@testing-library/react';
import { hydrateRoot, Root } from 'react-dom/client';

import type { HomeProps } from 'lib/interfaces';
import { renderServer } from 'tests/render-server';

import fixture from '../../cypress/fixtures/news/home.json';
import NewsHome from '../../pages/news/index';

const originalMatchMedia = window.matchMedia;

beforeAll(() => {
  window.matchMedia = jest.fn((query: string) => ({
    matches:
      query.startsWith('(min-width:') &&
      parseInt(query.match(/\d+/)?.[0] ?? '0', 10) <= window.innerWidth,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(() => false),
  }));
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});

// Keep the real CMS fixture while generating no remote image requests in tests.
function localImages(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(localImages);
  if (!value || typeof value !== 'object') return value;
  const object = value as Record<string, unknown>;
  const asset = object.asset as { _ref?: string } | undefined;
  if (asset?._ref?.startsWith('image-')) {
    return {
      src: '/nextjs-cover.webp',
      width: 100,
      height: 100,
      alt: '',
      placeholder: 'blur',
      blurDataURL:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    };
  }
  return Object.fromEntries(
    Object.entries(object).map(([key, child]) => [key, localImages(child)])
  );
}

it('hydrates the news page and its carousels when the client date differs', async () => {
  jest.useFakeTimers({
    doNotFake: [
      'nextTick',
      'queueMicrotask',
      'setImmediate',
      'setTimeout',
      'clearTimeout',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'performance',
    ],
  });
  jest.setSystemTime(new Date('2026-10-20T12:00:00Z'));
  const ui = (
    <StrictMode>
      <NewsHome data={localImages(fixture) as HomeProps} />
    </StrictMode>
  );
  const container = document.createElement('div');
  const errors: unknown[] = [];
  let root: Root | undefined;

  try {
    container.innerHTML = renderServer(ui);
    document.body.appendChild(container);
    jest.setSystemTime(new Date('2026-10-21T12:00:00Z'));
    await act(async () => {
      root = hydrateRoot(container, ui, {
        onRecoverableError: (error) => errors.push(error),
      });
    });
    expect(errors).toEqual([]);
    expect(container.querySelectorAll('.swiper')).toHaveLength(5);
    expect(container.textContent).toContain('The Nathan Times');
    const times = Array.from(container.querySelectorAll('time'));
    expect(times).toHaveLength(2);
    expect(times.every((time) => time.dateTime.startsWith('2026-10-21'))).toBe(
      true
    );
  } finally {
    await act(async () => root?.unmount());
    container.remove();
    jest.useRealTimers();
  }
});
