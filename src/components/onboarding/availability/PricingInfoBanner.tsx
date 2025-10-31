import React from 'react';
import { HelpText } from '../../ui/help-text';
import { PricingStructureDialogContent } from './PricingStructureDialog';

export const PricingInfoBanner: React.FC = () => {
  return (
    <HelpText
      learnMoreText="Learn more about pricing structure"
      learnMoreTitle="How Enterprise Pricing Works"
      learnMoreDescription="Transparent breakdown of how enterprise payments support you and the ecosystem"
      learnMoreContent={<PricingStructureDialogContent />}
    >
      The enterprise will pay more than your service rate. We'll work to negotiate the best rate for you to maximize both your income and ecosystem contributions.
    </HelpText>
  );
};
