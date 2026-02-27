export type BillingCycle = 'monthly' | 'annual';
export type PlanTier = 'individual' | 'startup' | 'scaleup' | 'enterprise' | null;

export interface Feature {
  text: string;
  included: boolean;
  isNew?: boolean;
  hasInfo?: boolean;
  infoText?: string;
}

export interface FeatureSection {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export interface PlanOption {
  id: PlanTier;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  monthlyPrice: number;
  annualPrice: number;
  sections: FeatureSection[];
  highlighted?: boolean;
  previousPlanName?: string;
}
