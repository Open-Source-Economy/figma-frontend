import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { ErrorMessage } from './ErrorMessage';

interface TermsCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string;
  onNavItemClick: (href: string) => void;
}

export function TermsCheckbox({ checked, onCheckedChange, error, onNavItemClick }: TermsCheckboxProps) {
  const hasError = error && !checked;

  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={(checkedState) => onCheckedChange(checkedState === true)}
        className={`mt-0.5 ${hasError ? 'border-brand-error border-2' : ''}`}
        variant={hasError ? 'error' : 'default'}
      />
      <div className="flex-1">
        <Label
          htmlFor="terms"
          className="text-sm text-brand-neutral-700 cursor-pointer leading-relaxed"
        >
          By creating an account, I agree to the{' '}
          <button
            type="button"
            className="text-brand-accent hover:text-brand-accent-light underline underline-offset-2 transition-colors duration-200 inline-block"
            onClick={() => onNavItemClick('terms-and-conditions')}
          >
            Terms and Conditions
          </button>
          {' '}and{' '}
          <button
            type="button"
            className="text-brand-accent hover:text-brand-accent-light underline underline-offset-2 transition-colors duration-200 inline-block"
            onClick={() => onNavItemClick('privacy-policy')}
          >
            Privacy Policy
          </button>
        </Label>
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}