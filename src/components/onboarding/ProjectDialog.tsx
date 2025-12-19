import React from 'react';
import { Project, ProjectType, ProjectRole, MainBranchAccess } from '../../types/DeveloperOnboarding';
import { BrandModal, BrandModalSection, BrandModalAlert } from '../ui/brand-modal';
import { Button } from '../ui/button';
import { FormField } from '../forms/FormField';
import { SelectField } from '../forms/SelectField';
import { ChipInput } from '../forms/ChipInput';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { ExternalLink, AlertCircle, Github, User, ShieldCheck, List, Plus } from 'lucide-react';

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
  const [isBulkMode, setIsBulkMode] = React.useState(false);
  const [bulkUrls, setBulkUrls] = React.useState('');
  const [bulkSharedData, setBulkSharedData] = React.useState({
    role: '' as ProjectRole | '',
    mainBranchAccess: '' as MainBranchAccess | '',
    ecosystems: [] as string[],
  });
  
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
      setIsBulkMode(false);
      setBulkUrls('');
      setBulkSharedData({
        role: '',
        mainBranchAccess: '',
        ecosystems: [],
      });
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

  const detectProjectType = (url: string): ProjectType | null => {
    try {
      const urlObj = new URL(url.trim());
      if (urlObj.hostname === 'github.com') {
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        // If has 2 parts (owner/repo), it's a repo
        // If has 1 part (owner), it's an org
        if (pathParts.length >= 2) {
          return 'github_repo';
        } else if (pathParts.length === 1) {
          return 'github_org';
        }
      }
      return 'other_url';
    } catch {
      return null;
    }
  };

  const validateBulkForm = (): { valid: boolean; projects: Partial<Project>[] } => {
    const newErrors: Record<string, string> = {};
    const projects: Partial<Project>[] = [];

    // Parse URLs
    const urls = bulkUrls
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    if (urls.length === 0) {
      newErrors.bulkUrls = 'Please enter at least one project URL';
      setErrors(newErrors);
      return { valid: false, projects: [] };
    }

    // Validate shared fields
    if (!bulkSharedData.role) {
      newErrors.role = 'Please select a role for all projects';
    }

    if (!bulkSharedData.mainBranchAccess) {
      newErrors.mainBranchAccess = 'Please select merge rights for all projects';
    }

    // Validate each URL
    const invalidUrls: string[] = [];
    urls.forEach((url, index) => {
      try {
        new URL(url);
        const projectType = detectProjectType(url);
        if (projectType) {
          projects.push({
            url,
            projectType,
            role: bulkSharedData.role || undefined,
            mainBranchAccess: bulkSharedData.mainBranchAccess || undefined,
            ecosystems: bulkSharedData.ecosystems.length > 0 ? bulkSharedData.ecosystems : undefined,
          });
        } else {
          invalidUrls.push(url);
        }
      } catch {
        invalidUrls.push(url);
      }
    });

    if (invalidUrls.length > 0) {
      newErrors.bulkUrls = `Invalid URLs found: ${invalidUrls.slice(0, 3).join(', ')}${invalidUrls.length > 3 ? '...' : ''}`;
    }

    setErrors(newErrors);
    return { valid: Object.keys(newErrors).length === 0, projects };
  };

  const handleBulkSave = () => {
    const { valid, projects } = validateBulkForm();
    if (!valid || projects.length === 0) {
      return;
    }

    // Save each project
    projects.forEach((projectData) => {
      const fullProject: Project = {
        id: `proj-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        projectType: projectData.projectType!,
        url: projectData.url!,
        role: projectData.role!,
        mainBranchAccess: projectData.mainBranchAccess!,
        ecosystems: projectData.ecosystems,
        verified: false,
      };
      onSave(fullProject);
    });

    onClose();
  };

  return (
    <BrandModal
      open={open}
      onClose={onClose}
      title={mode === 'add' ? (isBulkMode ? 'Add Multiple Projects' : 'Add Open Source Project') : 'Edit Project Information'}
      description={
        mode === 'add' 
          ? isBulkMode
            ? 'Add multiple open source projects at once by providing their URLs.'
            : 'Share details about an open source project where you actively contribute or maintain code.'
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
            onClick={isBulkMode ? handleBulkSave : handleSave}
            className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white shadow-lg"
          >
            {mode === 'add' ? (isBulkMode ? 'Add All Projects' : 'Add Project') : 'Save Changes'}
          </Button>
        </>
      }
    >
      <div className="space-y-8 py-2 pb-6">
          {/* Step 1: Your Contribution */}
          <BrandModalSection
            icon={<User />}
            title="Your Contribution"
            description={isBulkMode ? "Define the role and permissions that apply to all projects you'll add" : "Tell us about your role and permissions"}
            iconColor="highlight"
          >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Role */}
                <SelectField
                  label={isBulkMode ? "Role (for all projects)" : "Your Role"}
                  required
                  options={roleOptions}
                  value={isBulkMode ? bulkSharedData.role : (formData.role || '')}
                  onChange={(value) => {
                    if (isBulkMode) {
                      setBulkSharedData(prev => ({ ...prev, role: value as ProjectRole }));
                      if (errors.role) {
                        setErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.role;
                          return newErrors;
                        });
                      }
                    } else {
                      handleFieldChange('role', value as ProjectRole);
                    }
                  }}
                  error={errors.role}
                />

                {/* Main Branch Access */}
                <SelectField
                  label={isBulkMode ? "Merge Rights (for all projects)" : "Merge Rights to Main Branch"}
                  required
                  options={accessOptions}
                  value={isBulkMode ? bulkSharedData.mainBranchAccess : (formData.mainBranchAccess || '')}
                  onChange={(value) => {
                    if (isBulkMode) {
                      setBulkSharedData(prev => ({ ...prev, mainBranchAccess: value as MainBranchAccess }));
                      if (errors.mainBranchAccess) {
                        setErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.mainBranchAccess;
                          return newErrors;
                        });
                      }
                    } else {
                      handleFieldChange('mainBranchAccess', value as MainBranchAccess);
                    }
                  }}
                  error={errors.mainBranchAccess}
                />
              </div>
          </BrandModalSection>

          {/* Step 2: Project Information */}
          <BrandModalSection
            icon={<Github />}
            title="Project Information"
            description={isBulkMode ? "Paste URLs for all projects where you have this role" : "Identify the project and provide a link"}
            iconColor="accent"
          >
            {/* Mode Toggle - Only show in Add mode */}
            {mode === 'add' && (
              <ToggleGroup 
                type="single" 
                value={isBulkMode ? 'bulk' : 'single'}
                onValueChange={(value) => {
                  if (value) setIsBulkMode(value === 'bulk');
                }}
                variant="subtle"
                className="mb-5"
              >
                <ToggleGroupItem 
                  value="single"
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Single Project
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="bulk"
                  className="flex items-center gap-2"
                >
                  <List className="w-4 h-4" />
                  Bulk Add
                </ToggleGroupItem>
              </ToggleGroup>
            )}

            {!isBulkMode ? (
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
            ) : (
              <div className="space-y-5">
                {/* Project Type - Required first */}
                <div className="md:w-1/3">
                  <SelectField
                    label="Project Type (for all projects)"
                    required
                    options={projectTypeOptions}
                    value={formData.projectType || ''}
                    onChange={(value) => handleFieldChange('projectType', value as ProjectType)}
                    error={errors.projectType}
                  />
                </div>

                {/* Only show bulk URL input after type is selected */}
                {formData.projectType && (
                  <>
                    {/* Bulk URL Input */}
                    <FormField
                      label="Project URLs"
                      required
                      error={errors.bulkUrls}
                      hint={
                        formData.projectType === 'github_repo'
                          ? 'Enter one GitHub repository URL per line.'
                          : formData.projectType === 'github_org'
                          ? 'Enter one GitHub organization URL per line.'
                          : 'Enter one project URL per line.'
                      }
                    >
                      <Textarea
                        value={bulkUrls}
                        onChange={(e) => {
                          setBulkUrls(e.target.value);
                          if (errors.bulkUrls) {
                            setErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.bulkUrls;
                              return newErrors;
                            });
                          }
                        }}
                        placeholder={
                          formData.projectType === 'github_repo'
                            ? `https://github.com/facebook/react\nhttps://github.com/vuejs/vue\nhttps://github.com/angular/angular\n...`
                            : formData.projectType === 'github_org'
                            ? `https://github.com/nodejs\nhttps://github.com/facebook\nhttps://github.com/google\n...`
                            : `https://example.com/project1\nhttps://example.com/project2\n...`
                        }
                        rows={8}
                        variant={errors.bulkUrls ? 'error' : 'default'}
                        className="font-mono text-sm"
                      />
                    </FormField>

                    {/* URL Count Preview */}
                    {bulkUrls.trim() && (
                      <div className="space-y-1.5">
                        <div className="text-sm text-brand-neutral-700">
                          All projects detected: {bulkUrls.split('\n').filter(line => line.trim()).length}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-neutral-600">
                          <span>• 12 GitHub repositories</span>
                          <span>• 3 GitHub organizations</span>
                          <span>• 2 non-GitHub URLs</span>
                        </div>
                      </div>
                    )}

                    {/* Shared Ecosystems */}
                    <FormField
                      label="Shared Ecosystems (Optional)"
                      hint="These ecosystems will be applied to all projects."
                    >
                      <ChipInput
                        values={bulkSharedData.ecosystems}
                        onChange={(ecosystems) => setBulkSharedData(prev => ({ ...prev, ecosystems }))}
                        suggestions={ecosystemSuggestions}
                        placeholder="Type to search or add custom ecosystem..."
                        allowCustom
                        showCount
                        countLabel="ecosystem"
                      />
                    </FormField>
                  </>
                )}
              </div>
            )}
          </BrandModalSection>

          {/* Step 3: Verification Notice */}
          {((!isBulkMode && formData.projectType) || isBulkMode) && (
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
                  {isBulkMode 
                    ? "We'll verify your contributions to all projects through your GitHub profile. Please ensure your GitHub contributions are set to public visibility for successful verification."
                    : "We'll verify your project contributions through your GitHub profile. Please ensure your GitHub contributions are set to public visibility for successful verification."
                  }
                </p>
                <ul className="text-xs space-y-1 ml-4 list-disc">
                  <li>Verification typically takes 24-48 hours</li>
                  <li>You'll receive an email notification once verified</li>
                  <li>Public contributions are required for verification</li>
                  {isBulkMode && <li>All projects will be verified individually</li>}
                </ul>
              </BrandModalAlert>
            </BrandModalSection>
          )}
      </div>
    </BrandModal>
  );
};