import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeaturePillProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'highlight';
}

export const FeaturePill: React.FC<FeaturePillProps> = ({
  icon: Icon,
  children,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-[#1e293b] border-brand-neutral-400/30 text-brand-highlight',
    success: 'bg-[#1e293b] border-brand-success/30 text-brand-success-light',
    highlight: 'bg-[#1e293b] border-brand-highlight/30 text-brand-highlight-light'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${variantClasses[variant]} transition-all duration-300 hover:scale-105`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </div>
  );
};
