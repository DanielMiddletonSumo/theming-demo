import '@emotion/react';
import { Theme as CustomTheme } from 'theme-template';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
