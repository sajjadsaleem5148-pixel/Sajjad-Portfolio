'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(current);
  }, []);
  const toggleTheme = () => setTheme((current) => {
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('sajjad-theme', next); } catch (e) { /* storage is optional */ }
    return next;
  });
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
