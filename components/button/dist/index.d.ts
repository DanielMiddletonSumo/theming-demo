/// <reference types="react" />
interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
}
export declare const Button: ({
  children,
  type,
  onClick,
}: ButtonProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
