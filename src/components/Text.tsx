import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { ITextProps } from '../interfaces';

export function Text({ size = 20, type = 'body', ...props }: ITextProps) {
  const Tag = props.asChild ? Slot : 'span';

  return (
    <Tag
      className={
        clsx({
          'text-base': size === 20,
          'text-lg': size === 32,
          'text-xl': size === 40,
          'text-2xl': size === 48,
          'text-3xl': size === 64,
          'font-body': type === 'body',
          'font-title': type === 'title',
          'font-bold': props.bold,
          'font-extrabold': props.extraBold,
        }, props?.className)
      }
    >
      {props.children}
    </Tag>
  );
}

