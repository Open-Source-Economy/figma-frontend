import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { SectionHeader } from '../ui/section-header';
import { 
  Building2, 
  Users, 
  Handshake, 
  Target, 
  Award, 
  Shield,
  Heart,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

interface WhatIsOpenSourceEconomyProps {
  className?: string;
}

export function WhatIsOpenSourceEconomy({ className = '' }: WhatIsOpenSourceEconomyProps) {
  const benefits = [
    {
      category: 'For Your Team',
      icon: <Target className="w-6 h-6" />,
      color: 'brand-primary',
      title: 'Expert Services & Faster Solutions',
      description: 'Get expert services, solve problems faster, and level up your team with direct access to maintainers.'
    },
    {
      category: 'For Your Brand', 
      icon: <Award className="w-6 h-6" />,
      color: 'brand-accent',
      title: 'Open Source Recognition',
      description: 'Gain recognition for supporting the open source ecosystem and demonstrate your commitment to sustainability.'
    },
    {
      category: 'For Your Supply Chain',
      icon: <Shield className="w-6 h-6" />,
      color: 'brand-success',
      title: 'Sustainable Dependencies',
      description: 'Protect the sustainability of the open source projects you depend on and ensure long-term reliability.'
    }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'One Contract',
      description: 'Access enterprise services under a single contract with SOC 2 compliance, NDAs, and SLAs included.',
      icon: <Handshake className="w-8 h-8" />
    },
    {
      step: '02', 
      title: 'Expert Matching',
      description: 'Need expertise in another open source project? We search and connect you with the right experts.',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Ecosystem Funding',
      description: 'Every payment includes donations to projects and dependencies you rely on, ensuring sustainability.',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <section className={`relative py-20 md:py-32 overflow-hidden transition-all duration-1000 ease-in-out ${className}`}>
      {/* Subtle decorative overlay to enhance passed background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-brand-primary/3 via-transparent to-brand-accent/3" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* What is Open Source Economy */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">501(c)(3) Swiss Non-Profit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-brand-primary bg-clip-text text-transparent">
              What is Open Source Economy?
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                The only Swiss 501(c)(3) non-profit platform that connects your enterprise directly with the world's most skilled open source creators and core maintainers—<span className="text-foreground font-semibold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent">the very people who built the technology your business depends on</span>.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center hover:bg-card/80 transition-colors duration-200">
                  <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-lg">Skip the Queue</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Get priority support from Dan Abramov, Evan You, and 500+ expert maintainers</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center hover:bg-card/80 transition-colors duration-200">
                  <Shield className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-lg">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">SOC 2 compliance, dedicated NDAs, and enterprise SLAs with guaranteed response times</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center hover:bg-card/80 transition-colors duration-200">
                  <Heart className="w-12 h-12 text-brand-highlight mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-lg">Future-Proof Stack</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Every payment automatically funds your entire dependency tree, ensuring long-term sustainability</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center hover:bg-card/80 transition-colors duration-200">
                  <CheckCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-lg">Non-Profit Trust</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Swiss transparency standards with 0% markup—100% of service fees go to maintainers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Win-Win-Win Partnership */}

      </div>
    </section>
  );
}