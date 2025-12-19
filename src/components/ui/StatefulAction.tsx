import React from 'react';
import { CheckCircle, AlertCircle, Loader2, LucideIcon } from 'lucide-react';
import { cn } from './utils';
import { useStateTestingContext } from '../support/SupportDetailSection';

export type ActionState = 'idle' | 'loading' | 'success' | 'error';

interface StatefulActionProps {
  state?: ActionState;
  children: React.ReactNode;
  successContent?: {
    title: string;
    message: string;
    icon?: LucideIcon;
    resetAction?: () => void;
    resetLabel?: string;
  };
  errorContent?: {
    title: string;
    message: string;
    icon?: LucideIcon;
    retry?: () => void;
    retryLabel?: string;
  };
  loadingContent?: {
    message?: string;
  };
  className?: string;
}

export function StatefulAction({
  state: propState,
  children,
  successContent,
  errorContent,
  loadingContent,
  className,
}: StatefulActionProps) {
  // Check for context state (from SupportDetailSection)
  const contextState = useStateTestingContext();
  
  // Use context state if available and enabled, otherwise use prop state
  const state = contextState?.isEnabled ? contextState.currentState : (propState || 'idle');

  // Success State
  if (state === 'success' && successContent) {
    const SuccessIcon = successContent.icon || CheckCircle;
    
    return (
      <div className={cn(
        "bg-brand-success/10 border-2 border-brand-success rounded-lg p-6 text-center animate-in fade-in zoom-in-95 duration-300",
        className
      )}>
        <SuccessIcon className="h-12 w-12 text-brand-success mx-auto mb-3" />
        <h3 className="text-brand-neutral-900 mb-2">{successContent.title}</h3>
        <p className="text-sm text-brand-neutral-600">
          {successContent.message}
        </p>
        {successContent.resetAction && (
          <button
            onClick={successContent.resetAction}
            className="mt-4 px-4 py-2 bg-brand-success hover:bg-brand-success/90 text-white rounded-lg transition-colors text-sm"
          >
            {successContent.resetLabel || 'Reset'}
          </button>
        )}
      </div>
    );
  }

  // Error State
  if (state === 'error' && errorContent) {
    const ErrorIcon = errorContent.icon || AlertCircle;
    
    return (
      <div className={cn(
        "bg-brand-error/10 border-2 border-brand-error rounded-lg p-6 text-center animate-in fade-in shake duration-300",
        className
      )}>
        <ErrorIcon className="h-12 w-12 text-brand-error mx-auto mb-3" />
        <h3 className="text-brand-neutral-900 mb-2">{errorContent.title}</h3>
        <p className="text-sm text-brand-neutral-600 mb-4">
          {errorContent.message}
        </p>
        {errorContent.retry && (
          <button
            onClick={errorContent.retry}
            className="px-4 py-2 bg-brand-error hover:bg-brand-error/90 text-white rounded-lg transition-colors text-sm"
          >
            {errorContent.retryLabel || 'Try Again'}
          </button>
        )}
      </div>
    );
  }

  // Loading State - now just renders children normally
  // The loading indicator should be shown in the button itself
  if (state === 'loading') {
    return <div className={className}>{children}</div>;
  }

  // Idle/Normal State
  return <div className={className}>{children}</div>;
}