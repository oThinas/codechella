import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Text } from './Text';

import { ITextProps } from '../interfaces';

interface ILinkProps extends ITextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function Link(props: ILinkProps) {
  console.log(props);
  return (
    <Text asChild className={twMerge(`hover:underline cursor-pointer ${props.className || ''}`)} {...props}>
      <RouterLink to={props.href} target={props.target}>
        {props.children}
      </RouterLink>
    </Text>
  );
}
