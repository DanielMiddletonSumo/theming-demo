import { StyledBox } from './StyledBox';

interface TableRowProps {
  row: string[];
}

export const TableRow = ({ row }: TableRowProps) => {
  return (
    <StyledBox component="tr">
      {row.map(field => (
        <StyledBox key={field} component="td">
          {field}
        </StyledBox>
      ))}
    </StyledBox>
  );
};
