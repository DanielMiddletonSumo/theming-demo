import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme-1';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface TableData {
  headers?: string[];
  rows: string[][];
}

interface TableProps {
  data: TableData;
}

export const Table = ({ data: { headers, rows } }: TableProps) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
