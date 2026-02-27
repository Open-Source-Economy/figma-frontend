import React from 'react';
import { PricingCardButton } from './PricingCardButton';
import { BillingCycle } from './types';
import { ButtonState } from './utils';

interface PricingCardHeaderProps {
  name: string;
  description: string;
  displayPrice: number;
  originalPrice: number | null;
  billingCycle: BillingCycle;
  buttonState: ButtonState;
  onButtonClick: () => void;
  planId?: string;
}

export function PricingCardHeader({
  name,
  description,
  displayPrice,
  originalPrice,
  billingCycle,
  buttonState,
  onButtonClick,
  planId
}: PricingCardHeaderProps) {
  // Get tier badge styling
  const getTierBadge = () => {
    switch (planId) {
      case 'bronze':
        return {
          label: 'Bronze Tier',
          className: 'bg-brand-tier-bronze/10 text-brand-tier-bronze border-brand-tier-bronze/30'
        };
      case 'silver':
        return {
          label: 'Silver Tier',
          className: 'bg-brand-tier-silver/10 text-brand-tier-silver border-brand-tier-silver/30'
        };
      case 'gold':
        return {
          label: 'Gold Tier',
          className: 'bg-brand-tier-gold/10 text-brand-tier-gold border-brand-tier-gold/30'
        };
      case 'individual':
        return {
          label: 'Essential',
          className: 'bg-brand-neutral-200/50 text-brand-neutral-700 border-brand-neutral-300/50'
        };
      default:
        return null;
    }
  };

  const tierBadge = getTierBadge();

  return (
    <div className="mb-6 pb-8 text-center">
      {tierBadge && (
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs border ${tierBadge.className}`}>
            {tierBadge.label}
          </span>
        </div>
      )}
      
      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-3">
          {originalPrice && (
            <span className="text-xl text-brand-neutral-500 line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-5xl text-brand-neutral-900">${displayPrice}</span>
        </div>
        <div className="text-sm text-brand-neutral-600 mt-2">
          per month, billed {billingCycle === 'annual' ? 'annually' : 'monthly'}
        </div>
      </div>

      {/* CTA Button */}
      <PricingCardButton state={buttonState} onClick={onButtonClick} />
    </div>
  );
}