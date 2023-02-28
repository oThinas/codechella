import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ToggleThemeButton() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon width={24} height={24} color='#FFF' /> : <MoonIcon width={24} height={24} color='#FFF'/>}
    </button>
  );
}
