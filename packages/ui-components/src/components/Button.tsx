import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = 'rounded-lg px-4 py-2 text-white transition-colors';

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type="button" className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
