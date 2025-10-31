import React from 'react';
import { Sparkles, X } from 'lucide-react';
import { Button } from './button';

interface ExampleBannerProps {
  onNavigateToExamples: () => void;
}

/**
 * ExampleBanner - Promotional banner for new component examples
 * 
 * Shows a dismissible banner highlighting the new ServerErrorAlert and LoadingState
 * components with a link to view examples.
 */
export const ExampleBanner: React.FC<ExampleBannerProps> = ({ onNavigateToExamples }) => {
  const [isDismissed, setIsDismissed] = React.useState(() => {
    // Check if user has dismissed this banner before
    if (typeof window !== 'undefined') {
      return localStorage.getItem('exampleBannerDismissed') === 'true';
    }
    return false;
  });

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('exampleBannerDismissed', 'true');
    }
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-brand-accent/10 via-brand-highlight/10 to-brand-accent/10 border-b border-brand-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Sparkles className="w-5 h-5 text-brand-accent flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-brand-neutral-950 font-medium">
                New Components Available!
              </span>
              <span className="text-brand-neutral-700 text-sm">
                Explore reusable ServerErrorAlert and LoadingState components
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onNavigateToExamples}
              className="border-brand-accent text-brand-accent hover:bg-brand-accent/10 whitespace-nowrap"
            >
              View Examples
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 text-brand-neutral-600 hover:text-brand-accent transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
