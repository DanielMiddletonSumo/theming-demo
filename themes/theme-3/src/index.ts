import { createTheme } from '@mui/material';
import { orange, red, blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: orange[300] },
    info: { main: red[900] },
    error: { main: red[500] },
    warning: { main: orange[500] },
  },
  typography: {
    fontFamily: '75% georgia, sans-serif',
  },
  spacing: 5,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontSize: '4rem',
        },
      },
    },
  },
});
