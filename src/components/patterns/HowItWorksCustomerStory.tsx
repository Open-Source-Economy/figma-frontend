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
  Star,
  Bug,
  UserCheck,
  Shield,
  FileText
} from 'lucide-react';

interface HowItWorksCustomerStoryProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksCustomerStory({ className = '', onNavigation }: HowItWorksCustomerStoryProps) {
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
          description="Real success stories from our enterprise customers"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
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

          {/* Right side - Customer Success Story */}
          <div className="space-y-6">
            {/* Main Success Story Card */}
            <Card className="border-brand-success/20 bg-gradient-to-br from-brand-success/5 to-brand-primary/5 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline" className="text-brand-success border-brand-success/20 bg-brand-success/10">
                    <Star className="w-3 h-3 mr-1" />
                    Customer Success
                  </Badge>
                  <Badge variant="outline" className="text-brand-primary border-brand-primary/20">
                    Enterprise
                  </Badge>
                </div>

                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-brand-accent/30 rounded-lg">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">TC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">TechCorp Inc.</h4>
                    <p className="text-sm text-muted-foreground">Financial Technology • 500+ Engineers</p>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 border-l-4 border-brand-warning bg-brand-warning/10 rounded-r-lg">
                    <h5 className="font-medium mb-2 text-brand-warning">The Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      Critical React performance bottleneck affecting 2M+ users. Internal team estimated 3-6 months to resolve.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-brand-success bg-brand-success/10 rounded-r-lg">
                    <h5 className="font-medium mb-2 text-brand-success">The Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      Connected with React core maintainer in 24 hours. Issue diagnosed and patched in 5 days with enterprise SLA.
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="relative p-6 bg-white/50 rounded-lg border border-brand-primary/20 mb-6">
                  <div className="absolute top-4 left-4 text-4xl text-brand-primary/20">"</div>
                  <p className="text-base italic mb-4 pl-8">
                    Open Source Economy gave us superpowers. Having direct access to the React maintainer was like having the creator of the technology on our team. The fix was elegant and future-proof.
                  </p>
                  <div className="flex items-center gap-3 pl-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-success rounded-full flex items-center justify-center">
                      <span className="font-semibold text-white">SC</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">VP of Engineering</div>
                    </div>
                  </div>
                </blockquote>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-brand-success/10 rounded-lg border border-brand-success/20">
                    <div className="text-2xl font-bold text-brand-success mb-1">5 Days</div>
                    <div className="text-xs text-muted-foreground">Resolution Time</div>
                    <div className="text-xs text-brand-success mt-1">vs 3-6 months</div>
                  </div>
                  <div className="text-center p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                    <div className="text-2xl font-bold text-brand-primary mb-1">$240K</div>
                    <div className="text-xs text-muted-foreground">Cost Savings</div>
                    <div className="text-xs text-brand-primary mt-1">Dev time + downtime</div>
                  </div>
                  <div className="text-center p-4 bg-brand-warning/10 rounded-lg border border-brand-warning/20">
                    <div className="text-2xl font-bold text-brand-warning mb-1">2M+</div>
                    <div className="text-xs text-muted-foreground">Users Impacted</div>
                    <div className="text-xs text-brand-warning mt-1">Improved performance</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Details Card */}
            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Services Used</h4>
                  <Badge variant="outline" className="text-brand-primary border-brand-primary/20">
                    Enterprise Package
                  </Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                      <Bug className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Priority Bug Fix</div>
                      <div className="text-xs text-muted-foreground">24h SLA with React maintainer</div>
                    </div>
                    <div className="text-sm font-semibold text-brand-success">✓ Used</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-8 h-8 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Advisory Services</div>
                      <div className="text-xs text-muted-foreground">Architecture review & optimization</div>
                    </div>
                    <div className="text-sm font-semibold text-brand-success">✓ Used</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-8 h-8 bg-brand-success/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-brand-success" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Enterprise SLA</div>
                      <div className="text-xs text-muted-foreground">Custom response times & guarantees</div>
                    </div>
                    <div className="text-sm font-semibold text-brand-success">✓ Active</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Full Case Study
                  </Button>
                  <Button variant="outline" size="sm">
                    Similar Success Stories
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