import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NextStepsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  timeline: string;
  brandColor: 'accent' | 'primary' | 'highlight';
  className?: string;
}

/**
 * NextStepsCard - Displays a card for onboarding success page
 * Shows what happens next in the onboarding process
 */
export const NextStepsCard: React.FC<NextStepsCardProps> = ({
  icon: Icon,
  title,
  description,
  timeline,
  brandColor,
  className = '',
}) => {
  return (
    <div className={`relative p-4 bg-card border border-border rounded-xl hover:border-brand-${brandColor}/30 transition-colors ${className}`}>
      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-${brandColor}/10 to-brand-${brandColor}/5 rounded-lg mb-3`}>
        <Icon className={`w-5 h-5 text-brand-${brandColor}`} />
      </div>
      <h3 className="mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">
        {description}
      </p>
      <p className="text-xs text-muted-foreground">{timeline}</p>
    </div>
  );
};
