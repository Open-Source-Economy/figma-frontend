import React from 'react';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types/DeveloperOnboarding';

interface ProjectCardProps {
  project: Project;
  index: number;
  getRoleLabel: (role: string) => string;
  getAccessLabel: (access: string) => string;
}

export function ProjectCard({ project, index, getRoleLabel, getAccessLabel }: ProjectCardProps) {
  return (
    <div className="border-l-2 border-brand-highlight/30 pl-3 py-2.5 my-2 space-y-1.5 transition-colors hover:bg-brand-neutral-100/50">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-brand-neutral-800 text-sm">Project {index + 1}</span>
            {project.verified && (
              <Badge variant="outline" className="bg-brand-success/20 border-brand-success/30 text-brand-success text-xs h-4 px-1.5">
                ✓
              </Badge>
            )}
          </div>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline flex items-center gap-1 text-xs group"
          >
            <span className="truncate">{project.url}</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
        <div className="flex items-baseline gap-1.5">
          <span className="text-brand-neutral-500">Role:</span>
          <span className="text-brand-neutral-900">{getRoleLabel(project.role)}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-brand-neutral-500">Access:</span>
          <span className="text-brand-neutral-900">{getAccessLabel(project.mainBranchAccess)}</span>
        </div>
        {project.ecosystems && project.ecosystems.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-brand-neutral-500">Ecosystems:</span>
            <div className="flex flex-wrap gap-1">
              {project.ecosystems.map((eco, i) => (
                <Badge key={i} variant="outline" className="text-xs h-4 px-1.5">
                  {eco}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
