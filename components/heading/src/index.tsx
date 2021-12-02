import { Theme, ThemeProvider, useTheme, Box, SxProps } from '@mui/material';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import { theme } from 'theme-1';

interface HeadingProps {
  children: React.ReactNode;
  themeOverride?: Theme;
}

declare module '@mui/material/styles' {
  interface Components {
    heading?: {
      defaultProps: Omit<React.HTMLProps<HTMLHeadingElement>, 'ref'>;
      styleOverrides: SxProps<Theme>;
    };
  }
}

export const Heading = ({ children, themeOverride }: HeadingProps) => {
  const containerTheme = useTheme();

  const mergedTheme = useMemo(
    () => merge({}, theme, containerTheme, themeOverride),
    [themeOverride, containerTheme]
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <Box
        component="h1"
        sx={{
          color: 'primary.main',
          border: theme => `${theme.spacing(1)} solid ${theme.palette.info}`,
          ...mergedTheme.components?.heading?.styleOverrides,
        }}
        {...mergedTheme.components?.heading?.defaultProps}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
