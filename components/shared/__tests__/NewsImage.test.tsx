import React from 'react';

import { render, screen } from '@testing-library/react';

import NewsImage, { sanityImageLoader } from '../NewsImage';

const src = 'https://cdn.sanity.io/images/test/production/cover-2400x1600.jpg';

it('requests the selected width and format directly from Sanity', () => {
  const url = new URL(sanityImageLoader({ src, width: 640, quality: 50 }));
  expect(url.origin).toBe('https://cdn.sanity.io');
  expect(url.searchParams.get('w')).toBe('640');
  expect(url.searchParams.get('q')).toBe('50');
  expect(url.searchParams.get('auto')).toBe('format');
  expect(url.searchParams.get('fit')).toBe('max');
});

it('preserves the aspect ratio and crop parameters of cropped images', () => {
  const url = new URL(
    sanityImageLoader({
      src: `${src}?w=300&h=200&rect=100,100,1200,800`,
      width: 600,
    })
  );
  expect(url.searchParams.get('w')).toBe('600');
  expect(url.searchParams.get('h')).toBe('400');
  expect(url.searchParams.get('rect')).toBe('100,100,1200,800');
  expect(url.searchParams.get('q')).toBe('75');
});

it('generates responsive CDN URLs while leaving below-fold images lazy', () => {
  render(
    <NewsImage
      src={src}
      alt="News cover"
      width={2400}
      height={1600}
      sizes="200px"
    />
  );
  const image = screen.getByRole('img', { name: 'News cover' });
  expect(image).toHaveAttribute('sizes', '200px');
  expect(image).toHaveAttribute('loading', 'lazy');
  expect(image.getAttribute('srcset')).toContain('https://cdn.sanity.io/');
  expect(image.getAttribute('srcset')).not.toContain('/_next/image');
});

it('keeps the Next.js optimizer for local images', () => {
  render(
    <NewsImage
      src="/nextjs-cover.webp"
      alt="Local cover"
      width={300}
      height={200}
    />
  );
  expect(screen.getByRole('img').getAttribute('src')).toContain('/_next/image');
});
