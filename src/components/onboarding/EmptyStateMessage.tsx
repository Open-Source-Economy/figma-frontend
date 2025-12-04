import React from 'react';

interface EmptyStateMessageProps {
  title: string;
  message: string;
}

export function EmptyStateMessage({ title, message }: EmptyStateMessageProps) {
  return (
    <div className="bg-brand-neutral-100/50 border border-brand-neutral-300/30 rounded-lg p-4 text-center">
      <p className="text-brand-neutral-700 text-sm mb-1">{title}</p>
      <p className="text-brand-neutral-600 text-xs">
        {message}
      </p>
    </div>
  );
}
