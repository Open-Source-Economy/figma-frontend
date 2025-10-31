import React from 'react';
import { Project, ProjectType, ProjectRole, MainBranchAccess } from '../../types/DeveloperOnboarding';
import { BrandModal, BrandModalSection, BrandModalAlert } from '../ui/brand-modal';
import { Button } from '../ui/button';
import { FormField } from '../forms/FormField';
import { SelectField } from '../forms/SelectField';
import { ChipInput } from '../forms/ChipInput';
import { Input } from '../ui/input';
import { ExternalLink, AlertCircle, Github, User, ShieldCheck } from 'lucide-react';

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  project?: Project;
  mode: 'add' | 'edit';
}

const projectTypeOptions: { value: ProjectType; label: string }[] = [
  { value: 'github_repo', label: 'GitHub Repository' },
  { value: 'github_org', label: 'GitHub Organization' },
  { value: 'other_url', label: 'Other URL' },
];

const roleOptions: { value: ProjectRole; label: string }[] = [
  { value: 'maintainer', label: 'Maintainer' },
  { value: 'core_contributor', label: 'Core Contributor' },
  { value: 'contributor', label: 'Contributor' },
  { value: 'other', label: 'Other' },
];

const accessOptions: { value: MainBranchAccess; label: string }[] = [
  { value: 'full_write', label: 'Full Write Access' },
  { value: 'write_with_review', label: 'Write with Review' },
  { value: 'read_only', label: 'Read Only' },
];

// Popular ecosystem suggestions
const ecosystemSuggestions = [
  'React',
  'Vue',
  'Angular',
  'Node.js',
  'Python',
  'Django',
  'Flask',
  'Ruby on Rails',
  'Java',
  'Spring',
  'Go',
  'Rust',
  'TypeScript',
  'JavaScript',
  'PHP',
  'Laravel',
  '.NET',
  'C++',
  'Kubernetes',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'GraphQL',
  'Next.js',
  'Nuxt',
  'Svelte',
  'Electron',
  'React Native',
  'Flutter',
];

/**
 * ProjectDialog - Modal dialog for adding/editing projects
 * Provides a focused experience for project entry
 */
