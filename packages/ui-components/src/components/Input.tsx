import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input className={`w-full rounded-lg border p-2 outline-none focus:border-blue-500 ${className}`} {...props} />
  );
}
