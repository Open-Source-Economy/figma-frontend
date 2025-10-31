import React from 'react';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { Button } from '../ui/button';

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSaving: boolean;
  lastSaved: Date | null;
  onBack: () => void;
  onCancel: () => void;
  onNext: () => void;
  onNavItemClick: (item: string) => void;
}

export const WizardNavigation: React.FC<WizardNavigationProps> = ({
  currentStep,
  totalSteps,
  isSaving,
  lastSaved,
  onBack,
  onCancel,
  onNext,
  onNavItemClick,
}) => {
  return (
    <>
      {/* Navigation - Inside content area */}
      <div className="mt-12 pt-8 border-t border-brand-neutral-300/10">
        {/* Auto-save indicator - Mobile: Above buttons */}
        {(isSaving || lastSaved) && (
          <div className="mb-4 sm:hidden">
            {isSaving && (
              <div className="flex items-center justify-center gap-2 text-sm text-brand-neutral-600">
                <Save className="w-4 h-4 animate-pulse" />
                <span>Saving...</span>
              </div>
            )}
            {!isSaving && lastSaved && (
              <div className="text-xs text-brand-neutral-600 text-center">
                Saved {new Date(lastSaved).toLocaleTimeString()}
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
          {/* Back / Cancel */}
          <div className="order-2 sm:order-1">
            {currentStep > 1 ? (
              <Button
                variant="ghost"
                onClick={onBack}
                className="w-full sm:w-auto text-brand-neutral-700 hover:text-brand-neutral-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button
                variant="ghost"
                onClick={onCancel}
                className="w-full sm:w-auto text-brand-neutral-600 hover:text-brand-neutral-800"
              >
                Cancel
              </Button>
            )}
          </div>

          {/* Save Status & Next - Desktop */}
          <div className="order-1 sm:order-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Auto-save indicator - Desktop only */}
            <div className="hidden sm:block">
              {isSaving && (
                <div className="flex items-center gap-2 text-sm text-brand-neutral-600">
                  <Save className="w-4 h-4 animate-pulse" />
                  <span>Saving...</span>
                </div>
              )}
              {!isSaving && lastSaved && (
                <div className="text-xs text-brand-neutral-600">
                  Saved {new Date(lastSaved).toLocaleTimeString()}
                </div>
              )}
            </div>

            {/* Next button */}
            <Button
              onClick={onNext}
              disabled={currentStep > totalSteps}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white shadow-lg hover:shadow-xl"
            >
              {currentStep === totalSteps ? 'Submit' : 'Continue'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6">
          <p className="text-xs sm:text-sm text-brand-neutral-600 text-center">
            Need help? <button onClick={() => onNavItemClick('faq')} className="text-brand-accent hover:text-brand-accent-dark font-medium">View FAQ</button> or <button onClick={() => onNavItemClick('contact')} className="text-brand-accent hover:text-brand-accent-dark font-medium">Contact Support</button>
          </p>
        </div>
      </div>

     
    </>
  );
};
