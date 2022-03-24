import {
  Box,
  ThemeProvider,
  createTheme,
  useTheme,
  SxProps,
  Theme,
} from '@mui/material';

interface HeadingProps {
  children: React.ReactNode;
}

declare module '@mui/material/styles' {
  interface Components {
    heading?: {
      defaultProps: Omit<React.HTMLProps<HTMLHeadingElement>, 'ref'>;
      styleOverrides: SxProps<Theme>;
    };
  }
}

export const Heading = ({ children }: HeadingProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={createTheme({ spacing: 10 })}>
      <Box
        component="h1"
        sx={{
          color: 'primary.main',
          border: theme =>
            `${theme.spacing(1)} solid ${theme.palette.info.main}`,
          ...theme.components?.heading?.styleOverrides,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export { ThemeProvider } from '@mui/material';
