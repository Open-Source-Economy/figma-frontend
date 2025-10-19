import React from 'react';
import { 
  Target,
  Heart,
  Briefcase
} from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

interface WinWinWinPartnershipProps {
  onStartBuilding?: () => void;
  className?: string;
}

export function WinWinWinPartnership({ 
  onStartBuilding,
  className = '' 
}: WinWinWinPartnershipProps) {
  
  const cards = [
    {
      icon: Target,
      title: "For Your Team",
      description: "Accelerate development with expert services, solve critical problems faster, and level up your entire team with direct mentorship from the world's best open source developers."
    },
    {
      icon: Heart,
      title: "For Your Brand",
      description: "Build developer credibility and gain recognition for supporting the open source ecosystem. Demonstrate your commitment to sustainable software development."
    },
    {
      icon: Briefcase,
      title: "For Your Supply Chain",
      description: "Secure your foundation by protecting the sustainability of critical open source projects. Ensure long-term reliability and reduce dependency risks."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Win-Win-Win Partnership"
          description="Our platform creates value for every stakeholder in the open source ecosystem"
          spacing="lg"
          align="center"
          maxWidth="3xl"
        />

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="bg-brand-card-blue rounded-xl p-6 border border-brand-neutral-300/30 text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-brand-accent mb-3 text-2xl">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}