import React, { ReactNode } from 'react';

import {
  createTheme,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { grey, indigo } from '@mui/material/colors';

// gsu color scheme: https://commkit.gsu.edu/website-management/web-color-guidelines/
// gsu typography: https://commkit.gsu.edu/visual-communication/typography-color/
// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=0039a6&secondary.color=cc0000
// necessary for typescript compatibility of material ui grid

// how to implement dark mode https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette

// ignore following eslint becuase this is the recommended way stated in the documentation
// eslint-disable-next-line import/no-mutable-exports
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#666ad1',
//       main: '#303f9f',
//       dark: '#001970',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#f9683a',
//       main: '#bf360c',
//       dark: '#870000',
//       contrastText: '#fff',
//     },
//     background: {
//       default: '#f5f5f5',
//     },
//   },
// });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...indigo,
      ...(mode === 'dark' &&
        {
          // main: indigo[200],
        }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#18191a',
        paper: '#242526',
        // default: grey[900],
        // paper: grey[800],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#D3D3D3',
            // primary: '#f5f6f7',
            // secondary: grey[500],
            secondary: '#AFAFAF',
          }),
    },
  },
});
// let theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#0039a6',
//     },
//     secondary: {
//       main: '#cc0000',
//     },
//   },
// });

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode({ children }: { children: ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    let newTheme = createTheme({
      ...getDesignTokens(mode),
    });
    newTheme = responsiveFontSizes(newTheme);
    return newTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// theme = responsiveFontSizes(theme);
//
// export { theme };
