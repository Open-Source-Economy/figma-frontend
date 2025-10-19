import React from 'react';
import { Label } from '../ui/label';
import { cn } from '../ui/utils';

interface FormFieldProps {
  label: string;
  description?: string;
  error?: string;
  success?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function FormField({ 
  label, 
  description, 
  error, 
  success, 
  required = false, 
  className,
  children 
}: FormFieldProps) {
  const hasError = !!error;
  const hasSuccess = !!success;
  
  return (
    <div className={cn("space-y-2", className)}>
      <Label className={cn(
        hasError && "text-brand-error",
        hasSuccess && "text-brand-success",
        required && "after:content-['*'] after:ml-1 after:text-brand-error"
      )}>
        {label}
      </Label>
      {children}
      {description && !error && !success && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="text-sm text-brand-error">{error}</p>
      )}
      {success && (
        <p className="text-sm text-brand-success">{success}</p>
      )}
    </div>
  );
}