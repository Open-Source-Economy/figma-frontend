import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { ServiceColumn } from './ServiceColumn';
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
  Clock
} from 'lucide-react';

interface HowItWorksTabsProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksTabs({ className = '', onNavigation }: HowItWorksTabsProps) {
  const [activeTab, setActiveTab] = useState('core');

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

  const tabs = [
    {
      id: 'core',
      label: 'Core Services',
      icon: <Bug className="w-4 h-4" />,
      services: [
        { name: 'Bug Fix Prioritization', icon: <Bug className="w-4 h-4" />, description: 'Fast-track critical bug fixes with priority queuing' },
        { name: 'Technical Support', icon: <LifeBuoy className="w-4 h-4" />, description: '24/7 technical assistance from expert maintainers' },
        { name: 'Advisory Services', icon: <UserCheck className="w-4 h-4" />, description: 'Strategic guidance on architecture and best practices' },
        { name: 'LTS & Security', icon: <Shield className="w-4 h-4" />, description: 'Long-term support and security vulnerability management' }
      ]
    },
    {
      id: 'development',
      label: 'Development',
      icon: <Plus className="w-4 h-4" />,
      services: [
        { name: 'Custom Features', icon: <Plus className="w-4 h-4" />, description: 'Bespoke feature development by core maintainers' },
        { name: 'Code Reviews', icon: <FileText className="w-4 h-4" />, description: 'Expert code review and quality assurance' },
        { name: 'Architecture Guidance', icon: <Globe className="w-4 h-4" />, description: 'System design and architectural consulting' },
        { name: 'Performance Optimization', icon: <Zap className="w-4 h-4" />, description: 'Performance auditing and optimization strategies' }
      ]
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      icon: <Shield className="w-4 h-4" />,
      services: [
        { name: 'VEX/CVE Support', icon: <AlertTriangle className="w-4 h-4" />, description: 'Vulnerability management and CVE coordination' },
        { name: 'Training & Workshops', icon: <GraduationCap className="w-4 h-4" />, description: 'Team training and knowledge transfer sessions' },
        { name: 'Migration Support', icon: <ArrowRight className="w-4 h-4" />, description: 'Seamless migration assistance and planning' },
        { name: 'Compliance Documentation', icon: <FileText className="w-4 h-4" />, description: 'Regulatory compliance and audit documentation' }
      ]
    }
  ];

  return (
    <section className={`py-16 md:py-24 transition-all duration-1000 ease-in-out ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-16">
          {/* Subtle background decoration - works with passed background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-primary/3 via-brand-accent/2 to-brand-success/4 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-primary/4 via-brand-accent/3 to-transparent rounded-full blur-2xl opacity-25"></div>
            <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-brand-accent/3 via-brand-success/2 to-transparent rounded-full blur-xl opacity-20"></div>
          </div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto space-y-6">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 via-brand-primary/5 to-transparent rounded-full border border-brand-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-primary tracking-wide">Enterprise-Grade Services</span>
            </div>
            
            {/* Main title with blue-to-green gradient journey */}
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent">
                Open Source Services
              </span>
            </h2>
            
            {/* Enhanced description with brand journey colors */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Professional support for every aspect of your open source journey, from 
              <span className="text-brand-primary font-medium"> enterprise development</span> through 
              <span className="text-brand-accent font-medium"> strategic growth</span> to 
              <span className="text-brand-accent font-medium"> sustainable ecosystem funding</span>
            </p>
            
            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                Trusted by Enterprises
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action to Services Page */}
        <div className="text-center mb-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Ready to get started with <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent">professional services</span>?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore our comprehensive suite of development, advisory, and enterprise services designed for your open source journey.
            </p>
            <Button 
              size="lg"
              onClick={() => onNavigation && onNavigation('services')}
              rightIcon={ArrowRight}
              icon
            >
              View All Services
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
}