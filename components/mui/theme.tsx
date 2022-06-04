import React, { ReactNode, useEffect, useMemo } from 'react';

import {
  createTheme,
  PaletteMode,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { grey, indigo, teal } from '@mui/material/colors';

import ExecutionEnvironment from './ExecutionEnvironment';
import { createStorageSlot } from './storageUtils';

// gsu color scheme: https://commkit.gsu.edu/website-management/web-color-guidelines/
// gsu typography: https://commkit.gsu.edu/visual-communication/typography-color/
// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=0039a6&secondary.color=cc0000
// necessary for typescript compatibility of material ui grid

// how to implement dark mode https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette

// ignore following eslint because this is the recommended way stated in the documentation
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

const ColorModes = {
  light: 'light',
  dark: 'dark',
} as const;

const ColorModeStorageKey = 'theme';

const ColorModeStorage = createStorageSlot(ColorModeStorageKey);

// Ensure to always return a valid colorMode even if input is invalid
const coerceToColorMode = (paletteMode?: string | null): PaletteMode =>
  paletteMode === ColorModes.dark ? ColorModes.dark : ColorModes.light;

const storeColorMode = (newColorMode: PaletteMode) => {
  ColorModeStorage.set(coerceToColorMode(newColorMode));
};

const getInitialColorMode = (
  defaultMode: PaletteMode | undefined
): PaletteMode =>
  ExecutionEnvironment.canUseDOM
    ? coerceToColorMode(document.documentElement.getAttribute('data-theme'))
    : coerceToColorMode(defaultMode);

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
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
        // default: grey[800],
        // paper: grey[700],
      },
    }),
    ...(mode === 'light' &&
      {
        // background: {
        //   default: grey[200],
        //   paper: grey[100],
        // },
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
    ...(mode === 'light' && {
      info: {
        // ...teal,
        // ...lightGreen,

        main: teal[800],
        // light: teal[500]
      },
    }),
  },
});

export const ColorModeContext = React.createContext<ContextValue | undefined>(
  undefined
);

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

type ContextValue = {
  colorMode: PaletteMode;
  theme: Theme;
  toggleColorMode: () => void;
};

const createColorTheme = (colorMode: PaletteMode): Theme => {
  return responsiveFontSizes(
    createTheme({
      ...getDesignTokens(colorMode),
      components: {
        MuiUseMediaQuery: {
          defaultProps: {
            noSsr: true,
          },
        },
      },
    })
  );
};

type GetDefaultTheme = {
  prefersDarkMode: boolean;
  defaultMode: PaletteMode;
};

function useGetDefaultTheme(): GetDefaultTheme {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return useMemo(
    () => ({
      prefersDarkMode,
      defaultMode: prefersDarkMode ? 'dark' : 'light',
    }),
    [prefersDarkMode]
  );
}

// function useGetDefaultTheme(): GetDefaultTheme {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   console.log(`useGetDefaultTheme(), prefersDarkMode: ${prefersDarkMode}`);
//   return useMemo(
//     () => ({
//       prefersDarkMode,
//       defaultMode: prefersDarkMode ? 'dark' : 'light',
//     }),
//     [prefersDarkMode]
//   );
// }

function useContextValue(): ContextValue {
  const { defaultMode } = useGetDefaultTheme();
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    getInitialColorMode(defaultMode)
  );

  // update the webpage once window is defined
  useEffect(() => {
    const storedTheme = ColorModeStorage.get();
    if (storedTheme === null) {
      setColorMode(defaultMode);
      return;
    }
    setColorMode(coerceToColorMode(storedTheme));
  }, [setColorMode, defaultMode]);

  // unnecessary for MUI style, but leaving in code because it can be used to provide dark mode for NON-MUI components
  // see: https://docusaurus.io/docs/styling-layout#dark-mode to style dark mode for non-MUI components
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      coerceToColorMode(colorMode)
    );
  }, [colorMode]);

  // changes all tabs to match the newly toggled theme
  useEffect(() => {
    const onChange = (e: StorageEvent) => {
      if (e.key !== ColorModeStorageKey) {
        return;
      }
      const storedColorMode = ColorModeStorage.get();
      if (storedColorMode !== null) {
        setColorMode(coerceToColorMode(storedColorMode));
      }
    };
    window.addEventListener('storage', onChange);
    return () => window.removeEventListener('storage', onChange);
  }, [setColorMode]);

  return useMemo(
    () => ({
      colorMode,
      theme: createColorTheme(colorMode),
      toggleColorMode: () => {
        setColorMode((prevMode) => {
          const themeMode = prevMode === 'light' ? 'dark' : 'light';
          ColorModeStorage.set(themeMode);
          return themeMode;
        });
      },
    }),
    [colorMode]
  );
}

export default function ToggleColorMode({ children }: { children: ReactNode }) {
  const contextValue = useContextValue();
  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={contextValue.theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
