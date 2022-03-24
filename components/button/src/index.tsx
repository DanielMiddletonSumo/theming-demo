import { Button as MuiButton, ThemeProvider } from '@mui/material';
import { theme } from 'theme-1';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
}

export const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton type={type} color="success" onClick={onClick}>
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};
