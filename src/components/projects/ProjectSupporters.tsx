import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Heart, Star, Award, Crown, Users, ExternalLink } from 'lucide-react';
import { IndividualSupporterAvatar } from './IndividualSupporterAvatar';

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
          cardPadding: 'px-12 py-10',
          cardWidth: 'w-[420px]',
          textSize: 'text-3xl',
          iconSize: 'h-10 w-10',
          iconPadding: 'p-4',
          descriptionSize: 'text-base',
          descriptionLines: 4,
          descriptionSpacing: 'mt-4'
        };
      case 'Gold':
        return {
          cardPadding: 'px-10 py-8',
          cardWidth: 'w-[360px]',
          textSize: 'text-2xl',
          iconSize: 'h-8 w-8',
          iconPadding: 'p-3.5',
          descriptionSize: 'text-sm',
          descriptionLines: 3,
          descriptionSpacing: 'mt-3'
        };
      case 'Silver':
        return {
          cardPadding: 'px-8 py-6',
          cardWidth: 'w-80',
          textSize: 'text-xl',
          iconSize: 'h-7 w-7',
          iconPadding: 'p-3',
          descriptionSize: 'text-sm',
          descriptionLines: 2,
          descriptionSpacing: 'mt-3'
        };
      case 'Bronze':
        return {
          cardPadding: 'px-6 py-5',
          cardWidth: 'w-72',
          textSize: 'text-lg',
          iconSize: 'h-6 w-6',
          iconPadding: 'p-2.5',
          descriptionSize: 'text-xs',
          descriptionLines: 2,
          descriptionSpacing: 'mt-2'
        };
      default:
        return {
          cardPadding: 'px-6 py-4',
          cardWidth: 'w-64',
          textSize: 'text-base',
          iconSize: 'h-5 w-5',
          iconPadding: 'p-2',
          descriptionSize: 'text-xs',
          descriptionLines: 1,
          descriptionSpacing: 'mt-2'
        };
    }
  };

  // Flatten all supporters with their tier info and sort by tier order
  const allSupporters = tiers
    .flatMap(tier => 
      tier.supporters.map(supporter => ({
        name: supporter.name,
        domain: supporter.domain,
        description: supporter.description,
        badge: supporter.badge,
        tagline: supporter.tagline,
        ctaText: supporter.ctaText,
        ctaUrl: supporter.ctaUrl,
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
                className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-2xl ${supporter.cardPadding} hover:scale-[1.02] hover:shadow-2xl relative group ${supporter.cardWidth} transition-all duration-500 ease-out overflow-hidden cursor-pointer`}
                style={{
                  boxShadow: `0 10px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 30px -10px ${supporter.accentColor}15`,
                  borderTopColor: supporter.accentColor,
                  borderTopWidth: '4px'
                }}
                onClick={() => window.open(`https://${supporter.domain}`, '_blank', 'noopener,noreferrer')}
              >
                {/* Subtle tier-colored background overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${supporter.accentColor} 0%, transparent 50%)`
                  }}
                />
                
                {/* Subtle left border accent with tier color */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(180deg, ${supporter.accentColor} 0%, transparent 100%)`
                  }}
                />
                
                {/* Small tier icon in bottom right - only visible on hover */}
                <div 
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"
                >
                  <IconComponent 
                    className="h-8 w-8"
                    style={{ color: supporter.accentColor }}
                  />
                </div>
                
                {/* Content container with improved spacing */}
                <div className="flex flex-col items-center gap-5 relative z-10">
                  {/* Badge - Tier-specific styling (Platinum, Gold, Silver only) */}
                  {supporter.badge && (
                    <div className="w-full flex justify-center -mt-2 mb-1">
                      {supporter.tier === 'Platinum' && (
                        <div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${supporter.accentColor}40, ${supporter.accentColor}20)`,
                            border: `1.5px solid ${supporter.accentColor}60`,
                            boxShadow: `0 0 25px -5px ${supporter.accentColor}50, 0 10px 20px -10px ${supporter.accentColor}30`
                          }}
                        >
                          <Crown className="h-4 w-4" style={{ color: supporter.accentColor, filter: 'drop-shadow(0 0 4px currentColor)' }} />
                          <span className="text-brand-neutral-800 tracking-wide uppercase text-[10px] letterspacing-widest" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{supporter.badge}</span>
                        </div>
                      )}
                      {supporter.tier === 'Gold' && (
                        <div 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border shadow-md transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${supporter.accentColor}25, ${supporter.accentColor}15)`,
                            borderColor: `${supporter.accentColor}50`
                          }}
                        >
                          <Award className="h-3.5 w-3.5" style={{ color: supporter.accentColor }} />
                          <span className="text-brand-neutral-700 tracking-wide text-[10px] uppercase">{supporter.badge}</span>
                        </div>
                      )}
                      {supporter.tier === 'Silver' && (
                        <div 
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] border backdrop-blur-sm"
                          style={{
                            background: `${supporter.accentColor}12`,
                            borderColor: `${supporter.accentColor}35`
                          }}
                        >
                          <span className="text-brand-neutral-600 uppercase tracking-wide">{supporter.badge}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Company Logo & Name - Inline */}
                  <div className="flex items-center justify-center gap-4 w-full">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={`https://logo.clearbit.com/${supporter.domain}`}
                        alt={`${supporter.name} logo`}
                        className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        onError={(e) => {
                          // Fallback to company initials if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback - Company initials */}
                      <div 
                        className="h-12 w-12 rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 border border-brand-neutral-300 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <span className="text-brand-neutral-900 font-semibold">
                          {supporter.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    {/* Supporter Name */}
                    <div className="relative">
                      <p className={`text-brand-neutral-900 ${supporter.textSize} relative group-hover:text-brand-neutral-950 transition-colors`}
                         style={{ 
                           lineHeight: '1.3'
                         }}
                      >
                        {supporter.name}
                      </p>
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ 
                          transform: 'translateY(8px)',
                          background: `linear-gradient(90deg, ${supporter.accentColor}, transparent)`
                        }}
                      />
                    </div>
                  </div>

                  {/* Tagline - Platinum and Gold only */}
                  {supporter.tagline && (supporter.tier === 'Platinum' || supporter.tier === 'Gold') && (
                    <div className="w-full flex justify-center">
                      {supporter.tier === 'Platinum' ? (
                        <p 
                          className="text-sm italic text-center px-4 py-2 rounded-lg"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${supporter.accentColor}10, transparent)`,
                            color: supporter.accentColor
                          }}
                        >
                          {supporter.tagline}
                        </p>
                      ) : (
                        <p className="text-xs italic text-brand-neutral-600 text-center px-2">
                          {supporter.tagline}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Description - Tier-based styling */}
                  {supporter.description && (
                    <p 
                      className={`text-brand-neutral-600 ${supporter.descriptionSize} text-center leading-relaxed w-full`}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: supporter.descriptionLines,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {supporter.description}
                    </p>
                  )}
                  
                  {/* CTA Link - Platinum and Gold only */}
                  {supporter.ctaText && supporter.ctaUrl && (supporter.tier === 'Platinum' || supporter.tier === 'Gold') && (
                    <div 
                      className="w-full flex justify-center mt-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(supporter.ctaUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {supporter.tier === 'Platinum' ? (
                        <div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group/cta"
                          style={{
                            background: `linear-gradient(135deg, ${supporter.accentColor}20, ${supporter.accentColor}10)`,
                            border: `1px solid ${supporter.accentColor}40`
                          }}
                        >
                          <span className="text-xs" style={{ color: supporter.accentColor }}>
                            {supporter.ctaText}
                          </span>
                          <ExternalLink 
                            className="h-3.5 w-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" 
                            style={{ color: supporter.accentColor }} 
                          />
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs text-brand-neutral-600 hover:text-brand-neutral-800 transition-colors cursor-pointer group/cta">
                          <span>{supporter.ctaText}</span>
                          <ExternalLink className="h-3 w-3 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Enhanced subtle corner accent with tier color */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-15 rounded-tr-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(225deg, ${supporter.accentColor}60 0%, transparent 70%)`
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