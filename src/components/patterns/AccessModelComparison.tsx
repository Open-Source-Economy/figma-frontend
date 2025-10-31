import React from 'react';
import { Check, X, CalendarCheck, CreditCard, Sparkles } from 'lucide-react';

interface ComparisonFeature {
  label: string;
  reserved: boolean | string;
  onDemand: boolean | string;
}

const COMPARISON_FEATURES: ComparisonFeature[] = [
  { label: 'Guaranteed monthly hours', reserved: true, onDemand: false },
  { label: 'Choose specific maintainers', reserved: true, onDemand: false },
  { label: 'Flexible allocation across projects', reserved: false, onDemand: true },
  { label: 'Priority response times', reserved: true, onDemand: 'Standard' },
  { label: 'Best for ongoing support', reserved: true, onDemand: false },
  { label: 'Best for bursts & incidents', reserved: false, onDemand: true },
  { label: 'Predictable capacity', reserved: true, onDemand: false },
  { label: 'Scale up/down easily', reserved: false, onDemand: true }
];

export const AccessModelComparison: React.FC = () => {
  return (
    <div className="w-full">
      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Empty corner cell */}
          <div className="hidden md:block" />
          
          {/* Reserved Time Column Header */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-accent/40 rounded-2xl p-6 text-center transition-all duration-300 hover:border-brand-accent/60 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/40 mb-4">
                <CalendarCheck className="w-6 h-6 text-brand-accent-light" />
              </div>
              <h4 className="text-brand-neutral-950 mb-1">Reserved Time</h4>
              <p className="text-brand-neutral-600 text-sm mb-2">Monthly Retainer</p>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                <Sparkles className="w-3 h-3 text-brand-accent-light" />
                <span className="text-brand-accent-light text-xs">Most Popular</span>
              </div>
            </div>
          </div>

          {/* On-Demand Column Header */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-highlight/20 to-brand-highlight/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-6 text-center transition-all duration-300 hover:border-brand-highlight/60 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-highlight/20 border border-brand-highlight/40 mb-4">
                <CreditCard className="w-6 h-6 text-brand-highlight-light" />
              </div>
              <h4 className="text-brand-neutral-950 mb-1">On-Demand</h4>
              <p className="text-brand-neutral-600 text-sm mb-2">Flexible Credits</p>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-highlight/10 border border-brand-highlight/30">
                <span className="text-brand-highlight-light text-xs">Most Flexible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Rows */}
        <div className="space-y-2">
          {COMPARISON_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-6 items-center bg-gradient-to-r from-[#0f1829]/40 to-[#1a2942]/40 backdrop-blur-sm border border-brand-neutral-400/20 rounded-xl p-4 hover:border-brand-neutral-400/40 transition-all duration-300"
            >
              {/* Feature Label */}
              <div className="col-span-3 md:col-span-1">
                <p className="text-brand-neutral-800 text-sm">{feature.label}</p>
              </div>

              {/* Reserved Time Value */}
              <div className="flex justify-center">
                {typeof feature.reserved === 'boolean' ? (
                  feature.reserved ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-success/20 border border-brand-success/40">
                      <Check className="w-5 h-5 text-brand-success-light" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-neutral-400/10 border border-brand-neutral-400/20">
                      <X className="w-5 h-5 text-brand-neutral-500" />
                    </div>
                  )
                ) : (
                  <span className="text-brand-neutral-700 text-sm">{feature.reserved}</span>
                )}
              </div>

              {/* On-Demand Value */}
              <div className="flex justify-center">
                {typeof feature.onDemand === 'boolean' ? (
                  feature.onDemand ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-success/20 border border-brand-success/40">
                      <Check className="w-5 h-5 text-brand-success-light" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-neutral-400/10 border border-brand-neutral-400/20">
                      <X className="w-5 h-5 text-brand-neutral-500" />
                    </div>
                  )
                ) : (
                  <span className="text-brand-neutral-700 text-sm">{feature.onDemand}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
