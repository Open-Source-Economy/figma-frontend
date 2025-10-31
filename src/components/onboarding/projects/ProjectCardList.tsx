import React from 'react';
import { Project } from '../../../types/DeveloperOnboarding';
import { ProjectCard } from './ProjectCard';

interface ProjectCardListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export const ProjectCardList: React.FC<ProjectCardListProps> = ({
  projects,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="md:hidden space-y-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
