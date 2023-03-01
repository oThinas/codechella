import { HTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export function Button(props: IButtonProps) {
  return (
    <button
      className='flex gap-4 justify-center items-center px-4 py-2 rounded-2xl shadow-lg text-base font-bold text-white bg-blue hover:bg-blue-dark
      transition-colors'
    >
      {props.children}
      {props.icon}
    </button>
  );
}
