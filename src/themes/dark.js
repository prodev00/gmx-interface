import { createTheme } from '@mui/material/styles'

const dark = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc3545',
    },
    success: {
      main: '#4caf50',
      dark: '#388e3c',
      light: '#81c784',
    },
    warning: {
      main: '#faaf00',
      light: '#ff9800',
    },
    grey: {
      50: '#707070',
      100: '#b1b1b1',
      200: '#e0e0e0',
      300: '#7070705e',
      400: '#16191d',
    },
    background: {
      default: '#101124',
      paper: '#16191d',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#e2e2e2',
      disabled: '#b1b1b1',
    },
  },
})

export default dark