export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  open,
  onClose,
  onSave,
  project,
  mode,
}) => {
  const [formData, setFormData] = React.useState<Partial<Project>>({
    projectType: project?.projectType,
    url: project?.url || '',
    role: project?.role || '',
    mainBranchAccess: project?.mainBranchAccess || '',
    ecosystems: project?.ecosystems || [],
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Reset form when dialog opens/closes or project changes
  React.useEffect(() => {
    if (open) {
      setFormData({
        projectType: project?.projectType,
        url: project?.url || '',
        role: project?.role || '',
        mainBranchAccess: project?.mainBranchAccess || '',
        ecosystems: project?.ecosystems || [],
      });
      setErrors({});
    }
  }, [open, project]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.url?.trim()) {
      newErrors.url = 'Project URL is required';
    } else {
      // Basic URL validation
      try {
        new URL(formData.url);
      } catch {
        newErrors.url = 'Please enter a valid URL';
      }
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.mainBranchAccess) {
      newErrors.mainBranchAccess = 'Please select merge rights';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const projectData: Project = {
      id: project?.id || `proj-${Date.now()}`,
      projectType: formData.projectType!,
      url: formData.url!,
      role: formData.role!,
      mainBranchAccess: formData.mainBranchAccess!,
      ecosystems: formData.ecosystems && formData.ecosystems.length > 0 ? formData.ecosystems : undefined,
      verified: project?.verified || false,
    };

    onSave(projectData);
    onClose();
  };

  const handleFieldChange = (field: keyof Project, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user makes changes
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <BrandModal
      open={open}
      onClose={onClose}
      title={mode === 'add' ? 'Add Open Source Project' : 'Edit Project Information'}
      description={
        mode === 'add' 
          ? 'Share details about an open source project where you actively contribute or maintain code.'
          : 'Update your project details to keep your profile accurate.'
      }
      size="3xl"
      footer={
        <>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-brand-neutral-300 hover:bg-brand-secondary-dark text-brand-neutral-700"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white shadow-lg"
          >
            {mode === 'add' ? 'Add Project' : 'Save Changes'}
          </Button>
        </>
      }
    >
      <div className="space-y-8 py-2 pb-6">
          {/* Step 1: Project Information */}
          <BrandModalSection
            icon={<Github />}
            title="Project Information"
            description="Identify the project and provide a link"
            iconColor="accent"
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Project Type */}
                <div className="md:col-span-1">
                  <SelectField
                    label="Project Type"
                    required
                    options={projectTypeOptions}
                    value={formData.projectType || ''}
                    onChange={(value) => handleFieldChange('projectType', value as ProjectType)}
                    error={errors.projectType}
                  />
                </div>

                {/* Project URL - Only shown after type is selected */}
                {formData.projectType && (
                  <div className="md:col-span-2">
                    <FormField
                      label={
                        formData.projectType === 'github_repo' 
                          ? 'GitHub Repository URL'
                          : formData.projectType === 'github_org'
                          ? 'GitHub Organization URL'
                          : 'Project URL'
                      }
                      required
                      error={errors.url}
                      hint={
                        formData.projectType === 'github_repo'
                          ? 'e.g., https://github.com/facebook/react'
                          : formData.projectType === 'github_org'
                          ? 'e.g., https://github.com/nodejs'
                          : 'Any public URL to your project'
                      }
                    >
                      <div className="relative">
                        <Input
                          type="url"
                          value={formData.url || ''}
                          onChange={(e) => handleFieldChange('url', e.target.value)}
                          placeholder={
                            formData.projectType === 'github_repo'
                              ? 'https://github.com/username/repository'
                              : formData.projectType === 'github_org'
                              ? 'https://github.com/organization'
                              : 'https://...'
                          }
                          className="pr-10"
                          variant={errors.url ? 'error' : 'default'}
                        />
                        {formData.url && (
                          <a
                            href={formData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-accent hover:text-brand-accent-dark transition-colors z-10"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </FormField>
                  </div>
                )}
              </div>

              {/* Ecosystems field - optional, multi-select */}
              {formData.projectType && (
                <div>
                  <FormField
                    label="Ecosystems (Optional)"
                    hint="Select from suggestions or type your own. You can add multiple ecosystems."
                  >
                    <ChipInput
                      values={formData.ecosystems || []}
                      onChange={(ecosystems) => handleFieldChange('ecosystems', ecosystems)}
                      suggestions={ecosystemSuggestions}
                      placeholder="Type to search or add custom ecosystem..."
                      allowCustom
                      showCount
                      countLabel="ecosystem"
                    />
                  </FormField>
                </div>
              )}
            </div>
          </BrandModalSection>

          {/* Step 2: Your Contribution */}
          {formData.projectType && (
            <BrandModalSection
              icon={<User />}
              title="Your Contribution"
              description="Tell us about your role and permissions"
              iconColor="highlight"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Role */}
                  <SelectField
                    label="Your Role"
                    required
                    options={roleOptions}
                    value={formData.role || ''}
                    onChange={(value) => handleFieldChange('role', value as ProjectRole)}
                    error={errors.role}
                  />

                  {/* Main Branch Access */}
                  <SelectField
                    label="Merge Rights to Main Branch"
                    required
                    options={accessOptions}
                    value={formData.mainBranchAccess || ''}
                    onChange={(value) => handleFieldChange('mainBranchAccess', value as MainBranchAccess)}
                    error={errors.mainBranchAccess}
                  />
                </div>
            </BrandModalSection>
          )}

          {/* Step 3: Verification Notice */}
          {formData.projectType && (
            <BrandModalSection
              icon={<ShieldCheck />}
              title="Verification"
              description="How we'll confirm your contributions"
              iconColor="success"
            >
              <BrandModalAlert
                type="success"
                icon={<AlertCircle />}
                title="Verification Process"
              >
                <p className="mb-3">
                  We'll verify your project contributions through your GitHub profile. Please ensure your GitHub contributions are set to public visibility for successful verification.
                </p>
                <ul className="text-xs space-y-1 ml-4 list-disc">
                  <li>Verification typically takes 24-48 hours</li>
                  <li>You'll receive an email notification once verified</li>
                  <li>Public contributions are required for verification</li>
                </ul>
              </BrandModalAlert>
            </BrandModalSection>
          )}
      </div>
    </BrandModal>
  );
};
