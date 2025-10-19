import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
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
  Zap
} from 'lucide-react';

interface HowItWorksInteractiveProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksInteractive({ className = '', onNavigation }: HowItWorksInteractiveProps) {
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
    { name: 'Brand Recognition Programs', popular: false }
  ];

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br from-brand-secondary/30 to-brand-accent/20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Three Simple Steps to Success"
          description="Hover over each step to see the details"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={step.step} className="group relative">
              <Card className="border-border/50 hover:border-brand-primary/50 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-xl">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/5 to-${step.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${step.color} to-${step.color}-dark mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    
                    <div className={`text-4xl font-bold text-${step.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Connecting arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-brand-primary/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-brand-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Services Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-brand-primary border-brand-primary/20 bg-white/50 mb-4">
              Service Portfolio
            </Badge>
            <h3 className="text-2xl font-semibold mb-4">Everything Your Enterprise Needs</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive service catalog covers all aspects of open source maintenance and support. 
              With SLAs, NDAs, and custom agreements available on-demand.
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {services.slice(0, 12).map((service) => (
              <Card key={service.name} className="border-border/50 hover:border-brand-primary/50 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center transition-colors ${
                    service.popular 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-muted text-muted-foreground group-hover:bg-brand-primary/10 group-hover:text-brand-primary'
                  }`}>
                    {service.icon}
                  </div>
                  <h4 className="text-sm font-medium leading-tight">{service.name}</h4>
                  {service.popular && (
                    <Badge variant="secondary" className="text-xs mt-2 px-2 py-0.5">Popular</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Features */}
          <Card className="border-brand-warning/20 bg-gradient-to-r from-brand-warning/5 to-brand-accent/5">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-brand-primary" />
                <h4 className="text-xl font-semibold">Enterprise Ready</h4>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Scale your open source strategy with enterprise-grade features including Service Level Agreements, 
                Non-Disclosure Agreements, and dedicated support channels - all available on-demand.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {enterpriseAddOns.slice(0, 6).map((addon) => (
                  <Badge key={addon.name} variant="outline" className="px-3 py-1 text-xs border-brand-primary/20 text-brand-primary">
                    {addon.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}