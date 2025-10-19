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

interface HowItWorksSplitProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksSplit({ className = '', onNavigation }: HowItWorksSplitProps) {
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
          description="Enterprise-grade open source support made simple"
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

          {/* Right side - Real-time Enterprise Dashboard */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Live Enterprise Dashboard</h4>
                    <Badge variant="outline" className="text-xs bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                      Live
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-brand-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">24h</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                    <div className="text-center p-3 bg-brand-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-brand-accent">99.9%</div>
                      <div className="text-xs text-muted-foreground">SLA Uptime</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                        <span className="text-sm">React Bug Fix</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-highlight rounded-full"></div>
                        <span className="text-sm">Vue.js Advisory</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                        <span className="text-sm">Security Review</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">Completed</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-center">Expert Network</h4>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-brand-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Maintainers Available</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span>React Core Team</span>
                    <Badge variant="outline" className="text-xs ml-auto">Online</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span>Vue.js Maintainers</span>
                    <Badge variant="outline" className="text-xs ml-auto">Available</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span>Node.js Experts</span>
                    <Badge variant="outline" className="text-xs ml-auto">Online</Badge>
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