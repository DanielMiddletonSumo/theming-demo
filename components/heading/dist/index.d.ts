/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
interface HeadingProps {
  children: React.ReactNode;
}
declare module '@mui/material/styles' {
  interface Components {
    heading?: {
      defaultProps: Omit<React.HTMLProps<HTMLHeadingElement>, 'ref'>;
      styleOverrides: SxProps<Theme>;
    };
  }
}
export declare const Heading: ({
  children,
}: HeadingProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export { ThemeProvider } from '@mui/material';
