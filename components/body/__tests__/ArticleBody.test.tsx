import React from 'react';

import { render, screen } from '@testing-library/react';

import type { Article } from 'lib/schema';

import ArticleBody from '../ArticleBody';

describe('ArticleBody', () => {
  it('preserves paragraph formatting, marks, links, and lists', () => {
    const text: Article['text'] = [
      {
        _type: 'block',
        _key: 'paragraph',
        style: 'normal',
        markDefs: [{ _key: 'link', _type: 'link', href: '/news' }],
        children: [
          {
            _type: 'span',
            _key: 'bold',
            text: 'Bold story',
            marks: ['strong'],
          },
          { _type: 'span', _key: 'space', text: ' ', marks: [] },
          { _type: 'span', _key: 'link', text: 'Read more', marks: ['link'] },
        ],
      },
      {
        _type: 'block',
        _key: 'list-item',
        style: 'normal',
        markDefs: [],
        listItem: 'bullet',
        level: 1,
        children: [
          { _type: 'span', _key: 'item', text: 'List item', marks: [] },
        ],
      },
    ];

    render(<ArticleBody text={text} />);
    expect(screen.getByText('Bold story').tagName).toBe('STRONG');
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute(
      'href',
      '/news'
    );
    expect(screen.getByText('Bold story').parentElement).toHaveClass(
      'mb-4',
      'text-xl',
      'font-serif'
    );
    expect(screen.getByRole('listitem')).toHaveTextContent('List item');
  });

  it('renders empty content when text is absent', () => {
    const { container } = render(<ArticleBody />);
    expect(container.firstElementChild).toBeEmptyDOMElement();
  });
});
