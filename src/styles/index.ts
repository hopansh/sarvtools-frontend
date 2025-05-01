export const theme = {
  colors: {
    primary: '#1A2D57',
    secondary: '#E1681C',
    tertiary: '#161616',
    accent: '#00BBE6',
    black: '#000000',
    white: '#ffffff',
    background: '#FFFFFF',
    background2: '#F4F7FC',
    text: '#494949',
  },
  fonts: {
    primary: '"Montserrat", sans-serif, -apple-system, system-ui ',
    headline: `"Modak", system-ui`,
    subHeadline: `"Bubblegum Sans", sans-serif`,
  },
  fontSizes: {
    small: '0.875rem', // 14px converted to rem
    medium: '1rem', // 16px converted to rem
    large: '1.125rem', // 18px converted to rem
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
    xSmall: '0.25rem', // 8px converted to rem
    small: '0.5rem', // 8px converted to rem
    medium: '1rem', // 16px converted to rem
    large: '1.5rem', // 24px converted to rem
    xLarge: '2rem', // 24px converted to rem
    xxLarge: '2.5rem', // 24px converted to rem
    xxxLarge: '3rem', // 48px converted to rem
  },
  margins: {
    small: '0.25rem', // 4px converted to rem
    medium: '0.5rem', // 8px converted to rem
    large: '1rem', // 16px converted to rem
  },
  borders: {
    sRadius: '0.5rem', // 8px converted to rem
    radius: '1rem', // 16px converted to rem
    lRadius: '2rem', // 32px convertent to rem
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 12px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;
