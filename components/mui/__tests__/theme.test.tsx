import React, { StrictMode, useContext } from 'react';

import { useTheme } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';

import ToggleColorMode, { ColorModeContext } from '../theme';

function ThemeControls() {
  const context = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <button onClick={context?.toggleColorMode}>{theme.palette.mode}</button>
  );
}

it('toggles the MUI palette and persists it across remounts', () => {
  window.localStorage.removeItem('theme');
  document.documentElement.setAttribute('data-theme', 'light');
  const ui = (
    <StrictMode>
      <ToggleColorMode>
        <ThemeControls />
      </ToggleColorMode>
    </StrictMode>
  );

  const first = render(ui);
  fireEvent.click(screen.getByRole('button', { name: 'light' }));
  expect(screen.getByRole('button', { name: 'dark' })).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(window.localStorage.getItem('theme')).toBe('dark');

  first.unmount();
  const second = render(ui);
  expect(screen.getByRole('button', { name: 'dark' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'dark' }));
  expect(screen.getByRole('button', { name: 'light' })).toBeInTheDocument();
  expect(window.localStorage.getItem('theme')).toBe('light');

  second.unmount();
  window.localStorage.removeItem('theme');
  document.documentElement.removeAttribute('data-theme');
});
