import React from 'react';
import { Badge } from './badge';
import { Shield, CheckCircle, Star, Award, Zap, Users } from 'lucide-react';

interface TrustBadgeProps {
  type: 'security' | 'verified' | 'featured' | 'premium' | 'fast' | 'popular';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  variant?: 'default' | 'brand' | 'subtle';
  className?: string;
}

export function TrustBadge({
  type,
  text,
  size = 'md',
  showIcon = true,
  variant = 'brand',
  className = ''
}: TrustBadgeProps) {
  const getIcon = () => {
    const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
    
    switch (type) {
      case 'security':
        return <Shield className={iconSize} />;
      case 'verified':
        return <CheckCircle className={iconSize} />;
      case 'featured':
        return <Star className={iconSize} />;
      case 'premium':
        return <Award className={iconSize} />;
      case 'fast':
        return <Zap className={iconSize} />;
      case 'popular':
        return <Users className={iconSize} />;
      default:
        return <CheckCircle className={iconSize} />;
    }
  };

  const getDefaultText = () => {
    if (text) return text;
    
    switch (type) {
      case 'security':
        return 'SOC 2 Compliant';
      case 'verified':
        return 'Verified';
      case 'featured':
        return 'Featured';
      case 'premium':
        return 'Premium';
      case 'fast':
        return '24/7 Support';
      case 'popular':
        return 'Popular';
      default:
        return 'Trusted';
    }
  };

  const getVariantClasses = () => {
    const baseClasses = size === 'sm' ? 'text-xs px-2 py-1' : 
                       size === 'lg' ? 'text-base px-4 py-2' : 
                       'text-sm px-3 py-1.5';
    
    switch (variant) {
      case 'brand':
        return type === 'security' ? 
          `${baseClasses} bg-brand-success/10 text-brand-success border-brand-success/30` :
          type === 'verified' ?
          `${baseClasses} bg-brand-primary/10 text-brand-primary border-brand-primary/30` :
          type === 'featured' ?
          `${baseClasses} bg-brand-warning/10 text-brand-warning border-brand-warning/30` :
          type === 'premium' ?
          `${baseClasses} bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 text-brand-primary border-brand-primary/30` :
          type === 'fast' ?
          `${baseClasses} bg-brand-accent/10 text-brand-accent border-brand-accent/30` :
          `${baseClasses} bg-brand-primary/10 text-brand-primary border-brand-primary/30`;
          
      case 'subtle':
        return `${baseClasses} bg-brand-neutral-100 text-brand-neutral-600 border-brand-neutral-200`;
        
      default:
        return `${baseClasses} bg-brand-primary text-white border-brand-primary`;
    }
  };

  return (
    <Badge 
      variant="outline" 
      className={`
        inline-flex items-center gap-2 font-medium rounded-full
        transition-all duration-200 hover:scale-105
        ${getVariantClasses()}
        ${className}
      `}
    >
      {showIcon && getIcon()}
      {getDefaultText()}
    </Badge>
  );
}