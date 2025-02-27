/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define Light & Dark Themes
const lightTheme = {
  background: '#f5f5f5',
  color: '#000000',
  text: '#000000',
  primary: '#00c6ff',
};

const darkTheme = {
  background: '#1e1e2e',
  color: '#ffffff',
  text: '#ffffff',
  primary: '#00c6ff',
};

// Create Theme Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom Hook to use the Theme Context
export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return {
    theme,
    toggleTheme,
    isDarkMode: theme.background === darkTheme.background,
  };
};
