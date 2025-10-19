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

interface HowItWorksLiveSupportProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksLiveSupport({ className = '', onNavigation }: HowItWorksLiveSupportProps) {
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
          description="Live support interface with direct maintainer chat"
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

          {/* Right side - Live Support Interface */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Live Support Portal</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-highlight rounded-full animate-pulse"></div>
                    <span className="text-xs text-brand-highlight">3 experts online</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-white">You</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">Having performance issues with React 18 concurrent features in production...</div>
                      <div className="text-xs text-muted-foreground mt-1">2 minutes ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-brand-primary/10 rounded-lg">
                    <div className="w-8 h-8 bg-brand-highlight rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-white">DA</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">Dan Abramov here! I can help with that. Can you share your concurrent setup? Also, are you using Suspense boundaries?</div>
                      <div className="text-xs text-muted-foreground mt-1">Just now</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-accent/20 bg-brand-accent/10">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Support Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span>Direct maintainer chat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span>Screen sharing sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span>Code review requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span>Emergency escalation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}