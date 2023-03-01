import { ReactNode } from 'react';

export interface ITextProps {
  size?: 20 | 32 | 40 | 48 | 64;
  type?: 'body' | 'title';
  bold?: boolean;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}
