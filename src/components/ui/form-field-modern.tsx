import React from 'react';
import { cn } from './utils';
import { cva, type VariantProps } from 'class-variance-authority@0.7.1';

const formFieldVariants = cva(
  "relative group",
  {
    variants: {
      variant: {
        floating: "relative",
        stacked: "space-y-2",
        inline: "flex items-center gap-3",
      },
      size: {
        sm: "",
        default: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "floating",
      size: "default",
    },
  }
);

interface FormFieldModernProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formFieldVariants> {
  label: string;
  children: React.ReactElement;
  error?: string;
  help?: string;
  required?: boolean;
}

export function FormFieldModern({
  label,
  children,
  error,
  help,
  required,
  variant = "floating",
  size = "default",
  className,
  ...props
}: FormFieldModernProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const id = React.useId();

  // Clone the child element to add focus handlers and id
  const childElement = React.cloneElement(children, {
    id: id,
    onFocus: (e: React.FocusEvent) => {
      setIsFocused(true);
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      setIsFocused(false);
      setHasValue(e.target.value !== '');
      children.props.onBlur?.(e);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value !== '');
      children.props.onChange?.(e);
    },
    className: cn(
      error && "border-brand-error focus:border-brand-error focus:ring-brand-error/15",
      children.props.className
    ),
  });

  if (variant === "floating") {
    return (
      <div className={cn(formFieldVariants({ variant, size }), className)} {...props}>
        {/* Input Container with Floating Label */}
        <div className="relative">
          {childElement}
          
          {/* Floating Label */}
          <label
            htmlFor={id}
            className={cn(
              "absolute left-[var(--space-form-padding-x)] transition-[var(--form-transition-fast)] pointer-events-none select-none",
              "text-[color:var(--form-text-placeholder)] text-sm font-medium",
              // Floating state
              isFocused || hasValue
                ? "top-0 -translate-y-1/2 px-2 bg-[color:var(--form-background-focus)] text-xs text-[color:var(--form-text-label-focus)] backdrop-blur-sm rounded-md shadow-sm"
                : "top-1/2 -translate-y-1/2",
              // Error state
              error && (isFocused || hasValue) && "text-brand-error",
              // Required indicator
              required && "after:content-['*'] after:ml-1 after:text-brand-error"
            )}
          >
            {label}
          </label>
        </div>

        {/* Help Text */}
        {help && !error && (
          <div className="mt-2 text-xs text-[color:var(--form-text-placeholder)] leading-relaxed">
            {help}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-2 text-xs text-brand-error font-medium flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            {error}
          </div>
        )}
      </div>
    );
  }

  // Stacked variant (traditional)
  if (variant === "stacked") {
    return (
      <div className={cn(formFieldVariants({ variant, size }), className)} {...props}>
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium text-[color:var(--form-text-label)] mb-2",
            required && "after:content-['*'] after:ml-1 after:text-brand-error"
          )}
        >
          {label}
        </label>
        
        {childElement}

        {help && !error && (
          <div className="mt-2 text-xs text-[color:var(--form-text-placeholder)] leading-relaxed">
            {help}
          </div>
        )}

        {error && (
          <div className="mt-2 text-xs text-brand-error font-medium flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            {error}
          </div>
        )}
      </div>
    );
  }

  // Inline variant
  return (
    <div className={cn(formFieldVariants({ variant, size }), className)} {...props}>
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-medium text-[color:var(--form-text-label)] flex-shrink-0 min-w-24",
          required && "after:content-['*'] after:ml-1 after:text-brand-error"
        )}
      >
        {label}
      </label>
      
      <div className="flex-1">
        {childElement}

        {help && !error && (
          <div className="mt-1 text-xs text-[color:var(--form-text-placeholder)] leading-relaxed">
            {help}
          </div>
        )}

        {error && (
          <div className="mt-1 text-xs text-brand-error font-medium flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}