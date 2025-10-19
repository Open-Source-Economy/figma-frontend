import React, { useState } from 'react';
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
  Zap,
  ArrowDown,
  Play,
  Star,
  BarChart3
} from 'lucide-react';

interface HowItWorksAlternativesProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksAlternatives({ className = '', onNavigation }: HowItWorksAlternativesProps) {
  const [currentOption, setCurrentOption] = useState(1);
  
  const options = [
    { id: 1, name: "Real-time Enterprise Dashboard", description: "Live metrics and expert availability" },
    { id: 2, name: "Customer Success Story", description: "TechCorp case study with ROI metrics" },
    { id: 3, name: "Interactive Service Calculator", description: "Team size and pricing configurator" },
    { id: 4, name: "Security & Compliance Focus", description: "SOC 2, GDPR, and VEX/CVE support" },
    { id: 5, name: "Live Expert Profiles", description: "Dan Abramov, Evan You, Ryan Dahl" },
    { id: 6, name: "ROI Calculator", description: "Interactive sliders with cost breakdown" },
    { id: 7, name: "Live Support Interface", description: "Mock chat with maintainer" },
    { id: 8, name: "Industry Solutions", description: "Financial, Healthcare, E-commerce" },
    { id: 9, name: "Integration Timeline", description: "Implementation progress tracking" },
    { id: 10, name: "Service Configurator", description: "Interactive service selection" },
    { id: 11, name: "Vendor Comparison", description: "vs Traditional support benefits" },
    { id: 12, name: "Enterprise Add-ons & Customization", description: "NDAs, SLAs, and brand recognition campaigns" },
    { id: 13, name: "Non-Profit Fund Allocation", description: "Where every dollar goes for ecosystem health" },
    { id: 14, name: "Complete Transparency Dashboard", description: "Real-time impact tracking and fund distribution" }
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

  const fundAllocation = [
    {
      percentage: '60%',
      title: 'Direct Service',
      description: 'Expert maintainer compensation and service delivery costs',
      icon: <Zap className="w-6 h-6" />,
      color: 'brand-primary'
    },
    {
      percentage: '25%',
      title: 'Project Sustainability',
      description: 'Funding essential maintenance and long-term project health',
      icon: <Heart className="w-6 h-6" />,
      color: 'brand-success'
    },
    {
      percentage: '10%',
      title: 'Ecosystem Health',
      description: 'Supporting critical dependencies and upstream projects',
      icon: <Globe className="w-6 h-6" />,
      color: 'brand-accent'
    },
    {
      percentage: '5%',
      title: 'Platform Operations',
      description: 'Maintaining and improving the Open Source Economy platform',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'brand-warning'
    }
  ];

  return (
    <div className="space-y-24">
      {/* Alternative 1: Modern Minimal with Timeline */}
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 1: Timeline Design"
            title="How Open Source Economy Works"
            description="A streamlined process that connects enterprises with expert maintainers"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

          {/* Timeline Process */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-primary via-brand-accent to-brand-success"></div>
            
            {processSteps.map((step, index) => (
              <div key={step.step} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="border-border/50 hover:border-brand-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className={`text-${step.color} border-${step.color}/20 bg-${step.color}/5 mb-2`}>
                            Step {step.step}
                          </Badge>
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
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${step.color} border-4 border-background z-10`}></div>
              </div>
            ))}
          </div>

          {/* Services Overview for Timeline Design */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-brand-accent/10">

            </Card>
          </div>
        </div>
      </section>

      {/* Alternative 2: Interactive Cards with Hover Effects */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-secondary/30 to-brand-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 2: Interactive Design"
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

      {/* Alternative 3: Video-Style Hero with Play Button */}
      <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-accent/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10">
              Alternative 3: Hero Style
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              See How We Connect Enterprises with Open Source Experts
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Watch how our platform bridges the gap between enterprise needs and maintainer expertise
            </p>

            {/* Mock video play button */}
            <div className="relative inline-block group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-8 h-8 ml-1 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse"></div>
            </div>
            
            <p className="text-sm text-blue-100 mt-4">3-minute overview</p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-blue-100">Expert Maintainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12+</div>
              <div className="text-sm text-blue-100">Service Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">SLAs</div>
              <div className="text-sm text-blue-100">Available On-Demand</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">NDAs</div>
              <div className="text-sm text-blue-100">Enterprise Ready</div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Service Portfolio</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Bug className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-3">Priority Support Services</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Bug Fix Prioritization</li>
                  <li>• Technical Support 24/7</li>
                  <li>• Advisory Services</li>
                  <li>• LTS & Security</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-3">Custom Development</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Custom Features</li>
                  <li>• Performance Optimization</li>
                  <li>• Migration Support</li>
                  <li>• Code Reviews</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-3">Enterprise Add-ons</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Service Level Agreements</li>
                  <li>• Non-Disclosure Agreements</li>
                  <li>• Dedicated Support Channels</li>
                  <li>• Custom Contract Terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative 4: Compact Numbered List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 4: Compact Design"
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
              <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-brand-success/10 max-w-3xl mx-auto">
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
                          className="border-brand-success/30 text-brand-success hover:bg-brand-success/10"
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

      {/* Alternative 5: Split Layout with Visual */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-background to-brand-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 5: Split Layout"
            title="How Open Source Economy Works"
            description="Enterprise-grade open source support made simple"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

          {/* Option Selector */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-brand-primary/20 bg-brand-primary/5">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Badge variant="outline" className="text-brand-primary border-brand-primary/20 mb-2">
                    Right Side Variations
                  </Badge>
                  <h4 className="font-semibold">Option {currentOption}: {options[currentOption - 1]?.name}</h4>
                  <p className="text-sm text-muted-foreground">{options[currentOption - 1]?.description}</p>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentOption(currentOption > 1 ? currentOption - 1 : 14)}
                  >
                    ← Previous
                  </Button>
                  
                  <div className="flex gap-1">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setCurrentOption(option.id)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentOption === option.id ? 'bg-brand-primary' : 'bg-brand-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentOption(currentOption < 14 ? currentOption + 1 : 1)}
                  >
                    Next →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

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

            {/* OPTION 1: Real-time Enterprise Dashboard */}
            <div className={`space-y-6 ${currentOption !== 1 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Live Enterprise Dashboard</h4>
                      <Badge variant="outline" className="text-xs bg-brand-success/10 text-brand-success border-brand-success/20">
                        Live
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-brand-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-brand-primary">24h</div>
                        <div className="text-xs text-muted-foreground">Avg Response</div>
                      </div>
                      <div className="text-center p-3 bg-brand-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-brand-success">99.9%</div>
                        <div className="text-xs text-muted-foreground">SLA Uptime</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                          <span className="text-sm">React Bug Fix</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-warning rounded-full"></div>
                          <span className="text-sm">Vue.js Advisory</span>
                        </div>
                        <Badge variant="outline" className="text-xs">Scheduled</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                          <span className="text-sm">Security Review</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">Completed</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-primary/20 bg-brand-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-center">Expert Network</h4>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-brand-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Maintainers Available</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-brand-primary" />
                      <span>React Core Team</span>
                      <Badge variant="outline" className="text-xs ml-auto">Online</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-brand-primary" />
                      <span>Vue.js Maintainers</span>
                      <Badge variant="outline" className="text-xs ml-auto">Available</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-brand-primary" />
                      <span>Node.js Experts</span>
                      <Badge variant="outline" className="text-xs ml-auto">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 2: Customer Success Story */}
            <div className={`space-y-6 ${currentOption !== 2 ? 'hidden' : ''}`}>
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

            {/* OPTION 3: Interactive Service Calculator */}
            <div className={`space-y-6 ${currentOption !== 3 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Service Calculator</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Team Size</label>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">1-10</Button>
                        <Button size="sm" className="flex-1">11-50</Button>
                        <Button variant="outline" size="sm" className="flex-1">51+</Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Priority Services</label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">Bug Fix Prioritization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">Technical Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Enterprise SLAs</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-brand-primary/10 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Estimated Monthly</span>
                        <span className="text-lg font-bold text-brand-primary">$2,400</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Includes service delivery + sustainability funding
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Get Custom Quote</Button>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 4: Security & Compliance Focus */}
            <div className={`space-y-6 ${currentOption !== 4 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Shield className="w-12 h-12 mx-auto mb-3 text-brand-primary" />
                    <h4 className="font-semibold">Enterprise Security</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <span className="text-sm">SOC 2 Type II</span>
                      <Badge variant="secondary" className="text-xs bg-brand-success/10 text-brand-success">Certified</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <span className="text-sm">GDPR Compliant</span>
                      <Badge variant="secondary" className="text-xs bg-brand-success/10 text-brand-success">Verified</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                      <span className="text-sm">VEX/CVE Support</span>
                      <Badge variant="secondary" className="text-xs bg-brand-success/10 text-brand-success">Available</Badge>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-brand-accent/10 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">Enterprise Add-ons</h5>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>• Custom NDAs and security agreements</div>
                      <div>• Dedicated security liaison</div>
                      <div>• Priority vulnerability disclosure</div>
                      <div>• Compliance documentation support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-warning/20 bg-brand-warning/5">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-3 text-brand-warning" />
                  <h4 className="font-semibold mb-2">Supply Chain Security</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Protect your dependencies with expert maintainer oversight
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Security Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 5: Live Expert Profiles */}
            <div className={`space-y-6 ${currentOption !== 5 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Expert Maintainers</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">DG</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Dan Abramov</div>
                        <div className="text-xs text-muted-foreground mb-1">React Core Team</div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Available</Badge>
                          <Badge variant="secondary" className="text-xs">React Expert</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                      <div className="w-10 h-10 bg-brand-success rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">EY</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Evan You</div>
                        <div className="text-xs text-muted-foreground mb-1">Vue.js Creator</div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Available</Badge>
                          <Badge variant="secondary" className="text-xs">Vue Expert</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border border-border/30 rounded-lg">
                      <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-brand-primary">RT</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Ryan Dahl</div>
                        <div className="text-xs text-muted-foreground mb-1">Node.js Creator</div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Busy</Badge>
                          <Badge variant="secondary" className="text-xs">Node Expert</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    <Users className="w-4 h-4 mr-2" />
                    Browse All Experts
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-brand-primary/20 bg-brand-primary/5">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Direct Access</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Skip GitHub issues and forum delays. Get direct access to the experts who built your stack.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">Match Me</Button>
                    <Button variant="outline" size="sm" className="flex-1">Browse</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* OPTION 6: ROI Calculator */}
            <div className={`space-y-6 ${currentOption !== 6 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">ROI Calculator</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Development Team Size</label>
                      <div className="flex items-center gap-3">
                        <input type="range" min="5" max="100" defaultValue="25" className="flex-1" />
                        <span className="text-sm font-medium w-8">25</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Critical Dependencies</label>
                      <div className="flex items-center gap-3">
                        <input type="range" min="1" max="50" defaultValue="12" className="flex-1" />
                        <span className="text-sm font-medium w-8">12</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Hours/Month on OSS Issues</label>
                      <div className="flex items-center gap-3">
                        <input type="range" min="10" max="200" defaultValue="80" className="flex-1" />
                        <span className="text-sm font-medium w-8">80</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-brand-success/10 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-lg font-bold text-brand-success">$18K</div>
                          <div className="text-xs text-muted-foreground">Monthly Savings</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-brand-success">315%</div>
                          <div className="text-xs text-muted-foreground">ROI in Year 1</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Based on average $150/hr developer cost and 40% time savings
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-primary/20 bg-brand-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Cost Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Current OSS Maintenance</span>
                      <span className="font-medium">$24,000/mo</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Open Source Economy</span>
                      <span className="font-medium text-brand-primary">$6,000/mo</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2 border-t border-border/50">
                      <span className="font-medium">Net Savings</span>
                      <span className="font-bold text-brand-success">$18,000/mo</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Get Custom ROI Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 7: Live Support Interface */}
            <div className={`space-y-6 ${currentOption !== 7 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Live Support Portal</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                      <span className="text-xs text-brand-success">3 experts online</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-white">You</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">Having performance issues with React 18 concurrent features in production...</div>
                        <div className="text-xs text-muted-foreground mt-1">2 minutes ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-brand-primary/10 rounded-lg">
                      <div className="w-8 h-8 bg-brand-success rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-white">DA</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">Dan Abramov here! I can help with that. Can you share your concurrent setup? Also, are you using Suspense boundaries?</div>
                        <div className="text-xs text-muted-foreground mt-1">Just now</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background"
                    />
                    <Button size="sm">Send</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-accent/20 bg-brand-accent/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Support Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-success" />
                      <span>Direct maintainer chat</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-success" />
                      <span>Screen sharing sessions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-success" />
                      <span>Code review requests</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-success" />
                      <span>Emergency escalation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 8: Industry Use Cases */}
            <div className={`space-y-6 ${currentOption !== 8 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Industry Solutions</h4>
                  
                  <div className="space-y-4">
                    <div className="p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-brand-primary" />
                        <span className="font-medium text-sm">Financial Services</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Compliance-first approach with SOC 2, audit trails, and security reviews.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">SOC 2</Badge>
                        <Badge variant="outline" className="text-xs">Audit Logs</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-brand-success" />
                        <span className="font-medium text-sm">Healthcare</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        HIPAA-compliant support with specialized security and privacy expertise.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">HIPAA</Badge>
                        <Badge variant="outline" className="text-xs">Privacy</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-border/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-brand-accent" />
                        <span className="font-medium text-sm">E-commerce</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        High-availability support with performance optimization and scaling expertise.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">24/7 SLA</Badge>
                        <Badge variant="outline" className="text-xs">Performance</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-warning/20 bg-brand-warning/5">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-3 text-brand-warning" />
                  <h4 className="font-semibold mb-2">Custom Industry Solutions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need specialized compliance or regulatory support? We work with you to create custom solutions.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Discuss Your Industry
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 9: Integration Timeline */}
            <div className={`space-y-6 ${currentOption !== 9 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Implementation Timeline</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-success rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Week 1: Onboarding</div>
                        <div className="text-xs text-muted-foreground">Account setup, service credits, initial assessment</div>
                      </div>
                      <Badge variant="secondary" className="text-xs">Complete</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Week 2-3: Expert Matching</div>
                        <div className="text-xs text-muted-foreground">Connect with maintainers, establish communication channels</div>
                      </div>
                      <Badge variant="outline" className="text-xs text-brand-primary">In Progress</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Week 4+: Active Support</div>
                        <div className="text-xs text-muted-foreground">Ongoing services, SLA monitoring, regular check-ins</div>
                      </div>
                      <Badge variant="outline" className="text-xs">Upcoming</Badge>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-brand-primary/10 rounded-lg">
                    <div className="text-sm font-medium mb-1">Average Time to First Value</div>
                    <div className="text-2xl font-bold text-brand-primary">7 days</div>
                    <div className="text-xs text-muted-foreground">From signup to first expert interaction</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-success/20 bg-brand-success/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Success Milestones</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Expert connections made</span>
                      <span className="font-medium">5/8</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-brand-success h-2 rounded-full" style={{ width: '62.5%' }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground">62% complete</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 10: Service Configurator */}
            <div className={`space-y-6 ${currentOption !== 10 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Service Configurator</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Mode</label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" className="h-auto p-3 flex-col">
                          <div className="font-medium">Basic</div>
                          <div className="text-xs opacity-80">Best effort</div>
                        </Button>
                        <Button variant="outline" size="sm" className="h-auto p-3 flex-col">
                          <div className="font-medium">Advanced</div>
                          <div className="text-xs opacity-80">With SLAs</div>
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Core Services</label>
                      <div className="space-y-2">
                        {services.slice(0, 4).map((service) => (
                          <div key={service.name} className="flex items-center justify-between p-2 border border-border/30 rounded">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked={service.popular} />
                              <span className="text-sm">{service.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">$200/mo</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Enterprise Add-ons</label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border border-border/30 rounded">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">SLA (4h response)</span>
                          </div>
                          <span className="text-xs text-muted-foreground">+$500/mo</span>
                        </div>
                        <div className="flex items-center justify-between p-2 border border-border/30 rounded">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span className="text-sm">NDA Coverage</span>
                          </div>
                          <span className="text-xs text-muted-foreground">+$200/mo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-brand-primary/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Monthly</span>
                      <span className="text-xl font-bold text-brand-primary">$800</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 11: Vendor Comparison */}
            <div className={`space-y-6 ${currentOption !== 11 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">vs. Traditional Support</h4>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="font-medium text-center pb-2 border-b border-border/30">
                        Traditional Support
                      </div>
                      <div className="font-medium text-center pb-2 border-b border-border/30 text-brand-primary">
                        Open Source Economy
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>Generic support team</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>2-5 day response times</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>Limited technical depth</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>No direct maintainer access</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-success rounded-full"></span>
                          <span>Original maintainers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-success rounded-full"></span>
                          <span>24h SLA available</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-success rounded-full"></span>
                          <span>Deep codebase knowledge</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-success rounded-full"></span>
                          <span>Direct creator access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-brand-success/10 rounded-lg text-center">
                    <div className="text-sm font-medium text-brand-success">3x Faster Resolution</div>
                    <div className="text-xs text-muted-foreground">Average compared to traditional support</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-primary/20 bg-brand-primary/5">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Why Choose Direct Access?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Skip the middleman. Get answers from the people who wrote the code.
                  </p>
                  <Button size="sm" className="w-full">
                    See Full Comparison
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 12: Enterprise Add-ons & Customization */}
            <div className={`space-y-6 ${currentOption !== 12 ? 'hidden' : ''}`}>
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

            {/* OPTION 13: Non-Profit Fund Allocation */}
            <div className={`space-y-6 ${currentOption !== 13 ? 'hidden' : ''}`}>
              <Card className="border-brand-success/20 bg-gradient-to-br from-brand-success/5 to-brand-primary/5">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Badge variant="outline" className="text-brand-success border-brand-success/20 mb-3">
                      Non-Profit Mission
                    </Badge>
                    <h4 className="font-semibold mb-2">Where Your Money Goes</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete transparency in our non-profit pricing model
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                      <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Service Delivery (60%)</div>
                        <div className="text-sm text-muted-foreground">Direct payment to expert maintainers</div>
                      </div>
                      <div className="text-lg font-semibold text-brand-primary">60%</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                      <div className="w-12 h-12 bg-brand-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Project Sustainability (25%)</div>
                        <div className="text-sm text-muted-foreground">Funding maintenance & long-term health</div>
                      </div>
                      <div className="text-lg font-semibold text-brand-success">25%</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                      <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Ecosystem Health (10%)</div>
                        <div className="text-sm text-muted-foreground">Supporting critical dependencies</div>
                      </div>
                      <div className="text-lg font-semibold text-brand-primary">10%</div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg">
                      <div className="w-12 h-12 bg-brand-warning rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Platform Operations (5%)</div>
                        <div className="text-sm text-muted-foreground">Infrastructure & administration</div>
                      </div>
                      <div className="text-lg font-semibold text-brand-warning">5%</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-brand-success/10 rounded-lg text-center">
                    <div className="font-medium text-brand-success mb-1">100% Transparent</div>
                    <div className="text-sm text-muted-foreground">Every invoice shows exact fund allocation</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OPTION 14: Complete Transparency Dashboard */}
            <div className={`space-y-6 ${currentOption !== 14 ? 'hidden' : ''}`}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-success rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Live Impact Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time transparency & ecosystem impact</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 border border-border/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-primary mb-1">$2.3M</div>
                      <div className="text-sm text-muted-foreground">Distributed to Maintainers</div>
                    </div>
                    <div className="p-4 border border-border/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-success mb-1">847</div>
                      <div className="text-sm text-muted-foreground">Projects Supported</div>
                    </div>
                    <div className="p-4 border border-border/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-warning mb-1">1.2K</div>
                      <div className="text-sm text-muted-foreground">Dependencies Funded</div>
                    </div>
                    <div className="p-4 border border-border/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-accent-dark mb-1">99.9%</div>
                      <div className="text-sm text-muted-foreground">Fund Transparency</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Your Contribution Impact</span>
                      <Badge variant="secondary" className="text-xs">This Month</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>React maintenance</span>
                        <span className="font-medium">$180</span>
                      </div>
                      <div className="w-full bg-brand-primary/10 rounded-full h-2">
                        <div className="bg-brand-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>TypeScript ecosystem</span>
                        <span className="font-medium">$120</span>
                      </div>
                      <div className="w-full bg-brand-success/10 rounded-full h-2">
                        <div className="bg-brand-success h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Build tools dependencies</span>
                        <span className="font-medium">$85</span>
                      </div>
                      <div className="w-full bg-brand-warning/10 rounded-full h-2">
                        <div className="bg-brand-warning h-2 rounded-full" style={{ width: '21%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Button size="sm" className="flex-1">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Full Report
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Impact Statement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative 6: Cards Carousel Style */}
      <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-accent/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Alternative 6: Carousel Style"
            title="Your Complete Open Source Strategy"
            description="Scroll through our comprehensive service offerings and enterprise solutions"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

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
        </div>
      </section>

      {/* Alternative 7: Tabbed Interface Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 7: Tabbed Interface"
            title="Explore Our Service Categories"
            description="Browse through different service types and enterprise features using our organized interface"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button variant="default" size="sm" className="px-6">
              <Bug className="w-4 h-4 mr-2" />
              Core Services
            </Button>
            <Button variant="outline" size="sm" className="px-6">
              <Plus className="w-4 h-4 mr-2" />
              Development
            </Button>
            <Button variant="outline" size="sm" className="px-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise
            </Button>
            <Button variant="outline" size="sm" className="px-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Training
            </Button>
          </div>

          {/* Tab Content - Core Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service) => (
              <Card key={service.name} className="border-border/50 hover:border-brand-primary/30 transition-all duration-200 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      service.popular 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-muted text-muted-foreground group-hover:bg-brand-primary/10 group-hover:text-brand-primary'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{service.name}</h4>
                        {service.popular && (
                          <Badge variant="secondary" className="text-xs">Hot</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Professional {service.name.toLowerCase()} from expert maintainers.
                      </p>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-brand-success">
                          <CheckCircle className="w-3 h-3" />
                          SLA Ready
                        </span>
                        <span className="flex items-center gap-1 text-brand-primary">
                          <Shield className="w-3 h-3" />
                          NDA Support
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Summary */}
          <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-brand-accent/10">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4">Enterprise-Ready Platform</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                All services come with optional SLAs, NDAs, and dedicated support channels. 
                Scale from basic service credits to full enterprise agreements.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {enterpriseAddOns.slice(0, 4).map((addon) => (
                  <Badge key={addon.name} variant="outline" className="px-3 py-1 border-brand-primary/20 text-brand-primary">
                    {addon.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative 8: Accordion Style */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 8: Accordion Style"
            title="Detailed Service Breakdown"
            description="Expand each section to explore our comprehensive service offerings and enterprise features"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Core Services Accordion */}
            <Card className="border-border/50">
              <CardContent className="p-0">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                        <Bug className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Priority Support Services</h3>
                        <p className="text-sm text-muted-foreground">Essential services with guaranteed SLAs</p>
                      </div>
                    </div>
                    <ArrowDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {services.slice(0, 4).map((service) => (
                        <div key={service.name} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                          {service.icon}
                          <div>
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-xs text-muted-foreground">24/7 SLA available</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>

            {/* Development Services Accordion */}
            <Card className="border-border/50">
              <CardContent className="p-0">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                        <Plus className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Custom Development Services</h3>
                        <p className="text-sm text-muted-foreground">Tailored solutions from expert maintainers</p>
                      </div>
                    </div>
                    <ArrowDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {services.slice(4, 8).map((service) => (
                        <div key={service.name} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                          {service.icon}
                          <div>
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-xs text-muted-foreground">Custom pricing</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>

            {/* Enterprise Features Accordion */}
            <Card className="border-brand-warning/20 bg-brand-warning/5">
              <CardContent className="p-0">
                <details className="group" open>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-success rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Enterprise Add-ons & Agreements</h3>
                        <p className="text-sm text-muted-foreground">SLAs, NDAs, and dedicated support options</p>
                      </div>
                    </div>
                    <ArrowDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {enterpriseAddOns.map((addon) => (
                        <div key={addon.name} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                          <div className="w-6 h-6 bg-brand-primary/10 rounded flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-brand-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{addon.name}</div>
                            <div className="text-xs text-muted-foreground">Available on-demand</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-brand-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Enterprise Benefits:</strong> All enterprise add-ons can be combined with any service package. 
                        Custom contract terms, dedicated account management, and priority response times available.
                      </p>
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative 9: Dashboard Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 9: Dashboard Style"
            title="Service Management Dashboard"
            description="A comprehensive view of all available services and enterprise features"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

          {/* Dashboard Header */}
          <Card className="border-border/50 mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">Core Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-success mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Enterprise Add-ons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">SLA Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-warning mb-1">∞</div>
                  <div className="text-sm text-muted-foreground">Flexibility</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Grid Dashboard */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand-primary" />
                    Available Services
                  </h3>
                  <div className="space-y-3">
                    {services.slice(0, 8).map((service) => (
                      <div key={service.name} className="flex items-center justify-between p-3 border border-border/50 rounded-lg hover:border-brand-primary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            service.popular ? 'bg-brand-primary text-white' : 'bg-muted text-muted-foreground'
                          }`}>
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-xs text-muted-foreground">Expert maintainer service</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {service.popular && (
                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                          )}
                          <Badge variant="outline" className="text-xs">SLA</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enterprise Features Column */}
            <div className="space-y-6">
              <Card className="border-brand-success/20 bg-brand-success/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-brand-success" />
                    Enterprise Ready
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Service Level Agreements</span>
                      <Badge variant="outline" className="text-xs text-brand-success border-brand-success/20">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Non-Disclosure Agreements</span>
                      <Badge variant="outline" className="text-xs text-brand-success border-brand-success/20">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Dedicated Support</span>
                      <Badge variant="outline" className="text-xs text-brand-success border-brand-success/20">Premium</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Custom Contracts</span>
                      <Badge variant="outline" className="text-xs text-brand-success border-brand-success/20">On-Demand</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button size="sm" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Request Service
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Setup SLA
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Enterprise Contract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative 10: Comparison Table Style */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-background to-brand-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alternative 10: Comparison Table"
            title="Service Plans & Enterprise Features"
            description="Compare different service tiers and enterprise add-ons to find the perfect fit"
            spacing="lg"
            titleLevel="h2"
            align="center"
            maxWidth="3xl"
          />

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
                  <span className="text-muted-foreground text-sm">Community</span>
                </div>
                <div className="p-4 text-center border-l border-border bg-brand-primary/5">
                  <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                  <div className="text-sm">Private Channel</div>
                </div>
                <div className="p-4 text-center border-l border-border bg-brand-success/5">
                  <CheckCircle className="w-5 h-5 text-brand-success mx-auto mb-1" />
                  <div className="text-sm">Dedicated Team</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start with Basic Mode
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Explore Enterprise Options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}