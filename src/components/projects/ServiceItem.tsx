import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  name: string;
  description: string;
  icon: LucideIcon;
  accentColor: 'accent' | 'highlight' | 'warning' | 'success';
}

export function ServiceItem({ name, description, icon: Icon, accentColor }: ServiceItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-8 h-8 rounded-lg bg-brand-${accentColor}/10 border border-brand-${accentColor}/20 flex items-center justify-center flex-shrink-0`}>
        <Icon className={`h-4 w-4 text-brand-${accentColor}`} />
      </div>
      <div className="flex-1">
        <div className="text-brand-neutral-800 mb-1">{name}</div>
        <p className="text-brand-neutral-600 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
