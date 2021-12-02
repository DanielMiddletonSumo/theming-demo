import { Box, ThemeProvider } from '@mui/material';
import { theme } from 'theme-1';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
}

export const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={outerTheme => ({ ...theme, ...outerTheme })}>
      <Box
        component="button"
        sx={{
          color: 'primary.main',
          borderColor: theme => theme.palette.secondary.main,
        }}
        type={type}
        onClick={onClick}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
