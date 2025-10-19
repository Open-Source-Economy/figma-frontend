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
  Shield,
  AlertTriangle
} from 'lucide-react';

interface HowItWorksSecurityProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksSecurity({ className = '', onNavigation }: HowItWorksSecurityProps) {
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
          description="Enterprise security and compliance focus"
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

          {/* Right side - Security & Compliance Focus */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-brand-primary" />
                  <h4 className="font-semibold">Enterprise Security</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                    <span className="text-sm">SOC 2 Type II</span>
                    <Badge variant="secondary" className="text-xs bg-brand-accent/10 text-brand-accent">Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                    <span className="text-sm">GDPR Compliant</span>
                    <Badge variant="secondary" className="text-xs bg-brand-accent/10 text-brand-accent">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                    <span className="text-sm">VEX/CVE Support</span>
                    <Badge variant="secondary" className="text-xs bg-brand-accent/10 text-brand-accent">Available</Badge>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-brand-accent/10 rounded-lg">
                  <h5 className="font-medium text-sm mb-2">Enterprise Add-ons</h5>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• Custom NDAs and security agreements</div>
                    <div>• Dedicated security liaison</div>
                    <div>• Priority vulnerability disclosure</div>
                    <div>• Compliance documentation support</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-accent/20 bg-brand-accent/5">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
                <h4 className="font-semibold mb-2">Supply Chain Security</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Protect your dependencies with expert maintainer oversight
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Request Security Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}