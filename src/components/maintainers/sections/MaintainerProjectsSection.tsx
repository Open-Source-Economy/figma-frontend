import React from 'react';
import { MaintainerProjectsList } from '../MaintainerProjectsList';

interface Project {
  id: string;
  name: string;
  description: string;
  stars: number;
  role: string;
  contributionLevel: string;
  technologies: string[];
  slug?: string;
}

interface MaintainerProjectsSectionProps {
  projects: Project[];
  maintainerFirstName: string;
  onViewProject?: (slug: string) => void;
  className?: string;
}

/**
 * MaintainerProjectsSection - Projects section wrapper
 * Displays list of maintainer's projects with consistent section styling
 */
export const MaintainerProjectsSection: React.FC<MaintainerProjectsSectionProps> = ({
  projects,
  maintainerFirstName,
  onViewProject,
  className = '',
}) => {
  return (
    <section className={`py-10 border-b border-brand-neutral-300 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <MaintainerProjectsList
          projects={projects}
          maintainerFirstName={maintainerFirstName}
          onViewProject={onViewProject}
        />
      </div>
    </section>
  );
};
