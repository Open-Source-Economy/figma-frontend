import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SupportOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
  isActive?: boolean;
}

export function SupportOptionCard({
  icon: Icon,
  title,
  description,
  color,
  onClick,
  isActive = false
}: SupportOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 rounded-xl p-6 text-left transition-all hover:scale-105 hover:shadow-xl cursor-pointer ${
        isActive 
          ? `border-${color} shadow-lg shadow-${color}/20` 
          : 'border-brand-neutral-300/50 hover:border-brand-accent'
      }`}
    >
      <div className={`inline-flex p-3 rounded-lg mb-4 transition-transform group-hover:scale-110 ${
        isActive ? `bg-${color}/30` : `bg-${color}/20`
      }`}>
        <Icon className={`h-6 w-6 text-${color}`} />
      </div>
      <h3 className="text-brand-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-brand-neutral-600">{description}</p>
      {isActive && (
        <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-${color} rounded-full flex items-center justify-center`}>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
    </button>
  );
}