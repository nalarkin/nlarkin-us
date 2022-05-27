import React, { ReactNode } from 'react';

import {
  createTheme,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
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

// function useDetermineInitialTheme(prefersDarkMode: boolean): 'light' | 'dark' {
//   const [initialTheme, setInitialTheme] = React.useState<'light' | 'dark'>(
//     'light'
//   );
//
//   React.useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light' || savedTheme === 'dark') {
//       setInitialTheme(savedTheme);
//     }
//     setInitialTheme(prefersDarkMode ? 'dark' : 'light');
//   }, [prefersDarkMode, window]);
//   return initialTheme;
// }

function determineInitialTheme(prefersDarkMode: boolean): 'light' | 'dark' {
  const savedTheme =
    typeof window === 'undefined' ? 'light' : localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }
  return prefersDarkMode ? 'dark' : 'light';
}

// function useWindowType() {
//   const [windowExists, setWindowExists] = React.useState<boolean>(false);
//   React.useEffect(() => {
//     setWindowExists(typeof window !== 'undefined');
//   }, [window]);
//   return windowExists;
// }

export default function ToggleColorMode({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    determineInitialTheme(prefersDarkMode)
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        // const themeMode =
        setMode((prevMode) => {
          const themeMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', themeMode);
          return themeMode;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        ...getDesignTokens(mode),
      })
    );
    // newTheme = responsiveFontSizes(newTheme);
    // return newTheme;
    // let newTheme = createTheme({
    //   ...getDesignTokens(mode),
    // });
    // newTheme = responsiveFontSizes(newTheme);
    // return newTheme;
  }, [mode]);

  // this forces react to reload when window becomes defined, and we gain access to the local storage
  // there has to be a better solution than this...
  // tried to with useEffect hook,and tried to include logic in function call, but neither of my solutions using these
  // worked
  if (typeof window === 'undefined') {
    return <div />;
  }
  const initialMode = determineInitialTheme(prefersDarkMode);
  if (initialMode !== mode) {
    setMode(initialMode);
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// theme = responsiveFontSizes(theme);
//
// export { theme };
