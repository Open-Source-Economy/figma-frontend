import React, { useState, createContext, useContext } from 'react';
import { LucideIcon, X, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { StatefulAction, ActionState } from '../ui/StatefulAction';

// Context to share state testing across the section
const StateTestingContext = createContext<{
  currentState: ActionState;
  isEnabled: boolean;
} | null>(null);

export const useStateTestingContext = () => {
  return useContext(StateTestingContext);
};

interface SupportDetailSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  color: string;
  children: React.ReactNode;
  onClose: () => void;
  enableStateTesting?: boolean;
}

export function SupportDetailSection({
  icon: Icon,
  title,
  color,
  children,
  onClose,
  enableStateTesting = false,
}: SupportDetailSectionProps) {
  const [currentState, setCurrentState] = useState<ActionState>('idle');
  const [showStateSelector, setShowStateSelector] = useState(false);

  const states: ActionState[] = ['idle', 'loading', 'success', 'error'];

  return (
    <StateTestingContext.Provider value={{ currentState, isEnabled: enableStateTesting }}>
      <div className={`relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-${color}/30 rounded-xl p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-300`}>
        {enableStateTesting && (
          <div className="absolute -top-3 left-6 flex gap-2">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setCurrentState(state)}
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
        )}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 bg-${color}/20 rounded-xl`}>
              <Icon className={`h-8 w-8 text-${color}`} />
            </div>
            <div>
              <h2 className="text-brand-neutral-900 mb-1">{title}</h2>
              <div className={`h-1 w-16 bg-${color} rounded-full`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {enableStateTesting && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowStateSelector(!showStateSelector)}
                  className="hover:bg-brand-neutral-300/50"
                  title="Toggle state selector"
                >
                  <Settings className="h-5 w-5" />
                </Button>
                {showStateSelector && (
                  <div className="absolute right-0 top-12 bg-white border-2 border-brand-primary/20 rounded-lg shadow-lg p-2 z-50 min-w-[140px]">
                    <div className="text-xs text-brand-neutral-600 mb-2 px-2">Preview State:</div>
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => setCurrentState(state)}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          currentState === state
                            ? 'bg-brand-accent text-white'
                            : 'hover:bg-brand-neutral-100 text-brand-neutral-700'
                        }`}
                      >
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-brand-neutral-300/50"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {enableStateTesting ? (
          <>
            {children}
          </>
        ) : (
          children
        )}
      </div>
    </StateTestingContext.Provider>
  );
}