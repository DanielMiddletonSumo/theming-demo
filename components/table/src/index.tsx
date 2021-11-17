import { ThemeProvider } from '@emotion/react';
import { createContext } from 'react';
import { theme } from 'theme-1';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface TableData {
  headers?: string[];
  rows: string[][];
}

interface StyleOverrides {
  table: Record<string, string>;
  tableRow: Record<string, string>;
  tableCell: Record<string, string>;
  tableHeader: Record<string, string>;
}

interface TableProps {
  data: TableData;
  styleOverrides?: StyleOverrides;
}

const initialStyleOverrides = {
  table: {},
  tableRow: {},
  tableCell: {},
  tableHeader: {},
};

export const StyleOverridesContext = createContext(initialStyleOverrides);

export const Table = ({
  data: { headers, rows },
  styleOverrides = initialStyleOverrides,
}: TableProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleOverridesContext.Provider value={styleOverrides}>
        <table>
          {!!headers?.length && (
            <thead>
              <tr>
                {headers.map(header => (
                  <TableHeader key={header}>{header}</TableHeader>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map(row => (
              <TableRow key={row.join('')} row={row} />
            ))}
          </tbody>
        </table>
      </StyleOverridesContext.Provider>
    </ThemeProvider>
  );
};
