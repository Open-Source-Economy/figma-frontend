import React from 'react';

interface ChevronDownProps {
  className?: string;
  isOpen?: boolean;
}

export function ChevronDown({ className = '', isOpen = false }: ChevronDownProps) {
  return (
    <svg 
      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${className}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 9l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  );
}
