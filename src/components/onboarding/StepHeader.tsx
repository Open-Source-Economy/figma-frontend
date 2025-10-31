import React from 'react';

export interface StepHeaderProps {
  /** Step number (e.g., "01", "02") */
  stepNumber: string;
  /** Main title of the step */
  title: string;
  /** Subtitle/description providing context */
  subtitle: string;
  /** Optional icon to display above the title */
  icon?: React.ReactNode;
  /** Text alignment - defaults to center */
  align?: 'left' | 'center';
  /** Custom max width for the content */
  maxWidth?: string;
}

/**
 * StepHeader - Reusable header component for onboarding wizard steps
 * Provides consistent styling for step number, title, subtitle, and divider
 */
export const StepHeader: React.FC<StepHeaderProps> = ({
  stepNumber,
  title,
  subtitle,
  icon,
  align = 'left',
  maxWidth = 'w-full'
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`${maxWidth} ${alignmentClasses} mb-8 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]`}>
      {/* Optional Icon */}
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      
      {/* Step Number - Subtle display - Hidden on mobile (shown in progress indicator) */}
      <div className="mb-2 hidden sm:block">
        <span className="text-xs uppercase tracking-wider text-brand-neutral-600">
          Step {stepNumber}
        </span>
      </div>
      
      {/* Title */}
      <h2 className="text-brand-neutral-800 mb-3">
        {title}
      </h2>
      
      {/* Subtitle */}
      <p className="text-brand-neutral-800">
        {subtitle}
      </p>
      
      {/* Decorative Divider */}
      <div className="mt-6">
        <div className="h-1 w-16 bg-gradient-to-r from-brand-accent to-brand-highlight rounded-full" />
      </div>
    </div>
  );
};
