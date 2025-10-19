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

interface HowItWorksTimelineProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksTimeline({ className = '', onNavigation }: HowItWorksTimelineProps) {
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
      color: 'brand-warning',
      link: {
        text: 'Learn how funds are redistributed',
        href: 'fund-redistribution'
      }
    }
  ];

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How Open Source Economy Works"
          description="A streamlined process that connects enterprises with expert maintainers"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        {/* Timeline Process */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-primary via-brand-accent to-brand-highlight"></div>
          
          {processSteps.map((step, index) => (
            <div key={step.step} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="border-border/50 hover:border-brand-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div>
                        <Badge variant="outline" className={`text-${step.color} border-${step.color}/20 bg-${step.color}/5 mb-2`}>
                          Step {step.step}
                        </Badge>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                        {step.link && (
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto mt-2 text-brand-primary hover:text-brand-primary-dark"
                            onClick={() => onNavigation?.(step.link.href)}
                          >
                            {step.link.text} <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${step.color} border-4 border-background z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}