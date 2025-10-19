import React from 'react';

interface MetricDisplayProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'accent' | 'success';
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export function MetricDisplay({
  value,
  label,
  trend,
  trendValue,
  size = 'md',
  variant = 'default',
  orientation = 'vertical',
  className = ''
}: MetricDisplayProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          value: 'text-lg font-semibold',
          label: 'text-xs',
          trend: 'text-xs'
        };
      case 'md':
        return {
          value: 'text-2xl font-bold',
          label: 'text-sm',
          trend: 'text-sm'
        };
      case 'lg':
        return {
          value: 'text-3xl font-bold',
          label: 'text-base',
          trend: 'text-sm'
        };
      case 'xl':
        return {
          value: 'text-4xl font-bold',
          label: 'text-lg',
          trend: 'text-base'
        };
      default:
        return {
          value: 'text-2xl font-bold',
          label: 'text-sm',
          trend: 'text-sm'
        };
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return {
          value: 'text-brand-primary',
          container: 'bg-brand-primary/5 border-brand-primary/20'
        };
      case 'accent':
        return {
          value: 'text-brand-accent',
          container: 'bg-brand-accent/5 border-brand-accent/20'
        };
      case 'success':
        return {
          value: 'text-brand-success',
          container: 'bg-brand-success/5 border-brand-success/20'
        };
      default:
        return {
          value: 'text-foreground',
          container: 'bg-card border-border'
        };
    }
  };

  const getTrendClasses = () => {
    switch (trend) {
      case 'up':
        return 'text-brand-success';
      case 'down':
        return 'text-brand-error';
      case 'neutral':
        return 'text-brand-neutral-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      case 'neutral':
        return '→';
      default:
        return null;
    }
  };

  const sizes = getSizeClasses();
  const variants = getVariantClasses();

  if (orientation === 'horizontal') {
    return (
      <div className={`
        flex items-center gap-4 p-4 rounded-lg border
        ${variants.container}
        ${className}
      `}>
        <div className={`${sizes.value} ${variants.value}`}>
          {value}
        </div>
        
        <div className="flex-1">
          <div className={`${sizes.label} text-muted-foreground font-medium`}>
            {label}
          </div>
          
          {trend && trendValue && (
            <div className={`${sizes.trend} ${getTrendClasses()} flex items-center gap-1 mt-1`}>
              <span>{getTrendIcon()}</span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`
      text-center p-4 rounded-lg border
      ${variants.container}
      ${className}
    `}>
      <div className={`${sizes.value} ${variants.value} leading-tight`}>
        {value}
      </div>
      
      <div className={`${sizes.label} text-muted-foreground font-medium mt-1`}>
        {label}
      </div>
      
      {trend && trendValue && (
        <div className={`${sizes.trend} ${getTrendClasses()} flex items-center justify-center gap-1 mt-2`}>
          <span>{getTrendIcon()}</span>
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
}