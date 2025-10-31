import React from 'react';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';

interface EmptyProjectsStateProps {
  onAddProject: () => void;
}

export const EmptyProjectsState: React.FC<EmptyProjectsStateProps> = ({
  onAddProject,
}) => {
  return (
    <div className="text-center py-12 rounded-xl border border-brand-neutral-300/30">
      <p className="text-brand-neutral-600 mb-4">No projects added yet</p>
      <Button
        onClick={onAddProject}
        className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Your First Project
      </Button>
    </div>
  );
};
