import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
}

export function SectionHeader({ icon: Icon, iconColor, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className={`h-4 w-4 ${iconColor}`} />
        <h4 className="text-brand-neutral-900 text-sm">{title}</h4>
      </div>
      <p className="text-brand-neutral-500 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
