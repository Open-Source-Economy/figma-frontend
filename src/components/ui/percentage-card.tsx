import React from 'react';
import { LucideIcon } from 'lucide-react';
import { IconBox } from './icon-box';

interface PercentageCardProps {
  icon: LucideIcon;
  percentage: string;
  title: string;
  description: string;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' | 'neutral';
  className?: string;
}

const variantTextColors = {
  success: 'text-brand-success',
  accent: 'text-brand-accent',
  highlight: 'text-brand-highlight',
  warning: 'text-brand-warning',
  primary: 'text-brand-primary',
  neutral: 'text-brand-neutral-700',
};

const variantBorderColors = {
  success: 'hover:border-brand-success/50',
  accent: 'hover:border-brand-accent/50',
  highlight: 'hover:border-brand-highlight/50',
  warning: 'hover:border-brand-warning/50',
  primary: 'hover:border-brand-primary/50',
  neutral: 'hover:border-brand-neutral-400/50',
};

export function PercentageCard({ 
  icon, 
  percentage, 
  title, 
  description, 
  variant = 'accent',
  className = '' 
}: PercentageCardProps) {
  return (
    <div className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 text-center transition-colors ${variantBorderColors[variant]} ${className}`}>
      <IconBox icon={icon} variant={variant} size="lg" className="mx-auto mb-3" />
      <div className={`mb-2 ${variantTextColors[variant]}`}>{percentage}</div>
      <div className="text-brand-neutral-950 text-sm mb-1">{title}</div>
      <p className="text-brand-neutral-600 text-xs">{description}</p>
    </div>
  );
}
