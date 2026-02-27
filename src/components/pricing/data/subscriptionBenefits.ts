export interface SubscriptionBenefits {
  common: string[];
  tier: string[];
}

const commonBenefits = [
  'Direct access to vetted open-source maintainers',
  'Single contract for all maintainer relationships',
  'Supporting maintainer independence and sustainability',
  'Contributing to the open-source ecosystem as a non-profit'
];

const tierSpecificBenefits: Record<string, string[]> = {
  bronze: [
    'Basic community recognition on website',
    'Access to 5-10 top maintainers',
    'Standard response time support'
  ],
  silver: [
    'Enhanced brand visibility in community',
    'Access to 10-20 top maintainers',
    'Priority support with dedicated contact'
  ],
  gold: [
    'Premium brand recognition across all channels',
    'Unlimited access to entire maintainer network',
    'White-glove priority support with SLA'
  ]
};

export const getActiveBenefits = (tier: string | null): SubscriptionBenefits => {
  return {
    common: commonBenefits,
    tier: tierSpecificBenefits[tier || 'bronze'] || []
  };
};
