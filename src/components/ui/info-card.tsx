import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { IconBox } from './icon-box';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary';
  className?: string;
}

const variantBorderColors = {
  success: 'hover:border-brand-success/50',
  accent: 'hover:border-brand-accent/50',
  highlight: 'hover:border-brand-highlight/50',
  warning: 'hover:border-brand-warning/50',
  primary: 'hover:border-brand-primary/50',
};

export function InfoCard({ 
  icon, 
  title, 
  children, 
  variant = 'accent',
  className = '' 
}: InfoCardProps) {
  return (
    <div className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 transition-colors ${variantBorderColors[variant]} ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <IconBox icon={icon} variant={variant} size="md" />
        <h4 className="text-brand-neutral-950">{title}</h4>
      </div>
      <div className="text-brand-neutral-700 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
