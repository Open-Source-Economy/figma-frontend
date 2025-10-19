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
  FileCheck,
  Banknote
} from 'lucide-react';

interface HowItWorksExpertsProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksExperts({ className = '', onNavigation }: HowItWorksExpertsProps) {
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
          description="Direct access to expert maintainers like Dan Abramov, Evan You, and Ryan Dahl"
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
                  {step.step === '04' && (
                    <button 
                      onClick={() => onNavigation('fund-redistribution')}
                      className="text-brand-primary hover:text-brand-primary-dark text-sm font-medium mt-2 inline-flex items-center gap-1 transition-colors"
                    >
                      Learn how funds are redistributed
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  
                  {/* Step-specific badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {step.step === '01' && (
                      <>
                        <Badge variant="outline" className="text-xs bg-transparent border-none">
                          <Shield className="w-3 h-3 mr-1" />
                          NDA available
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-transparent border-none">
                          <FileCheck className="w-3 h-3 mr-1" />
                          SLAs
                        </Badge>
                      </>
                    )}
                    {step.step === '02' && (
                      <Badge variant="outline" className="text-xs bg-transparent border-none">
                        <Users className="w-3 h-3 mr-1" />
                        Only from open source maintainers
                      </Badge>
                    )}
                    {step.step === '04' && (
                      <Badge variant="outline" className="text-xs bg-transparent border-none">
                        <Banknote className="w-3 h-3 mr-1" />
                        Funds distributed to whole stack
                      </Badge>
                    )}
                  </div>
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

          {/* Right side - Live Expert Profiles */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Why We're Different</h4>
                <p className="text-sm text-muted-foreground mb-4">Partner with the only 501(c)(3) non-profit connecting enterprises directly with open source creators.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Enterprise-Grade Security</div>
                      <div className="text-xs text-muted-foreground mb-1">SOC 2 compliance, NDAs, and SLAs included</div>
                      <Badge variant="secondary" className="text-xs">Trusted by Fortune 500</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                    <div className="w-10 h-10 bg-brand-success rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Ecosystem Sustainability</div>
                      <div className="text-xs text-muted-foreground mb-1">Funds flow to maintainers and dependencies</div>
                      <Badge variant="secondary" className="text-xs">Non-Profit Impact</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Direct Creator Access</div>
                      <div className="text-xs text-muted-foreground mb-1">Skip intermediaries, work with original authors</div>
                      <Badge variant="secondary" className="text-xs">Expert Maintainers</Badge>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <Banknote className="w-4 h-4 mr-2" />
                  See Our Impact
                </Button>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
}