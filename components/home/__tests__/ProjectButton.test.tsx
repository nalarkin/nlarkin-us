import React from 'react';

import { render, screen } from '@testing-library/react';

import { ProjectButton } from '../ProjectButton';

describe('ProjectButton', () => {
  it('opens internal links in the same tab', () => {
    render(<ProjectButton href="/news" text="View Site" variant="text" />);
    const link = screen.getByRole('link', { name: 'View Site' });
    expect(link).toHaveAttribute('href', '/news');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it.each(['https://github.com/nalarkin', '//example.com/demo'])(
    'keeps external links opening safely in a new tab (%s)',
    (href) => {
      render(<ProjectButton href={href} text="External" variant="text" />);
      const link = screen.getByRole('link', { name: 'External' });
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
    }
  );
});
