import { useEffect, useState } from 'react';
import LightLogo from '../../assets/images/LightLogo';
import { DropdownMenu } from './DropdownMenu';
import { Text } from './Text';
import { ToggleThemeButton } from './ToggleThemeButton';

const menuItems = [
  'A experiência',
  'Mapa de Setores',
  'Informações',
  'Ingresso',
];

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  function checkMobile() {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  }

  useEffect(() => {
    checkMobile();
  }, []);

  window.addEventListener('resize', () => checkMobile());

  return (
    <header className='flex md:flex-col md:gap-8 items-center justify-between px-6 py-8 bg-blue-dark'>
      <div className='flex md:items-center md:justify-center md:gap-6 w-full'>
        <LightLogo />
        <ToggleThemeButton />
      </div>
      {
        !isMobile ? (
          <ul className='flex text-white'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Text asChild bold type='body' className='px-8 py-4'>
                  <a href='#'>{item}</a>
                </Text>
              </li>
            ))}
          </ul>
        ) : (
          <DropdownMenu items={menuItems}/>
        )
      }
    </header>
  );
}
