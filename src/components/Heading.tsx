import { HTMLAttributes, ReactNode } from 'react';

import { Text } from '.';

import { ITextProps } from '../interfaces';

interface IHeading extends HTMLAttributes<HTMLHeadingElement>, ITextProps {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

export function Heading(props: IHeading) {
  const Tag = props.heading as keyof JSX.IntrinsicElements;

  return (
    <Text asChild {...props}>
      <Tag>
        {props.children}
      </Tag>
    </Text>
  );
}
