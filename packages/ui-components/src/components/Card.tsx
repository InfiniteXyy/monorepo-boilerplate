import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-lg border bg-white p-6 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h1 className={`mb-4 text-2xl font-bold ${className}`}>{children}</h1>;
}
