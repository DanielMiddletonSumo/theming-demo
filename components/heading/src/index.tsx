import { Theme, ThemeProvider, useTheme, Box, SxProps } from '@mui/material';
import { merge } from 'lodash-es';
import { useEffect, useMemo } from 'react';
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

  useEffect(() => {
    console.log('heading theme: ', theme);
    console.log('heading container theme: ', containerTheme);
    console.log('theme override: ', themeOverride);
    console.log('heading merged theme: ', mergedTheme);

    // @ts-ignore
    window.heading = {
      ThemeProvider,
      useTheme,
    };
  }, []);

  return (
    <ThemeProvider theme={mergedTheme}>
      <Box
        component="h1"
        sx={{
          color: 'primary.main',
          border: theme =>
            `${theme.spacing(1)} solid ${theme.palette.info.main}`,
          ...mergedTheme.components?.heading?.styleOverrides,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export { ThemeProvider } from '@mui/material';
