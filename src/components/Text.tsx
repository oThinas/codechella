import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

interface ITextProps {
  size?: 20 | 32 | 40 | 48 | 64;
  type?: 'body' | 'title';
  bold?: boolean;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

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
        }, props.className)
      }
    >
      {props.children}
    </Tag>
  );
}

