import { createTheme, responsiveFontSizes } from '@mui/material';
// gsu color scheme: https://commkit.gsu.edu/website-management/web-color-guidelines/
// gsu typography: https://commkit.gsu.edu/visual-communication/typography-color/
// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=0039a6&secondary.color=cc0000
// necessary for typescript compatibility of material ui grid

// how to implement dark mode https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette

// ignore following eslint becuase this is the recommended way stated in the documentation
// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0039a6',
    },
    secondary: {
      main: '#cc0000',
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
