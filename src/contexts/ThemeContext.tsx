import { createContext, ReactNode } from 'react';

import { useTheme } from '../hooks/useTheme';

interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
