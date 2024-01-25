import { Theme, createTheme } from '@mui/material';

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: 'rgb(243,252,255)',
      paper: 'rgb(243,252,255)',
    },
    primary: {
      main: '#A8FFE4',
      light: '#9197ff',
    },
    secondary: {
      main: '#F3FCFF',
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#242424',
    },
    primary: {
      main: '#6B2436',
    },
    secondary: {
      main: '#2e2e2e',
    },
  },
});
