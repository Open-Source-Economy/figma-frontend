import React from 'react';
import { Button } from '../../ui/button';
import { Github, AlertCircle } from 'lucide-react';
import { BrandModal, BrandModalSection } from '../../ui/brand-modal';
import { ProjectSelector } from './ProjectSelector';
import { Project } from '../../../types/DeveloperOnboarding';

interface QuickProjectPickerProps {
  open: boolean;
  serviceName: string;
  projects: Project[];
  selectedProjectIds: string[];
  onClose: () => void;
  onSave: () => void;
  onChange: (projectIds: string[]) => void;
}

export const QuickProjectPicker: React.FC<QuickProjectPickerProps> = ({
  open,
  serviceName,
  projects,
  selectedProjectIds,
  onClose,
  onSave,
  onChange,
}) => {
  return (
    <BrandModal
      open={open}
      onClose={onClose}
      title="Select Projects"
      description={`Choose which projects ${serviceName} applies to`}
      size="md"
      footer={
        <div className="flex items-center justify-between w-full gap-4">
          <div className="text-sm text-brand-neutral-600">
            {selectedProjectIds.length === 0 ? (
              <span className="text-brand-warning">At least one project required</span>
            ) : (
              <span className="text-brand-neutral-600">{selectedProjectIds.length} project{selectedProjectIds.length !== 1 ? 's' : ''} selected</span>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={onSave}
              disabled={selectedProjectIds.length === 0}
              className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Projects
            </Button>
          </div>
        </div>
      }
    >
      <div className="py-4 px-1">
        <BrandModalSection
          icon={<Github />}
          title={<span className="flex items-center gap-2">Projects <span className="text-brand-error">*</span></span>}
          description="Select which projects this service applies to"
        >
          <ProjectSelector
            projects={projects}
            selectedIds={selectedProjectIds}
            onChange={onChange}
          />
          {selectedProjectIds.length === 0 && (
            <div className="mt-3 flex items-center gap-2 text-sm text-brand-warning">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Select at least one project</span>
            </div>
          )}
        </BrandModalSection>
      </div>
    </BrandModal>
  );
};
