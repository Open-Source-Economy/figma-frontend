import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Heart, Star, Award, Crown, Users, ExternalLink } from 'lucide-react';
import { IndividualSupporterAvatar } from './IndividualSupporterAvatar';
import { SupporterCard } from '../supporters/SupporterCard';
import { SupporterCTA } from '../supporters/SupporterCTA';
import { getTierOrder, getSizeFromTier } from '../supporters/tierConfig';

export interface SupporterTier {
  name: string;
  icon: 'heart' | 'star' | 'award' | 'crown';
  accentColor: string;
  supporters: Array<{
    name: string;
    domain: string; // Company domain for logo fetching (e.g., 'microsoft.com')
    description?: string; // Optional description of what they're doing
    badge?: string; // Optional badge/label (e.g., "Founding Supporter", "Platinum Partner")
    tagline?: string; // Optional custom tagline/highlight
    ctaText?: string; // Optional CTA link text (e.g., "View our OSS initiatives")
    ctaUrl?: string; // Optional CTA URL
  }>;
  minAmount: number;
  benefits: string[];
}

export interface IndividualSupporter {
  name?: string; // Name if not anonymous
  initials?: string; // For initial avatars (e.g., "AL")
  avatarUrl?: string; // GitHub avatar URL
  isAnonymous?: boolean; // Anonymous supporter
  monthlyAmount?: number;
}

interface ProjectSupportersProps {
  tiers: SupporterTier[];
  individualSupporters?: IndividualSupporter[];
  projectName: string;
  onBecomeSupporterClick?: () => void;
}

const tierIcons = {
  heart: Heart,
  star: Star,
  award: Award,
  crown: Crown
};

export function ProjectSupporters({
  tiers,
  individualSupporters = [],
  projectName,
  onBecomeSupporterClick
}: ProjectSupportersProps) {
  // Flatten all supporters with their tier info and sort by tier order
  const allSupporters = tiers
    .flatMap(tier => 
      tier.supporters.map(supporter => ({
        ...supporter,
        tier: tier.name,
        iconType: tier.icon,
        accentColor: tier.accentColor,
        tierOrder: getTierOrder(tier.name),
        size: getSizeFromTier(tier.name)
      }))
    )
    .sort((a, b) => a.tierOrder - b.tierOrder);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-brand-neutral-900 mb-4">
          Supported By Leading Organizations
        </h2>
        <p className="text-brand-neutral-600">
          These organizations are investing in the future of {projectName}
        </p>
      </div>

      {/* All Supporters - Using SupporterCard */}
      {allSupporters.length > 0 ? (
        <div className="flex flex-wrap justify-center items-start gap-8">
          {allSupporters.map((supporter, idx) => {
            const IconComponent = tierIcons[supporter.iconType];
            
            return (
              <SupporterCard
                key={idx}
                name={supporter.name}
                domain={supporter.domain}
                description={supporter.description}
                badge={supporter.badge}
                tagline={supporter.tagline}
                ctaText={supporter.ctaText}
                ctaUrl={supporter.ctaUrl}
                tier={supporter.tier}
                icon={IconComponent}
                accentColor={supporter.accentColor}
                size={supporter.size}
                variant="standard"
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-brand-card-blue border border-brand-neutral-300 rounded-xl">
          <p className="text-brand-neutral-500">
            Be the first supporter of {projectName}
          </p>
        </div>
      )}

      {/* Individual Supporters Section */}
      {individualSupporters.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-brand-neutral-900 mb-2">
              Individual Supporters
            </h3>
            <p className="text-brand-neutral-600">
              Community members making a difference
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {individualSupporters.map((supporter, idx) => (
              <IndividualSupporterAvatar
                key={idx}
                name={supporter.name}
                initials={supporter.initials}
                avatarUrl={supporter.avatarUrl}
                isAnonymous={supporter.isAnonymous}
                monthlyAmount={supporter.monthlyAmount}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA Card - Using SupporterCTA */}
      <SupporterCTA
        projectName={projectName}
        onButtonClick={onBecomeSupporterClick}
      />
    </div>
  );
}