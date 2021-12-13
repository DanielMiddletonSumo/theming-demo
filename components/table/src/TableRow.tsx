import { Box } from '@mui/material';

interface TableRowProps {
  row: string[];
}

export const TableRow = ({ row }: TableRowProps) => {
  return (
    <Box component="tr">
      {row.map(field => (
        <Box key={field} component="td">
          {field}
        </Box>
      ))}
    </Box>
  );
};
