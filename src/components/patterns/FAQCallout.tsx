import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface FAQCalloutProps {
  onViewFAQ: () => void;
  className?: string;
}

export function FAQCallout({ onViewFAQ, className = '' }: FAQCalloutProps) {
  return (
    <div className={`bg-gradient-to-br from-brand-accent/10 via-brand-secondary to-brand-highlight/10 border border-brand-neutral-300 rounded-xl p-8 text-center ${className}`}>
      <div className="w-14 h-14 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
        <HelpCircle className="h-7 w-7 text-brand-accent" />
      </div>
      
      <h3 className="text-brand-neutral-900 mb-2">
        Have Questions?
      </h3>
      
      <p className="text-brand-neutral-600 mb-6 max-w-md mx-auto">
        Check out our comprehensive FAQ page for answers to common questions about pricing, services, and how Open Source Economy works.
      </p>
      
      <Button 
        onClick={onViewFAQ}
        variant="outline"
        className="group"
      >
        View FAQ
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
