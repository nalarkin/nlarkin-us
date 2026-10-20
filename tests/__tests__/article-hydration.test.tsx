import React, { StrictMode } from 'react';

import { act } from '@testing-library/react';
import { hydrateRoot, Root } from 'react-dom/client';

import type { ArticleProps } from 'lib/queries';
import ArticlePage from 'pages/news/articles/[slug]';
import { renderServer } from 'tests/render-server';

it('hydrates an article with SEO, images, author links, and rich text', async () => {
  const data: ArticleProps = {
    _id: 'article',
    slug: 'example-story',
    title: 'Example story',
    date: '2026-10-20T12:00:00Z',
    authors: [{ name: 'Example Author', slug: 'example-author' }],
    image: {
      src: '/nextjs-cover.webp',
      alt: 'Example cover',
      width: 300,
      height: 200,
      placeholder: 'blur',
      blurDataURL:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    },
    text: [
      {
        _type: 'block',
        _key: 'paragraph',
        style: 'normal',
        markDefs: [],
        children: [
          { _type: 'span', _key: 'text', text: 'Story body', marks: [] },
        ],
      },
    ],
  };
  const ui = (
    <StrictMode>
      <ArticlePage data={data} preview={false} />
    </StrictMode>
  );
  const container = document.createElement('div');
  container.innerHTML = renderServer(ui);
  document.body.appendChild(container);
  const errors: unknown[] = [];
  let root: Root | undefined;

  try {
    await act(async () => {
      root = hydrateRoot(container, ui, {
        onRecoverableError: (error) => errors.push(error),
      });
    });
    expect(errors).toEqual([]);
    expect(container.querySelector('h1')).toHaveTextContent('Example story');
    expect(container).toHaveTextContent('Story body');
    expect(container.querySelector('img')).toHaveAttribute(
      'alt',
      'Example cover'
    );
    expect(
      container.querySelector('a[href="/news/authors/example-author"]')
    ).toHaveTextContent('Example Author');
  } finally {
    await act(async () => root?.unmount());
    container.remove();
  }
});
