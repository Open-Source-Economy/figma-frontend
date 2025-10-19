import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

interface MissionStatementProps {
  className?: string;
}

export function MissionStatement({ className = '' }: MissionStatementProps) {
  return (
    <section className={`py-20 lg:py-32 bg-brand-secondary-light ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 leading-tight">
            Connecting Developers and Businesses for a 
            <span className="block text-brand-accent">Sustainable Open Source Future</span>
          </h2>
          
          <p className="text-lg text-brand-neutral-700 leading-relaxed max-w-3xl mx-auto">
            We're building a nonprofit ecosystem where brilliant open source maintainers can focus on what they do best—creating amazing software—while businesses get the expert support they need to thrive.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Nonprofit Model */}
          <div className="group space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-neutral-900">
              100% Nonprofit
            </h3>
            <p className="text-brand-neutral-600 leading-relaxed">
              Every dollar goes directly to maintainers and projects. No shareholders, no profit extraction—just sustainable support for the software that powers the world.
            </p>
          </div>

          {/* Direct Connection */}
          <div className="group space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-highlight to-brand-highlight-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-neutral-900">
              Direct Access
            </h3>
            <p className="text-brand-neutral-600 leading-relaxed">
              Skip the intermediaries. Connect directly with the creators and maintainers who know their projects inside and out. Get expert insights, not generic support.
            </p>
          </div>

          {/* Ecosystem Impact */}
          <div className="group space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-neutral-900">
              Ecosystem Growth
            </h3>
            <p className="text-brand-neutral-600 leading-relaxed">
              Your investment doesn't just solve your immediate needs—it strengthens the entire open source ecosystem, benefiting millions of developers worldwide.
            </p>
          </div>
        </div>

        {/* Supporting Statement */}
        <div className="mt-16 p-8 bg-brand-neutral-200/50 rounded-2xl border border-brand-neutral-300/50">
          <p className="text-lg text-brand-neutral-700 leading-relaxed">
            <span className="text-brand-accent font-semibold">Open source software powers 99% of codebases</span>, 
            yet most maintainers work for free in their spare time. We're changing that by creating sustainable 
            funding pathways that benefit everyone in the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}