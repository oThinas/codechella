import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { Heading, Image } from '.';

import { DeviceContext } from '../contexts/DeviceContex';

import { IFilter } from '../interfaces/IFilter';

interface IBannerProps {
  title: string;
  source: { light: string; dark: string };
  desc: { light: string; dark: string };
  filter?: IFilter;
  className?: string;
}

export function Banner(props: IBannerProps) {
  const { device } = useContext(DeviceContext);

  return (
    <div className={twMerge('relative h-[270px] md:h-[384px] xl:h-[407px] bg-cover text-center flex items-center justify-center')}>
      <Image
        isBackground
        source={props.source}
        desc={props.desc}
        className={twMerge(`${props.className || ''}`)}
      />

      <Heading
        heading='h1'
        font='title'
        size={device === 'mobile' ? 32 : 64}
        className='text-grey dark:text-white max-w-[542px] z-0'
      >
        {props.title}
      </Heading>
    </div>
  );
}
