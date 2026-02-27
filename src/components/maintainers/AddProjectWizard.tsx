import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { SelectField } from '../forms/SelectField';
import { ChipInput } from '../forms/ChipInput';
import { WizardStepIndicator } from '../onboarding/WizardStepIndicator';
import { WizardNavigation } from '../onboarding/WizardNavigation';
import { StepHeader } from '../onboarding/StepHeader';
import { StepSidebar } from '../onboarding/StepSidebar';
import { InfoMessage } from '../ui/info-message';
import { BrandModalSection, BrandModalAlert } from '../ui/brand-modal';
import { ServiceModal } from '../onboarding/services/ServiceModal';
import { ServicesList } from '../onboarding/services/ServicesList';
import { ServiceStats } from '../onboarding/services/ServiceStats';
import { EmptyServicesState } from '../onboarding/services/EmptyServicesState';
import { ReviewCard, ReviewCardHeader, ReviewField, ReviewSection } from '../onboarding/ReviewComponents';
import { getServiceById } from '../../data/servicesDefinitions';
import { toast } from 'sonner@2.0.3';
import {
  Globe,
  Github,
  CheckCircle2,
  ArrowRight,
  Plus,
  X,
  Lightbulb,
  User,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Edit,
  Trash2,
  Briefcase
} from 'lucide-react';
import type { Project, ProjectType, ProjectRole, MainBranchAccess, DeveloperService, ServiceType } from '../../types/DeveloperOnboarding';
import type { WizardStep } from '../onboarding/WizardStepIndicator';

// Simple Service type for maintainer dashboard
interface Service {
  id: string;
  name: string;
  category: string;
  rate: number;
  projectIds: string[];
  responseTime: string;
}

interface AddProjectWizardProps {
  onComplete?: (project: Project, services: Service[], addServicesToCatalog: boolean) => void;
  onCancel?: () => void;
  existingServices?: Service[];
}

const WIZARD_STEPS: WizardStep[] = [
  {
    number: 1,
    title: 'Project Basics',
    description: 'Tell us about your open source project and your role'
  },
  {
    number: 2,
    title: 'Services Mapping',
    description: 'Configure the services you want to offer for this project'
  },
  {
    number: 3,
    title: 'Review & Confirm',
    description: 'Review your information and add the project to your profile'
  }
];

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

