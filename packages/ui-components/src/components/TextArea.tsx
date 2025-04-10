import type { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className = '', rows = 4, ...props }: TextAreaProps) {
  return (
    <textarea
      className={`w-full rounded-lg border p-2 outline-none focus:border-blue-500 ${className}`}
      rows={rows}
      {...props}
    />
  );
}
