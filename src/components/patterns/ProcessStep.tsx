import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  accentColor?: 'accent' | 'success' | 'highlight';
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  icon: Icon,
  number,
  title,
  description,
  accentColor = 'accent'
}) => {
  const colorClasses = {
    accent: {
      border: 'border-brand-accent',
      bg: 'bg-brand-accent/10',
      text: 'text-brand-accent-light',
      glow: 'bg-brand-accent/20'
    },
    success: {
      border: 'border-brand-success',
      bg: 'bg-brand-success/10',
      text: 'text-brand-success-light',
      glow: 'bg-brand-success/20'
    },
    highlight: {
      border: 'border-brand-highlight',
      bg: 'bg-brand-highlight/10',
      text: 'text-brand-highlight-light',
      glow: 'bg-brand-highlight/20'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="text-center relative group">
      <div className={`relative inline-flex items-center justify-center w-40 h-40 rounded-full border-3 ${colors.border} bg-[#2c3e50] mb-8 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${accentColor === 'accent' ? 'brand-accent' : accentColor === 'success' ? 'brand-success' : 'brand-highlight'}/20`}>
        {/* Inner gradient glow */}
        <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${colors.bg} to-transparent`} />
        
        {/* Step number badge */}
        <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center z-10`}>
          <span className={`${colors.text}`}>{number}</span>
        </div>
        
        {/* Icon */}
        <Icon className={`w-16 h-16 ${colors.text} relative z-10`} />
      </div>
      
      <h3 className="text-brand-neutral-950 mb-4">{title}</h3>
      <p className="text-brand-neutral-700 text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
};
