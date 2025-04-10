import type { HTMLAttributes } from 'react';

export interface LoadingStateProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
}

export function LoadingState({ message = 'Loading...', className = '', ...props }: LoadingStateProps) {
  return (
    <div className={`flex h-32 items-center justify-center rounded-lg border bg-white ${className}`} {...props}>
      <div className="text-gray-500">{message}</div>
    </div>
  );
}
