/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

//Colors
// Deep Charcoal - #222222
// Cosmic Slate - #1B1F3B
//Electric Purple - #9A2EFE – A deep sci-fi purple that contrasts beautifully with the gold.
//Electric Orchid - #8A2BE2
//Plasma Blue - #3F88C5 – A high-tech blue with a digital feel.
//Glowing Cyan - #00C6FF
//Aurora Teal - #00E6E6 – A cool, futuristic cyan reminiscent of the aurora borealis.
//Bioluminescent Teal - #00F5D4
//Bioluminescent Green - #00FF87  – A vibrant neon green that mimics glowing fungi and deep-sea bioluminescence.
//Soft Moonlight Gray - #E0E6ED
//Mushroom Beige - #F8EDE3
//Mycelium Gold - #FFD700
//Solar Orange - #FF7300) – A fiery orange that complements Mycelium Gold for a powerful dual-tone
//Mushroom Rose - #E94560 – A warm pinkish-red inspired by the color of some rare fungi.

// Define Light & Dark Themes
const lightTheme = {
  background: '#F2E9DA', // 🌿 Softer Mushroom Beige (Warmer and richer)
  color: '#1A1A1A', // 🔳 Deep Charcoal for readability
  primary: '#006D32', // 🌿 Forest Green (a bit richer than before)
  accent: '#FFD700', // ✨ Mycelium Gold for contrast
  highlight: '#00C6FF', // 🌊 Glowing Cyan for a high-tech touch
  button: '#E94560', // 🍄 Mushroom Rose for warmth & action
};

const darkTheme = {
  background: '#121826', // 🌌 Deeper Cosmic Slate (More contrast)
  color: '#E0E6ED', // 🌙 Soft Moonlight Gray for great readability
  primary: '#3F88C5', // 🌊 Aurora Teal (Balances sci-fi and nature)
  accent: '#8A2BE2', // ⚡ Electric Orchid for a **subtle, elegant pop**
  highlight: '#FFD700', // ✨ Mycelium Gold to stand out in dark mode
  button: '#00FF87', // 🔥 Solar Orange for high visibility action buttons
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
