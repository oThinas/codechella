import clsx from 'clsx';
import { ImgHTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { ThemeContext } from '../contexts/ThemeContext';

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  source: { light: string; dark: string };
  desc: { light: string; dark: string };
  filter?: {
    light: {
      color: string;
      opacity: number;
    },
    dark: {
      color: string;
      opacity: number;
    },
  };
}

export function Image(props: IImageProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative ${props.className || ''}`}>
      <img src={props.source[theme]} alt={props.desc[theme]} {...props}/>
      <div
        className={twMerge(clsx('w-full h-full absolute top-0 left-0', {
          [`bg-${props.filter?.light.color}`]: props.filter,
          [`opacity-${props.filter?.light.opacity}`]: props.filter,
          [`dark:bg-${props.filter?.dark.color}`]: props.filter,
          [`dark:opacity-${props.filter?.dark.opacity}`]: props.filter,
        }))} />
    </div>
  );
}
