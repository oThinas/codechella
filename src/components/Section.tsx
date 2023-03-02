import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ISectionProps  {
  children: ReactNode;
  className?: string;
}

export function Section(props: ISectionProps) {
  return (
    <section
      className={
        twMerge(`flex flex-col xl:flex-row gap-8 xl:gap-12 px-6 md:px-[60px] xl:px-30 py-8 xl:py-16 justify-center items-center
        ${props.className || ''}`)
      }
    >
      {props.children}
    </section>
  );
}
