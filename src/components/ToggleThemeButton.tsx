import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => toggleTheme()}>
      {theme === 'dark' ? <SunIcon width={24} height={24} color='#FFF' /> : <MoonIcon width={24} height={24} color='#FFF'/>}
      <span className='sr-only'>Mudar tema</span>
    </button>
  );
}
