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
  GraduationCap,
  AlertTriangle,
  Globe,
  Zap
} from 'lucide-react';

interface HowItWorksCarouselProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksCarousel({ className = '', onNavigation }: HowItWorksCarouselProps) {
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
    { name: 'Performance Optimization', icon: <Zap className="w-4 h-4" />, popular: false }
  ];

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
    <section className={`py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-accent/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Your Complete Open Source Strategy"
          description="Scroll through our comprehensive service offerings and enterprise solutions"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-blue-100">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Horizontal scrolling service cards */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <Card key={service.name} className="w-80 flex-shrink-0 border-white/20 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-white">{service.name}</h4>
                      {service.popular && (
                        <Badge variant="secondary" className="text-xs bg-brand-warning text-brand-primary">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-blue-100 mb-4">
                    Expert {service.name.toLowerCase()} services delivered by the maintainers who built your stack.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-blue-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>SLA Available</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise features grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
              <h4 className="font-semibold mb-3 text-white">Service Level Agreements</h4>
              <p className="text-sm text-blue-100 mb-4">
                Guaranteed response times and resolution SLAs for your critical dependencies.
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Configure SLA
              </Button>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-white" />
              <h4 className="font-semibold mb-3 text-white">Non-Disclosure Agreements</h4>
              <p className="text-sm text-blue-100 mb-4">
                Enterprise-grade confidentiality for sensitive projects and proprietary requirements.
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Request NDA
              </Button>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <h4 className="font-semibold mb-3 text-white">Dedicated Support</h4>
              <p className="text-sm text-blue-100 mb-4">
                Private channels and dedicated maintainer time for your enterprise needs.
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Get Access
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}