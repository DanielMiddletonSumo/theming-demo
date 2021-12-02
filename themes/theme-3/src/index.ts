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
    fontFamily: '75% georgia, sans-serif',
  },
  spacing: 5,
});
