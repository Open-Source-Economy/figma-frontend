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
  Heart,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

interface HowItWorksFundAllocationProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksFundAllocation({ className = '', onNavigation }: HowItWorksFundAllocationProps) {
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
          description="Complete transparency in our non-profit fund allocation"
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

          {/* Right side - Non-Profit Fund Allocation */}
          <div className="space-y-6">
            <Card className="border-brand-highlight/20 bg-gradient-to-br from-brand-highlight/5 to-brand-primary/5">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge variant="outline" className="text-brand-highlight border-brand-highlight/20 mb-3">
                    Non-Profit Mission
                  </Badge>
                  <h4 className="font-semibold mb-2">Where Your Money Goes</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete transparency in our non-profit pricing model
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Service Delivery (60%)</div>
                      <div className="text-sm text-muted-foreground">Direct payment to expert maintainers</div>
                    </div>
                    <div className="text-lg font-semibold text-brand-primary">60%</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Project Sustainability (25%)</div>
                      <div className="text-sm text-muted-foreground">Funding maintenance & long-term health</div>
                    </div>
                    <div className="text-lg font-semibold text-brand-highlight">25%</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Ecosystem Health (10%)</div>
                      <div className="text-sm text-muted-foreground">Supporting critical dependencies</div>
                    </div>
                    <div className="text-lg font-semibold text-brand-primary">10%</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Platform Operations (5%)</div>
                      <div className="text-sm text-muted-foreground">Infrastructure & administration</div>
                    </div>
                    <div className="text-lg font-semibold text-brand-accent">5%</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-brand-highlight/10 rounded-lg text-center">
                  <div className="font-medium text-brand-highlight mb-1">100% Transparent</div>
                  <div className="text-sm text-muted-foreground">Every invoice shows exact fund allocation</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}