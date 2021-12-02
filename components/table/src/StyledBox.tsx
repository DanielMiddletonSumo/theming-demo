import { Box, BoxProps, useTheme } from '@mui/material';

interface StyledBoxProps extends Omit<BoxProps, 'component'> {
  component: string;
  children: React.ReactNode;
}

export const StyledBox = ({
  component,
  children,
  sx,
  ...rest
}: StyledBoxProps) => {
  const theme = useTheme();

  return (
    <Box
      component={component}
      sx={{ ...sx, ...theme.components?.[component]?.styleOverrides }}
      {...rest}
      {...theme.components?.[component]?.defaultProps}
    >
      {children}
    </Box>
  );
};
