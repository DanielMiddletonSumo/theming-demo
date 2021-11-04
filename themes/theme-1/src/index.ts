export const theme = {
  colors: {
    primary: '#0aa',
    secondary: '#fb7',
    danger: 'red',
    caution: 'orange',
  },
} as const;

export type Theme = typeof theme;