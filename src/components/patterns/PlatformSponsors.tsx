import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Heart, Star, Award, Crown, Users, ExternalLink } from 'lucide-react';
import { IndividualSupporterAvatar } from '../projects/IndividualSupporterAvatar';

interface PlatformSponsorsProps {
  className?: string;
  onBecomeSponsorClick?: () => void;
}

// Tier configuration with visual hierarchy
interface SponsorTier {
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  badge?: string;
  cardWidth: string;
  cardPadding: string;
  textSize: string;
  descriptionSize?: string;
  descriptionLines?: number;
  accentColor: string;
  iconType: 'crown' | 'award' | 'star' | 'heart';
}

interface Sponsor extends SponsorTier {
  name: string;
  domain: string;
  tagline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

interface IndividualSupporter {
  name: string;
  initials: string;
  avatarUrl?: string;
  isAnonymous?: boolean;
  monthlyAmount?: number;
}

export function PlatformSponsors({ className = '', onBecomeSponsorClick }: PlatformSponsorsProps) {
  // Platform sponsors with realistic companies supporting open source
  const sponsors: Sponsor[] = [
    // Platinum Tier - Largest, most prominent
    {
      name: 'Vercel',
      domain: 'vercel.com',
      tier: 'Platinum',
      badge: 'Founding Sponsor',
      tagline: '"Empowering the open source ecosystem"',
      description: 'Leading the charge in sustainable open source funding, helping connect enterprises with the maintainers they depend on.',
      ctaText: 'Learn About Partnership',
      ctaUrl: 'https://vercel.com',
      cardWidth: 'w-full md:w-[400px]',
      cardPadding: 'p-10',
      textSize: 'text-2xl',
      descriptionSize: 'text-base',
      descriptionLines: 3,
      accentColor: '#10b981',
      iconType: 'crown'
    },
    {
      name: 'GitHub',
      domain: 'github.com',
      tier: 'Platinum',
      badge: 'Founding Sponsor',
      tagline: '"Where the world builds software"',
      description: 'Committed to supporting the maintainers and projects that power the software development ecosystem.',
      ctaText: 'View Partnership',
      ctaUrl: 'https://github.com',
      cardWidth: 'w-full md:w-[400px]',
      cardPadding: 'p-10',
      textSize: 'text-2xl',
      descriptionSize: 'text-base',
      descriptionLines: 3,
      accentColor: '#10b981',
      iconType: 'crown'
    },
    
    // Gold Tier - Second tier prominence
    {
      name: 'Stripe',
      domain: 'stripe.com',
      tier: 'Gold',
      badge: 'Premier Partner',
      tagline: 'Supporting payment infrastructure for open source',
      description: 'Enabling transparent, secure funding flows for maintainers worldwide.',
      ctaText: 'Explore Partnership',
      ctaUrl: 'https://stripe.com',
      cardWidth: 'w-full md:w-[340px]',
      cardPadding: 'p-8',
      textSize: 'text-xl',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#daa520',
      iconType: 'award'
    },
    {
      name: 'Netlify',
      domain: 'netlify.com',
      tier: 'Gold',
      badge: 'Premier Partner',
      tagline: 'Powering modern web infrastructure',
      description: 'Dedicated to supporting the open source projects that make the modern web possible.',
      ctaText: 'Our Commitment',
      ctaUrl: 'https://netlify.com',
      cardWidth: 'w-full md:w-[340px]',
      cardPadding: 'p-8',
      textSize: 'text-xl',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#daa520',
      iconType: 'award'
    },
    {
      name: 'Shopify',
      domain: 'shopify.com',
      tier: 'Gold',
      badge: 'Premier Partner',
      tagline: 'Commerce for everyone',
      description: 'Supporting the open source community that powers global commerce.',
      ctaText: 'Partnership Details',
      ctaUrl: 'https://shopify.com',
      cardWidth: 'w-full md:w-[340px]',
      cardPadding: 'p-8',
      textSize: 'text-xl',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#daa520',
      iconType: 'award'
    },
    
    // Silver Tier - Third tier
    {
      name: 'Cloudflare',
      domain: 'cloudflare.com',
      tier: 'Silver',
      badge: 'Corporate Sponsor',
      description: 'Supporting infrastructure for a better Internet.',
      cardWidth: 'w-full md:w-[280px]',
      cardPadding: 'p-6',
      textSize: 'text-lg',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#c0c0c0',
      iconType: 'star'
    },
    {
      name: 'Twilio',
      domain: 'twilio.com',
      tier: 'Silver',
      badge: 'Corporate Sponsor',
      description: 'Building the future of communications with open source.',
      cardWidth: 'w-full md:w-[280px]',
      cardPadding: 'p-6',
      textSize: 'text-lg',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#c0c0c0',
      iconType: 'star'
    },
    {
      name: 'Supabase',
      domain: 'supabase.com',
      tier: 'Silver',
      badge: 'Corporate Sponsor',
      description: 'Open source Firebase alternative supporting open source.',
      cardWidth: 'w-full md:w-[280px]',
      cardPadding: 'p-6',
      textSize: 'text-lg',
      descriptionSize: 'text-sm',
      descriptionLines: 2,
      accentColor: '#c0c0c0',
      iconType: 'star'
    },
    
    // Bronze Tier - Compact cards
    {
      name: 'Linear',
      domain: 'linear.app',
      tier: 'Bronze',
      cardWidth: 'w-full md:w-[220px]',
      cardPadding: 'p-5',
      textSize: 'text-base',
      accentColor: '#cd7f32',
      iconType: 'heart'
    },
    {
      name: 'Render',
      domain: 'render.com',
      tier: 'Bronze',
      cardWidth: 'w-full md:w-[220px]',
      cardPadding: 'p-5',
      textSize: 'text-base',
      accentColor: '#cd7f32',
      iconType: 'heart'
    },
    {
      name: 'Railway',
      domain: 'railway.app',
      tier: 'Bronze',
      cardWidth: 'w-full md:w-[220px]',
      cardPadding: 'p-5',
      textSize: 'text-base',
      accentColor: '#cd7f32',
      iconType: 'heart'
    },
  ];

  // Individual supporters
  const individualSupporters: IndividualSupporter[] = [
    { name: 'Sarah Chen', initials: 'SC', monthlyAmount: 50 },
    { name: 'Michael Rodriguez', initials: 'MR', monthlyAmount: 25 },
    { name: 'Anonymous', initials: 'A', isAnonymous: true, monthlyAmount: 100 },
    { name: 'Emma Wilson', initials: 'EW', monthlyAmount: 15 },
    { name: 'David Kim', initials: 'DK', monthlyAmount: 30 },
    { name: 'Anonymous', initials: 'A', isAnonymous: true, monthlyAmount: 75 },
    { name: 'Lisa Anderson', initials: 'LA', monthlyAmount: 20 },
    { name: 'James Brown', initials: 'JB', monthlyAmount: 40 },
  ];

  const tierIcons = {
    crown: Crown,
    award: Award,
    star: Star,
    heart: Heart
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-brand-neutral-900 mb-4">
              Supported By Leading Organizations
            </h2>
            <p className="text-brand-neutral-600">
              These organizations are investing in the future of sustainable open source development
            </p>
          </div>

          {/* All Sponsors - Mixed Sizes for Visual Hierarchy */}
          <div className="flex flex-wrap justify-center items-start gap-8">
            {sponsors.map((sponsor, idx) => {
              const IconComponent = tierIcons[sponsor.iconType];
              
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-2xl ${sponsor.cardPadding} hover:scale-[1.02] hover:shadow-2xl relative group ${sponsor.cardWidth} transition-all duration-500 ease-out overflow-hidden cursor-pointer`}
                  style={{
                    boxShadow: `0 10px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 30px -10px ${sponsor.accentColor}15`,
                    borderTopColor: sponsor.accentColor,
                    borderTopWidth: '4px'
                  }}
                  onClick={() => window.open(`https://${sponsor.domain}`, '_blank', 'noopener,noreferrer')}
                >
                  {/* Subtle tier-colored background overlay */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${sponsor.accentColor} 0%, transparent 50%)`
                    }}
                  />
                  
                  {/* Subtle left border accent with tier color */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(180deg, ${sponsor.accentColor} 0%, transparent 100%)`
                    }}
                  />
                  
                  {/* Small tier icon in bottom right - only visible on hover */}
                  <div 
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"
                  >
                    <IconComponent 
                      className="h-8 w-8"
                      style={{ color: sponsor.accentColor }}
                    />
                  </div>
                  
                  {/* Content container with improved spacing */}
                  <div className="flex flex-col items-center gap-5 relative z-10">
                    {/* Badge - Tier-specific styling (Platinum, Gold, Silver only) */}
                    {sponsor.badge && (
                      <div className="w-full flex justify-center -mt-2 mb-1">
                        {sponsor.tier === 'Platinum' && (
                          <div 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                            style={{
                              background: `linear-gradient(135deg, ${sponsor.accentColor}40, ${sponsor.accentColor}20)`,
                              border: `1.5px solid ${sponsor.accentColor}60`,
                              boxShadow: `0 0 25px -5px ${sponsor.accentColor}50, 0 10px 20px -10px ${sponsor.accentColor}30`
                            }}
                          >
                            <Crown className="h-4 w-4" style={{ color: sponsor.accentColor, filter: 'drop-shadow(0 0 4px currentColor)' }} />
                            <span className="text-brand-neutral-800 tracking-wide uppercase text-[10px] letterspacing-widest" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{sponsor.badge}</span>
                          </div>
                        )}
                        {sponsor.tier === 'Gold' && (
                          <div 
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border shadow-md transition-all duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${sponsor.accentColor}25, ${sponsor.accentColor}15)`,
                              borderColor: `${sponsor.accentColor}50`
                            }}
                          >
                            <Award className="h-3.5 w-3.5" style={{ color: sponsor.accentColor }} />
                            <span className="text-brand-neutral-700 tracking-wide text-[10px] uppercase">{sponsor.badge}</span>
                          </div>
                        )}
                        {sponsor.tier === 'Silver' && (
                          <div 
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] border backdrop-blur-sm"
                            style={{
                              background: `${sponsor.accentColor}12`,
                              borderColor: `${sponsor.accentColor}35`
                            }}
                          >
                            <span className="text-brand-neutral-600 uppercase tracking-wide">{sponsor.badge}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Company Logo & Name - Inline */}
                    <div className="flex items-center justify-center gap-4 w-full">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={`https://logo.clearbit.com/${sponsor.domain}`}
                          alt={`${sponsor.name} logo`}
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
                          <span className="text-brand-neutral-900">
                            {sponsor.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      
                      {/* Sponsor Name */}
                      <div className="relative">
                        <p className={`text-brand-neutral-900 ${sponsor.textSize} relative group-hover:text-brand-neutral-950 transition-colors`}
                           style={{ 
                             lineHeight: '1.3'
                           }}
                        >
                          {sponsor.name}
                        </p>
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            transform: 'translateY(8px)',
                            background: `linear-gradient(90deg, ${sponsor.accentColor}, transparent)`
                          }}
                        />
                      </div>
                    </div>

                    {/* Tagline - Platinum and Gold only */}
                    {sponsor.tagline && (sponsor.tier === 'Platinum' || sponsor.tier === 'Gold') && (
                      <div className="w-full flex justify-center">
                        {sponsor.tier === 'Platinum' ? (
                          <p 
                            className="text-sm italic text-center px-4 py-2 rounded-lg"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${sponsor.accentColor}10, transparent)`,
                              color: sponsor.accentColor
                            }}
                          >
                            {sponsor.tagline}
                          </p>
                        ) : (
                          <p className="text-xs italic text-brand-neutral-600 text-center px-2">
                            {sponsor.tagline}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Description - Tier-based styling */}
                    {sponsor.description && (
                      <p 
                        className={`text-brand-neutral-600 ${sponsor.descriptionSize} text-center leading-relaxed w-full`}
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: sponsor.descriptionLines,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {sponsor.description}
                      </p>
                    )}
                    
                    {/* CTA Link - Platinum and Gold only */}
                    {sponsor.ctaText && sponsor.ctaUrl && (sponsor.tier === 'Platinum' || sponsor.tier === 'Gold') && (
                      <div 
                        className="w-full flex justify-center mt-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(sponsor.ctaUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        {sponsor.tier === 'Platinum' ? (
                          <div 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group/cta"
                            style={{
                              background: `linear-gradient(135deg, ${sponsor.accentColor}20, ${sponsor.accentColor}10)`,
                              border: `1px solid ${sponsor.accentColor}40`
                            }}
                          >
                            <span className="text-xs" style={{ color: sponsor.accentColor }}>
                              {sponsor.ctaText}
                            </span>
                            <ExternalLink 
                              className="h-3.5 w-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" 
                              style={{ color: sponsor.accentColor }} 
                            />
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 text-xs text-brand-neutral-600 hover:text-brand-neutral-800 transition-colors cursor-pointer group/cta">
                            <span>{sponsor.ctaText}</span>
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
                      background: `linear-gradient(225deg, ${sponsor.accentColor}60 0%, transparent 70%)`
                    }}
                  />
                </div>
              );
            })}
          </div>

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
                  Become a Sponsor
                </h3>
                <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
                  Join these organizations in supporting the sustainable development of open source software. 
                  Your sponsorship directly enables maintainers to dedicate time to the projects enterprises depend on.
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
                      <h4 className="text-brand-neutral-900 mb-2">Support Sustainability</h4>
                      <p className="text-brand-neutral-600 text-sm">
                        Enable maintainers to focus on the projects your enterprise relies on
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
                      <h4 className="text-brand-neutral-900 mb-2">Brand Visibility</h4>
                      <p className="text-brand-neutral-600 text-sm">
                        Showcase your commitment to open source across our platform
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
                      <h4 className="text-brand-neutral-900 mb-2">Direct Access</h4>
                      <p className="text-brand-neutral-600 text-sm">
                        Priority communication channels with maintainers and platform team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button Section */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={onBecomeSponsorClick}
                  className="gap-2 px-8 py-6 text-lg shadow-2xl hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105"
                >
                  <Heart className="h-5 w-5" />
                  Explore Sponsorship Tiers
                </Button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-brand-neutral-500">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-neutral-400" />
                  <p className="text-sm">
                    Sponsorship tiers from $500/month • Custom enterprise partnerships available
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-neutral-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
