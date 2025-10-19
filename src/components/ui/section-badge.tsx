import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  icon: LucideIcon;
  text: string;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary';
  className?: string;
}

const variantStyles = {
  success: 'bg-brand-success/10 border-brand-success/30 text-brand-success',
  accent: 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent',
  highlight: 'bg-brand-highlight/10 border-brand-highlight/30 text-brand-highlight',
  warning: 'bg-brand-warning/10 border-brand-warning/30 text-brand-warning',
  primary: 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary',
};

export function SectionBadge({ 
  icon: Icon, 
  text, 
  variant = 'success',
  className = '' 
}: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 ${variantStyles[variant]} ${className}`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
