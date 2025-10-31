import React from 'react';
import { Database, X } from 'lucide-react';

interface MockDataToggleProps {
  onLoadMockData: (scenario: 'empty' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'active' | 'passive') => void;
}

/**
 * MockDataToggle - Developer tool for loading mock data into the onboarding wizard
 * Only visible in development mode
 */
export const MockDataToggle: React.FC<MockDataToggleProps> = ({ onLoadMockData }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const mockScenarios = [
    { value: 'empty' as const, label: 'Empty (Fresh Start)', description: 'No data pre-filled' },
    { value: 'step1' as const, label: 'Step 1 Partial', description: 'Basic contact info' },
    { value: 'step2' as const, label: 'Step 2 Testing', description: 'Contact + Projects' },
    { value: 'step3' as const, label: 'Step 3 Testing', description: 'Ready for model selection' },
    { value: 'step4' as const, label: 'Step 4 Testing', description: 'Active with availability' },
    { value: 'step5' as const, label: 'Step 5 Testing', description: 'Ready to submit' },
    { value: 'active' as const, label: 'Complete Active Developer', description: 'Full active profile' },
    { value: 'passive' as const, label: 'Complete Passive Developer', description: 'Full passive profile' },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-warning hover:bg-brand-warning-dark text-brand-secondary px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200"
          title="Load Mock Data (Dev Tool)"
        >
          <Database className="w-4 h-4" />
          <span className="hidden sm:inline">Mock Data</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-96">
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-brand-warning px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-brand-secondary" />
            <span className="text-brand-secondary">Load Mock Data</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-secondary hover:text-brand-secondary-dark transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-96 overflow-y-auto">
          <p className="text-xs text-brand-neutral-600 mb-3">
            Select a scenario to pre-fill the onboarding wizard with sample data for testing:
          </p>
          
          <div className="space-y-2">
            {mockScenarios.map((scenario) => (
              <button
                key={scenario.value}
                onClick={() => {
                  onLoadMockData(scenario.value);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg bg-brand-secondary hover:bg-brand-secondary-light border border-brand-neutral-300 transition-all duration-200 group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-brand-neutral-800 group-hover:text-brand-accent transition-colors">
                    {scenario.label}
                  </span>
                  <span className="text-xs text-brand-neutral-600">
                    {scenario.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-brand-secondary-dark px-4 py-2 border-t border-brand-neutral-300">
          <p className="text-xs text-brand-neutral-600">
            ⚠️ Dev Tool - Will override any saved draft
          </p>
        </div>
      </div>
    </div>
  );
};
