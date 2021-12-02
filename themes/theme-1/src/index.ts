import { createTheme } from '@mui/material';
import { orange, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: { main: '#555753' },
    secondary: { main: '#7D775C' },
    info: { main: '#B7A5DF' },
    error: { main: red[500] },
    warning: { main: orange[500] },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: 10,
});
