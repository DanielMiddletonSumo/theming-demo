import { useEffect } from 'react';
import { theme } from 'theme-2';
import {
  ThemeProvider as ThemeProviderV5,
  useTheme as useThemeV5,
} from '@mui/material';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('app 2 theme: ', theme);

    // @ts-ignore
    window.app2 = {
      // ThemeProvider,
      // useTheme,
      ThemeProviderV5,
      useThemeV5,
    };
  }, []);

  return (
    <ThemeProviderV5 theme={theme}>
      <Component {...pageProps} />
    </ThemeProviderV5>
  );
}

export default MyApp;
