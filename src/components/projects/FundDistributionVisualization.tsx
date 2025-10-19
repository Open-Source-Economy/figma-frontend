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
    <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
      <h3 className="text-brand-neutral-900 mb-2">Your Investment Impact</h3>
      <p className="text-brand-neutral-600 mb-8">
        See how your support flows through the {projectName} ecosystem
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
        <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-brand-accent" />
            <span className="text-brand-accent">{distribution.serviceProvider}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Service Provider</h5>
          <p className="text-brand-neutral-600 text-sm">
            Direct compensation to maintainers providing services
          </p>
        </div>

        <div className="p-4 bg-brand-warning/5 border border-brand-warning/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-brand-warning" />
            <span className="text-brand-warning">{distribution.openSourceEconomy}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Open Source Economy</h5>
          <p className="text-brand-neutral-600 text-sm">
            Platform operations and ecosystem sustainability
          </p>
        </div>

        <div className="p-4 bg-brand-highlight/5 border border-brand-highlight/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-brand-highlight" />
            <span className="text-brand-highlight">{distribution.project}%</span>
          </div>
          <h5 className="text-brand-neutral-800 mb-1">Project Support</h5>
          <p className="text-brand-neutral-600 text-sm">
            Ongoing development and community initiatives
          </p>
        </div>

        <div className="p-4 bg-brand-success/5 border border-brand-success/20 rounded-lg">
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

      <div className="mt-6 p-4 bg-brand-secondary border border-brand-neutral-300 rounded-lg">
        <p className="text-brand-neutral-700 text-center">
          <strong className="text-brand-neutral-800">100% Transparent:</strong> Every donation and payment is tracked. 
          Quarterly reports show exactly where funds go.
        </p>
      </div>
    </div>
  );
}
