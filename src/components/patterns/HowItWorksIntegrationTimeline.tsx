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

interface HowItWorksIntegrationTimelineProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksIntegrationTimeline({ className = '', onNavigation }: HowItWorksIntegrationTimelineProps) {
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
          description="Implementation progress tracking and timeline"
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

          {/* Right side - Implementation Timeline */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Implementation Timeline</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Week 1: Onboarding</div>
                      <div className="text-xs text-muted-foreground">Account setup, service credits, initial assessment</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Complete</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Week 2-3: Expert Matching</div>
                      <div className="text-xs text-muted-foreground">Connect with maintainers, establish communication channels</div>
                    </div>
                    <Badge variant="outline" className="text-xs text-brand-primary">In Progress</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Week 4+: Active Support</div>
                      <div className="text-xs text-muted-foreground">Ongoing services, SLA monitoring, regular check-ins</div>
                    </div>
                    <Badge variant="outline" className="text-xs">Upcoming</Badge>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-brand-primary/10 rounded-lg">
                  <div className="text-sm font-medium mb-1">Average Time to First Value</div>
                  <div className="text-2xl font-bold text-brand-primary">7 days</div>
                  <div className="text-xs text-muted-foreground">From signup to first expert interaction</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-accent/20 bg-brand-accent/5">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Success Milestones</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Expert connections made</span>
                    <span className="font-medium">5/8</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-brand-accent h-2 rounded-full" style={{ width: '62.5%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">62% complete</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}