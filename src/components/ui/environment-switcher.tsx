import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';

export type EnvironmentMode = 'production' | 'staging' | 'development';

interface EnvironmentSwitcherProps {
  currentMode: EnvironmentMode;
  onModeChange: (mode: EnvironmentMode) => void;
  className?: string;
}

/**
 * EnvironmentSwitcher - Demo component to simulate different environments
 * 
 * Allows developers to see how the ServerErrorAlert displays in different modes:
 * - Production: Generic error messages only
 * - Staging: Status codes and detailed messages
 * - Development: Full details including stack traces
 */
export const EnvironmentSwitcher: React.FC<EnvironmentSwitcherProps> = ({
  currentMode,
  onModeChange,
  className = ''
}) => {
  const modes: { value: EnvironmentMode; label: string; description: string; color: string }[] = [
    {
      value: 'production',
      label: 'Production',
      description: 'Generic errors only',
      color: 'bg-brand-error text-white'
    },
    {
      value: 'staging',
      label: 'Staging',
      description: 'Status codes + messages',
      color: 'bg-brand-warning text-brand-neutral-950'
    },
    {
      value: 'development',
      label: 'Development',
      description: 'Full details + stack traces',
      color: 'bg-brand-success text-white'
    }
  ];

  return (
    <div className={`bg-brand-card-blue border border-brand-neutral-300/30 rounded-lg p-4 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
          <Settings className="w-4 h-4 text-brand-accent" />
        </div>
        <div className="flex-1">
          <h4 className="text-brand-neutral-950 mb-0.5">Environment Mode</h4>
          <p className="text-sm text-brand-neutral-600">
            See how errors display in different environments
          </p>
        </div>
        <Badge className="bg-brand-neutral-200 text-brand-neutral-900 border-brand-neutral-300">
          Demo Only
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => onModeChange(mode.value)}
            className={`
              p-3 rounded-lg border-2 transition-all text-left
              ${
                currentMode === mode.value
                  ? 'border-brand-accent bg-brand-accent/10'
                  : 'border-brand-neutral-300/30 bg-brand-neutral-200/50 hover:border-brand-neutral-400/50'
              }
            `}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className={`
                  w-2 h-2 rounded-full
                  ${currentMode === mode.value ? 'bg-brand-accent' : 'bg-brand-neutral-400'}
                `}
              />
              <span className="text-sm font-medium text-brand-neutral-950">
                {mode.label}
              </span>
            </div>
            <p className="text-xs text-brand-neutral-600">
              {mode.description}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-brand-neutral-200/50 border border-brand-neutral-300/30 rounded-md">
        <p className="text-xs text-brand-neutral-600 leading-relaxed">
          <span className="font-medium text-brand-neutral-800">Note:</span> In production,
          the actual environment is detected automatically from your hosting environment.
          This switcher is for demonstration purposes only.
        </p>
      </div>
    </div>
  );
};
