import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
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
  GraduationCap,
  AlertTriangle,
  Globe,
  Zap
} from 'lucide-react';

interface HowItWorksAccordionProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksAccordion({ className = '', onNavigation }: HowItWorksAccordionProps) {
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

  const serviceCategories = [
    {
      id: 'core-services',
      title: 'Core Services',
      icon: <Bug className="w-5 h-5" />,
      description: 'Essential support and maintenance services',
      services: [
        { name: 'Bug Fix Prioritization', icon: <Bug className="w-4 h-4" />, description: 'Fast-track critical bug fixes with priority queuing and dedicated maintainer attention' },
        { name: 'Technical Support', icon: <LifeBuoy className="w-4 h-4" />, description: '24/7 technical assistance from expert maintainers who understand your stack' },
        { name: 'Advisory Services', icon: <UserCheck className="w-4 h-4" />, description: 'Strategic guidance on architecture, best practices, and technology decisions' },
        { name: 'LTS & Security', icon: <Shield className="w-4 h-4" />, description: 'Long-term support and proactive security vulnerability management' }
      ]
    },
    {
      id: 'development',
      title: 'Custom Development',
      icon: <Plus className="w-5 h-5" />,
      description: 'Bespoke development and enhancement services',
      services: [
        { name: 'Custom Features', icon: <Plus className="w-4 h-4" />, description: 'Bespoke feature development by the original maintainers and core contributors' },
        { name: 'Code Reviews', icon: <FileText className="w-4 h-4" />, description: 'Expert code review, quality assurance, and architectural recommendations' },
        { name: 'Performance Optimization', icon: <Zap className="w-4 h-4" />, description: 'Performance auditing, bottleneck identification, and optimization strategies' },
        { name: 'Migration Support', icon: <ArrowRight className="w-4 h-4" />, description: 'Seamless migration assistance, planning, and execution support' }
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      icon: <Shield className="w-5 h-5" />,
      description: 'Enterprise-grade compliance and specialized services',
      services: [
        { name: 'VEX/CVE Support', icon: <AlertTriangle className="w-4 h-4" />, description: 'Comprehensive vulnerability management, CVE coordination, and security patches' },
        { name: 'Training & Workshops', icon: <GraduationCap className="w-4 h-4" />, description: 'Team training, knowledge transfer sessions, and best practice workshops' },
        { name: 'Compliance Documentation', icon: <FileText className="w-4 h-4" />, description: 'Regulatory compliance support, audit documentation, and certification assistance' },
        { name: 'Architecture Guidance', icon: <Globe className="w-4 h-4" />, description: 'System design consulting, architectural reviews, and scalability planning' }
      ]
    },
    {
      id: 'enterprise-addons',
      title: 'Enterprise Add-ons',
      icon: <Users className="w-5 h-5" />,
      description: 'Premium enterprise features and dedicated support',
      services: [
        { name: 'Service Level Agreements', description: 'Guaranteed response times and resolution SLAs tailored to your business needs' },
        { name: 'Non-Disclosure Agreements', description: 'Enterprise-grade confidentiality for sensitive projects and proprietary requirements' },
        { name: 'Dedicated Support Channels', description: 'Private communication channels and dedicated maintainer time allocation' },
        { name: 'Brand Recognition Programs', description: 'Public acknowledgment of your support for open source ecosystem health' }
      ]
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-brand-neutral-200/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Detailed Service Breakdown"
          description="Expand each section to explore our comprehensive service offerings and enterprise features"
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

        {/* Accordion Interface */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="multiple" className="space-y-4">
            {serviceCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border border-border rounded-lg bg-background">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {category.services.map((service) => (
                      <Card key={service.name} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            {service.icon && (
                              <div className="w-8 h-8 bg-brand-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                                {service.icon}
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-medium mb-2">{service.name}</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                {service.description}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-brand-success">
                                <CheckCircle className="w-3 h-3" />
                                <span>Available</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button size="lg">
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}