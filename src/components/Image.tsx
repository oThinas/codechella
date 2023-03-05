import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../contexts/ThemeContext';

import { IImageProps } from '../interfaces/IImageProps';

export function Image(props: IImageProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={` w-full ${props.isBackground ? 'absolute' : 'relative'}`}>
      <img
        src={props.source[theme]}
        alt={props.desc[theme]}
        className={`w-full h-[270px] md:h-[384px] xl:h-[407px] object-cover m-auto ${props.className || ''}`}
      />
      <div
        className={twMerge(`w-full h-auto absolute top-0 left-0
        ${props.filter?.light.bgColor} ${props.filter?.dark.bgColor} ${props.filter?.light.opacity} ${props.filter?.dark.opacity}`)}
      />
    </div>
  );
}
