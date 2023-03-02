import { useContext } from 'react';

import { DropdownMenu, Link, Logo, ToggleThemeButton } from '.';

import { DeviceContext } from '../contexts/DeviceContex';

const menuItems = [
  'A experiência',
  'Mapa de Setores',
  'Informações',
  'Ingresso',
];

export function Header() {
  const { device } = useContext(DeviceContext);

  return (
    <header className='flex md:flex-col xl:flex-row md:gap-8 items-center justify-between px-6 xl:px-30 py-8 bg-blue dark:bg-blue-dark'>
      <div className='flex md:items-center md:justify-center md:gap-6 w-full xl:w-fit'>
        <Logo />
        <ToggleThemeButton />
      </div>
      {
        device !== 'mobile' ? (
          <ul className='flex text-white w-full justify-between xl:max-w-xl'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href='#' bold>{item}</Link>
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
