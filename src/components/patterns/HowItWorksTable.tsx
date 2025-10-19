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
  Bug,
  LifeBuoy,
  UserCheck,
  Plus,
  Shield,
  FileText,
  X
} from 'lucide-react';

interface HowItWorksTableProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksTable({ className = '', onNavigation }: HowItWorksTableProps) {
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
    <section className={`py-16 md:py-24 bg-gradient-to-r from-background to-brand-secondary/20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Service Plans & Enterprise Features"
          description="Compare different service tiers and enterprise add-ons to find the perfect fit"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-full border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-muted/50">
              <div className="p-4 font-semibold">Service Category</div>
              <div className="p-4 text-center font-semibold border-l border-border">Basic Mode</div>
              <div className="p-4 text-center font-semibold border-l border-border bg-brand-primary/10">Advanced Mode</div>
              <div className="p-4 text-center font-semibold border-l border-border bg-brand-success/10">Enterprise</div>
            </div>

            {/* Core Services Row */}
            <div className="grid grid-cols-4 border-t border-border">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Core Services</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Bug fixes, support, advisory</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Best Effort</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">With SLAs</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Priority SLAs</div>
              </div>
            </div>

            {/* Custom Development Row */}
            <div className="grid grid-cols-4 border-t border-border">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Custom Development</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Features, training, reviews</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Standard</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Prioritized</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Dedicated Time</div>
              </div>
            </div>

            {/* NDAs Row */}
            <div className="grid grid-cols-4 border-t border-border">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Non-Disclosure Agreements</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Confidentiality protection</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <X className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                <span className="text-muted-foreground text-sm">Not included</span>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Available</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Included</div>
              </div>
            </div>

            {/* Dedicated Support Row */}
            <div className="grid grid-cols-4 border-t border-border">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Dedicated Support Channels</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Private communication</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <X className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                <span className="text-muted-foreground text-sm">Community</span>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Shared Channel</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                <div className="text-sm">Private Channel</div>
              </div>
            </div>

            {/* Response Time Row */}
            <div className="grid grid-cols-4 border-t border-border">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <LifeBuoy className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Response Time</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Support response guarantees</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <div className="text-sm">48-72 hours</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <div className="text-sm">24 hours</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <div className="text-sm">4-8 hours</div>
              </div>
            </div>

            {/* Pricing Row */}
            <div className="grid grid-cols-4 border-t border-border bg-muted/30">
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Monthly Investment</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Per maintainer relationship</div>
              </div>
              <div className="p-4 text-center border-l border-border">
                <div className="text-2xl font-bold text-brand-primary">$2,500</div>
                <div className="text-xs text-muted-foreground">per month</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                <div className="text-2xl font-bold text-brand-primary">$7,500</div>
                <div className="text-xs text-muted-foreground">per month</div>
              </div>
              <div className="p-4 text-center border-l border-border bg-brand-success/5">
                <div className="text-2xl font-bold text-brand-success">Custom</div>
                <div className="text-xs text-muted-foreground">contact us</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Basic Mode</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Essential services with community-level support for startups and small teams.
              </p>
              <Button variant="outline" size="sm">
                Start Basic
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-brand-primary/50 bg-brand-primary/5">
            <CardContent className="p-6">
              <Badge className="mb-3">Most Popular</Badge>
              <h4 className="font-semibold mb-3">Advanced Mode</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Professional services with SLAs and priority support for growing teams.
              </p>
              <Button size="sm">
                Start Advanced
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Enterprise</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Custom solutions with dedicated support for large organizations.
              </p>
              <Button variant="outline" size="sm">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}