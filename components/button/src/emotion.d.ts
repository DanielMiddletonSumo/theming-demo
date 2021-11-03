import '@emotion/react';
import { Theme as CustomTheme } from 'theme-1';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
