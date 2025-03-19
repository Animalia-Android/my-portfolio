/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

//Colors
//Deep Charcoal - #222222
//Cosmic Slate - #1B1F3B
//Electric Purple - #9A2EFE
//Electric Orchid - #8A2BE2
//Plasma Blue - #3F88C5
//Glowing Cyan - #00C6FF
//Aurora Teal - #00E6E6
//Bioluminescent Teal - #00F5D4
//Bioluminescent Green - #00FF87
//Soft Moonlight Gray - #E0E6ED
//Mushroom Beige - #F8EDE3
//Mycelium Gold - #FFD700
//Solar Orange - #FF7300
//Mushroom Rose - #E94560

// Define Light & Dark Themes
const lightTheme = {
  background: '#F2E9DA',
  color: '#1A1A1A',
  primary: '#006D32',
  accent: '#FFD700',
  highlight: '#00C6FF',
  button: '#E94560',
};

const darkTheme = {
  background: '#121826',
  color: '#E0E6ED',
  primary: '#3F88C5',
  accent: '#8A2BE2',
  highlight: '#FFD700',
  button: '#00FF87',
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
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return {
    theme,
    toggleTheme,
    isDarkMode: theme.background === darkTheme.background,
  };
};
