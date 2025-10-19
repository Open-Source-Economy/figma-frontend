import React from 'react';
import { Crown } from 'lucide-react';

interface ExpertBadgeProps {
  variant?: 'default' | 'compact' | 'minimal';
  className?: string;
}

export function ExpertBadge({ variant = 'default', className = '' }: ExpertBadgeProps) {
  const baseClasses = "inline-flex items-center gap-2 rounded-full border border-brand-primary/20";
  
  const variants = {
    default: "px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-success/10",
    compact: "px-3 py-1.5 bg-gradient-to-r from-brand-primary/8 to-brand-success/8",
    minimal: "px-2 py-1 bg-brand-primary/5"
  };

  const iconSizes = {
    default: "w-2 h-2",
    compact: "w-1.5 h-1.5",
    minimal: "w-1 h-1"
  };

  const textSizes = {
    default: "text-sm font-medium",
    compact: "text-xs font-medium",
    minimal: "text-xs"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <div className={`${iconSizes[variant]} bg-brand-primary rounded-full animate-pulse`}></div>
      <span className={`${textSizes[variant]} text-brand-primary`}>
        Expert Maintainer
      </span>
    </div>
  );
}