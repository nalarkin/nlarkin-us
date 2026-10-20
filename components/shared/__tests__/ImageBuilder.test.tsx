import React from 'react';

import { render, screen } from '@testing-library/react';

import { renderServer } from 'tests/render-server';

import { ImageBuilder } from '../ImageBuilder';

it('renders a converted image with its dimensions, alternative text, and blur placeholder', () => {
  const ui = (
    <ImageBuilder
      classes="rounded-full"
      image={{
        src: '/nextjs-cover.webp',
        width: 300,
        height: 200,
        alt: 'Article cover',
        placeholder: 'blur',
        blurDataURL:
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      }}
    />
  );
  expect(renderServer(ui)).toContain(
    'background-image:url(&quot;data:image/svg+xml'
  );
  render(ui);
  const image = screen.getByRole('img', { name: 'Article cover' });
  expect(image).toHaveAttribute('width', '300');
  expect(image).toHaveAttribute('height', '200');
  expect(image).toHaveClass('rounded-full');
  expect(image).toHaveStyle({ maxWidth: '100%', height: 'auto' });
});
