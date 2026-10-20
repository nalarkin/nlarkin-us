import type { ReactElement } from 'react';

import { jest } from '@jest/globals';

export function renderServer(ui: ReactElement): string {
  const { renderToString } =
    require('react-dom/server.node') as typeof import('react-dom/server');
  const originalError = console.error;
  // JSDOM exposes window during server rendering, so isomorphic hooks choose
  // useLayoutEffect. Ignore that test-only warning, keeping real errors visible.
  const errors = jest
    .spyOn(console, 'error')
    .mockImplementation((message, ...args) => {
      if (
        String(message).includes('useLayoutEffect does nothing on the server')
      )
        return;
      originalError(message, ...args);
    });
  try {
    return renderToString(ui);
  } finally {
    errors.mockRestore();
  }
}
