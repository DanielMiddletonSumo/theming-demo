import { Theme, ThemeProvider, useTheme, SxProps, Box } from '@mui/material';
import { useMemo } from 'react';
import { merge } from 'lodash-es';
import { theme } from 'theme-1';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

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
      <Box component="table">
        {!!headers?.length && (
          <Box component="thead">
            <Box component="tr">
              {headers.map(header => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </Box>
          </Box>
        )}
        <Box component="tbody">
          {rows.map(row => (
            <TableRow key={row.join('')} row={row} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
