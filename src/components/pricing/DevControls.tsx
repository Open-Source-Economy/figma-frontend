import React from 'react';
import { BillingCycle, PlanTier, PlanOption } from './types';

interface DevControlsProps {
  currentPlanTier: PlanTier;
  currentPlanBilling: BillingCycle;
  plans: PlanOption[];
  onPlanTierChange: (tier: PlanTier) => void;
  onPlanBillingChange: (billing: BillingCycle) => void;
}

export function DevControls({
  currentPlanTier,
  currentPlanBilling,
  plans,
  onPlanTierChange,
  onPlanBillingChange
}: DevControlsProps) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!isDevelopment) return null;

  return (
    <div className="bg-yellow-100 border-b-2 border-yellow-400 py-3">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="text-xs text-yellow-800 mb-2">🔧 Development Controls (not visible in production)</p>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm text-yellow-900">Current Plan:</label>
            <select
              value={currentPlanTier || 'none'}
              onChange={(e) => onPlanTierChange(e.target.value === 'none' ? null : e.target.value as PlanTier)}
              className="px-2 py-1 border border-yellow-400 rounded bg-white text-sm"
            >
              <option value="none">No Plan</option>
              {plans.map(plan => (
                <option key={plan.id} value={plan.id}>{plan.name}</option>
              ))}
            </select>
          </div>
          {currentPlanTier && (
            <div className="flex items-center gap-2">
              <label className="text-sm text-yellow-900">Current Billing:</label>
              <select
                value={currentPlanBilling}
                onChange={(e) => onPlanBillingChange(e.target.value as BillingCycle)}
                className="px-2 py-1 border border-yellow-400 rounded bg-white text-sm"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
