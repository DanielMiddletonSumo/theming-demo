/// <reference types="react" />
import { Theme, SxProps } from '@mui/material';
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
export declare const Heading: ({
  children,
  themeOverride,
}: HeadingProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
