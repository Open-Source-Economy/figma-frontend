import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  variant?: 'success' | 'accent' | 'highlight' | 'warning' | 'primary';
  className?: string;
}

const variantStyles = {
  success: {
    iconBg: 'bg-brand-success/20',
    iconBorder: 'border-brand-success/30',
    iconText: 'text-brand-success',
    shadow: 'hover:shadow-brand-success/20',
    badgeText: 'text-brand-success',
  },
  accent: {
    iconBg: 'bg-brand-accent/20',
    iconBorder: 'border-brand-accent/30',
    iconText: 'text-brand-accent',
    shadow: 'hover:shadow-brand-accent/20',
    badgeText: 'text-brand-accent',
  },
  highlight: {
    iconBg: 'bg-brand-highlight/20',
    iconBorder: 'border-brand-highlight/30',
    iconText: 'text-brand-highlight',
    shadow: 'hover:shadow-brand-highlight/20',
    badgeText: 'text-brand-highlight',
  },
  warning: {
    iconBg: 'bg-brand-warning/20',
    iconBorder: 'border-brand-warning/30',
    iconText: 'text-brand-warning',
    shadow: 'hover:shadow-brand-warning/20',
    badgeText: 'text-brand-warning',
  },
  primary: {
    iconBg: 'bg-brand-primary/20',
    iconBorder: 'border-brand-primary/30',
    iconText: 'text-brand-primary',
    shadow: 'hover:shadow-brand-primary/20',
    badgeText: 'text-brand-primary',
  },
};

export function ValueCard({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  variant = 'accent',
  className = '' 
}: ValueCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-neutral-300 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl flex flex-col h-full ${styles.shadow} ${className}`}>
      <div className={`w-16 h-16 rounded-2xl ${styles.iconBg} border ${styles.iconBorder} flex items-center justify-center mb-6 shadow-lg`}>
        <Icon className={`h-8 w-8 ${styles.iconText}`} />
      </div>
      <h3 className="text-brand-neutral-950 mb-3">
        {title}
      </h3>
      <p className="text-brand-neutral-600 mb-4 flex-grow">
        {description}
      </p>
      <div className={`flex items-center gap-2 ${styles.badgeText} text-sm mt-auto`}>
        <CheckCircle2 className="h-4 w-4" />
        <span>{badge}</span>
      </div>
    </div>
  );
}
