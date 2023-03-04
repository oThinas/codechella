import clsx from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { Heading } from '.';

import { DeviceContext } from '../contexts/DeviceContex';

import { IFilter } from '../interfaces/IFilter';

interface IBannerProps {
  title: string;
  source: 'home' | 'experience';
  filter?: IFilter;
  className?: string;
}

export function Banner(props: IBannerProps) {
  const { device } = useContext(DeviceContext);

  return (
    <div
      className={twMerge(clsx('h-[270px] md:h-[384px] xl:h-[407px] bg-cover text-center flex items-center justify-center', {
        'bg-home-banner': props.source === 'home',
        'bg-experience-banner': props.source === 'experience',
      }, props.className || ''))}
    >
      <Heading
        heading='h1'
        font='title'
        size={device === 'mobile' ? 32 : 64}
        className='text-grey dark:text-white max-w-[542px]'
      >
        {props.title}
      </Heading>
    </div>
  );
}
