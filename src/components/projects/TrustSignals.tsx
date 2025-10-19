import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

interface TrustSignalsProps {
  usedBy: string[];
  stats: {
    productionUsers: string;
    yearsActive: number;
  };
}

export function TrustSignals({ usedBy, stats }: TrustSignalsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Used By - Logo Cloud */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-5 w-5 text-brand-accent" />
          <h4 className="text-brand-neutral-900">Trusted By Industry Leaders</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {usedBy.slice(0, 8).map((company) => (
            <div
              key={company}
              className="p-4 bg-brand-secondary border border-brand-neutral-300 rounded-lg text-center hover:border-brand-accent/50 transition-colors"
            >
              <span className="text-brand-neutral-800">{company}</span>
            </div>
          ))}
        </div>
        <p className="text-brand-neutral-600 text-center mt-6">
          Join {stats.productionUsers} companies in production
        </p>
      </div>

      {/* Community Stats */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-brand-success" />
          <h4 className="text-brand-neutral-900">Battle-Tested & Growing</h4>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-brand-success/5 border border-brand-success/20 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="h-6 w-6 text-brand-success" />
              <span className="text-brand-accent">{stats.productionUsers}</span>
            </div>
            <p className="text-brand-neutral-700">Production Deployments</p>
          </div>
          <div className="p-6 bg-brand-accent/5 border border-brand-accent/20 rounded-lg text-center">
            <div className="text-brand-accent mb-2">{stats.yearsActive} Years</div>
            <p className="text-brand-neutral-700">Active Development</p>
          </div>
          <div className="p-6 bg-brand-highlight/5 border border-brand-highlight/20 rounded-lg text-center">
            <div className="text-brand-highlight mb-2">99.99%</div>
            <p className="text-brand-neutral-700">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
