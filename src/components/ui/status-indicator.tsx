import React from 'react';

interface StatusIndicatorProps {
  status: 'available' | 'busy' | 'offline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  className?: string;
}

export function StatusIndicator({
  status,
  size = 'md',
  showLabel = false,
  label,
  animated = true,
  className = ''
}: StatusIndicatorProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-2 h-2';
      case 'md': return 'w-3 h-3';
      case 'lg': return 'w-4 h-4';
      default: return 'w-3 h-3';
    }
  };

  const getStatusClasses = () => {
    const baseClasses = 'rounded-full border-2 border-background';
    const animationClass = animated ? 'animate-pulse' : '';
    
    switch (status) {
      case 'available':
        return `${baseClasses} bg-brand-success ${animationClass}`;
      case 'busy':
        return `${baseClasses} bg-brand-warning ${animationClass}`;
      case 'offline':
        return `${baseClasses} bg-brand-neutral-400`;
      case 'success':
        return `${baseClasses} bg-brand-success ${animationClass}`;
      case 'warning':
        return `${baseClasses} bg-brand-warning ${animationClass}`;
      case 'error':
        return `${baseClasses} bg-brand-error ${animationClass}`;
      default:
        return `${baseClasses} bg-brand-neutral-400`;
    }
  };

  const getStatusLabel = () => {
    if (label) return label;
    
    switch (status) {
      case 'available':
        return 'Available';
      case 'busy':
        return 'Busy';
      case 'offline':
        return 'Offline';
      case 'success':
        return 'Success';
      case 'warning':
        return 'Warning';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'available':
      case 'success':
        return 'text-brand-success';
      case 'busy':
      case 'warning':
        return 'text-brand-warning';
      case 'error':
        return 'text-brand-error';
      case 'offline':
        return 'text-brand-neutral-500';
      default:
        return 'text-brand-neutral-500';
    }
  };

  if (showLabel) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <div className={`${getSizeClasses()} ${getStatusClasses()}`} />
        <span className={`text-sm font-medium ${getTextColor()}`}>
          {getStatusLabel()}
        </span>
      </div>
    );
  }

  return (
    <div className={`${getSizeClasses()} ${getStatusClasses()} ${className}`} />
  );
}