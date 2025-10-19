import React from 'react';
import { Star, GitFork, Users, Package } from 'lucide-react';

interface PlatformStatsProps {
  totalStars: string;
  totalMaintainers: number;
  totalProjects: number;
  totalForks: string;
  className?: string;
}

export function PlatformStats({
  totalStars,
  totalMaintainers,
  totalProjects,
  totalForks,
  className = ''
}: PlatformStatsProps) {
  const stats = [
    {
      icon: Star,
      label: 'Total Stars',
      value: totalStars,
      color: 'text-brand-warning',
      bgColor: 'bg-brand-warning/10'
    },
    {
      icon: Users,
      label: 'Maintainers',
      value: totalMaintainers.toLocaleString(),
      color: 'text-brand-accent',
      bgColor: 'bg-brand-accent/10'
    },
    {
      icon: Package,
      label: 'Projects',
      value: totalProjects.toLocaleString(),
      color: 'text-brand-success',
      bgColor: 'bg-brand-success/10'
    },
    {
      icon: GitFork,
      label: 'Total Forks',
      value: totalForks,
      color: 'text-brand-highlight',
      bgColor: 'bg-brand-highlight/10'
    }
  ];

  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div>
            <div className="text-foreground mb-0.5">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
