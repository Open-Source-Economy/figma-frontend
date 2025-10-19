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
  Globe,
  GraduationCap
} from 'lucide-react';

interface HowItWorksIndustryProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksIndustry({ className = '', onNavigation }: HowItWorksIndustryProps) {
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
          description="Industry-specific solutions for Financial, Healthcare, and E-commerce"
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

          {/* Right side - Industry Solutions */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Industry Solutions</h4>
                
                <div className="space-y-4">
                  <div className="p-3 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-brand-primary" />
                      <span className="font-medium text-sm">Financial Services</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Compliance-first approach with SOC 2, audit trails, and security reviews.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">SOC 2</Badge>
                      <Badge variant="outline" className="text-xs">Audit Logs</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-brand-success" />
                      <span className="font-medium text-sm">Healthcare</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      HIPAA-compliant support with specialized security and privacy expertise.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">HIPAA</Badge>
                      <Badge variant="outline" className="text-xs">Privacy</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-border/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-brand-accent" />
                      <span className="font-medium text-sm">E-commerce</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      High-availability support with performance optimization and scaling expertise.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">24/7 SLA</Badge>
                      <Badge variant="outline" className="text-xs">Performance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-warning/20 bg-brand-warning/5">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-brand-warning" />
                <h4 className="font-semibold mb-2">Custom Industry Solutions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Need specialized compliance or regulatory support? We work with you to create custom solutions.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Discuss Your Industry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}