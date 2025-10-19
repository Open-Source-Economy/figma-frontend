import React from 'react';
import { SectionHeader } from '../ui/section-header';

interface Supporter {
  name: string;
  displayName: string;
}

interface SupportersSectionProps {
  className?: string;
}

export function SupportersSection({ className = '' }: SupportersSectionProps) {
  const supporters: Supporter[] = [
    { name: 'vercel', displayName: 'VERCEL' },
    { name: 'github', displayName: 'GITHUB' },
    { name: 'netlify', displayName: 'NETLIFY' },
    { name: 'stripe', displayName: 'STRIPE' },
    { name: 'shopify', displayName: 'SHOPIFY' },
    { name: 'microsoft', displayName: 'MICROSOFT' },
    { name: 'google', displayName: 'GOOGLE' },
    { name: 'aws', displayName: 'AWS' },
  ];

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Open Source Supporters"
          description="We're grateful to these organizations for contributing to a healthy and sustainable open source ecosystem"
          spacing="lg"
          align="center"
          maxWidth="3xl"
        />

        {/* Modern Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {supporters.map((supporter, index) => (
            <div 
              key={index}
              className="group relative bg-brand-card-blue rounded-2xl p-10 border border-brand-neutral-300/10 hover:border-brand-accent/20 transition-all duration-500 flex items-center justify-center"
            >
              {/* Text-based Modern Logo */}
              <div className="text-center">
                <span className="text-2xl tracking-widest text-brand-neutral-500 group-hover:text-brand-accent transition-colors duration-500">
                  {supporter.displayName}
                </span>
              </div>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}