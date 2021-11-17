/// <reference types="react" />
import { Theme } from '@emotion/react';
interface StyleOverrides {
  heading: Record<string, string>;
}
interface HeadingProps {
  children: React.ReactNode;
  themeOverride?: Partial<Theme>;
  styleOverrides?: StyleOverrides;
}
export declare const Heading: ({
  children,
  themeOverride,
  styleOverrides,
}: HeadingProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
