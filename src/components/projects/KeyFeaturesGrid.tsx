import React from 'react';
import { LucideIcon, Component, Zap, RefreshCw, Smartphone, Layers, FileCode, Gauge, Puzzle } from 'lucide-react';
import type { Feature } from '../../data/projectDetailData';

interface KeyFeaturesGridProps {
  features: Feature[];
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Component,
  Zap,
  RefreshCw,
  Smartphone,
  Layers,
  FileCode,
  Gauge,
  Puzzle
};

export function KeyFeaturesGrid({ features }: KeyFeaturesGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.icon] || Component;
        
        return (
          <div
            key={index}
            className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6 hover:border-brand-accent/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent/10 rounded-lg flex-shrink-0">
                <IconComponent className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-brand-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-brand-neutral-700 mb-3">
                  {feature.description}
                </p>
                <div className="p-3 bg-brand-success/5 border border-brand-success/20 rounded-lg">
                  <p className="text-brand-neutral-600">
                    <strong className="text-brand-success">Business Value:</strong> {feature.businessValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
