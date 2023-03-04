import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../contexts/ThemeContext';

import { IImageProps } from '../interfaces/IImageProps';

export function Image(props: IImageProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${props.isBackground ? 'absolute' : 'relative'}  ${props.className || ''}`}>
      <img src={props.source[theme]} alt={props.desc[theme]} {...props}/>
      <div
        className={twMerge(`w-full h-full absolute top-0 left-0
        ${props.filter?.light.bgColor} ${props.filter?.dark.bgColor} ${props.filter?.light.opacity} ${props.filter?.dark.opacity}`)}
      />
    </div>
  );
}
