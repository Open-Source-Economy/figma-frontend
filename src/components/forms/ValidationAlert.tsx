import React, { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

interface ValidationAlertProps {
  /**
   * Custom message to display. If not provided, shows default title only.
   */
  children?: ReactNode;
  /**
   * Custom title. Defaults to "Required Information Missing"
   */
  title?: string;
  /**
   * Additional className for the alert container
   */
  className?: string;
}

/**
 * ValidationAlert - Consistent error alert for form validation
 * 
 * A reusable component for displaying validation errors across onboarding steps
 * and forms. Ensures consistent styling and messaging for required field errors.
 * 
 * @example
 * // Simple usage with default title
 * <ValidationAlert>
 *   Please add at least one project to continue.
 * </ValidationAlert>
 * 
 * @example
 * // With custom title and complex content
 * <ValidationAlert title="Custom Error Title">
 *   <p>Error description here</p>
 *   <ul className="mt-2 ml-4 list-disc space-y-1">
 *     <li>Error item 1</li>
 *     <li>Error item 2</li>
 *   </ul>
 * </ValidationAlert>
 */
export function ValidationAlert({ 
  children, 
  title = "Required Information Missing",
  className = '' 
}: ValidationAlertProps) {
  return (
    <Alert 
      variant="destructive" 
      className={`border-brand-error bg-brand-error/10 ${className}`}
    >
      <AlertCircle className="h-5 w-5 text-brand-error flex-shrink-0" />
      <AlertTitle className="text-brand-error">{title}</AlertTitle>
      {children && (
        <AlertDescription className="text-brand-error/90 text-xs sm:text-sm leading-relaxed">
          {children}
        </AlertDescription>
      )}
    </Alert>
  );
}
