import React from 'react';
import { PieChart } from 'lucide-react';
import { Badge } from '../../ui/badge';

interface PricingAllocation {
  projectAllocation: number;
  dependenciesAllocation: number;
  maintainerReceives: number;
  platformFee: number;
}

interface PricingBreakdownProps {
  averageRate: number;
  pricingBreakdown: PricingAllocation;
  className?: string;
}

interface BreakdownResult {
  toProject: number;
  toDependencies: number;
  toMaintainer: number;
  toPlatform: number;
}

const calculatePricing = (rate: number, breakdown: PricingAllocation): BreakdownResult => {
  return {
    toProject: (rate * breakdown.projectAllocation) / 100,
    toDependencies: (rate * breakdown.dependenciesAllocation) / 100,
    toMaintainer: (rate * breakdown.maintainerReceives) / 100,
    toPlatform: (rate * breakdown.platformFee) / 100,
  };
};

/**
 * PricingBreakdown - Shows transparent pricing breakdown
 * Displays how hourly rate is distributed across project, dependencies, maintainer, and platform
 */
export const PricingBreakdown: React.FC<PricingBreakdownProps> = ({
  averageRate,
  pricingBreakdown,
  className = '',
}) => {
  const breakdown = calculatePricing(averageRate, pricingBreakdown);

  return (
    <div className={`bg-brand-card-blue border border-brand-accent/30 rounded-lg p-6 ${className}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
          <PieChart className="h-6 w-6 text-brand-accent" />
        </div>
        <div className="flex-1">
          <h2 className="text-brand-neutral-950 mb-2">
            Transparent Pricing Breakdown
          </h2>
          <p className="text-brand-neutral-600">
            Every dollar you pay directly supports the open source ecosystem. Here's exactly where your investment goes:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Breakdown */}
        <div className="bg-brand-secondary border border-brand-neutral-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-brand-neutral-900">Example: ${averageRate}/hour</h3>
            <Badge variant="outline" className="bg-brand-highlight/10 text-brand-highlight border-brand-highlight/30">
              Average Rate
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                <span className="text-brand-neutral-700">To Project</span>
              </div>
              <div className="text-right">
                <div className="text-brand-neutral-900">${breakdown.toProject.toFixed(0)}</div>
                <div className="text-brand-neutral-500 text-xs">{pricingBreakdown.projectAllocation}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-highlight"></div>
                <span className="text-brand-neutral-700">To Dependencies</span>
              </div>
              <div className="text-right">
                <div className="text-brand-neutral-900">${breakdown.toDependencies.toFixed(0)}</div>
                <div className="text-brand-neutral-500 text-xs">{pricingBreakdown.dependenciesAllocation}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-success"></div>
                <span className="text-brand-neutral-700">To Maintainer</span>
              </div>
              <div className="text-right">
                <div className="text-brand-neutral-900">${breakdown.toMaintainer.toFixed(0)}</div>
                <div className="text-brand-neutral-500 text-xs">{pricingBreakdown.maintainerReceives}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-neutral-500"></div>
                <span className="text-brand-neutral-700">Platform Fee</span>
              </div>
              <div className="text-right">
                <div className="text-brand-neutral-900">${breakdown.toPlatform.toFixed(0)}</div>
                <div className="text-brand-neutral-500 text-xs">{pricingBreakdown.platformFee}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Distribution */}
        <div className="flex flex-col justify-center">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-brand-neutral-700 text-sm">Project Support</span>
                <span className="text-brand-neutral-900 text-sm">{pricingBreakdown.projectAllocation}%</span>
              </div>
              <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-accent rounded-full" 
                  style={{ width: `${pricingBreakdown.projectAllocation}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-brand-neutral-700 text-sm">Dependencies Ecosystem</span>
                <span className="text-brand-neutral-900 text-sm">{pricingBreakdown.dependenciesAllocation}%</span>
              </div>
              <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-highlight rounded-full" 
                  style={{ width: `${pricingBreakdown.dependenciesAllocation}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-brand-neutral-700 text-sm">Maintainer Compensation</span>
                <span className="text-brand-neutral-900 text-sm">{pricingBreakdown.maintainerReceives}%</span>
              </div>
              <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-success rounded-full" 
                  style={{ width: `${pricingBreakdown.maintainerReceives}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-brand-neutral-700 text-sm">Platform Operations</span>
                <span className="text-brand-neutral-900 text-sm">{pricingBreakdown.platformFee}%</span>
              </div>
              <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-neutral-500 rounded-full" 
                  style={{ width: `${pricingBreakdown.platformFee}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-brand-success/10 border border-brand-success/30 rounded-lg">
            <p className="text-brand-neutral-700 text-sm">
              <span className="text-brand-success">✓</span> Your payment sustains the entire open source ecosystem, from the project you use to all its dependencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
