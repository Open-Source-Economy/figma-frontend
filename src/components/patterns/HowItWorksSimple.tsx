import React from 'react';
import { SectionHeader } from '../ui/section-header';
import { StepCard } from '../ui/step-card';
import { FeatureBadge } from '../ui/feature-badge';
import { howItWorksSteps, howItWorksFeatures } from '../../data/howItWorksData';

interface HowItWorksSimpleProps {
  className?: string;
  /** Visibility level for the section header */
  headerVisibility?: 'prominent' | 'normal' | 'subtle';
}

export const HowItWorksSimple: React.FC<HowItWorksSimpleProps> = ({ 
  className = '',
  headerVisibility = 'normal'
}) => {
  return (
    <section className={`py-32 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <SectionHeader
          title="How It Works"
          titleLevel="h1"
          align="center"
          maxWidth="2xl"
          spacing="xl"
          visibility={headerVisibility}
        />

        {/* Steps with connecting line */}
        <div className="relative mb-16">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-brand-accent via-brand-highlight to-brand-accent opacity-30 -translate-y-px" />

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {howItWorksSteps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {howItWorksFeatures.map((feature, index) => (
            <FeatureBadge
              key={index}
              label={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};