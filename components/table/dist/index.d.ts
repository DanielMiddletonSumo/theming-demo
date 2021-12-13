/// <reference types="react" />
import { Theme, SxProps } from '@mui/material';
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
export interface TableData {
  headers?: string[];
  rows: string[][];
}
interface TableProps {
  data: TableData;
  themeOverride: Theme;
}
export declare const Table: ({
  data: { headers, rows },
  themeOverride,
}: TableProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
