import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ITextProps {
  // 20, 32, 40, 48, 64
  size?: 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  type?: 'body' | 'title';
  bold?: boolean;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export function Text({ size = 'base', type = 'body', ...props }: ITextProps) {
  const Tag = props.asChild ? Slot : 'span';

  return (
    <Tag
      className={`text-${size} font-${type} ${props.bold ? 'font-bold' : ''} ${props.className}`}
    >
      {props.children}
    </Tag>
  );
}

