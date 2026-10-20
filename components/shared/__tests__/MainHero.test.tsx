import React from 'react';

import MainHero from 'components/sections/cards/MainHero';
import type { ArticleDetailedImage, CategoryHero } from 'lib/interfaces';
import { renderServer } from 'tests/render-server';

const article: ArticleDetailedImage = {
  _id: 'hero',
  slug: 'hero',
  title: 'Hero story',
  excerpt: 'Hero summary',
  image: {
    src: 'https://cdn.sanity.io/images/test/production/hero-1600x900.jpg',
    width: 1600,
    height: 900,
    alt: 'Hero cover',
    placeholder: 'blur',
    blurDataURL:
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
};
const data: CategoryHero = {
  uid: 'Hero',
  articles: { main: article, sideArticles: [article, article, article] },
};

it('only emits a hero image preload when explicitly requested', () => {
  const heroHtml = renderServer(<MainHero data={data} preload />);
  const lowerHeroHtml = renderServer(<MainHero data={data} />);
  expect(heroHtml).toContain('rel="preload"');
  expect(heroHtml).toContain('imageSizes=');
  expect(lowerHeroHtml).not.toContain('rel="preload"');
  expect(lowerHeroHtml).toContain('loading="lazy"');
});
