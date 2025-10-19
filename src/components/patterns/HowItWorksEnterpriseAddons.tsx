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
  Plus,
  FileText,
  Shield
} from 'lucide-react';

interface HowItWorksEnterpriseAddonsProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksEnterpriseAddons({ className = '', onNavigation }: HowItWorksEnterpriseAddonsProps) {
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
          description="Enterprise add-ons and customization options"
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

          {/* Right side - Enterprise Add-ons & Customization */}
          <div className="space-y-6">
            <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-brand-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Enterprise Add-ons</h4>
                    <p className="text-sm text-muted-foreground">Customized for your organization</p>
                  </div>
                </div>
                
                <div className="grid gap-4 mb-6">
                  <div className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-primary" />
                      <div>
                        <div className="font-medium">Non-Disclosure Agreements</div>
                        <div className="text-sm text-muted-foreground">Enterprise-grade confidentiality</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-brand-primary border-brand-primary/20">Available</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-brand-success" />
                      <div>
                        <div className="font-medium">Custom Service Level Agreements</div>
                        <div className="text-sm text-muted-foreground">Guaranteed response & resolution times</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-brand-success border-brand-success/20">SLA Ready</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-brand-warning" />
                      <div>
                        <div className="font-medium">Brand Recognition Campaigns</div>
                        <div className="text-sm text-muted-foreground">Showcase your open source support</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-brand-warning border-brand-warning/20">Marketing</Badge>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Request Custom Package
                  </Button>
                  <Button variant="outline" size="sm">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}