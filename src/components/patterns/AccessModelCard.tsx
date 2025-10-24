import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface AccessModelCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export const AccessModelCard: React.FC<AccessModelCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  bullets
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/10 hover:-translate-y-1">
      {/* Hover glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-accent/20 border border-brand-accent/40 mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-brand-accent-light" />
        </div>
        
        {/* Title and Description */}
        <div className="mb-8">
          <h4 className="text-brand-neutral-950 mb-1">
            {title}
          </h4>
          <p className="text-brand-neutral-700 mb-3 text-sm">
            {subtitle}
          </p>
          <p className="text-brand-neutral-600 caption">{description}</p>
        </div>
        
        {/* Features List */}
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/20 border border-brand-success/40 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-brand-success-light" />
              </div>
              <span className="text-brand-neutral-800 text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
