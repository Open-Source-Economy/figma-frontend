import React from 'react';
import { TrendingUp, Users, Heart, Building2 } from 'lucide-react';

interface FundDistributionVisualizationProps {
  distribution: {
    serviceProvider: number;
    openSourceEconomy: number;
    project: number;
    dependencies: number;
  };
  projectName: string;
}

export function FundDistributionVisualization({
  distribution,
  projectName
}: FundDistributionVisualizationProps) {
  const total = distribution.serviceProvider + distribution.openSourceEconomy + distribution.project + distribution.dependencies;

  return (
    <div className="bg-[rgba(26,41,66,0)] border border-brand-neutral-300 rounded-xl p-8">
      <h3 className="text-brand-neutral-900 mb-2">Transparent Pricing—No VC Overhead</h3>
      <p className="text-brand-neutral-600 mb-8">
        Unlike VC-backed platforms, 100% of your investment flows directly to open source maintainers, {projectName}, and the ecosystem—supporting project independence with no license changes or VC pressure. Community first, always.
      </p>

      {/* Visual Distribution Bar */}
      <div className="mb-8">
        <div className="flex h-16 rounded-lg overflow-hidden border border-brand-neutral-300">
          <div
            className="bg-brand-accent flex items-center justify-center transition-all"
            style={{ width: `${(distribution.serviceProvider / total) * 100}%` }}
          >
            <span className="text-white">{distribution.serviceProvider}%</span>
          </div>
          <div
            className="bg-brand-warning flex items-center justify-center transition-all"
            style={{ width: `${(distribution.openSourceEconomy / total) * 100}%` }}
          >
            <span className="text-white">{distribution.openSourceEconomy}%</span>
          </div>
          <div
            className="bg-brand-highlight flex items-center justify-center transition-all"
            style={{ width: `${(distribution.project / total) * 100}%` }}
          >
            <span className="text-white">{distribution.project}%</span>
          </div>
          <div
            className="bg-brand-success flex items-center justify-center transition-all"
            style={{ width: `${(distribution.dependencies / total) * 100}%` }}
          >
            <span className="text-white">{distribution.dependencies}%</span>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg bg-[rgba(255,127,80,0)]">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-brand-accent" />
            <span className="text-brand-accent">{distribution.serviceProvider}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Service Provider</h5>
          <p className="text-brand-neutral-600 text-sm">
            Direct compensation to maintainers providing services
          </p>
        </div>

        <div className="p-4 bg-brand-warning/5 border border-brand-warning/20 rounded-lg bg-[rgba(251,191,36,0)]">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-brand-warning" />
            <span className="text-brand-warning">{distribution.openSourceEconomy}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Open Source Economy</h5>
          <p className="text-brand-neutral-600 text-sm">
            Platform operations and ecosystem sustainability (varies with brand recognition option)
          </p>
        </div>

        <div className="p-4 bg-brand-highlight/5 border border-brand-highlight/20 rounded-lg bg-[rgba(218,165,32,0)]">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-brand-highlight" />
            <span className="text-brand-highlight">{distribution.project}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Project Support</h5>
          <p className="text-brand-neutral-600 text-sm">
            Ongoing development and community initiatives
          </p>
        </div>

        <div className="p-4 bg-brand-success/5 border border-brand-success/20 rounded-lg bg-[rgba(16,185,129,0)]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-brand-success" />
            <span className="text-brand-success">{distribution.dependencies}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Dependencies</h5>
          <p className="text-brand-neutral-600 text-sm">
            Critical dependencies and infrastructure projects
          </p>
        </div>
      </div>

      <div className="mt-8 p-8 bg-gradient-to-br from-brand-card-blue via-brand-card-blue-light to-brand-accent/5 border border-brand-accent/30 rounded-2xl shadow-lg shadow-brand-accent/10">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 shrink-0">
            <Building2 className="w-6 h-6 text-brand-accent" />
          </div>
          <div className="flex-1">
            <h4 className="text-brand-neutral-900 mb-2">Non-Profit Partnership Advantage</h4>
            <p className="text-brand-neutral-700">
              No VC investors, no hidden fees. <strong className="text-brand-accent">100% of your investment</strong> goes directly to open source maintainers and ecosystem sustainability.
            </p>
          </div>
        </div>
        <div className="pl-16 pt-4 border-t border-brand-neutral-300/50">
          <p className="text-brand-neutral-600 text-sm">
            <strong className="text-brand-neutral-800">Optional Brand Recognition:</strong> Receive public acknowledgment through our marketing campaigns and community announcements with adjusted platform fees.
          </p>
        </div>
      </div>
    </div>
  );
}