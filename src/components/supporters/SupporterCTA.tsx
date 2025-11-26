import React from 'react';
import { Button } from '../ui/button';
import { Heart, Award, Users, LucideIcon } from 'lucide-react';

interface CTABenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface SupporterCTAProps {
  projectName?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  benefits?: CTABenefit[];
  onButtonClick?: () => void;
}

const defaultBenefits: CTABenefit[] = [
  {
    icon: Heart,
    title: 'Support Innovation',
    description: 'Fund new features and improvements that drive the project forward',
    color: 'brand-success'
  },
  {
    icon: Award,
    title: 'Get Recognition',
    description: 'Logo and brand visibility across our platform and community',
    color: 'brand-accent'
  },
  {
    icon: Users,
    title: 'Priority Access',
    description: 'Direct maintainer communication and priority support channels',
    color: 'brand-highlight'
  }
];

export function SupporterCTA({
  projectName = 'this project',
  title = 'Become a Supporter',
  description,
  buttonText = 'Explore Support Options',
  benefits = defaultBenefits,
  onButtonClick
}: SupporterCTAProps) {
  const defaultDescription = `Join these organizations in supporting the ongoing development and maintenance of ${projectName}. Your contribution directly funds new features, security updates, and community support.`;

  return (
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
            {title}
          </h3>
          <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue border border-brand-neutral-300 rounded-2xl p-6 hover:border-${benefit.color}/60 transition-all duration-300 hover:shadow-xl hover:scale-105`}
                style={{
                  boxShadow: `0 0 0 0 rgba(var(--${benefit.color}-rgb, 0, 0, 0), 0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(var(--${benefit.color}-rgb, 0, 0, 0), 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
                }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div 
                    className={`p-4 bg-gradient-to-br from-${benefit.color}/20 to-${benefit.color}/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <BenefitIcon className={`h-8 w-8 text-${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="text-brand-neutral-900 mb-2">{benefit.title}</h4>
                    <p className="text-brand-neutral-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onButtonClick}
            className="gap-2 px-8 py-6 text-lg shadow-2xl hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105"
          >
            <Heart className="h-5 w-5" />
            {buttonText}
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
  );
}
