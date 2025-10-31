import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../../ui/button';

interface EnterpriseServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  colorScheme: 'primary' | 'success' | 'accent';
  onButtonClick: () => void;
  className?: string;
}

/**
 * EnterpriseServiceCard - Card for enterprise-grade services
 * Used in services page for NDA, SLA, and ecosystem programs
 */
export const EnterpriseServiceCard: React.FC<EnterpriseServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  colorScheme,
  onButtonClick,
  className = '',
}) => {
  const colorClasses = {
    primary: {
      card: 'from-card via-card to-brand-primary/5 hover:border-brand-primary/30',
      gradient: 'from-brand-primary/5',
      orb: 'from-brand-primary/20',
      iconBg: 'from-brand-primary to-brand-primary-dark',
      title: 'text-brand-primary-dark',
      buttonVariant: 'outline' as const,
    },
    success: {
      card: 'from-card via-card to-brand-success/5 hover:border-brand-success/30',
      gradient: 'from-brand-success/5',
      orb: 'from-brand-success/20',
      iconBg: 'from-brand-success to-brand-success-dark',
      title: 'text-brand-success-dark',
      buttonVariant: 'success' as const,
    },
    accent: {
      card: 'from-card via-card to-brand-accent/5 hover:border-brand-accent/30',
      gradient: 'from-brand-accent/5',
      orb: 'from-brand-accent/20',
      iconBg: 'from-brand-accent to-brand-accent-dark',
      title: 'text-brand-accent-dark',
      buttonVariant: 'outline' as const,
    },
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className={`group relative bg-gradient-to-br ${colors.card} rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full ${className}`}>
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Decorative orb */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.orb} to-transparent rounded-full blur-2xl opacity-60`}></div>
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className={`text-lg ${colors.title} mb-4 text-center`}>{title}</h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow text-center min-h-[4rem] flex items-end justify-center">
          <span className="block">{description}</span>
        </p>
        
        {/* Button */}
        <Button 
          size="sm" 
          variant={colors.buttonVariant}
          className="w-full mt-auto"
          leftIcon={Icon}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
