import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { 
  ArrowRight, 
  Users, 
  MessageSquare, 
  CheckCircle,
  Heart
} from 'lucide-react';

interface HowItWorksComparisonProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksComparison({ className = '', onNavigation }: HowItWorksComparisonProps) {
  const processSteps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      description: 'Describe your open source challenge, timeline, and requirements through our enterprise portal.',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'brand-primary'
    },
    {
      step: '02', 
      title: 'Get Matched with Experts',
      description: 'We connect you directly with the maintainers who built and understand your stack.',
      icon: <Users className="w-8 h-8" />,
      color: 'brand-accent'
    },
    {
      step: '03',
      title: 'Receive Professional Service',
      description: 'Expert maintainers deliver solutions while contributing to ecosystem sustainability.',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'brand-success'
    },
    {
      step: '04',
      title: 'Support Open Source Health',
      description: 'As a non-profit, your payment contributes to maintainer sustainability, dependency support, and ecosystem health.',
      icon: <Heart className="w-8 h-8" />,
      color: 'brand-warning'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-r from-background to-brand-secondary/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How Open Source Economy Works"
          description="Compare traditional support vs direct maintainer access"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Process */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${step.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right side - Vendor Comparison */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">vs. Traditional Support</h4>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="font-medium text-center pb-2 border-b border-border/30">
                      Traditional Support
                    </div>
                    <div className="font-medium text-center pb-2 border-b border-border/30 text-brand-primary">
                      Open Source Economy
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>Generic support team</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>2-5 day response times</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>Limited technical depth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>No direct maintainer access</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-highlight rounded-full"></span>
                        <span>Original maintainers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-highlight rounded-full"></span>
                        <span>24h SLA available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-highlight rounded-full"></span>
                        <span>Deep codebase knowledge</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-highlight rounded-full"></span>
                        <span>Direct creator access</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-brand-highlight/10 rounded-lg text-center">
                  <div className="text-sm font-medium text-brand-highlight">3x Faster Resolution</div>
                  <div className="text-xs text-muted-foreground">Average compared to traditional support</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-3">Why Choose Direct Access?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Skip the middleman. Get answers from the people who wrote the code.
                </p>
                <Button size="sm" className="w-full">
                  See Full Comparison
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}