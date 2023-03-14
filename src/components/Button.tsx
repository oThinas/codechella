import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Button(props: IButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(`flex gap-4 justify-center items-center px-4 py-2 rounded-2xl shadow-lg text-base font-bold text-white bg-blue hover:bg-blue-dark
      transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue ${props.className || ''}`)}
    >
      {props.children}
      {props.icon}
    </button>
  );
}
