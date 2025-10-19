import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { cn } from '../ui/utils';

interface SelectFieldProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  description?: string;
  error?: string;
  className?: string;
}

/**
 * SelectField - A reusable component combining select dropdown with label
 * Following DRY principles for consistent select field patterns
 */
export function SelectField({
  label,
  value,
  onValueChange,
  options,
  placeholder = 'Select an option',
  required = false,
  description,
  error,
  className,
}: SelectFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label className={cn(
        error && 'text-brand-error',
        required && "after:content-['*'] after:ml-1 after:text-brand-error"
      )}>
        {label}
      </Label>
      <Select value={value} onValueChange={onValueChange} required={required}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && !error && (
        <p className="text-xs text-brand-neutral-500">{description}</p>
      )}
      {error && (
        <p className="text-sm text-brand-error">{error}</p>
      )}
    </div>
  );
}
