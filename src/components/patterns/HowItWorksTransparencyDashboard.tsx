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
  BarChart3
} from 'lucide-react';

interface HowItWorksTransparencyDashboardProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksTransparencyDashboard({ className = '', onNavigation }: HowItWorksTransparencyDashboardProps) {
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
          description="Real-time impact tracking and fund distribution transparency"
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

          {/* Right side - Complete Transparency Dashboard */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-success rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Live Impact Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Real-time transparency & ecosystem impact</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border border-border/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-1">$2.3M</div>
                    <div className="text-sm text-muted-foreground">Distributed to Maintainers</div>
                  </div>
                  <div className="p-4 border border-border/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-success mb-1">847</div>
                    <div className="text-sm text-muted-foreground">Projects Supported</div>
                  </div>
                  <div className="p-4 border border-border/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-warning mb-1">1.2K</div>
                    <div className="text-sm text-muted-foreground">Dependencies Funded</div>
                  </div>
                  <div className="p-4 border border-border/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-accent-dark mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Fund Transparency</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Your Contribution Impact</span>
                    <Badge variant="secondary" className="text-xs">This Month</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>React maintenance</span>
                      <span className="font-medium">$180</span>
                    </div>
                    <div className="w-full bg-brand-primary/10 rounded-full h-2">
                      <div className="bg-brand-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>TypeScript ecosystem</span>
                      <span className="font-medium">$120</span>
                    </div>
                    <div className="w-full bg-brand-success/10 rounded-full h-2">
                      <div className="bg-brand-success h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Node.js dependencies</span>
                      <span className="font-medium">$80</span>
                    </div>
                    <div className="w-full bg-brand-warning/10 rounded-full h-2">
                      <div className="bg-brand-warning h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
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