export function AddProjectWizard({
  onComplete,
  onCancel,
  existingServices = []
}: AddProjectWizardProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  
  // Step 1: Project basics
  const [projectData, setProjectData] = React.useState<Partial<Project>>({
    projectType: undefined,
    url: '',
    role: undefined,
    mainBranchAccess: undefined,
    ecosystems: [],
  });

  // Step 2: Services mapping - Modal and Edit State
  const [developerServices, setDeveloperServices] = React.useState<DeveloperService[]>([]);
  const [addNewServicesToCatalog, setAddNewServicesToCatalog] = React.useState(true);
  
  // Modal state
  const [isServiceModalOpen, setIsServiceModalOpen] = React.useState(false);
  const [editingDeveloperService, setEditingDeveloperService] = React.useState<DeveloperService | undefined>(undefined);
  const [modalMode, setModalMode] = React.useState<'add' | 'edit'>('add');

  // Create mock project for services (since we're in wizard mode)
  const mockProject: Project = React.useMemo(() => ({
    id: projectData.id || 'temp-project',
    projectType: projectData.projectType || 'github_repo',
    url: projectData.url || '',
    role: projectData.role || 'maintainer',
    mainBranchAccess: projectData.mainBranchAccess || 'full_write',
    ecosystems: projectData.ecosystems,
    verified: false
  }), [projectData]);

  // Group services by type for ServicesList
  const servicesByType = React.useMemo(() => {
    const grouped: Record<ServiceType, DeveloperService[]> = {
      support: [],
      development: [],
      advisory: [],
      security_and_compliance: []
    };
    
    developerServices.forEach(service => {
      if (grouped[service.serviceType]) {
        grouped[service.serviceType].push(service);
      }
    });
    
    return grouped;
  }, [developerServices]);

  // Validation
  const isStep1Valid = () => {
    return projectData.projectType && 
           projectData.url && 
           projectData.role && 
           projectData.mainBranchAccess;
  };

  const isStep2Valid = () => {
    return developerServices.length > 0;
  };

  const handleNext = () => {
    if (currentStep < WIZARD_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectAll = () => {
    setSelectedServiceIds(existingServices.map(s => s.id));
  };

  const handleClearAll = () => {
    setSelectedServiceIds([]);
  };

  const handleToggleService = (serviceId: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Service modal handlers
  const handleOpenAddServiceModal = () => {
    setEditingDeveloperService(undefined);
    setModalMode('add');
    setIsServiceModalOpen(true);
  };

  const handleEditService = (service: DeveloperService) => {
    setEditingDeveloperService(service);
    setModalMode('edit');
    setIsServiceModalOpen(true);
  };

  const handleToggleDeveloperService = (serviceId: string) => {
    setDeveloperServices(prev => 
      prev.map(s => s.id === serviceId ? { ...s, enabled: !s.enabled } : s)
    );
  };

  const handleRemoveService = (serviceId: string) => {
    setDeveloperServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleSaveServicesFromModal = (services: DeveloperService[]) => {
    if (modalMode === 'add') {
      setDeveloperServices(prev => [...prev, ...services]);
    } else {
      // Edit mode
      const service = services[0];
      if (service) {
        setDeveloperServices(prev => 
          prev.map(s => s.id === service.id ? service : s)
        );
      }
    }
    setIsServiceModalOpen(false);
  };

  // Placeholder handlers for Step 5 components (not needed in wizard context)
  const handleOpenResponseTimePicker = (serviceId: string) => {
    // Find and edit the service
    const service = developerServices.find(s => s.id === serviceId);
    if (service) {
      handleEditService(service);
    }
  };

  const handleOpenProjectPicker = (serviceId: string) => {
    // Not needed in single-project wizard context
  };

  const handleRemoveProjectFromService = (serviceId: string, projectId: string) => {
    // Not needed in single-project wizard context
  };

  const handleComplete = () => {
    const project: Project = {
      id: `proj-${Date.now()}`,
      projectType: projectData.projectType!,
      url: projectData.url!,
      role: projectData.role!,
      mainBranchAccess: projectData.mainBranchAccess!,
      ecosystems: projectData.ecosystems && projectData.ecosystems.length > 0 ? projectData.ecosystems : undefined,
      verified: false,
    };

    // Convert DeveloperService[] to simple Service[] for output
    const services: Service[] = developerServices.map(devService => {
      const serviceDef = getServiceById(devService.serviceId);
      const responseTimeLabel = devService.responseTimeHours 
        ? devService.responseTimeHours === 24 ? '24 hours'
        : devService.responseTimeHours === 48 ? '48 hours'
        : devService.responseTimeHours === 72 ? '72 hours'
        : devService.responseTimeHours === 168 ? '1 week'
        : `${devService.responseTimeHours} hours`
        : 'No commitment';

      return {
        id: devService.id,
        name: devService.serviceName,
        category: serviceDef?.serviceType || 'Other',
        rate: devService.hourlyRate || 150,
        projectIds: devService.projectIds || [],
        responseTime: responseTimeLabel
      };
    });

    // Show success toast
    toast.success(`Project added successfully!`);

    // Call completion handler
    onComplete?.(project, services, addNewServicesToCatalog);
  };

  // Get most recently used services (mock - top 3)
  const recentServices = existingServices.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-navy">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-3 py-1.5 rounded-full mb-3">
            <Plus className="h-3.5 w-3.5 text-brand-accent" />
            <span className="text-brand-accent text-xs uppercase tracking-wider">New Project</span>
          </div>
          <h1 className="text-brand-neutral-900 mb-2">
            Add a New Project
          </h1>
          <p className="text-brand-neutral-600 text-sm max-w-2xl mx-auto">
            Add an open source project to your profile and configure the services you want to offer for it.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <WizardStepIndicator
            steps={WIZARD_STEPS}
            currentStep={currentStep + 1}
          />
        </div>

        {/* Two-Column Layout: Step Sidebar + Content */}
        <div className="flex gap-8 lg:gap-12">
          {/* Step Sidebar - Desktop Only */}
          <StepSidebar
            stepNumber={currentStep + 1}
            title={WIZARD_STEPS[currentStep].title}
            description={WIZARD_STEPS[currentStep].description}
          />

          {/* Step Content */}
          <div className="flex-1 min-h-96 flex flex-col w-full max-w-4xl">
            {/* Step Content Area */}
            <div className="flex-1">
              {/* Step 1: Project Basics */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <StepHeader
                    stepNumber="01"
                    title="Project Basics"
                    subtitle="Tell us about your open source project. This helps companies and donors discover your work."
                    align="left"
                    maxWidth="w-full"
                  />

                  <InfoMessage icon={Lightbulb} variant="subtle">
                    <strong className="block mb-1 text-sm">Adding a New Project</strong>
                    <span className="block">Each project can have its own set of services and pricing. You'll configure those in the next step.</span>
                  </InfoMessage>

                  {/* Project Form with BrandModalSection layout */}
                  <div className="space-y-8">
                    {/* Section 1: Your Contribution */}
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
                          value={projectData.role || ''}
                          onChange={(value) => setProjectData(prev => ({ ...prev, role: value as ProjectRole }))}
                        />

                        {/* Main Branch Access */}
                        <SelectField
                          label="Merge Rights to Main Branch"
                          required
                          options={accessOptions}
                          value={projectData.mainBranchAccess || ''}
                          onChange={(value) => setProjectData(prev => ({ ...prev, mainBranchAccess: value as MainBranchAccess }))}
                        />
                      </div>
                    </BrandModalSection>

                    {/* Section 2: Project Information */}
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
                              value={projectData.projectType || ''}
                              onChange={(value) => setProjectData(prev => ({ ...prev, projectType: value as ProjectType }))}
                            />
                          </div>

                          {/* Project URL - Only shown after type is selected */}
                          {projectData.projectType && (
                            <div className="md:col-span-2">
                              <FormField
                                label={
                                  projectData.projectType === 'github_repo' 
                                    ? 'GitHub Repository URL'
                                    : projectData.projectType === 'github_org'
                                    ? 'GitHub Organization URL'
                                    : 'Project URL'
                                }
                                required
                                hint={
                                  projectData.projectType === 'github_repo'
                                    ? 'e.g., https://github.com/facebook/react'
                                    : projectData.projectType === 'github_org'
                                    ? 'e.g., https://github.com/nodejs'
                                    : 'Any public URL to your project'
                                }
                              >
                                <div className="relative">
                                  <Input
                                    type="url"
                                    value={projectData.url || ''}
                                    onChange={(e) => setProjectData(prev => ({ ...prev, url: e.target.value }))}
                                    placeholder={
                                      projectData.projectType === 'github_repo'
                                        ? 'https://github.com/username/repository'
                                        : projectData.projectType === 'github_org'
                                        ? 'https://github.com/organization'
                                        : 'https://...'
                                    }
                                    className="pr-10"
                                  />
                                  {projectData.url && (
                                    <a
                                      href={projectData.url}
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
                        {projectData.projectType && (
                          <div>
                            <FormField
                              label="Ecosystems (Optional)"
                              hint="Select from suggestions or type your own. You can add multiple ecosystems."
                            >
                              <ChipInput
                                values={projectData.ecosystems || []}
                                onChange={(ecosystems) => setProjectData(prev => ({ ...prev, ecosystems }))}
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

                    {/* Section 3: Verification Notice */}
                    {projectData.projectType && (
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
                </div>
              )}

              {/* Step 2: Services */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <StepHeader
                    stepNumber="02"
                    title="Services & Offerings"
                    subtitle="Select services to offer for this project. These will help companies understand what you can provide."
                    align="left"
                    maxWidth="w-full"
                  />

                  <InfoMessage icon={Lightbulb} variant="subtle">
                    <strong className="block mb-1 text-sm">Service Management</strong>
                    <span className="block">Choose from predefined services organized by category. You can configure pricing and response times for each service.</span>
                  </InfoMessage>

                  {/* Stats */}
                  {developerServices.length > 0 && (
                    <ServiceStats
                      services={developerServices}
                      servicesByType={servicesByType}
                    />
                  )}

                  {/* Services List */}
                  {developerServices.length === 0 ? (
                    <EmptyServicesState onAddService={handleOpenAddServiceModal} />
                  ) : (
                    <ServicesList
                      servicesByType={servicesByType}
                      projects={[mockProject]}
                      baseRate={150}
                      currency="USD"
                      onToggle={handleToggleDeveloperService}
                      onEdit={handleEditService}
                      onRemove={handleRemoveService}
                      onOpenResponseTimePicker={handleOpenResponseTimePicker}
                      onOpenProjectPicker={handleOpenProjectPicker}
                      onRemoveProjectFromService={handleRemoveProjectFromService}
                      onAddService={handleOpenAddServiceModal}
                    />
                  )}

                  {/* Service Modal */}
                  <ServiceModal
                    open={isServiceModalOpen}
                    onClose={() => setIsServiceModalOpen(false)}
                    onSave={handleSaveServicesFromModal}
                    projects={[mockProject]}
                    baseRate={150}
                    currency="USD"
                    editingService={editingDeveloperService}
                    mode={modalMode}
                  />
                </div>
              )}

              {/* Step 3: Review */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-brand-success/20 border border-brand-success/30 px-3 py-1.5 rounded-full mb-3">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-success" />
                      <span className="text-brand-success text-xs uppercase tracking-wider">Review Your Information</span>
                    </div>
                    <h2 className="text-brand-neutral-900 mb-2">
                      Review & Confirm
                    </h2>
                    <p className="text-brand-neutral-600 text-sm max-w-2xl mx-auto">
                      Please review your project details before adding it to your profile. You can go back to edit any information.
                    </p>
                  </div>

                  {/* Project Details - Using ReviewCard components */}
                  <ReviewCard>
                    <ReviewCardHeader
                      icon={Github}
                      iconColor="text-brand-accent"
                      title="Project Details"
                      stepNumber={1}
                      onEdit={() => setCurrentStep(0)}
                      editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
                    />
                    <div className="space-y-2">
                      <ReviewField
                        label="Project Type"
                        value={
                          projectData.projectType === 'github_repo' ? 'GitHub Repository' :
                          projectData.projectType === 'github_org' ? 'GitHub Organization' :
                          'Other URL'
                        }
                        minWidth="min-w-[120px]"
                      />
                      <ReviewField
                        label="URL"
                        value={<span className="break-all">{projectData.url}</span>}
                        minWidth="min-w-[120px]"
                      />
                      <ReviewSection withDivider>
                        <ReviewField
                          label="Your Role"
                          value={
                            projectData.role === 'maintainer' ? 'Maintainer' :
                            projectData.role === 'core_contributor' ? 'Core Contributor' :
                            projectData.role === 'contributor' ? 'Contributor' :
                            'Other'
                          }
                          minWidth="min-w-[120px]"
                        />
                        <ReviewField
                          label="Merge Rights"
                          value={
                            projectData.mainBranchAccess === 'full_write' ? 'Full Write Access' :
                            projectData.mainBranchAccess === 'write_with_review' ? 'Write with Review' :
                            'Read Only'
                          }
                          minWidth="min-w-[120px]"
                        />
                      </ReviewSection>
                      {projectData.ecosystems && projectData.ecosystems.length > 0 && (
                        <ReviewSection withDivider>
                          <ReviewField
                            label="Ecosystems"
                            value={
                              <div className="flex flex-wrap gap-1">
                                {projectData.ecosystems.map((eco, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {eco}
                                  </Badge>
                                ))}
                              </div>
                            }
                            minWidth="min-w-[120px]"
                          />
                        </ReviewSection>
                      )}
                    </div>
                  </ReviewCard>

                  {/* Selected Services - Using ReviewCard components */}
                  <ReviewCard>
                    <ReviewCardHeader
                      icon={Briefcase}
                      iconColor="text-brand-highlight"
                      title="Services"
                      stepNumber={2}
                      metadata={`${developerServices.filter(s => s.enabled).length} enabled`}
                      onEdit={() => setCurrentStep(1)}
                      editButtonColor="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10"
                    />
                    <div className="space-y-2">
                      {developerServices.length > 0 ? (
                        (() => {
                          const enabledServices = developerServices.filter(s => s.enabled);
                          const servicesByType = enabledServices.reduce((acc, service) => {
                            const type = service.serviceType;
                            if (!acc[type]) acc[type] = [];
                            acc[type].push(service);
                            return acc;
                          }, {} as Record<ServiceType, DeveloperService[]>);

                          const categoryLabels: Record<string, string> = {
                            support: 'Support',
                            development: 'Development',
                            advisory: 'Advisory',
                            security_and_compliance: 'Security & Compliance'
                          };

                          return Object.entries(servicesByType).map(([type, services], categoryIdx) => (
                            <div key={type}>
                              {categoryIdx > 0 && <div className="border-t border-brand-neutral-300/30 -mx-4 my-3"></div>}
                              <div className="mb-2">
                                <h4 className="text-brand-neutral-600 text-xs uppercase tracking-wider">
                                  {categoryLabels[type as ServiceType] || type}
                                </h4>
                              </div>
                              <div>
                                {services.map((devService, serviceIdx) => {
                                  const serviceDef = getServiceById(devService.serviceId);
                                  const responseTimeLabel = devService.responseTimeHours 
                                    ? devService.responseTimeHours === 24 ? '24 hours'
                                    : devService.responseTimeHours === 48 ? '2 days'
                                    : devService.responseTimeHours === 72 ? '3 days'
                                    : devService.responseTimeHours === 168 ? '1 week'
                                    : `${devService.responseTimeHours} hours`
                                    : 'Not specified';

                                  return (
                                    <React.Fragment key={devService.id}>
                                      {serviceIdx > 0 && <div className="border-t border-brand-neutral-300/30"></div>}
                                      <div className="py-2">
                                        <div className="flex items-start gap-2 mb-1">
                                          <CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 flex-shrink-0" />
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                              <span className="text-brand-neutral-900 text-sm">{devService.serviceName}</span>
                                              {devService.hourlyRate && (
                                                <Badge variant="secondary" className="text-xs h-5 px-2">
                                                  ${devService.hourlyRate}/hr
                                                </Badge>
                                              )}
                                            </div>
                                            {serviceDef && (
                                              <p className="text-xs text-brand-neutral-600 mt-0.5">
                                                {serviceDef.description}
                                              </p>
                                            )}
                                            <div className="flex items-center gap-3 mt-1 text-xs text-brand-neutral-500">
                                              <span>Response: {responseTimeLabel}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </div>
                          ));
                        })()
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-brand-neutral-500 text-sm">No services selected</p>
                        </div>
                      )}
                    </div>
                  </ReviewCard>

                  {/* Final Confirmation Note */}
                  <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg p-4 text-center">
                    <p className="text-brand-neutral-700 text-sm">
                      By clicking "Complete" below, you confirm that this project information is accurate and you're ready to add it to your profile.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-8">
              <WizardNavigation
                currentStep={currentStep}
                totalSteps={WIZARD_STEPS.length}
                onNext={handleNext}
                onBack={handleBack}
                onCancel={onCancel}
                onComplete={handleComplete}
                isNextDisabled={
                  currentStep === 0 ? !isStep1Valid() :
                  currentStep === 1 ? !isStep2Valid() :
                  false
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}