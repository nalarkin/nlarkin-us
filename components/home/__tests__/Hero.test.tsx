import React from 'react';

import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Hero from '../Hero';

describe('Home header', () => {
  it('displays heading and contact and resume button', () => {
    render(<Hero />);
    expect(
      screen.getByRole('link', { name: /contact me/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /résumé/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /hi, i'm nathan/i })
    ).toBeInTheDocument();
  });
});
