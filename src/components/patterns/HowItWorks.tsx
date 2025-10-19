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
  DollarSign,
  Globe,
  Zap
} from 'lucide-react';

interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className = "" }: HowItWorksProps) {
  const processSteps = [
    {
      step: "1",
      title: "Connect with Experts",
      description: "Get matched with the actual maintainers of your critical open source dependencies",
      icon: <Users className="w-6 h-6" />,
      color: "brand-primary"
    },
    {
      step: "2", 
      title: "Define Your Needs",
      description: "Discuss your requirements and get a custom service plan tailored to your enterprise",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "brand-accent"
    },
    {
      step: "3",
      title: "Get Expert Solutions",
      description: "Receive direct support, fixes, and guidance from the people who built the software",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "brand-success"
    }
  ];

  const services = [
    { icon: <Bug className="w-5 h-5" />, name: "Bug Fix Prioritization", popular: true },
    { icon: <LifeBuoy className="w-5 h-5" />, name: "Technical Support", popular: true },
    { icon: <UserCheck className="w-5 h-5" />, name: "Advisory Services", popular: false },
    { icon: <Plus className="w-5 h-5" />, name: "Custom Features", popular: false },
    { icon: <Shield className="w-5 h-5" />, name: "LTS & Security", popular: true },
    { icon: <AlertTriangle className="w-5 h-5" />, name: "VEX/CVE Support", popular: false },
    { icon: <GraduationCap className="w-5 h-5" />, name: "Training & Workshops", popular: false },
    { icon: <FileText className="w-5 h-5" />, name: "Code Reviews", popular: false }
  ];

  const fundAllocation = [
    {
      percentage: "60%",
      title: "Direct Service Delivery",
      description: "Payments to expert maintainers for their time and expertise",
      icon: <Zap className="w-5 h-5" />,
      color: "brand-primary"
    },
    {
      percentage: "25%", 
      title: "Project Sustainability",
      description: "Donations to fund ongoing maintenance and infrastructure costs",
      icon: <Heart className="w-5 h-5" />,
      color: "brand-success"
    },
    {
      percentage: "10%",
      title: "Ecosystem Health",
      description: "Support for critical dependencies and smaller projects in the supply chain",
      icon: <Globe className="w-5 h-5" />,
      color: "brand-accent"
    },
    {
      percentage: "5%",
      title: "Platform Operations",
      description: "Minimal fee to maintain our non-profit platform and operations",
      icon: <DollarSign className="w-5 h-5" />,
      color: "brand-warning"
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-brand-secondary/20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Direct Access to Open Source Experts"
          description="Connect with the maintainers who built your stack through our non-profit platform"
          spacing="lg"
          titleLevel="h2"
          align="center"
          maxWidth="3xl"
        />

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="border-border/50 hover:border-brand-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-${step.color} mx-auto mb-4 flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                  <div className="mb-3">
                    <Badge variant="outline" className={`text-${step.color} border-${step.color}/20 bg-${step.color}/5 mb-2`}>
                      Step {step.step}
                    </Badge>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Credits & Modes */}
        <div className="mb-16">
          <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 max-w-5xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-brand-primary" />
                  <Badge variant="outline" className="text-brand-primary border-brand-primary/20 bg-white/50">
                    Flexible Service Credits
                  </Badge>
                </div>
                <h3 className="mb-4 text-brand-primary">One Platform, All Maintainers</h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Get a set of service credits that you can use throughout the entire platform for on-demand services 
                  from <strong>all maintainers registered</strong> on Open Source Economy. Choose from two service modes 
                  based on your enterprise needs.
                </p>
              </div>

              {/* Two Service Modes */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-brand-success/20 bg-brand-success/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-success rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-brand-success border-brand-success/20 bg-white/50 mb-1">
                          Basic Mode
                        </Badge>
                        <h4 className="font-semibold text-brand-success">Monthly Service Credits</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      Subscribe monthly to service credits that you can use throughout the platform for any open source project. 
                      Submit service requests on-demand, and open source maintainers will provide their best effort support.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-success rounded-full" />
                        Best effort response from maintainers
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-success rounded-full" />
                        Flexible credit usage across all projects
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-success rounded-full" />
                        Cost-effective for general support needs
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-brand-primary/20 bg-brand-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-brand-primary border-brand-primary/20 bg-white/50 mb-1">
                          Advanced Mode
                        </Badge>
                        <h4 className="font-semibold text-brand-primary">Enterprise SLAs</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      Get guaranteed Service Level Agreements (SLAs) and book predefined time slots with maintainers. 
                      Perfect for mission-critical projects that require guaranteed response times and dedicated support.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                        Guaranteed SLA response times
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                        Pre-booked dedicated maintainer time
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                        Priority support for critical issues
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Expert Maintainers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">1</div>
                  <div className="text-sm text-muted-foreground">Enterprise Contract</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">2</div>
                  <div className="text-sm text-muted-foreground">Service Modes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 text-brand-primary border-brand-primary/20 bg-brand-primary/5">
              Available Services
            </Badge>
            <h3 className="mb-3">Expert Services Ready for Your Enterprise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use your service credits for any of these expert services from our network of registered maintainers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`
                  group relative p-4 rounded-lg border transition-all duration-200 
                  ${service.popular 
                    ? 'border-brand-primary/20 bg-brand-primary/5 hover:border-brand-primary/40' 
                    : 'border-border/50 bg-card hover:border-brand-primary/20'
                  }
                  hover:scale-[1.02] cursor-default
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center
                    ${service.popular 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-muted text-muted-foreground group-hover:bg-brand-primary/10 group-hover:text-brand-primary'
                    }
                  `}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${service.popular ? 'text-brand-primary' : 'text-foreground'}`}>
                      {service.name}
                    </p>
                    {service.popular && (
                      <Badge variant="secondary" className="text-xs mt-1 px-1.5 py-0.5">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Add-ons */}
          <div className="mt-8 text-center">
            <Card className="border-brand-accent/20 bg-brand-accent/10 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium text-brand-primary">Enterprise Add-ons Available</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom NDAs, SLAs, and brand recognition campaigns available on request for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs border-brand-primary/20 text-brand-primary">
                    Custom NDAs
                  </Badge>
                  <Badge variant="outline" className="text-xs border-brand-primary/20 text-brand-primary">
                    Service SLAs
                  </Badge>
                  <Badge variant="outline" className="text-xs border-brand-primary/20 text-brand-primary">
                    Brand Recognition
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Non-Profit Fund Allocation */}
        <div>
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 text-brand-success border-brand-success/20 bg-brand-success/5">
              <Heart className="w-3 h-3 mr-1" />
              Non-Profit Mission
            </Badge>
            <h3 className="mb-3">Where Your Investment Goes</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a non-profit, we ensure complete transparency in how your payments contribute to a sustainable open source ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundAllocation.map((allocation) => (
              <Card 
                key={allocation.title}
                className={`border-${allocation.color}/20 hover:border-${allocation.color}/40 transition-colors`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-full bg-${allocation.color} mx-auto mb-4 flex items-center justify-center text-white`}>
                    {allocation.icon}
                  </div>
                  <div className={`text-2xl font-bold text-${allocation.color} mb-2`}>
                    {allocation.percentage}
                  </div>
                  <h4 className="font-medium mb-2">{allocation.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {allocation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="border-brand-primary/10 bg-brand-primary/5 max-w-3xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-brand-success" />
                  <span className="font-medium text-brand-primary">100% Transparency Guarantee</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Every invoice includes a detailed breakdown showing exactly how your payment supports maintainers, 
                  project sustainability, ecosystem health, and platform operations.
                </p>
                <Button variant="outline" size="sm" className="border-brand-primary/20 text-brand-primary hover:bg-brand-primary/10">
                  View Sample Breakdown
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}