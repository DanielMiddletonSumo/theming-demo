import { Box } from '@mui/material';

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <Box
      component="th"
      sx={{
        color: 'secondary.main',
      }}
    >
      {children}
    </Box>
  );
};
