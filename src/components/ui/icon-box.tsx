import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  icon: LucideIcon;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  success: 'bg-brand-success/10 border-brand-success/20 text-brand-success',
  accent: 'bg-brand-accent/10 border-brand-accent/20 text-brand-accent',
  highlight: 'bg-brand-highlight/10 border-brand-highlight/20 text-brand-highlight',
  warning: 'bg-brand-warning/10 border-brand-warning/20 text-brand-warning',
  primary: 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary',
  neutral: 'bg-brand-neutral-400/10 border-brand-neutral-400/20 text-brand-neutral-500',
};

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export function IconBox({ 
  icon: Icon, 
  variant = 'accent',
  size = 'md',
  className = '' 
}: IconBoxProps) {
  return (
    <div className={`rounded-lg border flex items-center justify-center flex-shrink-0 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      <Icon className={iconSizes[size]} />
    </div>
  );
}
