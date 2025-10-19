import React from 'react';
import { Building2, Code2, Network } from 'lucide-react';

interface ValuePropositionProps {
  className?: string;
}

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  benefits: string[];
  accentColor: string;
  bgGradient: string;
}

export function ValueProposition({ className = '' }: ValuePropositionProps) {
  const valueProps: ValueProp[] = [
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "For Teams",
      subtitle: "Enterprise-Grade Support",
      benefits: [
        "Direct access to project creators",
        "Prioritized bug fixes and features",
        "Expert guidance and best practices",
        "Custom integrations and solutions",
        "24/7 enterprise-level support"
      ],
      accentColor: "brand-accent",
      bgGradient: "from-brand-accent to-brand-accent-dark"
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "For Maintainers",
      subtitle: "Sustainable Development",
      benefits: [
        "Fair compensation for your expertise",
        "Dedicated time for project development",
        "Direct relationships with users",
        "Professional growth opportunities",
        "Community impact amplification"
      ],
      accentColor: "brand-highlight",
      bgGradient: "from-brand-highlight to-brand-highlight-dark"
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: "For the Ecosystem",
      subtitle: "Collective Growth",
      benefits: [
        "Stronger, more resilient projects",
        "Faster innovation and development",
        "Better documentation and testing",
        "Reduced technical debt and security risks",
        "Sustainable open source funding model"
      ],
      accentColor: "brand-primary",
      bgGradient: "from-brand-primary to-brand-primary-dark"
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 mb-6">
            Win-Win-Win Partnership
          </h2>
          <p className="text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Our unique model creates value for everyone in the open source ecosystem. 
            When businesses invest in the tools they depend on, everyone benefits.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.title}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-neutral-300/50"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.bgGradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${prop.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {prop.icon}
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-brand-neutral-900 mb-2">
                  {prop.title}
                </h3>
                <p className={`text-${prop.accentColor} font-medium`}>
                  {prop.subtitle}
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3">
                {prop.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${prop.accentColor} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                    <span className="text-brand-neutral-700 leading-relaxed group-hover/item:text-brand-neutral-800 transition-colors duration-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Connection Lines (for visual flow) */}
              {index < valueProps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-brand-neutral-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-neutral-200/50 rounded-full border border-brand-neutral-300/50">
            <div className="w-3 h-3 bg-brand-success rounded-full animate-pulse"></div>
            <span className="text-brand-neutral-700 font-medium">
              Creating sustainable value for everyone
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}