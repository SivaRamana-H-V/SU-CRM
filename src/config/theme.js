import { THEMES } from './constants';

// Default theme
export const defaultTheme = THEMES.LIGHT;

// Theme colors
export const themeColors = {
  [THEMES.LIGHT]: {
    black: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    info: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
  },
  [THEMES.DARK]: {
    // Dark theme colors (can be customized)
    // This is just a placeholder, you might want to adjust for a proper dark theme
    black: {
      50: '#172554',
      100: '#1e3a8a',
      200: '#1e40af',
      300: '#1d4ed8',
      400: '#2563eb',
      500: '#3b82f6',
      600: '#60a5fa',
      700: '#93c5fd',
      800: '#bfdbfe',
      900: '#dbeafe',
      950: '#eff6ff',
    },
    gray: {
      50: '#030712',
      100: '#111827',
      200: '#1f2937',
      300: '#374151',
      400: '#4b5563',
      500: '#6b7280',
      600: '#9ca3af',
      700: '#d1d5db',
      800: '#e5e7eb',
      900: '#f3f4f6',
      950: '#f9fafb',
    },
    success: {
      50: '#052e16',
      100: '#14532d',
      200: '#166534',
      300: '#15803d',
      400: '#16a34a',
      500: '#22c55e',
      600: '#4ade80',
      700: '#86efac',
      800: '#bbf7d0',
      900: '#dcfce7',
      950: '#f0fdf4',
    },
    warning: {
      50: '#451a03',
      100: '#78350f',
      200: '#92400e',
      300: '#b45309',
      400: '#d97706',
      500: '#f59e0b',
      600: '#fbbf24',
      700: '#fcd34d',
      800: '#fde68a',
      900: '#fef3c7',
      950: '#fffbeb',
    },
    danger: {
      50: '#450a0a',
      100: '#7f1d1d',
      200: '#991b1b',
      300: '#b91c1c',
      400: '#dc2626',
      500: '#ef4444',
      600: '#f87171',
      700: '#fca5a5',
      800: '#fecaca',
      900: '#fee2e2',
      950: '#fef2f2',
    },
    info: {
      50: '#083344',
      100: '#164e63',
      200: '#155e75',
      300: '#0e7490',
      400: '#0891b2',
      500: '#06b6d4',
      600: '#22d3ee',
      700: '#67e8f9',
      800: '#a5f3fc',
      900: '#cffafe',
      950: '#ecfeff',
    },
  },
};

// Get theme based on user preference
export const getUserTheme = () => {
  // Check local storage for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
    return savedTheme;
  }
  
  // Check system preference
  if (savedTheme === THEMES.SYSTEM || !savedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK;
    }
  }
  
  // Default theme
  return defaultTheme;
};

// Set theme in local storage
export const setUserTheme = (theme) => {
  localStorage.setItem('theme', theme);
  
  // Apply theme to document
  if (theme === THEMES.DARK) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}; 