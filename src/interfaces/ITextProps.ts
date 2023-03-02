import { ReactNode } from 'react';

export interface ITextProps {
  size?: 20 | 32 | 40 | 48 | 64;
  font?: 'body' | 'title';
  bold?: boolean;
  extraBold?: boolean;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}
