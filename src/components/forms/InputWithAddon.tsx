import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';
import { LucideIcon } from 'lucide-react';

interface InputWithAddonProps extends Omit<React.ComponentProps<typeof Input>, 'prefix'> {
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  state?: 'default' | 'error' | 'success' | 'warning';
  addonClassName?: string;
  displayMode?: boolean;
  icon?: LucideIcon;
}

export function InputWithAddon({ 
  prefix, 
  suffix, 
  state = 'default',
  addonClassName,
  className,
  variant,
  displayMode = false,
  icon: Icon,
  ...props 
}: InputWithAddonProps) {
  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;
  
  // Display mode: compact read-only display with icon
  if (displayMode) {
    return (
      <div className={cn(
        "flex items-center gap-2 p-3 bg-brand-card-blue/50 border border-brand-neutral-300/30 rounded-lg w-fit",
        className
      )}>
        {Icon && <Icon className="w-4 h-4 text-brand-highlight" />}
        <span className="text-sm text-brand-neutral-900">
          {prefix}{props.value}
        </span>
        <span className="text-xs text-brand-neutral-500">{suffix}</span>
      </div>
    );
  }
  
  // Determine variant based on state
  const inputVariant = state === 'error' ? 'error' : state === 'success' ? 'success' : state === 'warning' ? 'warning' : variant || 'default';
  
  const addonBaseClasses = "flex items-center px-4 bg-gradient-to-r from-muted/80 to-brand-primary/5 border text-sm text-muted-foreground transition-all duration-300";
  const stateClasses = {
    error: "border-brand-error/50 bg-gradient-to-r from-muted/80 to-brand-error/5 text-brand-error",
    success: "border-brand-success/50 bg-gradient-to-r from-muted/80 to-brand-success/5 text-brand-success",
    warning: "border-brand-warning/50 bg-gradient-to-r from-muted/80 to-brand-warning/5 text-brand-warning",
    default: "border-border/50"
  };

  if (!hasPrefix && !hasSuffix) {
    return <Input variant={inputVariant} className={className} {...props} />;
  }

  return (
    <div className="flex rounded-lg overflow-hidden border border-border/50 focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/20 transition-all duration-300">
      {hasPrefix && (
        <div className={cn(
          addonBaseClasses,
          "border-r-0 rounded-l-lg rounded-r-none",
          stateClasses[state],
          addonClassName
        )}>
          {prefix}
        </div>
      )}
      <Input
        variant={inputVariant}
        className={cn(
          "border-0 focus:ring-0 rounded-none",
          hasPrefix && "rounded-l-none",
          hasSuffix && "rounded-r-none",
          className
        )}
        {...props}
      />
      {hasSuffix && (
        <div className={cn(
          addonBaseClasses,
          "border-l-0 rounded-r-lg rounded-l-none",
          stateClasses[state],
          addonClassName
        )}>
          {suffix}
        </div>
      )}
    </div>
  );
}