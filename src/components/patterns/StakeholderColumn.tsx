import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BenefitItem } from './BenefitItem';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StakeholderColumnProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: Benefit[];
  iconBgColor: string;
  backgroundGradient: string;
}

export function StakeholderColumn({
  icon: Icon,
  title,
  description,
  benefits,
  iconBgColor,
  backgroundGradient
}: StakeholderColumnProps) {
  return (
    <div className={`${backgroundGradient} rounded-2xl p-6 lg:p-8 border border-brand-neutral-300/50 group hover:shadow-lg transition-all duration-300`}>
      <div>
        {/* Header */}
        <div className="text-center space-y-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl ${iconBgColor} flex items-center justify-center text-white mx-auto group-hover:scale-105 transition-transform duration-300`}>
            <Icon className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-brand-neutral-900">
              {title}
            </h3>
            <p className="text-brand-neutral-600 leading-relaxed text-[20px]">
              {description}
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 bg-brand-neutral-100/50 -mx-6 lg:-mx-8 -mb-6 lg:-mb-8 px-6 lg:px-8 pt-6 pb-6 lg:pb-8 border-t border-brand-neutral-300/30 rounded-b-2xl">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconColor="text-brand-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}