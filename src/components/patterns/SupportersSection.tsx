import React from 'react';
import { SectionHeader } from '../ui/section-header';
import { Badge } from '../ui/badge';
import { Heart, Users } from 'lucide-react';
import { SupporterCard } from '../supporters/SupporterCard';
import { getTierConfig, getAccentColor } from '../supporters/tierConfig';

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
                
                return (
                  <SupporterCard
                    key={index}
                    name={supporter.name}
                    displayName={supporter.displayName}
                    contribution={supporter.contribution}
                    since={supporter.since}
                    tier={supporter.tier}
                    icon={config.icon}
                    accentColor={getAccentColor(supporter.tier)} 
                    size="xlarge"
                    variant="featured"
                  />
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