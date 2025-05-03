// Define base theme type
export const baseTheme = {
  colors: {
    primary: '#000000FF',
    secondary: '#636AE8FF',
    tertiary: '#161616',
    accent: '#e8618cFF',
    black: '#000000',
    white: '#ffffff',
    background: '#FFFFFFFF',
    background2: '#FAFAFBFF',
    text: '#17A1FFF',
    subtext: '#9095A0FF',
  },
  fonts: {
    primary: '"Archivo", "Montserrat", sans-serif, -apple-system, system-ui ',
    headline: '"Archivo", system-ui',
    subHeadline: '"Bubblegum Sans", sans-serif',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    xLarge: '1.5rem',
    xxLarge: '2rem',
    xxxLarge: '3rem',
    xxxxLarge: '4rem',
    xxxxxLarge: '6rem',
  },
  fontWeights: {
    regular: 400,
    thick: 500,
    bold: 700,
  },
  spacing: {
    xSmall: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xLarge: '2rem',
    xxLarge: '2.5rem',
    xxxLarge: '3rem',
  },
  margins: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
  borders: {
    sRadius: '0.5rem',
    radius: '1rem',
    lRadius: '2rem',
  },
  shadows: {
    small: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F;',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 12px rgba(0, 0, 0, 0.1)',
  },
};

export const lightTheme = {
  ...baseTheme,
  mode: 'light',
  colors: {
    ...baseTheme.colors,
    primary: '#000000FF',
    secondary: '#636AE8FF',
    tertiary: '#161616',
    accent: '#e8618cFF',
    black: '#000000',
    white: '#ffffff',
    background: '#FFFFFFFF',
    background2: '#FAFAFBFF',
    text: '#171A1FFF',
    subtext: '#9095A0FF',
    border: '#E1E1E6FF',
  },
};

export const darkTheme = {
  ...baseTheme,
  mode: 'dark',
  colors: {
    ...baseTheme.colors,
    primary: '#ffffff',
    secondary: '#636AE8',
    tertiary: '#f5f5f5',
    accent: '#e8618c',
    black: '#000000',
    white: '#181A20',
    background: '#181A20',
    background2: '#23262F',
    text: '#F1F1F1',
    subtext: '#A3A3A3',
    border: '#E1E1E6',
  },
};

export type Theme = typeof baseTheme;
export const theme = lightTheme;
