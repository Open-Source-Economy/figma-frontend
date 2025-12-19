import React, { useState } from 'react';
import { StatefulAction, ActionState } from './StatefulAction';

interface StateTestingWrapperProps {
  children: React.ReactNode;
  enableStateTesting?: boolean;
  successContent?: {
    title?: string;
    message?: string;
  };
  errorContent?: {
    title?: string;
    message?: string;
    retryLabel?: string;
  };
  loadingContent?: {
    message?: string;
  };
  badgePosition?: 'top-left' | 'top-right' | 'top-center';
  onStateChange?: (state: ActionState) => void;
}

export function StateTestingWrapper({
  children,
  enableStateTesting = false,
  successContent = {
    title: "Success! ✓",
    message: "The action completed successfully.",
  },
  errorContent = {
    title: "Error",
    message: "Something went wrong. Please try again.",
    retryLabel: "Reset",
  },
  loadingContent = {
    message: "Loading...",
  },
  badgePosition = 'top-left',
  onStateChange,
}: StateTestingWrapperProps) {
  const [currentState, setCurrentState] = useState<ActionState>('idle');

  const states: ActionState[] = ['idle', 'loading', 'success', 'error'];

  const handleStateChange = (state: ActionState) => {
    setCurrentState(state);
    onStateChange?.(state);
  };

  const positionClasses = {
    'top-left': 'left-0',
    'top-right': 'right-0',
    'top-center': 'left-1/2 -translate-x-1/2',
  };

  if (!enableStateTesting) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* State Badge Selector */}
      <div className={`absolute -top-3 ${positionClasses[badgePosition]} flex gap-2 z-50`}>
        {states.map((state) => (
          <button
            key={state}
            onClick={() => handleStateChange(state)}
            className={`px-3 py-1 rounded-full text-xs border-2 transition-all cursor-pointer hover:scale-105 ${
              currentState === state
                ? state === 'idle' ? 'bg-brand-neutral-200 border-brand-neutral-400 text-brand-neutral-700 shadow-md' :
                  state === 'loading' ? 'bg-brand-accent/20 border-brand-accent text-brand-accent shadow-md' :
                  state === 'success' ? 'bg-brand-success/20 border-brand-success text-brand-success shadow-md' :
                  'bg-brand-error/20 border-brand-error text-brand-error shadow-md'
                : 'bg-white/50 border-brand-neutral-300 text-brand-neutral-600 opacity-60 hover:opacity-100'
            }`}
          >
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </button>
        ))}
      </div>

      {/* Content wrapped with StatefulAction */}
      <StatefulAction
        state={currentState}
        successContent={{
          title: successContent.title,
          message: successContent.message,
        }}
        errorContent={{
          title: errorContent.title,
          message: errorContent.message,
          retry: () => handleStateChange('idle'),
          retryLabel: errorContent.retryLabel,
        }}
        loadingContent={{
          message: loadingContent.message,
        }}
      >
        {children}
      </StatefulAction>
    </div>
  );
}
