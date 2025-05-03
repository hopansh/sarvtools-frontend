import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '@/styles';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: typeof lightTheme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('themeMode') as ThemeMode;
      if (stored) return stored;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used within ThemeProvider');
  return context;
};
