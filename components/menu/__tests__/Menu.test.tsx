import React, { StrictMode } from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';

import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

jest.mock('next/router', () => ({ useRouter: () => ({ push: jest.fn() }) }));

describe('News menu', () => {
  it('opens, closes on an outside click, and can reopen under Strict Mode', async () => {
    render(
      <StrictMode>
        <Menu />
      </StrictMode>
    );

    const button = screen.getByRole('button');
    expect(screen.queryAllByRole('link')).toHaveLength(0);

    fireEvent.click(button);
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);

    // ClickAwayListener activates after the opening click has finished.
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    fireEvent.mouseDown(document.body);
    fireEvent.mouseUp(document.body);
    fireEvent.click(document.body);
    expect(screen.queryAllByRole('link')).toHaveLength(0);

    fireEvent.click(button);
    const links = screen.getAllByRole('link');
    fireEvent.mouseDown(links[0]);
    fireEvent.mouseUp(links[0]);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);

    fireEvent.click(links[0]);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});

it.each([Menu, MobileMenu])(
  'closes the menu with Escape and returns focus',
  (Component) => {
    render(<Component />);
    const button = screen.getByRole('button', { name: 'Toggle news menu' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const content = document.getElementById(
      button.getAttribute('aria-controls')!
    );
    expect(content).toBeInTheDocument();
    const link = screen.getAllByRole('link')[0];
    link.focus();
    fireEvent.keyDown(link, { key: 'Escape' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
    expect(content).not.toBeInTheDocument();
  }
);
