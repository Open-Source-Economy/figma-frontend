import React from 'react';

interface BrandGradientProps {
  variant?: 'primary' | 'accent' | 'success' | 'subtle' | 'enterprise';
  direction?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl';
  intensity?: 'subtle' | 'medium' | 'strong';
  asBackground?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function BrandGradient({
  variant = 'primary',
  direction = 'to-r',
  intensity = 'medium',
  asBackground = false,
  className = '',
  children
}: BrandGradientProps) {
  const getGradientClasses = () => {
    const baseGradient = `bg-gradient-${direction}`;
    
    switch (variant) {
      case 'primary':
        return intensity === 'subtle' 
          ? `${baseGradient} from-brand-primary/10 via-brand-primary/5 to-transparent`
          : intensity === 'strong'
          ? `${baseGradient} from-brand-primary to-brand-primary-dark`
          : `${baseGradient} from-brand-primary via-brand-primary-light to-brand-primary-dark`;
          
      case 'accent':
        return intensity === 'subtle'
          ? `${baseGradient} from-brand-accent/10 via-brand-accent/5 to-transparent`
          : intensity === 'strong'
          ? `${baseGradient} from-brand-accent to-brand-accent-dark`
          : `${baseGradient} from-brand-accent via-brand-accent-light to-brand-accent-dark`;
          
      case 'success':
        return intensity === 'subtle'
          ? `${baseGradient} from-brand-success/10 via-brand-success/5 to-transparent`
          : intensity === 'strong'
          ? `${baseGradient} from-brand-success to-brand-success-dark`
          : `${baseGradient} from-brand-success via-brand-success-light to-brand-success-dark`;
          
      case 'enterprise':
        return intensity === 'subtle'
          ? `${baseGradient} from-brand-primary/10 via-brand-accent/5 to-transparent`
          : intensity === 'strong'
          ? `${baseGradient} from-brand-primary via-brand-accent to-brand-success`
          : `${baseGradient} from-brand-primary/80 via-brand-accent/60 to-brand-success/40`;
          
      case 'subtle':
        return `${baseGradient} from-brand-secondary via-brand-secondary-light to-brand-secondary-dark`;
        
      default:
        return `${baseGradient} from-brand-primary to-brand-accent`;
    }
  };

  if (asBackground) {
    return (
      <div className={`${getGradientClasses()} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`${getGradientClasses()} bg-clip-text text-transparent ${className}`}>
      {children}
    </div>
  );
}