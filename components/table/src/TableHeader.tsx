import { css, Theme } from '@emotion/react';

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <th
      css={(theme: Theme) => css`
        color: ${theme.colors.secondary};
      `}
    >
      {children}
    </th>
  );
};
