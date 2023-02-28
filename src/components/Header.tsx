import { useEffect, useState } from 'react';

import { DropdownMenu, Logo, Text, ToggleThemeButton } from './components.module';

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
    <header className='flex md:flex-col xl:flex-row md:gap-8 items-center justify-between px-6 xl:px-30 py-8 bg-blue dark:bg-blue-dark'>
      <div className='flex md:items-center md:justify-center md:gap-6 w-full xl:w-fit'>
        <Logo version='light'/>
        <ToggleThemeButton />
      </div>
      {
        !isMobile ? (
          <ul className='flex text-white'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Text asChild bold type='body' className='px-8 py-4 hover:underline'>
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
