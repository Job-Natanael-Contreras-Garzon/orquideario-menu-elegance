
import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check saved preference
    const savedTheme = localStorage.getItem('el-orquideario-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    // Get system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = (currentTheme: Theme = theme) => {
      if (currentTheme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(currentTheme);
      }
    };

    updateResolvedTheme(savedTheme || theme);

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Add smooth transition class
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [resolvedTheme]);

  const setThemeWithTransition = (newTheme: Theme) => {
    // Add transition effect
    document.documentElement.style.viewTransitionName = 'theme-transition';
    
    setTheme(newTheme);
    localStorage.setItem('el-orquideario-theme', newTheme);
    
    // Update resolved theme immediately for non-system themes
    if (newTheme !== 'system') {
      setResolvedTheme(newTheme);
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
    }
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setThemeWithTransition(nextTheme);
  };

  return { 
    theme, 
    resolvedTheme, 
    setTheme: setThemeWithTransition, 
    toggleTheme 
  };
};
