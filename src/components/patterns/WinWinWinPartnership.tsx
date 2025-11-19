import React from 'react';
import { 
  Target,
  Heart,
  Briefcase,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

interface WinWinWinPartnershipProps {
  onStartBuilding?: () => void;
  className?: string;
}

// Bullet Point Component
interface BulletPointProps {
  text: string;
  accentColor: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text, accentColor }) => {
  return (
    <div className="flex items-start gap-3 text-left">
      <CheckCircle2 className={`w-4 h-4 ${accentColor} flex-shrink-0 mt-0.5`} />
      <span className="text-sm text-brand-neutral-600 leading-relaxed">{text}</span>
    </div>
  );
};

export function WinWinWinPartnership({ 
  onStartBuilding,
  className = '' 
}: WinWinWinPartnershipProps) {
  
  const cards = [
    {
      icon: Target,
      title: "For Your Team",
      intro: "Direct access to expert maintainers",
      benefits: [
        "Fix bugs and add features without your team ramping up",
        "Solve critical issues with people who know the code best",
        "Save time on unfamiliar codebases"
      ],
      color: "text-brand-primary",
      iconColor: "text-brand-primary",
      accentColor: "text-brand-primary",
      iconBgFrom: "from-brand-primary/20",
      iconBgTo: "to-brand-primary/5",
      iconBgHoverFrom: "group-hover:from-brand-primary/30",
      iconBgHoverTo: "group-hover:to-brand-primary/10"
    },
    {
      icon: Heart,
      title: "For Your Brand",
      intro: "Build authentic developer credibility",
      benefits: [
        "Transparent non-profit model with visible impact",
        "Contributions directly fund open source maintainers",
        "Demonstrate genuine ecosystem commitment"
      ],
      color: "text-brand-highlight",
      iconColor: "text-brand-highlight",
      accentColor: "text-brand-highlight",
      iconBgFrom: "from-brand-highlight/20",
      iconBgTo: "to-brand-highlight/5",
      iconBgHoverFrom: "group-hover:from-brand-highlight/30",
      iconBgHoverTo: "group-hover:to-brand-highlight/10"
    },
    {
      icon: Briefcase,
      title: "For Your Supply Chain",
      intro: "Secure your software foundation",
      benefits: [
        "Support an independent open-source ecosystem",
        "No vendor lock-in or license change risks",
        "Ensure long-term sustainability of critical dependencies"
      ],
      color: "text-brand-success",
      iconColor: "text-brand-success",
      accentColor: "text-brand-success",
      iconBgFrom: "from-brand-success/20",
      iconBgTo: "to-brand-success/5",
      iconBgHoverFrom: "group-hover:from-brand-success/30",
      iconBgHoverTo: "group-hover:to-brand-success/10"
    }
  ];

  return (
    <section className={`py-24 lg:py-40 bg-gradient-to-b from-brand-card-blue via-brand-secondary/95 to-brand-success/10 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Enhanced Visibility */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-neutral-950 mb-6 tracking-tight">
            Win-Win-Win Partnership
          </h1>
          <p className="text-lg md:text-xl text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Pay for expert maintainer access—every dollar strengthens your brand and secures your supply chain
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark rounded-2xl p-10 border border-brand-neutral-300/20 text-center hover:border-brand-neutral-300/40 hover:shadow-2xl transition-all duration-500"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-neutral-300/0 to-brand-neutral-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.iconBgFrom} ${card.iconBgTo} flex items-center justify-center mb-8 mx-auto ${card.iconBgHoverFrom} ${card.iconBgHoverTo} transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl md:text-3xl ${card.color} mb-5`}>
                    {card.title}
                  </h3>
                  
                  {/* Intro */}
                  <p className="text-brand-neutral-700 mb-6">
                    {card.intro}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 max-w-sm mx-auto">
                    {card.benefits.map((benefit, benefitIndex) => (
                      <BulletPoint 
                        key={benefitIndex}
                        text={benefit}
                        accentColor={card.accentColor}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}