import React from 'react';
import { Link, Handshake, Shield } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
}

interface SimpleProcessStepsProps {
  className?: string;
}

export function SimpleProcessSteps({ className = '' }: SimpleProcessStepsProps) {
  const steps: ProcessStep[] = [
    {
      icon: <Link className="w-8 h-8 text-white" />,
      number: "01",
      title: "Connect",
      description: "Match with expert maintainers who understand your tech stack inside and out.",
      features: [
        "Curated expert matching",
        "Technical compatibility review",
        "Project scope alignment",
        "Direct maintainer access"
      ],
      accentColor: "brand-accent"
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      number: "02", 
      title: "Collaborate",
      description: "Work directly with maintainers to build, fix, and optimize your critical dependencies.",
      features: [
        "Direct communication channels",
        "Agile development workflows",
        "Regular progress updates",
        "Transparent collaboration"
      ],
      accentColor: "brand-highlight"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      number: "03",
      title: "Support",
      description: "Benefit from ongoing support while strengthening the entire open source ecosystem.",
      features: [
        "Full NDA protection",
        "Enterprise-grade security",
        "Long-term maintenance",
        "Ecosystem contribution"
      ],
      accentColor: "brand-primary"
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-brand-neutral-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-brand-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures transparency, security, and direct access to the expertise you need.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-neutral-400 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group text-center lg:text-left">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 lg:left-0 text-6xl font-bold text-brand-neutral-300/50 -z-10 group-hover:text-brand-neutral-400/50 transition-colors duration-300">
                  {step.number}
                </div>
                
                {/* Icon Container */}
                <div className="relative mb-8 mx-auto lg:mx-0 w-fit">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${step.accentColor} to-${step.accentColor}-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Connector Dot */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 -right-12 w-6 h-6 bg-${step.accentColor} rounded-full transform -translate-y-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                      <div className="absolute inset-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-brand-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-brand-neutral-700 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 pt-2">
                    {step.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-brand-neutral-600 justify-center lg:justify-start"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${step.accentColor} flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-brand-neutral-300/50">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-brand-success" />
              <span className="font-semibold text-brand-neutral-900">NDA Protection</span>
            </div>
            <p className="text-sm text-brand-neutral-700">
              All collaborations are protected by comprehensive NDAs, ensuring your proprietary information stays secure.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-brand-neutral-300/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="font-semibold text-brand-neutral-900">Full Transparency</span>
            </div>
            <p className="text-sm text-brand-neutral-700">
              Track exactly how your investment is distributed across projects, maintainers, and the broader ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}