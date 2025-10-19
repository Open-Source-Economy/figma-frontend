import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Heart, Star, Award, Crown, Users } from 'lucide-react';
import { IndividualSupporterAvatar } from './IndividualSupporterAvatar';

export interface SupporterTier {
  name: string;
  icon: 'heart' | 'star' | 'award' | 'crown';
  accentColor: string;
  supporters: string[];
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
  // Tier order for sorting (lower number = higher priority)
  const getTierOrder = (tierName: string) => {
    switch (tierName) {
      case 'Platinum': return 1;
      case 'Gold': return 2;
      case 'Silver': return 3;
      case 'Bronze': return 4;
      default: return 999;
    }
  };

  // Get size classes based on tier
  const getSizeClasses = (tierName: string) => {
    switch (tierName) {
      case 'Platinum':
        return {
          cardPadding: 'px-12 py-8',
          textSize: 'text-3xl',
          iconSize: 'h-10 w-10',
          iconPadding: 'p-4'
        };
      case 'Gold':
        return {
          cardPadding: 'px-10 py-6',
          textSize: 'text-2xl',
          iconSize: 'h-8 w-8',
          iconPadding: 'p-3.5'
        };
      case 'Silver':
        return {
          cardPadding: 'px-8 py-5',
          textSize: 'text-xl',
          iconSize: 'h-7 w-7',
          iconPadding: 'p-3'
        };
      case 'Bronze':
        return {
          cardPadding: 'px-6 py-4',
          textSize: 'text-lg',
          iconSize: 'h-6 w-6',
          iconPadding: 'p-2.5'
        };
      default:
        return {
          cardPadding: 'px-6 py-4',
          textSize: 'text-base',
          iconSize: 'h-5 w-5',
          iconPadding: 'p-2'
        };
    }
  };

  // Flatten all supporters with their tier info and sort by tier order
  const allSupporters = tiers
    .flatMap(tier => 
      tier.supporters.map(supporter => ({
        name: supporter,
        tier: tier.name,
        iconType: tier.icon,
        accentColor: tier.accentColor,
        tierOrder: getTierOrder(tier.name),
        ...getSizeClasses(tier.name)
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

      {/* All Supporters - Mixed Sizes for Visual Hierarchy */}
      {allSupporters.length > 0 ? (
        <div className="flex flex-wrap justify-center items-start gap-8">
          {allSupporters.map((supporter, idx) => {
            const IconComponent = tierIcons[supporter.iconType];
            
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-neutral-300 rounded-2xl ${supporter.cardPadding} hover:border-brand-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/20 relative group`}
                style={{
                  boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                }}
              >
                {/* Tier Badge with Glow */}
                <div 
                  className={`absolute -top-6 -right-6 ${supporter.iconPadding} rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10`}
                  style={{ 
                    backgroundColor: supporter.accentColor,
                    boxShadow: `0 8px 32px -8px ${supporter.accentColor}80, 0 0 24px -8px ${supporter.accentColor}40`
                  }}
                >
                  <IconComponent 
                    className={`${supporter.iconSize} text-white drop-shadow-lg`}
                  />
                </div>
                
                {/* Supporter Name with Gradient Underline on Hover */}
                <div className="relative">
                  <p className={`text-brand-neutral-900 ${supporter.textSize} whitespace-nowrap relative z-10 group-hover:text-brand-neutral-950 transition-colors`}>
                    {supporter.name}
                  </p>
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent via-brand-highlight to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateY(8px)' }}
                  />
                </div>
                
                {/* Subtle corner accent */}
                <div 
                  className="absolute top-0 left-0 w-12 h-12 opacity-20 rounded-tl-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${supporter.accentColor}40 0%, transparent 100%)`
                  }}
                />
              </div>
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

      {/* CTA Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-card-blue via-brand-card-blue-dark to-brand-secondary border-2 border-brand-neutral-300 rounded-3xl p-10 md:p-12">
        {/* Subtle glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-highlight/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4 text-brand-accent" />
              <span className="text-brand-accent text-sm uppercase tracking-wider">Join Our Community</span>
            </div>
            <h3 className="text-brand-neutral-950 mb-4">
              Become a Supporter
            </h3>
            <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
              Join these organizations in supporting the ongoing development and maintenance of {projectName}. 
              Your contribution directly funds new features, security updates, and community support.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="group bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue border border-brand-neutral-300 rounded-2xl p-6 hover:border-brand-success/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-success/20 hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-brand-success/20 to-brand-success/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    boxShadow: '0 8px 24px -8px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <Heart className="h-8 w-8 text-brand-success" />
                </div>
                <div>
                  <h4 className="text-brand-neutral-900 mb-2">Support Innovation</h4>
                  <p className="text-brand-neutral-600">
                    Fund new features and improvements that drive the project forward
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue border border-brand-neutral-300 rounded-2xl p-6 hover:border-brand-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/20 hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    boxShadow: '0 8px 24px -8px rgba(255, 127, 80, 0.4)'
                  }}
                >
                  <Award className="h-8 w-8 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-brand-neutral-900 mb-2">Get Recognition</h4>
                  <p className="text-brand-neutral-600">
                    Logo and brand visibility across our platform and community
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue border border-brand-neutral-300 rounded-2xl p-6 hover:border-brand-highlight/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-highlight/20 hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-brand-highlight/20 to-brand-highlight/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    boxShadow: '0 8px 24px -8px rgba(218, 165, 32, 0.4)'
                  }}
                >
                  <Users className="h-8 w-8 text-brand-highlight" />
                </div>
                <div>
                  <h4 className="text-brand-neutral-900 mb-2">Priority Access</h4>
                  <p className="text-brand-neutral-600">
                    Direct maintainer communication and priority support channels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button Section */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={onBecomeSupporterClick}
              className="gap-2 px-8 py-6 text-lg shadow-2xl hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              Explore Support Options
            </Button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-brand-neutral-500">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-neutral-400" />
              <p className="text-sm">
                Choose from monthly sponsorship tiers starting at $10/month or make a one-time contribution
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
