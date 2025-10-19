import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
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
  Zap,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Building2,
  Code,
  Search,
  GitBranch,
  Workflow,
  Calendar,
  Mail,
  Phone,
  Award,
  Lock,
  Database,
  Monitor,
  Handshake
} from 'lucide-react';

interface DetailedHowItWorksProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function DetailedHowItWorks({ className = '', onNavigation }: DetailedHowItWorksProps) {
  const [activeTab, setActiveTab] = useState('process');
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      subtitle: 'Tell us what you need',
      description: 'Submit your open source challenge through our enterprise portal. Our team analyzes your tech stack, timeline, and specific requirements.',
      icon: <Search className="w-8 h-8" />,
      color: 'brand-primary',
      details: [
        'Tech stack analysis and dependency mapping',
        'Requirements gathering and scope definition',
        'Timeline and budget planning',
        'Risk assessment and mitigation strategies'
      ],
      duration: '1-2 days',
      deliverable: 'Detailed project scope and maintainer matching plan'
    },
    {
      step: '02', 
      title: 'Expert Matching',
      subtitle: 'Get matched with maintainers',
      description: 'We connect you directly with verified maintainers who created and actively maintain your critical dependencies.',
      icon: <Users className="w-8 h-8" />,
      color: 'brand-accent',
      details: [
        'Maintainer verification and background checks',
        'Expertise assessment and portfolio review',
        'Availability confirmation and scheduling',
        'Contract negotiation and agreement setup'
      ],
      duration: '2-3 days',
      deliverable: 'Verified expert team and service agreement'
    },
    {
      step: '03',
      title: 'Service Delivery',
      subtitle: 'Receive professional support',
      description: 'Expert maintainers work on your project while following enterprise-grade processes and quality standards.',
      icon: <Code className="w-8 h-8" />,
      color: 'brand-success',
      details: [
        'Daily progress updates and communication',
        'Enterprise-grade security and compliance',
        'Quality assurance and code review processes',
        'Documentation and knowledge transfer'
      ],
      duration: 'Project-based',
      deliverable: 'High-quality solutions with full documentation'
    },
    {
      step: '04',
      title: 'Ecosystem Impact',
      subtitle: 'Support open source health',
      description: 'Your investment creates lasting value by supporting maintainer sustainability and ecosystem development.',
      icon: <Heart className="w-8 h-8" />,
      color: 'brand-highlight',
      details: [
        'Direct maintainer compensation and support',
        'Dependency health improvements',
        'Community contribution and knowledge sharing',
        'Long-term ecosystem sustainability'
      ],
      duration: 'Ongoing',
      deliverable: 'Strengthened open source ecosystem'
    }
  ];

  const serviceCategories = [
    {
      id: 'core',
      label: 'Core Services',
      icon: <Bug className="w-5 h-5" />,
      description: 'Essential maintenance and support services',
      services: [
        { 
          name: 'Bug Fix Prioritization', 
          icon: <Bug className="w-5 h-5" />, 
          description: 'Fast-track critical bug fixes with priority queuing and dedicated maintainer attention',
          pricing: 'From $500/fix',
          timeline: '24-72 hours'
        },
        { 
          name: 'Technical Support', 
          icon: <LifeBuoy className="w-5 h-5" />, 
          description: '24/7 technical assistance from expert maintainers with deep project knowledge',
          pricing: 'From $200/hour',
          timeline: 'Immediate'
        },
        { 
          name: 'Advisory Services', 
          icon: <UserCheck className="w-5 h-5" />, 
          description: 'Strategic guidance on architecture, best practices, and long-term planning',
          pricing: 'From $300/hour',
          timeline: 'Scheduled'
        },
        { 
          name: 'LTS & Security', 
          icon: <Shield className="w-5 h-5" />, 
          description: 'Long-term support, security patches, and vulnerability management',
          pricing: 'From $2000/month',
          timeline: 'Ongoing'
        }
      ]
    },
    {
      id: 'development',
      label: 'Development',
      icon: <Code className="w-5 h-5" />,
      description: 'Custom development and enhancement services',
      services: [
        { 
          name: 'Custom Features', 
          icon: <Plus className="w-5 h-5" />, 
          description: 'Bespoke feature development by core maintainers with deep project understanding',
          pricing: 'From $5000/feature',
          timeline: '1-4 weeks'
        },
        { 
          name: 'Code Reviews', 
          icon: <FileText className="w-5 h-5" />, 
          description: 'Expert code review, quality assurance, and architectural feedback',
          pricing: 'From $150/hour',
          timeline: '1-3 days'
        },
        { 
          name: 'Performance Optimization', 
          icon: <Zap className="w-5 h-5" />, 
          description: 'Performance auditing, bottleneck identification, and optimization strategies',
          pricing: 'From $3000/audit',
          timeline: '1-2 weeks'
        },
        { 
          name: 'Migration Support', 
          icon: <ArrowRight className="w-5 h-5" />, 
          description: 'Seamless migration assistance, planning, and implementation support',
          pricing: 'From $10000/project',
          timeline: '2-8 weeks'
        }
      ]
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      icon: <Building2 className="w-5 h-5" />,
      description: 'Enterprise-grade compliance and governance',
      services: [
        { 
          name: 'VEX/CVE Support', 
          icon: <AlertTriangle className="w-5 h-5" />, 
          description: 'Vulnerability management, CVE coordination, and security compliance',
          pricing: 'From $1500/month',
          timeline: 'Ongoing'
        },
        { 
          name: 'Training & Workshops', 
          icon: <GraduationCap className="w-5 h-5" />, 
          description: 'Team training, knowledge transfer sessions, and skill development',
          pricing: 'From $5000/session',
          timeline: '1-2 days'
        },
        { 
          name: 'Compliance Documentation', 
          icon: <FileText className="w-5 h-5" />, 
          description: 'Regulatory compliance documentation, audit trails, and governance reports',
          pricing: 'From $2500/report',
          timeline: '1 week'
        },
        { 
          name: 'SLA Management', 
          icon: <Award className="w-5 h-5" />, 
          description: 'Service level agreements, performance monitoring, and guaranteed response times',
          pricing: 'From $5000/month',
          timeline: 'Ongoing'
        }
      ]
    }
  ];

  const valuePillars = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, background-checked maintainers, and secure communication channels',
      features: ['SOC 2 Type II certified', 'Background verified experts', 'Encrypted communications', 'Audit trails']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Guaranteed Response',
      description: '24/7 support with guaranteed response times and escalation procedures',
      features: ['24/7 availability', '< 4 hour response', 'Escalation procedures', 'Status dashboard']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Transparent ROI',
      description: 'Clear pricing, detailed progress tracking, and measurable impact metrics',
      features: ['Fixed pricing models', 'Progress tracking', 'Impact metrics', 'Cost transparency']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Ecosystem Impact',
      description: 'Your investment directly supports maintainer sustainability and ecosystem health',
      features: ['Maintainer compensation', 'Dependency improvements', 'Community contributions', 'Long-term sustainability']
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-highlight/10 border border-brand-accent/20 rounded-full mb-6">
            <Workflow className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-brand-accent to-brand-highlight bg-clip-text text-transparent">
            From Challenge to Solution
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive process connects you with expert maintainers while supporting the entire open source ecosystem.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card border border-border/50">
            <TabsTrigger value="process" className="flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Process
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="value" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Value
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Impact
            </TabsTrigger>
          </TabsList>

          {/* Process Tab */}
          <TabsContent value="process" className="space-y-12">
            {/* Interactive Process Steps */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Step Navigation */}
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeStep === index 
                        ? 'transform scale-105' 
                        : 'hover:transform hover:scale-102'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <Card className={`border-2 transition-all duration-300 ${
                      activeStep === index 
                        ? 'border-brand-accent/50 shadow-lg shadow-brand-accent/10' 
                        : 'border-border/50 hover:border-brand-accent/30'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeStep === index 
                              ? 'bg-gradient-to-br from-brand-accent to-brand-accent-dark text-white' 
                              : 'bg-gradient-to-br from-muted to-muted-foreground/10 text-muted-foreground'
                          }`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {step.step}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{step.duration}</span>
                            </div>
                            <h3 className={`font-semibold transition-colors duration-300 ${
                              activeStep === index ? 'text-brand-accent' : 'text-foreground'
                            }`}>
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Step Details */}
              <div className="lg:sticky lg:top-8">
                <Card className="border border-brand-accent/20 bg-gradient-to-br from-card via-card to-brand-accent/5">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-accent-dark flex items-center justify-center text-white">
                        {processSteps[activeStep].icon}
                      </div>
                      <div>
                        <Badge className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 mb-2">
                          Step {processSteps[activeStep].step}
                        </Badge>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {processSteps[activeStep].title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {processSteps[activeStep].description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {processSteps[activeStep].details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-brand-success flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                        <p className="font-medium text-foreground">{processSteps[activeStep].duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Deliverable</p>
                        <p className="font-medium text-foreground text-sm">{processSteps[activeStep].deliverable}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Progress Indicator */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-brand-accent font-medium">
                      {Math.round(((activeStep + 1) / processSteps.length) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={((activeStep + 1) / processSteps.length) * 100} 
                    className="h-2 bg-muted"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-8">
            <div className="grid gap-8">
              {serviceCategories.map((category) => (
                <Card key={category.id} className="border border-border/50 hover:border-brand-accent/30 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent/10 to-brand-accent/20 flex items-center justify-center text-brand-accent">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{category.label}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.services.map((service, index) => (
                        <div key={index} className="group p-4 rounded-xl border border-border/30 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all duration-300">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center text-muted-foreground group-hover:from-brand-accent/10 group-hover:to-brand-accent/20 group-hover:text-brand-accent transition-all duration-300">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground group-hover:text-brand-accent transition-colors duration-300">
                                {service.name}
                              </h4>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-brand-accent font-medium">{service.pricing}</span>
                            <span className="text-muted-foreground">{service.timeline}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Value Tab */}
          <TabsContent value="value" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {valuePillars.map((pillar, index) => (
                <Card key={index} className="border border-border/50 hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-accent/20 flex items-center justify-center text-brand-accent">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Your Investment Creates Lasting Impact
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                As a non-profit organization, every dollar you invest goes directly toward building a sustainable open source ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-success/10 to-brand-success/20 flex items-center justify-center text-brand-success mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Maintainer Support</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direct compensation enables maintainers to dedicate more time to improving projects you depend on.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-accent/20 flex items-center justify-center text-brand-accent mx-auto mb-4">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Ecosystem Health</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Funding flows to dependencies and upstream projects, strengthening the entire ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-highlight/10 to-brand-highlight/20 flex items-center justify-center text-brand-highlight mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Long-term Sustainability</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creates sustainable funding models that ensure critical projects remain maintained and secure.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Transparency Dashboard Preview */}
            <Card className="border border-brand-accent/20 bg-gradient-to-br from-card via-card to-brand-accent/5">
              <CardHeader>
                <h4 className="text-xl font-semibold text-foreground">Transparent Fund Distribution</h4>
                <p className="text-muted-foreground">See exactly how your investment creates ecosystem impact</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-accent mb-1">70%</div>
                    <div className="text-sm text-muted-foreground">Direct to Maintainers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-success mb-1">15%</div>
                    <div className="text-sm text-muted-foreground">Dependency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-highlight mb-1">10%</div>
                    <div className="text-sm text-muted-foreground">Platform Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-1">5%</div>
                    <div className="text-sm text-muted-foreground">Ecosystem Development</div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
                  onClick={() => onNavigation && onNavigation('fund-redistribution')}
                >
                  View Full Transparency Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-border/50">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with expert maintainers today and start building a more sustainable open source future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigation && onNavigation('role-selection')}
              className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigation && onNavigation('services')}
              className="border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}