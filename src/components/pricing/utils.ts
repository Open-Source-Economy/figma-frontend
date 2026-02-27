import { BillingCycle, PlanTier, PlanOption } from './types';

export type ButtonState = 'current' | 'upgrade' | 'downgrade' | 'select';

export function getPlanButtonState(
  planId: PlanTier,
  currentPlanTier: PlanTier,
  currentPlanBilling: BillingCycle,
  billingCycle: BillingCycle,
  plans: PlanOption[]
): ButtonState {
  if (!currentPlanTier) return 'select';
  if (currentPlanTier === planId && currentPlanBilling === billingCycle) return 'current';
  
  const planIndex = plans.findIndex(p => p.id === planId);
  const currentIndex = plans.findIndex(p => p.id === currentPlanTier);
  
  // Check if it's an upgrade
  if (planIndex > currentIndex) return 'upgrade';
  if (planIndex < currentIndex) return 'downgrade';
  
  // Same tier, different billing
  if (billingCycle === 'annual' && currentPlanBilling === 'monthly') return 'upgrade';
  if (billingCycle === 'monthly' && currentPlanBilling === 'annual') return 'downgrade';
  
  return 'select';
}
