import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { cn } from '../ui/utils';
import { type LucideIcon } from 'lucide-react';

interface CheckboxFieldProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  description?: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg' | 'xl';
  icon?: LucideIcon;
}

/**
 * CheckboxField - A reusable component combining checkbox, label, and optional description
 * Following DRY principles for consistent checkbox field patterns
 */
export function CheckboxField({
  id,
  checked,
  onCheckedChange,
  label,
  description,
  className,
  size = 'default',
  icon: Icon,
}: CheckboxFieldProps) {
  return (
    <div className={cn(
      'flex items-start gap-3 p-4 bg-brand-card-blue-light border border-brand-neutral-300 rounded-lg transition-colors hover:bg-brand-card-blue',
      className
    )}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        size={size}
        className="mt-1"
      />
      {Icon && (
        <Icon className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
      )}
      <Label htmlFor={id} className="flex-1 text-brand-neutral-700 cursor-pointer">
        {label}
        {description && (
          <span className="block text-sm text-brand-neutral-500 mt-1 font-normal">
            {description}
          </span>
        )}
      </Label>
    </div>
  );
}
