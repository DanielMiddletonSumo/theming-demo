/// <reference types="react" />
import { Theme, SxProps } from '@mui/material';
export interface TableData {
  headers?: string[];
  rows: string[][];
}
interface TableProps {
  data: TableData;
  themeOverride: Theme;
}
declare module '@mui/material/styles' {
  interface Components {
    table?: {
      defaultProps: Omit<React.HTMLProps<HTMLTableElement>, 'ref'>;
      styleOverrides: SxProps<Theme>;
    };
    thead?: {
      defaultProps: Omit<React.HTMLProps<HTMLTableElement>, 'ref'>;
      styleOverrides: SxProps<Theme>;
    };
  }
}
export declare const Table: ({
  data: { headers, rows },
  themeOverride,
}: TableProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
