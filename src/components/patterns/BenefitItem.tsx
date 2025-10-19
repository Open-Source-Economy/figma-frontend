import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function BenefitItem({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = 'text-brand-primary' 
}: BenefitItemProps) {
  return (
    <div className="flex items-start gap-3 group">
      <div className={`w-5 h-5 mt-0.5 ${iconColor} group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="w-full h-full" />
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-brand-neutral-900 font-medium">
          {title}
        </h4>
        <p className="text-sm text-brand-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}