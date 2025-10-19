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

interface HowItWorksROIProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksROI({ className = '', onNavigation }: HowItWorksROIProps) {
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
          description="Interactive ROI calculator with cost breakdown"
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

          {/* Right side - ROI Calculator */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">ROI Calculator</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Development Team Size</label>
                    <div className="flex items-center gap-3">
                      <input type="range" min="5" max="100" defaultValue="25" className="flex-1" />
                      <span className="text-sm font-medium w-8">25</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Critical Dependencies</label>
                    <div className="flex items-center gap-3">
                      <input type="range" min="1" max="50" defaultValue="12" className="flex-1" />
                      <span className="text-sm font-medium w-8">12</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Hours/Month on OSS Issues</label>
                    <div className="flex items-center gap-3">
                      <input type="range" min="10" max="200" defaultValue="80" className="flex-1" />
                      <span className="text-sm font-medium w-8">80</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-brand-success/10 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-lg font-bold text-brand-success">$18K</div>
                        <div className="text-xs text-muted-foreground">Monthly Savings</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-brand-success">315%</div>
                        <div className="text-xs text-muted-foreground">ROI in Year 1</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Based on average $150/hr developer cost and 40% time savings
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Cost Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span>Current OSS Maintenance</span>
                    <span className="font-medium">$24,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Open Source Economy</span>
                    <span className="font-medium text-brand-primary">$6,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-border/50">
                    <span className="font-medium">Net Savings</span>
                    <span className="font-bold text-brand-success">$18,000/mo</span>
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">
                  Get Custom ROI Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}