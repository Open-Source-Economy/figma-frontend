import React from 'react';
import { FeatureList } from './FeatureList';
import { Feature } from './types';
import { MembershipTierBadge } from './MembershipTierBadge';
import { SectionSubtitle } from './SectionSubtitle';

interface RecognitionSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  tier?: 'individual' | 'bronze' | 'silver' | 'gold';
}

export function RecognitionSection({ title, subtitle, features, tier }: RecognitionSectionProps) {
  return (
    <>
      <div className="mb-3">
        <h4 className="text-brand-neutral-900 mb-1.5">
          {title}
        </h4>
        {tier && (
          <div className="mb-2">
            <MembershipTierBadge tier={tier} compact />
          </div>
        )}
        {subtitle && (
          <SectionSubtitle text={subtitle} />
        )}
      </div>
      
      <FeatureList features={features} gap="compact" />
    </>
  );
}