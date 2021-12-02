/// <reference types="react" />
import { BoxProps } from '@mui/material';
interface StyledBoxProps extends Omit<BoxProps, 'component'> {
  component: string;
  children: React.ReactNode;
}
export declare const StyledBox: ({
  component,
  children,
  sx,
  ...rest
}: StyledBoxProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
