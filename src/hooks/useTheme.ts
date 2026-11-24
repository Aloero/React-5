import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    return savedTheme === 'light' ? 'light' : 'dark';
  }

  return getSystemTheme();
};

export function useTheme() {
  const [theme, setTheme] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () =>
    setTheme(t => t === 'light' ? 'dark' : 'light');

  return { theme, toggle };
}