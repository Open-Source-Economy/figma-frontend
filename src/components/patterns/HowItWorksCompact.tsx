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
  Bug,
  LifeBuoy,
  UserCheck,
  Plus,
  Shield,
  FileText,
  GraduationCap,
  AlertTriangle,
  Heart,
  Globe,
  Zap,
  ArrowDown,
  Star,
  BarChart3
} from 'lucide-react';

interface HowItWorksCompactProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksCompact({ className = '', onNavigation }: HowItWorksCompactProps) {
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
      color: 'brand-warning',
      link: {
        text: 'Learn how funds are redistributed',
        href: 'fund-redistribution'
      }
    }
  ];

  const services = [
    { name: 'Bug Fix Prioritization', icon: <Bug className="w-4 h-4" />, popular: true },
    { name: 'Technical Support', icon: <LifeBuoy className="w-4 h-4" />, popular: true },
    { name: 'Advisory Services', icon: <UserCheck className="w-4 h-4" />, popular: true },
    { name: 'Custom Features', icon: <Plus className="w-4 h-4" />, popular: false },
    { name: 'LTS & Security', icon: <Shield className="w-4 h-4" />, popular: true },
    { name: 'VEX/CVE Support', icon: <AlertTriangle className="w-4 h-4" />, popular: true },
    { name: 'Training & Workshops', icon: <GraduationCap className="w-4 h-4" />, popular: false },
    { name: 'Code Reviews', icon: <FileText className="w-4 h-4" />, popular: false },
    { name: 'Architecture Guidance', icon: <Globe className="w-4 h-4" />, popular: false },
    { name: 'Migration Support', icon: <ArrowRight className="w-4 h-4" />, popular: false },
    { name: 'Performance Optimization', icon: <Zap className="w-4 h-4" />, popular: false },
    { name: 'Compliance Support', icon: <Shield className="w-4 h-4" />, popular: false }
  ];

  const enterpriseAddOns = [
    { name: 'Service Level Agreements (SLAs)', popular: true },
    { name: 'Non-Disclosure Agreements (NDAs)', popular: true },
    { name: 'Dedicated Support Channels', popular: false },
    { name: 'Priority Response Times', popular: true },
    { name: 'Custom Contract Terms', popular: false },
    { name: 'Brand Recognition Programs', popular: false },
    { name: 'Executive Reporting', popular: false },
    { name: 'Compliance Documentation', popular: false }
  ];

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How It Works"
          description="A simple, straightforward process"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        <div className="max-w-2xl mx-auto space-y-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start gap-6 p-6 rounded-lg border border-border/50 hover:border-brand-primary/30 transition-colors">
              <div className={`w-10 h-10 rounded-full bg-${step.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {step.link && (
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto mt-2 text-brand-primary hover:text-brand-primary-dark"
                    onClick={() => onNavigation?.(step.link.href)}
                  >
                    {step.link.text} <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                )}
              </div>
              {index < processSteps.length - 1 && (
                <ArrowDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2" />
              )}
            </div>
          ))}
        </div>

        {/* Comprehensive Services Section */}
        <div className="mt-16 space-y-12">
          {/* Core Services */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Available Services</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {services.map((service) => (
                <Badge 
                  key={service.name}
                  variant={service.popular ? "default" : "outline"}
                  className={`px-4 py-2 text-sm ${service.popular ? 'bg-brand-primary' : ''}`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                  {service.popular && <Star className="w-3 h-3 ml-1 fill-current" />}
                </Badge>
              ))}
            </div>
          </div>

          {/* Enterprise Add-ons */}
          <div className="text-center">
            <Card className="border-brand-accent/20 bg-brand-accent/10 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-brand-primary" />
                  <h4 className="font-semibold text-brand-primary">Enterprise Add-ons Available</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For enterprises with specific requirements, we offer customized solutions including 
                  SLAs, NDAs, and other enterprise-grade features available on-demand.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {enterpriseAddOns.map((addon) => (
                    <Badge 
                      key={addon.name}
                      variant="outline" 
                      className={`text-xs px-3 py-1 ${addon.popular ? 'border-brand-primary/30 text-brand-primary bg-brand-primary/5' : 'border-brand-neutral-300/30'}`}
                    >
                      {addon.name}
                      {addon.popular && <Star className="w-3 h-3 ml-1 fill-current" />}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-brand-highlight/10 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-6 h-6 text-brand-primary" />
                    <h4 className="text-xl font-semibold">Ready to Get Started?</h4>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Connect with expert maintainers today and transform how your enterprise uses open source. 
                    From bug fixes to custom SLAs, we have everything you need.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="px-8">
                    <Users className="w-4 h-4 mr-2" />
                    Start with Basic Mode
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    <Shield className="w-4 h-4 mr-2" />
                    Request Enterprise Demo
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-brand-accent" />
                      <span>No setup fees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-brand-accent" />
                      <span>500+ expert maintainers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-brand-accent" />
                      <span>24/7 support available</span>
                    </div>
                  </div>

                  {/* Non-Profit Transparency Section */}
                  <div className="mt-6 pt-6 border-t border-brand-highlight/20">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Heart className="w-5 h-5 text-brand-highlight" />
                      <h5 className="font-semibold text-brand-highlight">Non-Profit Transparency</h5>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center max-w-lg mx-auto">
                      As a non-profit, every dollar you pay contributes to maintainer sustainability, 
                      dependency support, and ecosystem health. See exactly where your funds go.
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-brand-highlight/30 text-brand-highlight hover:bg-brand-highlight/10"
                        onClick={() => onNavigation?.('fund-redistribution')}
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Fund Distribution
                      </Button>
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