import React from 'react';
import { Card, CardContent } from './card';

interface BrandCardProps {
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'enterprise' | 'glass';
  hover?: boolean;
  glow?: boolean;
  border?: 'default' | 'brand' | 'none';
  className?: string;
  children: React.ReactNode;
}

export function BrandCard({
  variant = 'default',
  hover = true,
  glow = false,
  border = 'default',
  className = '',
  children
}: BrandCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-brand-primary/5 border-brand-primary/20';
      case 'accent':
        return 'bg-brand-accent/5 border-brand-accent/20';
      case 'success':
        return 'bg-brand-success/5 border-brand-success/20';
      case 'enterprise':
        return 'bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-success/5 border-brand-primary/20';
      case 'glass':
        return 'bg-card/60 backdrop-blur-md border-border/30';
      default:
        return 'bg-card border-border';
    }
  };

  const getHoverClasses = () => {
    if (!hover) return '';
    
    const baseHover = 'transition-all duration-300';
    
    switch (variant) {
      case 'primary':
        return `${baseHover} hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1`;
      case 'accent':
        return `${baseHover} hover:bg-brand-accent/10 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/10 hover:-translate-y-1`;
      case 'success':
        return `${baseHover} hover:bg-brand-success/10 hover:border-brand-success/30 hover:shadow-lg hover:shadow-brand-success/10 hover:-translate-y-1`;
      case 'enterprise':
        return `${baseHover} hover:shadow-xl hover:shadow-brand-primary/10 hover:-translate-y-1 hover:scale-[1.02]`;
      case 'glass':
        return `${baseHover} hover:bg-card/70 hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-1`;
      default:
        return `${baseHover} hover:shadow-lg hover:-translate-y-1`;
    }
  };

  const getGlowClasses = () => {
    if (!glow) return '';
    
    switch (variant) {
      case 'primary':
        return 'shadow-lg shadow-brand-primary/20';
      case 'accent':
        return 'shadow-lg shadow-brand-accent/20';
      case 'success':
        return 'shadow-lg shadow-brand-success/20';
      case 'enterprise':
        return 'shadow-xl shadow-brand-primary/15';
      default:
        return 'shadow-lg';
    }
  };

  const getBorderClasses = () => {
    switch (border) {
      case 'brand':
        return variant === 'primary' ? 'border-brand-primary/30' :
               variant === 'accent' ? 'border-brand-accent/30' :
               variant === 'success' ? 'border-brand-success/30' :
               'border-brand-primary/30';
      case 'none':
        return 'border-0';
      default:
        return 'border';
    }
  };

  return (
    <Card className={`
      relative overflow-hidden
      ${getVariantClasses()}
      ${getHoverClasses()}
      ${getGlowClasses()}
      ${getBorderClasses()}
      ${className}
    `}>
      {children}
      
      {/* Subtle gradient overlay for enhanced depth */}
      {variant === 'enterprise' && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-accent/5 to-brand-success/5 pointer-events-none" />
      )}
    </Card>
  );
}