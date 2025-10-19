import React from 'react';
import { 
  Shield, 
  Award, 
  Clock, 
  Wrench, 
  Users, 
  TrendingUp, 
  Palette, 
  GraduationCap,
  Eye,
  Package,
  Leaf,
  Heart
} from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  accentColor?: string;
  bulletPoints?: Array<{
    text: string;
    icon: any;
  }>;
}

interface ProcessStepsProps {
  title?: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({ 
  title = "How Does It Work?", 
  steps,
  className = ""
}: ProcessStepsProps) {
  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-10 h-10 ${step.accentColor || 'bg-brand-accent'} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.bulletPoints && step.bulletPoints.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    {step.bulletPoints.map((point, pointIndex) => {
                      const IconComponent = point.icon;
                      return (
                        <div key={pointIndex} className="flex items-center gap-2 text-sm">
                          <IconComponent className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{point.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default steps for Open Source Economy
export const DEFAULT_OSE_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "One Contract, All Services",
    description: "Under a single contract, you gain access to enterprise-grade services from multiple open source maintainers. No need to manage dozens of separate agreements.",
    accentColor: "bg-brand-accent",
    bulletPoints: [
      { text: "NDA Protection", icon: Shield },
      { text: "SOC 2 Compliance", icon: Award },
      { text: "24/7 Support", icon: Clock },
      { text: "Priority Bug Fixes", icon: Wrench }
    ]
  },
  {
    number: 2,
    title: "Need Another Expert? We'll Find Them",
    description: "If you need expertise for another open source project, we'll search our network and connect you with the right maintainers. Your contract scales with your needs.",
    accentColor: "bg-brand-accent",
    bulletPoints: [
      { text: "Expert Network Access", icon: Users },
      { text: "Scalable Services", icon: TrendingUp },
      { text: "Custom Features", icon: Palette },
      { text: "Direct Mentorship", icon: GraduationCap }
    ]
  },
  {
    number: 3,
    title: "Sustainable Ecosystem Support",
    description: "Every payment includes donations to the projects and their dependencies that you rely on. This ensures the entire ecosystem your business is built on remains sustainable, reliable, and well-maintained.",
    accentColor: "bg-brand-primary",
    bulletPoints: [
      { text: "100% Transparency", icon: Eye },
      { text: "Dependency Support", icon: Package },
      { text: "Long-term Sustainability", icon: Leaf },
      { text: "Ecosystem Health", icon: Heart }
    ]
  }
];