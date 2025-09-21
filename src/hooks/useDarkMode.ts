import { useTheme } from '../contexts/ThemeContext';

/**
 * Custom hook that provides a simple interface for theme management
 * Returns the current theme and a toggle function
 */
export const useDarkMode = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const enableDarkMode = () => setTheme('dark');
  const enableLightMode = () => setTheme('light');

  return {
    theme,
    isDark,
    isLight,
    toggleTheme,
    enableDarkMode,
    enableLightMode,
  };
};