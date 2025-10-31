import React from 'react';
import { Project } from '../../../types/DeveloperOnboarding';
import { Button } from '../../ui/button';
import { Plus, Lightbulb } from 'lucide-react';
import { ProjectDialog } from '../ProjectDialog';
import { StepHeader } from '../StepHeader';
import { InfoMessage } from '../../ui/info-message';
import { ValidationAlert } from '../../forms/ValidationAlert';
import { ProjectsTable } from '../projects/ProjectsTable';
import { ProjectCardList } from '../projects/ProjectCardList';
import { EmptyProjectsState } from '../projects/EmptyProjectsState';

interface StepProjectsProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
  errors?: Record<string, string>;
}

/**
 * StepProjects - Step 2 of developer onboarding
 * Collects information about open source projects the developer maintains
 * Uses a dialog-based approach for adding/editing projects
 */
export const StepProjects: React.FC<StepProjectsProps> = ({
  projects,
  onChange,
  errors = {},
}) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingProject, setEditingProject] = React.useState<Project | undefined>(undefined);
  const [dialogMode, setDialogMode] = React.useState<'add' | 'edit'>('add');

  const handleAddProject = () => {
    setEditingProject(undefined);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleRemoveProject = (id: string) => {
    onChange(projects.filter(p => p.id !== id));
  };

  const handleSaveProject = (project: Project) => {
    if (dialogMode === 'add') {
      onChange([...projects, project]);
    } else {
      onChange(projects.map(p => p.id === project.id ? project : p));
    }
  };

  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <StepHeader
        stepNumber="02"
        title="Open Source Projects"
        subtitle="Tell us about the open source projects you contribute to or maintain. This helps us understand your expertise and match you with relevant opportunities."
        align="left"
        maxWidth="w-full"
      />

      {/* Info Alert - Hint about project listing */}
      <InfoMessage icon={Lightbulb} variant="subtle">
        <strong className="block mb-1 text-sm">Pro Tip</strong>
        <span className="block mb-1">Companies and donors search for developers by their projects.</span>
        <span className="block">→ Include all open source projects you'd like to receive funding for to maximize your visibility and funding opportunities.</span>
      </InfoMessage>

      {/* Error Alert */}
      {hasErrors && (
        <ValidationAlert>
          Please add at least one open source project to continue. This helps us understand your expertise and match you with relevant opportunities.
        </ValidationAlert>
      )}

      {/* Projects Display */}
      {projects.length === 0 ? (
        <EmptyProjectsState onAddProject={handleAddProject} />
      ) : (
        <>
          {/* Mobile/Tablet: Card Layout */}
          <ProjectCardList
            projects={projects}
            onEdit={handleEditProject}
            onDelete={handleRemoveProject}
          />

          {/* Desktop: Table Layout */}
          <ProjectsTable
            projects={projects}
            onEdit={handleEditProject}
            onDelete={handleRemoveProject}
          />

          {/* Add Another Project Button */}
          <Button
            onClick={handleAddProject}
            variant="outline"
            className="w-full border-brand-accent/40 hover:bg-brand-accent/10 hover:border-brand-accent/60 text-brand-neutral-800 hover:text-brand-accent transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Another Project
          </Button>
        </>
      )}

      {/* Project Dialog */}
      <ProjectDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveProject}
        project={editingProject}
        mode={dialogMode}
      />

      {/* Help Text */}
      <InfoMessage variant="note" title="Note:">
        We'll verify your project contributions through your GitHub profile. Make sure your GitHub contributions are public for verification.
      </InfoMessage>
    </div>
  );
};
