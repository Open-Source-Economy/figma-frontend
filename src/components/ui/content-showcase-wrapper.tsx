import React from 'react';
import { DecorativeBackground } from './decorative-background';
import { FloatingElements } from './floating-elements';

interface ContentShowcaseWrapperProps {
  children: React.ReactNode;
  variant?: 'minimal' | 'enhanced' | 'premium';
  showFloatingElements?: boolean;
  className?: string;
}

export function ContentShowcaseWrapper({ 
  children, 
  variant = 'enhanced',
  showFloatingElements = true,
  className = ''
}: ContentShowcaseWrapperProps) {
  const getVariantConfig = () => {
    switch (variant) {
      case 'minimal':
        return {
          container: 'relative',
          background: null,
          floating: false,
          border: 'border border-brand-primary/10',
          padding: 'p-6'
        };
      case 'premium':
        return {
          container: 'relative group perspective-1000',
          background: 'gradient',
          floating: true,
          border: 'border border-brand-primary/20 backdrop-blur-sm',
          padding: 'p-8'
        };
      default: // enhanced
        return {
          container: 'relative group',
          background: 'accent',
          floating: showFloatingElements,
          border: 'border border-brand-primary/15 backdrop-blur-sm',
          padding: 'p-6'
        };
    }
  };

  const config = getVariantConfig();

  return (
    <div className={`${config.container} ${className}`}>
      {/* Floating decorative elements */}
      {config.floating && <FloatingElements count={3} />}
      
      {/* Background decoration */}
      {config.background && (
        <DecorativeBackground 
          variant={config.background as any}
          intensity={variant === 'premium' ? 'strong' : 'medium'}
          animated={true}
          className="opacity-40 group-hover:opacity-60"
        />
      )}
      
      {/* Content container */}
      <div className={`
        relative z-10 
        ${config.border} 
        ${config.padding} 
        rounded-2xl 
        bg-background/80 
        transition-all duration-500 
        ${variant === 'premium' ? 'group-hover:transform group-hover:scale-105' : ''}
        ${variant !== 'minimal' ? 'shadow-lg shadow-brand-primary/10 group-hover:shadow-xl group-hover:shadow-brand-primary/20' : ''}
      `}>
        {children}
      </div>
      
      {/* Premium variant corner accent */}
      {variant === 'premium' && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse" />
            <div className="text-xs text-brand-success font-medium tracking-wide">LIVE</div>
          </div>
        </div>
      )}
    </div>
  );
}