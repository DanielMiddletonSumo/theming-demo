import { css, ThemeProvider, Theme, useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import { theme } from 'theme-1';

interface StyleOverrides {
  heading: Record<string, string>;
}

interface HeadingProps {
  children: React.ReactNode;
  themeOverride?: Partial<Theme>;
  styleOverrides?: StyleOverrides;
}

export const Heading = ({
  children,
  themeOverride,
  styleOverrides,
}: HeadingProps) => {
  const containerTheme = useTheme();

  const mergedTheme = useMemo(
    () => merge({}, theme, containerTheme, themeOverride),
    [themeOverride, containerTheme]
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <h1
        css={(theme: Theme) => [
          css`
            color: ${theme.colors.primary};
            border: 5px solid ${theme.colors.accent};
          `,
          styleOverrides?.heading,
        ]}
      >
        {children}
      </h1>
    </ThemeProvider>
  );
};
