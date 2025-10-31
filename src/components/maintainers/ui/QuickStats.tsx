import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  label: string;
}

interface QuickStatsProps {
  stats: StatItem[];
  className?: string;
}

/**
 * QuickStats - Displays a horizontal list of icon + text stats
 * Used in maintainer profiles for location, timezone, experience, etc.
 */
export const QuickStats: React.FC<QuickStatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="flex items-center gap-2 text-brand-neutral-600">
            <Icon className="h-4 w-4" />
            <span>{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
};
