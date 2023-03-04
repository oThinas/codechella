import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className='flex flex-col bg-gradient-to-b from-light-gradient-start via-light-gradient-via to-light-gradient-end
      dark:from-dark-gradient-start dark:via-dark-gradient-via dark:to-dark-gradient-end'
    >
      {children}
    </main>
  );
}
