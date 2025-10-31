import React from 'react';
import { Badge } from '../../ui/badge';

interface ExpertiseBadgesProps {
  title: string;
  items: string[];
  variant?: 'accent' | 'highlight' | 'primary' | 'success';
  className?: string;
}

/**
 * ExpertiseBadges - Displays a titled list of expertise/skill badges
 * Used in maintainer profiles for expertise, languages, frameworks, etc.
 */
export const ExpertiseBadges: React.FC<ExpertiseBadgesProps> = ({
  title,
  items,
  variant = 'accent',
  className = '',
}) => {
  return (
    <div className={className}>
      <h3 className="text-brand-neutral-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <Badge 
            key={idx} 
            variant="outline"
            className={`bg-brand-${variant}/10 text-brand-${variant} border-brand-${variant}/30`}
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};
