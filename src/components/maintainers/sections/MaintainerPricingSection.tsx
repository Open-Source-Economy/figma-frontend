import React from 'react';
import { PricingBreakdown } from '../ui/PricingBreakdown';

interface PricingAllocation {
  projectAllocation: number;
  dependenciesAllocation: number;
  maintainerReceives: number;
  platformFee: number;
}

interface MaintainerPricingSectionProps {
  averageRate: number;
  pricingBreakdown: PricingAllocation;
  className?: string;
}

/**
 * MaintainerPricingSection - Pricing transparency section wrapper
 * Shows how funds are distributed with gradient background
 */
export const MaintainerPricingSection: React.FC<MaintainerPricingSectionProps> = ({
  averageRate,
  pricingBreakdown,
  className = '',
}) => {
  return (
    <section className={`py-10 bg-gradient-to-br from-brand-accent/5 via-brand-secondary to-brand-highlight/5 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <PricingBreakdown
          averageRate={averageRate}
          pricingBreakdown={pricingBreakdown}
        />
      </div>
    </section>
  );
};
