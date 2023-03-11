import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Main({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <main
      className={twMerge(`flex-1 text-grey dark:text-white flex flex-col bg-gradient-to-b from-light-gradient-start via-light-gradient-via to-light-gradient-end
      dark:from-dark-gradient-start dark:via-dark-gradient-via dark:to-dark-gradient-end ${className || ''}`)}
    >
      {children}
    </main>
  );
}
