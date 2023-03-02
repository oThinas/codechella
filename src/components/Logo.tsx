import { twMerge } from 'tailwind-merge';
import { Link } from '.';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href='/' className={twMerge(`font-logo text-white hover:no-underline ${className || ''}`)} size={32}>&lt;CodeChella /&gt;</Link>
  );
}
