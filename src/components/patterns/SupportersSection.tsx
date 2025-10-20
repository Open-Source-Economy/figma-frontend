import React from 'react';
import { SectionHeader } from '../ui/section-header';
import { Badge } from '../ui/badge';
import { Heart, Building2, Users, Sparkles } from 'lucide-react';

interface Supporter {
  name: string;
  displayName: string;
  tier: 'founding' | 'enterprise' | 'community' | 'partner';
  since?: string;
  contribution?: string;
}

interface SupportersSectionProps {
  className?: string;
}

export function SupportersSection({ className = '' }: SupportersSectionProps) {
  const supporters: Supporter[] = [
    { name: 'vercel', displayName: 'VERCEL', tier: 'founding', since: '2023', contribution: 'Platform Support' },
    { name: 'github', displayName: 'GITHUB', tier: 'founding', since: '2023', contribution: 'Infrastructure' },
    { name: 'netlify', displayName: 'NETLIFY', tier: 'enterprise', since: '2024', contribution: 'Hosting Partner' },
    { name: 'stripe', displayName: 'STRIPE', tier: 'enterprise', since: '2024', contribution: 'Payment Processing' },
    { name: 'shopify', displayName: 'SHOPIFY', tier: 'partner', since: '2024', contribution: 'Commerce Tools' },
    { name: 'microsoft', displayName: 'MICROSOFT', tier: 'partner', since: '2024', contribution: 'Cloud Services' },
    { name: 'google', displayName: 'GOOGLE', tier: 'community', since: '2024', contribution: 'OSS Advocacy' },
    { name: 'aws', displayName: 'AWS', tier: 'community', since: '2024', contribution: 'Cloud Credits' },
  ];

  const getTierConfig = (tier: Supporter['tier']) => {
    switch (tier) {
      case 'founding':
        return {
          label: 'Founding Supporter',
          icon: Heart,
          color: 'text-brand-success',
          borderColor: 'border-brand-success/30',
          bgColor: 'bg-brand-success/5',
          badgeVariant: 'default' as const,
          badgeClass: 'bg-brand-success/20 text-brand-success border-brand-success/40'
        };
      case 'enterprise':
        return {
          label: 'Enterprise Partner',
          icon: Building2,
          color: 'text-brand-highlight',
          borderColor: 'border-brand-highlight/30',
          bgColor: 'bg-brand-highlight/5',
          badgeVariant: 'secondary' as const,
          badgeClass: 'bg-brand-highlight/20 text-brand-highlight border-brand-highlight/40'
        };
      case 'partner':
        return {
          label: 'Strategic Partner',
          icon: Sparkles,
          color: 'text-brand-accent',
          borderColor: 'border-brand-accent/30',
          bgColor: 'bg-brand-accent/5',
          badgeVariant: 'outline' as const,
          badgeClass: 'bg-brand-accent/20 text-brand-accent border-brand-accent/40'
        };
      case 'community':
        return {
          label: 'Community Supporter',
          icon: Users,
          color: 'text-brand-primary',
          borderColor: 'border-brand-primary/30',
          bgColor: 'bg-brand-primary/5',
          badgeVariant: 'outline' as const,
          badgeClass: 'bg-brand-primary/20 text-brand-primary border-brand-primary/40'
        };
    }
  };

  // Group supporters by tier for better organization
  const foundingSupporters = supporters.filter(s => s.tier === 'founding');
  const otherSupporters = supporters.filter(s => s.tier !== 'founding');

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Building a Sustainable Open Source Ecosystem Together"
          description="We're honored to partner with these forward-thinking organizations who share our commitment to supporting maintainers and creating a healthier, more sustainable open source future."
          spacing="lg"
          align="center"
          maxWidth="4xl"
        />

        {/* Trust Indicator */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-brand-card-blue-dark/60 border border-brand-success/30 rounded-full px-6 py-3 shadow-lg">
            <Heart className="w-5 h-5 text-brand-success" />
            <span className="text-brand-neutral-800">Supporting {supporters.length} organizations across 4 continents</span>
          </div>
        </div>

        {/* Founding Supporters - Featured */}
        {foundingSupporters.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="bg-brand-success/20 text-brand-success border-brand-success/40 mb-2">
                Founding Supporters
              </Badge>
              <p className="text-sm text-brand-neutral-600">These visionary organizations helped launch our mission in 2023</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {foundingSupporters.map((supporter, index) => {
                const config = getTierConfig(supporter.tier);
                const Icon = config.icon;
                
                return (
                  <div 
                    key={index}
                    className={`group relative bg-brand-card-blue-dark/80 rounded-2xl p-8 border-2 ${config.borderColor} hover:border-brand-success hover:shadow-2xl hover:shadow-brand-success/20 transition-all duration-500 overflow-hidden`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 ${config.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${config.bgColor} border ${config.borderColor}`}>
                          <Icon className={`w-6 h-6 ${config.color}`} />
                        </div>
                        {supporter.since && (
                          <span className="text-xs text-brand-neutral-500 bg-brand-neutral-200/50 px-3 py-1 rounded-full">
                            Since {supporter.since}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-3xl tracking-widest text-brand-neutral-800 group-hover:text-brand-neutral-950 transition-colors duration-300 mb-3">
                        {supporter.displayName}
                      </h3>
                      
                      {supporter.contribution && (
                        <p className="text-sm text-brand-neutral-600 mb-4">
                          {supporter.contribution}
                        </p>
                      )}
                      
                      <Badge variant="outline" className={config.badgeClass}>
                        {config.label}
                      </Badge>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${config.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>
        )}



        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-brand-card-blue-dark via-brand-card-blue to-brand-accent/5 border border-brand-accent/30 rounded-2xl p-8 max-w-2xl">
            <Users className="w-12 h-12 text-brand-accent" />
            <h3 className="text-brand-neutral-900">Join Our Mission</h3>
            <p className="text-brand-neutral-600 max-w-lg">
              Interested in supporting sustainable open source development? Partner with us to ensure maintainers are fairly compensated for their critical work.
            </p>
            <button className="mt-2 px-6 py-3 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/30">
              Become a Supporter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}