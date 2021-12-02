import { StyledBox } from './StyledBox';

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <StyledBox
      component="th"
      sx={{
        color: 'secondary.main',
      }}
    >
      {children}
    </StyledBox>
  );
};
