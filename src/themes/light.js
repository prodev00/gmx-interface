import { createTheme } from '@mui/material/styles'

const light = createTheme({
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
    mode: 'light',
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
      50: '#e7e7e7',
      100: '#b1b1b1',
      200: '#e0e0e0',
      300: '#7070701a',
      400: '#ffffff',
    },
    background: {
      default: '#fff',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#000000de',
      secondary: '#707070',
      disabled: '#b1b1b1',
    },
  },
})

export default light
