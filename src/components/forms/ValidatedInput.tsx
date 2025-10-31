import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { FormField } from './FormField';
import { cn } from '../ui/utils';
import { LucideIcon } from 'lucide-react';

interface BaseValidatedFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  hint?: string;
  className?: string;
}

interface ValidatedInputProps extends BaseValidatedFieldProps {
  type?: 'text' | 'email' | 'url' | 'tel' | 'number';
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  disabled?: boolean;
  autoComplete?: string;
}

interface ValidatedTextareaProps extends BaseValidatedFieldProps {
  rows?: number;
}

export function ValidatedInput({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  description,
  hint,
  type = 'text',
  className,
  leftIcon,
  rightIcon,
  disabled,
  autoComplete,
}: ValidatedInputProps) {
  return (
    <FormField
      label={label}
      error={error}
      required={required}
      hint={hint || description}
      className={className}
    >
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        variant={error ? 'error' : 'default'}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </FormField>
  );
}

export function ValidatedTextarea({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  description,
  rows = 6,
  className
}: ValidatedTextareaProps) {
  return (
    <FormField
      label={label}
      error={error}
      required={required}
      description={description}
      className={className}
    >
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={error ? 'border-brand-error focus:border-brand-error' : ''}
        data-error={!!error}
      />
    </FormField>
  );
}
