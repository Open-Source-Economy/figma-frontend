import React from 'react';
import { Button } from '../ui/button';
import { ProcessStep } from './ProcessStep';
import { 
  Handshake,
  Layers,
  Rocket,
  Award,
  ArrowRight,
  Clock,
  Zap,
  UserCheck,
  Target,
  ShieldCheck,
  Repeat,
  Globe,
  AlertCircle,
  LucideIcon
} from 'lucide-react';

interface HowItWorksMinimalProps {
  className?: string;
  onScheduleDemo?: () => void;
  onLearnMore?: () => void;
}

// Streamlined 4-Step Process
const PROCESS_STEPS = [
  {
    icon: Handshake,
    number: '01',
    title: 'Single Contract',
    description: 'One enterprise agreement covers all maintainers across your entire dependency stack',
    accentColor: 'accent' as const
  },
  {
    icon: Layers,
    number: '02',
    title: 'Combine 2 Models',
    description: 'Mix reserved time for critical projects with flexible credits for everything else',
    accentColor: 'accent' as const
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start Working',
    description: 'Get direct access to expert maintainers and begin solving your toughest challenges',
    accentColor: 'highlight' as const
  },
  {
    icon: Award,
    number: '04',
    title: 'Get Recognized',
    description: 'Support the ecosystem transparently and strengthen the open source community',
    accentColor: 'success' as const
  }
];

// Access Models Data
const ACCESS_MODELS = [
  {
    icon: Clock,
    title: 'Project-Specific Support Plan',
    description: 'Book monthly hours with specific maintainers for designated projects. Guaranteed availability with SLA response times.',
    accentColor: 'accent' as const,
    features: [
      { icon: UserCheck, text: 'Dedicated hours with chosen maintainers' },
      { icon: Target, text: 'Tied to specific projects' },
      { icon: ShieldCheck, text: 'SLA guarantees available' }
    ],
    bestFor: 'Mission-critical projects'
  },
  {
    icon: Zap,
    title: 'On-Demand Access',
    description: 'Purchase Service Credits that rollover monthly. Use across any project and any maintainer on our platform—maximum flexibility without guaranteed response times.',
    accentColor: 'highlight' as const,
    features: [
      { icon: Repeat, text: 'Credits rollover month-to-month' },
      { icon: Globe, text: 'Works with any project or maintainer' },
      { icon: AlertCircle, text: 'No response time guarantees' }
    ],
    bestFor: 'Broad ecosystem support'
  }
];

// Feature List Item Component
interface FeatureListItemProps {
  icon: LucideIcon;
  text: string;
  accentColor: 'accent' | 'highlight';
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ icon: Icon, text, accentColor }) => {
  const colorClasses = accentColor === 'accent' 
    ? 'bg-brand-accent/10 text-brand-accent'
    : 'bg-brand-highlight/10 text-brand-highlight';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`flex-shrink-0 w-5 h-5 rounded ${colorClasses} flex items-center justify-center`}>
        <Icon className="w-3 h-3" />
      </div>
      <span className="text-xs text-brand-neutral-700">{text}</span>
    </div>
  );
};

// Access Model Card Component
interface AccessModelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: 'accent' | 'highlight';
  features: Array<{ icon: LucideIcon; text: string }>;
  bestFor: string;
}

const AccessModelCard: React.FC<AccessModelCardProps> = ({
  icon: Icon,
  title,
  description,
  accentColor,
  features,
  bestFor
}) => {
  const accentColorClasses = accentColor === 'accent'
    ? {
        border: 'hover:border-brand-accent/40',
        iconBg: 'bg-brand-accent/10',
        iconColor: 'text-brand-accent',
        badgeBg: 'bg-brand-accent/10',
        badgeText: 'text-brand-accent'
      }
    : {
        border: 'hover:border-brand-highlight/40',
        iconBg: 'bg-brand-highlight/10',
        iconColor: 'text-brand-highlight',
        badgeBg: 'bg-brand-highlight/10',
        badgeText: 'text-brand-highlight'
      };

  return (
    <div className={`bg-brand-card-blue/50 backdrop-blur-sm border border-brand-neutral-300/30 rounded-lg p-6 ${accentColorClasses.border} transition-colors flex flex-col`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${accentColorClasses.iconBg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${accentColorClasses.iconColor}`} />
        </div>
        <div className="flex-1">
          <h4 className="text-brand-neutral-900 mb-2">{title}</h4>
          <p className="text-brand-neutral-700 text-sm mb-4">{description}</p>
          <div className="space-y-2.5">
            {features.map((feature, index) => (
              <FeatureListItem
                key={index}
                icon={feature.icon}
                text={feature.text}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-brand-neutral-600 text-sm mt-auto pt-3 border-t border-brand-neutral-300/20">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${accentColorClasses.badgeBg} ${accentColorClasses.badgeText}`}>
          Best for: {bestFor}
        </span>
      </div>
    </div>
  );
};

export const HowItWorksMinimal: React.FC<HowItWorksMinimalProps> = ({ 
  className = '',
  onScheduleDemo,
  onLearnMore
}) => {
  return (
    <section className={`relative py-24 bg-gradient-to-b from-[#1e3a5f] via-[#2c3e50] to-[#1e3a5f] overflow-hidden ${className}`}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-success/5 opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
            <Rocket className="w-4 h-4 text-brand-accent-light" />
            <span className="text-brand-accent-light text-sm">Simple Process</span>
          </div>
          <h2 className="text-brand-neutral-950 mb-4">How It Works</h2>
          <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
            Four streamlined steps from agreement to ecosystem impact
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 px-20">
            <div className="h-1 bg-gradient-to-r from-brand-accent/20 via-brand-highlight/50 to-brand-success/50 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                description={step.description}
                accentColor={step.accentColor}
              />
            ))}
          </div>
        </div>

        {/* Access Models Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-brand-neutral-900 mb-3">Two Flexible Access Models</h3>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Choose the model that fits your needs, or combine both for maximum flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ACCESS_MODELS.map((model, index) => (
              <AccessModelCard
                key={index}
                icon={model.icon}
                title={model.title}
                description={model.description}
                accentColor={model.accentColor}
                features={model.features}
                bestFor={model.bestFor}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-brand-accent hover:bg-brand-accent-light text-white shadow-lg shadow-brand-accent/20"
              onClick={onScheduleDemo}
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
          <p className="text-brand-neutral-600 text-sm mt-4">
            30-minute call • No commitment • Custom pricing
          </p>
        </div>
      </div>
    </section>
  );
};
