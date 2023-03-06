import { AnchorHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Text } from '.';

import { ITextProps } from '../interfaces';

interface ILinkProps extends ITextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function Link(props: ILinkProps) {
  const { pathname } = useLocation();
  const [currentPathname, setCurrentPathname] = useState('');

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <Text asChild className={twMerge(`hover:underline cursor-pointer ${currentPathname === props.href ? 'underline' : ''} ${props.className || ''}`)} {...props}>
      <RouterLink to={props.href} target={props.target}>
        {props.children}
      </RouterLink>
    </Text>
  );
}
