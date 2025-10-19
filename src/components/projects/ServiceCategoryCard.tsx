import React from 'react';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { ServiceItem } from './ServiceItem';

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: 'accent' | 'highlight' | 'warning' | 'success';
  services: Service[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function ServiceCategoryCard({
  title,
  description,
  icon: CategoryIcon,
  accentColor,
  services,
  isExpanded,
  onToggle
}: ServiceCategoryCardProps) {
  return (
    <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full p-5 text-left hover:bg-brand-card-blue-light transition-colors group"
      >
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg bg-brand-${accentColor}/10 border border-brand-${accentColor}/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-${accentColor}/20 transition-colors`}>
            <CategoryIcon className={`h-5 w-5 text-brand-${accentColor}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-brand-neutral-900">{title}</h3>
              <ChevronDown 
                className={`h-5 w-5 text-brand-neutral-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
            <p className="text-brand-neutral-600 text-sm">{description}</p>
          </div>
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="p-5 bg-brand-secondary/30 border-t border-brand-neutral-300">
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                name={service.name}
                description={service.description}
                icon={service.icon}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
