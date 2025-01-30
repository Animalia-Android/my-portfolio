import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define Light & Dark Themes
const lightTheme = {
  background: '#f5f5f5',
  text: '#000000',
  primary: '#00c6ff',
};

const darkTheme = {
  background: '#1e1e2e',
  text: '#ffffff',
  primary: '#00c6ff',
};

// Create Theme Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom Hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);
