export const theme = {
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
    headline: `"Archivo", system-ui`,
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
    small: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F;',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 12px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;
