import { theme } from 'theme-2';
import { ThemeProvider as ThemeProviderV5 } from 'heading';
import { ThemeProvider } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderV5 theme={theme}>
        <Component {...pageProps} />
      </ThemeProviderV5>
    </ThemeProvider>
  );
}

export default MyApp;
