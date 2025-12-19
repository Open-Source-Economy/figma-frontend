import React from 'react';

interface ArrowDownProps {
  className?: string;
  animated?: boolean;
}

export function ArrowDown({ className = '', animated = false }: ArrowDownProps) {
  const baseClasses = animated ? 'animate-bounce' : '';
  
  return (
    <svg 
      className={`${baseClasses} ${className}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  );
}
