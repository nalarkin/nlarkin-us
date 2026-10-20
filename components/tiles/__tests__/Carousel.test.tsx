import React, { StrictMode } from 'react';

import { afterAll, beforeAll, describe, it, jest } from '@jest/globals';
import { act, render, screen } from '@testing-library/react';
import { hydrateRoot, Root } from 'react-dom/client';
import type { Swiper as SwiperInstance } from 'swiper/types';

import type { ArticleDetailedImage } from 'lib/interfaces';
import { renderServer } from 'tests/render-server';

import Carousel from '../Carousel';

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

const articles: ArticleDetailedImage[] = [
  'First story',
  'Second story',
  'Third story',
  'Fourth story',
  'Fifth story',
].map((title, index) => ({
  _id: `article-${index}`,
  slug: `story-${index}`,
  title,
  excerpt: 'Article summary',
  image: {
    src: '/nextjs-cover.webp',
    width: 100,
    height: 100,
    alt: '',
    placeholder: 'blur',
    blurDataURL:
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
}));

describe('Carousel', () => {
  it('hydrates server-rendered slides under Strict Mode at a desktop breakpoint', async () => {
    const ui = (
      <StrictMode>
        <Carousel articles={articles} />
      </StrictMode>
    );
    const container = document.createElement('div');
    container.innerHTML = renderServer(ui);
    document.body.appendChild(container);
    const recoverableErrors: unknown[] = [];
    let root: Root | undefined;

    try {
      await act(async () => {
        root = hydrateRoot(container, ui, {
          onRecoverableError: (error) => recoverableErrors.push(error),
        });
      });
      expect(recoverableErrors).toEqual([]);
      expect(container.querySelectorAll('.swiper-slide')).toHaveLength(5);
      const image = container.querySelector('.swiper-slide img');
      expect(image).toHaveAttribute('width', '100');
      expect(image).toHaveAttribute('height', '100');
      expect(image).toHaveStyle({ maxWidth: '100%', height: 'auto' });
      const element = container.querySelector('.swiper') as HTMLElement & {
        swiper: SwiperInstance;
      };
      expect(element.swiper.destroyed).not.toBe(true);
      expect(element.swiper.params.slidesPerView).toBe(5);
    } finally {
      await act(async () => root?.unmount());
      container.remove();
    }
  });

  it('keeps navigation working after a Strict Mode remount and prop update', () => {
    const { container, rerender, unmount } = render(
      <StrictMode>
        <Carousel articles={articles} />
      </StrictMode>
    );

    const element = container.querySelector('.swiper') as HTMLElement & {
      swiper: SwiperInstance;
    };
    const instance = element.swiper;
    expect(instance.destroyed).not.toBe(true);
    expect(instance.navigation.nextEl).toBe(
      container.querySelector('.swiper-button-next')
    );
    expect(screen.getByRole('link', { name: 'First story' })).toHaveAttribute(
      'href',
      '/news/articles/story-0'
    );

    rerender(
      <StrictMode>
        <Carousel articles={articles.slice(0, 1)} />
      </StrictMode>
    );
    expect(instance.destroyed).not.toBe(true);
    expect(screen.queryByRole('link', { name: 'Second story' })).toBeNull();

    unmount();
    expect(instance.destroyed).toBe(true);
  });
});
