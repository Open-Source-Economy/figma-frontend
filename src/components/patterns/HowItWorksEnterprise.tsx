import React from 'react';
import { Button } from '../ui/button';
import { AccessModelComparison } from './AccessModelComparison';
import { ProcessStep } from './ProcessStep';
import { FeaturePill } from '../ui/feature-pill';
import { 
  Handshake,
  Zap,
  Heart,
  Shield,
  Clock,
  Code2,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HowItWorksEnterpriseProps {
  className?: string;
  headerVisibility?: 'prominent' | 'normal' | 'subtle';
  onScheduleDemo?: () => void;
}

// Process Steps Data
const PROCESS_STEPS = [
  {
    icon: Handshake,
    number: '01',
    title: 'Single Contract',
    description: 'One enterprise agreement covers all maintainers across your entire dependency stack',
    accentColor: 'accent' as const
  },
  {
    icon: Zap,
    number: '02',
    title: 'Instant Access',
    description: 'Get direct access to expert maintainers. Choose your model: reserved time or flexible credits',
    accentColor: 'accent' as const
  },
  {
    icon: Heart,
    number: '03',
    title: 'Support Ecosystem',
    description: 'Your investment strengthens the entire open source community while earning recognition',
    accentColor: 'success' as const
  }
];



// Trust Indicators
const TRUST_INDICATORS = [
  { icon: Shield, text: 'NDA Protection' },
  { icon: CheckCircle2, text: 'SOC 2 Compliant' },
  { icon: Code2, text: '100% Open Source Output' },
  { icon: Clock, text: 'Transparent Billing' }
];

export const HowItWorksEnterprise: React.FC<HowItWorksEnterpriseProps> = ({ 
  className = '',
  headerVisibility = 'normal',
  onScheduleDemo
}) => {
  return (
    <section className={`relative py-32 bg-gradient-to-b from-[#1e3a5f] via-[#2c3e50] to-[#1e3a5f] overflow-hidden ${className}`}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-success/5 opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-success/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
            <Handshake className="w-4 h-4 text-brand-accent-light" />
            <span className="text-brand-accent-light text-sm">Enterprise Solutions</span>
          </div>
          <h2 className="text-brand-neutral-950 mb-4">
            Three Steps to Expert Support
          </h2>
          <p className="text-brand-neutral-700 text-lg max-w-3xl mx-auto">
            Access world-class maintainers under one contract. Choose your engagement model. 
            Support the ecosystem while solving your toughest challenges.
          </p>
        </div>

        {/* Process Steps with connecting line */}
        <div className="relative mb-28">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 px-32">
            <div className="h-1 bg-gradient-to-r from-brand-accent/20 via-brand-accent/50 to-brand-success/50 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                description={step.description}
                accentColor={step.accentColor}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
          {TRUST_INDICATORS.map((indicator, index) => (
            <FeaturePill key={index} icon={indicator.icon}>
              {indicator.text}
            </FeaturePill>
          ))}
        </div>

        {/* Access Models Section */}
        {/* Access Models - Modern Comparison */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-highlight/10 border border-brand-highlight/30 mb-6">
              <Sparkles className="w-4 h-4 text-brand-highlight-light" />
              <span className="text-brand-highlight-light text-sm">Flexible Engagement</span>
            </div>
            <h3 className="text-brand-neutral-950 mb-4">Choose Your Access Model</h3>
            <p className="text-brand-neutral-700 max-w-2xl mx-auto">
              Compare our two engagement models at a glance, or combine them for complete flexibility.
            </p>
          </div>
          
          {/* Comparison Component */}
          <AccessModelComparison />

          {/* Combination Highlight */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-success/10 via-brand-highlight/10 to-brand-success/10 border border-brand-success/30 backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-success/20 border border-brand-success/40">
                <CheckCircle2 className="w-5 h-5 text-brand-success-light" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-brand-neutral-950 mb-1">Combine Both Models</p>
                <p className="text-brand-neutral-700 text-sm">
                  Reserve time for critical projects + flexible credits for everything else
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-brand-accent hover:bg-brand-accent-light text-white shadow-lg shadow-brand-accent/20"
              onClick={onScheduleDemo}
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-brand-neutral-600 text-sm">
              30-minute call • No commitment • Custom pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
