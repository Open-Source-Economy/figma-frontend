import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PricingCardsGrid } from '../pricing/PricingCardsGrid';
import { PricingSectionHeader } from '../pricing/PricingSectionHeader';
import { CustomPlanCTA } from '../pricing/CustomPlanCTA';
import { HowCreditsWorkSection } from '../pricing/HowCreditsWorkSection';
import { DevControls } from '../pricing/DevControls';
import { SubscriptionManagement } from '../pricing/SubscriptionManagement';
import { plans, SAVINGS_PERCENTAGE } from '../pricing/plans-data';
import { BillingCycle, PlanTier } from '../pricing/types';

interface PricingPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

export function PricingPage({
  onNavigateHome,
  onNavItemClick
}: PricingPageProps) {
  const [billingCycle, setBillingCycle] = React.useState<BillingCycle>('annual');
  
  // Dev controls - only visible in development
  const [currentPlanTier, setCurrentPlanTier] = React.useState<PlanTier>(null);
  const [currentPlanBilling, setCurrentPlanBilling] = React.useState<BillingCycle>('monthly');

  const handlePlanClick = (planId: PlanTier) => {
    // Handle plan selection
    console.log('Plan selected:', planId);
  };

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      <DevControls
        currentPlanTier={currentPlanTier}
        currentPlanBilling={currentPlanBilling}
        plans={plans}
        onPlanTierChange={setCurrentPlanTier}
        onPlanBillingChange={setCurrentPlanBilling}
      />

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-brand-neutral-100 via-brand-secondary to-brand-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <PricingSectionHeader
            billingCycle={billingCycle}
            onBillingCycleChange={setBillingCycle}
            savingsPercentage={SAVINGS_PERCENTAGE}
          />

          {/* Pricing Cards */}
          <PricingCardsGrid
            plans={plans}
            billingCycle={billingCycle}
            currentPlanTier={currentPlanTier}
            currentPlanBilling={currentPlanBilling}
            onPlanClick={handlePlanClick}
          />

          <CustomPlanCTA />

          {/* Footer Note */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <p className="text-brand-neutral-600 text-sm sm:text-base">
              100% non profit • 100% Open Source Investment
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Management - only show when user has a plan */}
      {currentPlanTier && (
        <section className="py-20 bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-neutral-100">
          <div className="container mx-auto px-6">
            <SubscriptionManagement
              currentPlanTier={currentPlanTier}
              currentPlanBilling={currentPlanBilling}
            />
          </div>
        </section>
      )}

      <HowCreditsWorkSection />

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}