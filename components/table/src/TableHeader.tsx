import { css, Theme } from '@emotion/react';
import { useContext } from 'react';
import { StyleOverridesContext } from '.';

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  const styleOverrides = useContext(StyleOverridesContext);

  return (
    <th
      css={(theme: Theme) => [
        css`
          color: ${theme.colors.secondary};
        `,
        styleOverrides.tableHeader,
      ]}
    >
      {children}
    </th>
  );
};
