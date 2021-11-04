import { css, ThemeProvider, Theme } from '@emotion/react';
import { theme } from 'theme-1';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
}

export const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <button
        css={(theme: Theme) => css`
          color: ${theme.colors.primary};
          border-color: ${theme.colors.secondary};
        `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </ThemeProvider>
  );
};
