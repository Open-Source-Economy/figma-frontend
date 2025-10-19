import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureListItemProps {
  icon: LucideIcon;
  title: string;
  description: string | ReactNode;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary';
  className?: string;
}

const variantColors = {
  success: 'text-brand-success',
  accent: 'text-brand-accent',
  highlight: 'text-brand-highlight',
  warning: 'text-brand-warning',
  primary: 'text-brand-primary',
};

export function FeatureListItem({ 
  icon: Icon, 
  title, 
  description, 
  variant = 'accent',
  className = '' 
}: FeatureListItemProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <Icon className={`h-5 w-5 ${variantColors[variant]} flex-shrink-0 mt-0.5`} />
      <div>
        <p className="text-brand-neutral-800 mb-1">{title}</p>
        <p className="text-brand-neutral-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
