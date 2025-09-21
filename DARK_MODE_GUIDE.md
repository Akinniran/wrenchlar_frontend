# Dark Mode Implementation Guide

This document explains how to use the dark mode system in your Wrenchlar application.

## Features

✅ **Automatic theme detection** - Detects system preference on first visit
✅ **Persistent storage** - Remembers user's choice across sessions  
✅ **Manual toggle** - Users can manually switch between light/dark modes
✅ **Global context** - Theme state is available throughout the app
✅ **Tailwind integration** - Uses Tailwind's dark mode utility classes

## How to Use

### 1. Using the Theme in Components

```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <p className="text-gray-900 dark:text-white">
        Current theme: {theme}
      </p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### 2. Using the Custom Hook

```tsx
import { useDarkMode } from '../hooks/useDarkMode';

const MyComponent = () => {
  const { isDark, toggleTheme } = useDarkMode();
  
  return (
    <div>
      <p>Dark mode is {isDark ? 'enabled' : 'disabled'}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};
```

### 3. Common Tailwind Dark Mode Classes

```css
/* Background colors */
bg-white dark:bg-gray-900
bg-gray-100 dark:bg-gray-800
bg-gray-50 dark:bg-gray-700

/* Text colors */
text-gray-900 dark:text-white
text-gray-700 dark:text-gray-300
text-gray-500 dark:text-gray-400

/* Border colors */
border-gray-200 dark:border-gray-700
border-gray-300 dark:border-gray-600

/* Hover states */
hover:bg-gray-50 dark:hover:bg-gray-800
hover:text-gray-700 dark:hover:text-gray-200
```

## Implementation Details

### Theme Context Provider
- Located in `src/contexts/ThemeContext.tsx`
- Provides global theme state management
- Handles localStorage persistence
- Automatically applies theme to document root

### Custom Hook
- Located in `src/hooks/useDarkMode.ts`
- Provides simplified interface for theme management
- Returns boolean flags for easier conditionals

### Components Updated
- ✅ LoginAccount page
- ✅ CreateAccount page  
- ✅ Header component (with toggle button)
- ✅ App component (wrapped with ThemeProvider)

### Theme Toggle Button
The Header component includes a sun/moon toggle button that:
- Shows moon icon in light mode
- Shows sun icon in dark mode
- Includes helpful tooltip text
- Smooth transitions between states

## Storage
Theme preference is stored in `localStorage` as `wrenchlar-theme` with values:
- `'light'` - Light mode
- `'dark'` - Dark mode
- `null` - Follow system preference (default)

## Browser Support
- Modern browsers with CSS custom properties support
- Fallback to light mode for older browsers
- Uses `prefers-color-scheme` media query for system detection