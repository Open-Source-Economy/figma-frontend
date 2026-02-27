export type TierType = 'bronze' | 'silver' | 'gold' | null;

export const getTierColor = (tier: TierType): string => {
  switch (tier) {
    case 'bronze':
      return 'bg-brand-tier-bronze';
    case 'silver':
      return 'bg-brand-tier-silver';
    case 'gold':
      return 'bg-brand-tier-gold';
    default:
      return 'bg-brand-accent';
  }
};

export const getTierBorderColor = (tier: TierType): string => {
  switch (tier) {
    case 'bronze':
      return 'border-brand-tier-bronze/30';
    case 'silver':
      return 'border-brand-tier-silver/30';
    case 'gold':
      return 'border-brand-tier-gold/30';
    default:
      return 'border-brand-accent/30';
  }
};

export const getTierTextColor = (tier: TierType): string => {
  switch (tier) {
    case 'bronze':
      return 'text-brand-tier-bronze';
    case 'silver':
      return 'text-brand-tier-silver';
    case 'gold':
      return 'text-brand-tier-gold';
    default:
      return 'text-brand-accent';
  }
};

export const getPlanName = (tier: TierType): string => {
  if (!tier) return '';
  return tier.charAt(0).toUpperCase() + tier.slice(1);
};

export const getBillingDisplay = (billing: 'monthly' | 'annual' | null): string => {
  return billing === 'annual' ? 'annually' : 'monthly';
};
