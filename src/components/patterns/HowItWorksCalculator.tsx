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

interface HowItWorksCalculatorProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksCalculator({ className = '', onNavigation }: HowItWorksCalculatorProps) {
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
          description="Interactive service calculator to estimate your costs"
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

          {/* Right side - Interactive Service Calculator */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Service Calculator</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Team Size</label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">1-10</Button>
                      <Button size="sm" className="flex-1">11-50</Button>
                      <Button variant="outline" size="sm" className="flex-1">51+</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Priority Services</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Bug Fix Prioritization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Technical Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Enterprise SLAs</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-brand-primary/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Estimated Monthly</span>
                      <span className="text-lg font-bold text-brand-primary">$2,400</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Includes service delivery + sustainability funding
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Get Custom Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}