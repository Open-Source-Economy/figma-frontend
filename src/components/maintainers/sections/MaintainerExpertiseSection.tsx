import React from 'react';
import { ExpertiseBadges } from '../ui/ExpertiseBadges';

interface MaintainerExpertiseSectionProps {
  expertise: string[];
  languages: string[];
  className?: string;
}

/**
 * MaintainerExpertiseSection - Displays expertise and languages
 * Two-column layout showing technical skills and programming languages
 */
export const MaintainerExpertiseSection: React.FC<MaintainerExpertiseSectionProps> = ({
  expertise,
  languages,
  className = '',
}) => {
  return (
    <section className={`bg-brand-secondary py-6 border-b border-brand-neutral-300 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExpertiseBadges
            title="Expertise"
            items={expertise}
            variant="accent"
          />
          <ExpertiseBadges
            title="Languages"
            items={languages}
            variant="highlight"
          />
        </div>
      </div>
    </section>
  );
};
