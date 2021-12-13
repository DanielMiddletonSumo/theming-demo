import { Theme, ThemeProvider, useTheme, SxProps } from '@mui/material';
import { useMemo } from 'react';
import { merge } from 'lodash-es';
import { theme } from 'theme-1';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { StyledBox } from './StyledBox';

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

export const Table = ({
  data: { headers, rows },
  themeOverride,
}: TableProps) => {
  const containerTheme = useTheme();

  const mergedTheme = useMemo(
    () => merge({}, theme, containerTheme, themeOverride),
    [themeOverride, containerTheme]
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <StyledBox component="table">
        {!!headers?.length && (
          <StyledBox component="thead">
            <StyledBox component="tr">
              {headers.map(header => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </StyledBox>
          </StyledBox>
        )}
        <StyledBox component="tbody">
          {rows.map(row => (
            <TableRow key={row.join('')} row={row} />
          ))}
        </StyledBox>
      </StyledBox>
    </ThemeProvider>
  );
};
