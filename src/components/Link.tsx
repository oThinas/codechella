import { HTMLAttributes, ReactNode } from 'react';

import { Text } from './Text';

import { ITextProps } from '../interfaces';

interface ILinkProps extends ITextProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function Link({ className, ...props }: ILinkProps) {
  return (
    <Text asChild className={`hover:underline cursor-pointer ${className || ''}`} {...props}>
      <a>
        {props.children}
      </a>
    </Text>
  );
}
