import React from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export function ErrorMessage({ message, className = '' }: ErrorMessageProps) {
  return (
    <p className={`text-xs text-brand-error ${className}`.trim()}>
      {message}
    </p>
  );
}
