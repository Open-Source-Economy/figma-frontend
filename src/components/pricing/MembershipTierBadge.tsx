import React from 'react';
import { Award, Star } from 'lucide-react';

interface MembershipTierBadgeProps {
  tier: 'individual' | 'bronze' | 'silver' | 'gold';
  compact?: boolean;
}

export function MembershipTierBadge({ tier, compact = false }: MembershipTierBadgeProps) {
  const tierConfig = {
    individual: {
      label: 'Basic',
      bgColor: 'bg-brand-neutral-600',
      icon: Star,
      textColor: 'text-brand-neutral-600'
    },
    bronze: {
      label: 'Bronze',
      bgColor: 'bg-brand-tier-bronze',
      icon: Award,
      textColor: 'text-brand-tier-bronze'
    },
    silver: {
      label: 'Silver',
      bgColor: 'bg-brand-tier-silver',
      icon: Award,
      textColor: 'text-brand-tier-silver-dark'
    },
    gold: {
      label: 'Gold',
      bgColor: 'bg-brand-tier-gold',
      icon: Award,
      textColor: 'text-brand-tier-gold-dark'
    }
  };

  const config = tierConfig[tier];
  const Icon = config.icon;

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <div className={`w-5 h-5 rounded-full ${config.bgColor} flex items-center justify-center`}>
          <Icon className="w-3 h-3 text-brand-secondary" />
        </div>
        <span className="text-sm text-brand-neutral-700">{config.label} Tier</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgColor}`}>
      <Icon className="w-4 h-4 text-brand-secondary" />
      <span className="text-sm text-brand-secondary">{config.label} Tier</span>
    </div>
  );
}