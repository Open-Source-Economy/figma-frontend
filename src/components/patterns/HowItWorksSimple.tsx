import React from 'react';
import { MessageSquare, Handshake, Heart } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

interface HowItWorksSimpleProps {
  className?: string;
  /** Visibility level for the section header */
  headerVisibility?: 'prominent' | 'normal' | 'subtle';
}

export const HowItWorksSimple: React.FC<HowItWorksSimpleProps> = ({ 
  className = '',
  headerVisibility = 'normal'
}) => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Connect',
      description: 'Chat directly with maintainers under NDA protection. Get expert consultation from the people who built the tools you use.',
    },
    {
      icon: Handshake,
      title: 'Collaborate',
      description: 'Receive consultancy, support, and custom code solutions. Work together to solve your specific challenges.',
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Your investment flows back to sustain projects. Ensure the long-term viability of your dependencies.',
    },
  ];

  const features = [
    'Easy payment processing',
    'Full transparency',
    'NDA protection',
    '100% open source output code',
  ];

  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <SectionHeader
          title="How It Works"
          description="Simple, transparent, and effective"
          titleLevel="h2"
          align="center"
          maxWidth="2xl"
          spacing="xl"
          visibility={headerVisibility}
        />

        {/* Steps with connecting line */}
        <div className="relative mb-16">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-brand-accent via-brand-highlight to-brand-accent opacity-30" 
               style={{ transform: 'translateY(-1px)' }} />

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Gradient circle icon */}
                  <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-gradient-to-br from-brand-accent to-brand-highlight p-[3px] mb-6 shadow-lg shadow-brand-accent/20">
                    <div className="w-full h-full rounded-full bg-brand-card-blue flex items-center justify-center">
                      <Icon className="w-10 h-10 text-brand-neutral-900" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-brand-neutral-900 mb-3 text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-neutral-600 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-highlight/10 to-brand-accent/10 border border-brand-highlight/20"
            >
              <span className="text-brand-highlight text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};