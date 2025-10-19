import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, MessageSquare, Code2, Rocket, Calendar, FileText, DollarSign, UserCheck, Shield, Wrench, Activity, Globe, Settings, TrendingUp, Package } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ReactNode;
  accentColor: string;
}

interface HowItWorksAlternatingProps {
  className?: string;
}

export function HowItWorksAlternating({ className = '' }: HowItWorksAlternatingProps) {
  const steps: Step[] = [
    {
      number: 1,
      title: "Connect & Discuss Your Needs",
      description: "Share your open source challenges and requirements with our team. We'll identify the right maintainers and projects for your specific needs.",
      details: [
        "Schedule a consultation call with our team",
        "Discuss your technical requirements and goals",
        "Receive a customized proposal with matched maintainers",
        "Review transparent pricing and fund distribution"
      ],
      image: "https://images.unsplash.com/photo-1739298061709-cfc57e6b620e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc1OTg1NTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      accentColor: "brand-accent"
    },
    {
      number: 2,
      title: "Maintainers Get to Work",
      description: "Once contracted, maintainers prioritize your needs. Get direct communication, faster bug fixes, and custom features built into the projects you depend on.",
      details: [
        "Direct access to core maintainers via dedicated channels",
        "Priority bug fixes and security patches",
        "Custom feature development aligned with project roadmap",
        "Regular progress updates and transparent communication"
      ],
      image: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NTk5MjI3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Code2 className="w-6 h-6 text-white" />,
      accentColor: "brand-highlight"
    },
    {
      number: 3,
      title: "Deploy & Scale Confidently",
      description: "Your contributions remain open source, strengthening the entire ecosystem. Scale your usage with ongoing support, knowing the maintainers are invested in your success.",
      details: [
        "All improvements benefit the entire open source community",
        "Ongoing maintenance and long-term support guarantees",
        "Scale your contract as your needs grow",
        "Strengthen the dependencies you rely on every day"
      ],
      image: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU5OTA0MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <Rocket className="w-6 h-6 text-white" />,
      accentColor: "brand-success"
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-accent/10 via-brand-highlight/10 to-brand-success/10 border border-brand-accent/20 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-brand-accent to-brand-highlight bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started with direct maintainer access in three simple steps
          </p>
        </div>

        {/* Steps with Timeline */}
        <div className="relative mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-highlight to-brand-success hidden lg:block transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={step.number}
                className={`relative ${index > 0 ? '-mt-16' : ''} mb-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-12 w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-neutral-200 rounded-full border-4 border-brand-accent hidden lg:flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                  <span className="text-brand-accent font-semibold text-xl">{step.number}</span>
                </div>

                {/* Content Card */}
                <div 
                  className={`flex flex-col lg:flex-row gap-8 items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                  
                  {/* Text Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-brand-neutral-200 border border-brand-neutral-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Step Number and Icon - Mobile Only */}
                      <div className="flex items-start gap-4 mb-6 lg:hidden">
                        <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${step.accentColor} to-${step.accentColor}-dark rounded-2xl flex items-center justify-center shadow-lg`}>
                          {step.icon}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-secondary border-2 border-brand-accent rounded-full flex items-center justify-center">
                            <span className="text-brand-accent font-semibold">{step.number}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <div className="mb-6">
                        <h3 className="text-3xl mb-3 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Details with Icons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => {
                          // Map icons based on step number and detail index
                          const getIcon = () => {
                            if (step.number === 1) {
                              const icons = [Calendar, FileText, MessageSquare, DollarSign];
                              const Icon = icons[detailIndex];
                              return <Icon className="w-5 h-5" />;
                            } else if (step.number === 2) {
                              const icons = [UserCheck, Shield, Wrench, Activity];
                              const Icon = icons[detailIndex];
                              return <Icon className="w-5 h-5" />;
                            } else {
                              const icons = [Globe, Settings, TrendingUp, Package];
                              const Icon = icons[detailIndex];
                              return <Icon className="w-5 h-5" />;
                            }
                          };

                          return (
                            <div key={detailIndex} className="flex items-start gap-3 group">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${step.accentColor}/10 border border-${step.accentColor}/20 flex items-center justify-center text-${step.accentColor} group-hover:bg-${step.accentColor}/20 transition-all duration-300`}>
                                {getIcon()}
                              </div>
                              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-1">
                                {detail}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to connect with expert maintainers?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-highlight text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}