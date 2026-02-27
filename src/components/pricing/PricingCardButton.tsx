import React from 'react';
import { Button } from '../ui/button';
import { ButtonState } from './utils';

interface PricingCardButtonProps {
  state: ButtonState;
  onClick: () => void;
}

export function PricingCardButton({ state, onClick }: PricingCardButtonProps) {
  switch (state) {
    case 'current':
      return (
        <div className="w-full py-3 text-center">
          <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent uppercase tracking-wide">
            Current Plan
          </span>
        </div>
      );
    case 'upgrade':
      return (
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white uppercase tracking-wide"
          size="lg"
        >
          Upgrade Plan
        </Button>
      );
    case 'downgrade':
      return (
        <Button 
          onClick={onClick}
          variant="outline"
          className="w-full border-2 border-brand-neutral-400 text-brand-neutral-700 hover:bg-brand-neutral-100 uppercase tracking-wide"
          size="lg"
        >
          Downgrade Plan
        </Button>
      );
    default:
      return (
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white uppercase tracking-wide"
          size="lg"
        >
          Select Plan
        </Button>
      );
  }
}
