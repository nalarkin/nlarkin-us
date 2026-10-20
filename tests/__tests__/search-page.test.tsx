import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useRouter } from 'next/router';
import SearchPage from 'pages/news/search';
import SearchBar from 'components/search/SearchBar';

jest.mock('next/router', () => ({ useRouter: jest.fn() }));

it.each([undefined, '', '   '])(
  'renders a search form for an empty query: %s',
  (all) => {
    (useRouter as jest.Mock).mockReturnValue({ isReady: true, query: { all } });
    render(<SearchPage data={[]} />);
    expect(
      screen.getByRole('textbox', { name: 'Search articles' })
    ).toHaveValue('');
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  }
);

it('updates the form when the URL query changes, including repeated parameters', () => {
  (useRouter as jest.Mock).mockReturnValue({
    isReady: true,
    query: { all: 'first' },
  });
  const { rerender } = render(<SearchPage data={[]} />);
  expect(screen.getByRole('textbox', { name: 'Search articles' })).toHaveValue(
    'first'
  );
  (useRouter as jest.Mock).mockReturnValue({
    isReady: true,
    query: { all: ['second', 'story'] },
  });
  rerender(<SearchPage data={[]} />);
  expect(screen.getByRole('textbox', { name: 'Search articles' })).toHaveValue(
    'second story'
  );
});

it('rejects whitespace-only searches and trims submitted queries', () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });
  render(<SearchBar />);
  const input = screen.getByRole('textbox', { name: 'Search articles' });
  fireEvent.change(input, { target: { value: '   ' } });
  expect(screen.getByRole('button', { name: 'GO' })).toBeDisabled();
  fireEvent.submit(input.closest('form')!);
  expect(push).not.toHaveBeenCalled();
  fireEvent.change(input, { target: { value: '  story  ' } });
  fireEvent.submit(input.closest('form')!);
  expect(push).toHaveBeenCalledWith({
    pathname: '/news/search',
    query: { all: 'story' },
  });
});
