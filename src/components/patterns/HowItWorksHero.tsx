import React from 'react';
import { 
  Play,
  Bug,
  Plus,
  Shield
} from 'lucide-react';

interface HowItWorksHeroProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksHero({ className = '', onNavigation }: HowItWorksHeroProps) {
  return (
    <section className={`py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-accent/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            See How We Connect Enterprises with Open Source Experts
          </h2>
          
          <p className="text-xl text-brand-neutral-700 mb-12 max-w-3xl mx-auto">
            Watch how our platform bridges the gap between enterprise needs and maintainer expertise
          </p>

          {/* Mock video play button */}
          <div className="relative inline-block group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <Play className="w-8 h-8 ml-1 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse"></div>
          </div>
          
          <p className="text-sm text-brand-neutral-700 mt-4">3-minute overview</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm text-brand-neutral-700">Expert Maintainers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">12+</div>
            <div className="text-sm text-brand-neutral-700">Service Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">SLAs</div>
            <div className="text-sm text-brand-neutral-700">Available On-Demand</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">NDAs</div>
            <div className="text-sm text-brand-neutral-700">Enterprise Ready</div>
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
              <ul className="text-sm text-brand-neutral-700 space-y-1">
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
              <ul className="text-sm text-brand-neutral-700 space-y-1">
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
              <ul className="text-sm text-brand-neutral-700 space-y-1">
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
  );
}