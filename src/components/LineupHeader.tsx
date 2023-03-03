import { ReactNode, useContext } from 'react';

import { Text } from '.';

import { DeviceContext } from '../contexts/DeviceContex';

export function LineupHeader({ children }: { children: ReactNode }) {
  const { device } = useContext(DeviceContext);

  return (
    <div className='flex justify-center md:justify-between items-center gap-8 w-full'>
      <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block rounded-lg'/>
      <Text
        size={device === 'mobile' ? 32 : 48}
        font='title'
        className='uppercase text-white bg-coral-dark dark:bg-green-dark px-2 py-4'
      >
        {children}
      </Text>
      <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block rounded-lg'/>
    </div>
  );
}
