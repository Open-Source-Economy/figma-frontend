import React from 'react';
import { Button } from '../../ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { Project } from '../../../types/DeveloperOnboarding';

interface ProjectRowActionsProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export const ProjectRowActions: React.FC<ProjectRowActionsProps> = ({
  project,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(project)}
        className="h-9 w-9 p-0 text-brand-accent hover:text-brand-accent-light hover:bg-brand-accent/10 transition-all"
        title="Edit project"
      >
        <Edit className="w-4 h-4" />
      </Button>
      <DeleteProjectDialog
        trigger={
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 text-brand-error hover:text-brand-error-light hover:bg-brand-error/10 transition-all"
            title="Remove project"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        }
        onConfirm={() => onDelete(project.id)}
      />
    </div>
  );
};
