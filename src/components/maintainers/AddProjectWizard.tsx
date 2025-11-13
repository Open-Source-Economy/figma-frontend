import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { ChipInput } from '../forms/ChipInput';
import { WizardStepIndicator } from '../onboarding/WizardStepIndicator';
import { WizardNavigation } from '../onboarding/WizardNavigation';
import { toast } from 'sonner@2.0.3';
import {
  Globe,
  Github,
  CheckCircle2,
  ArrowRight,
  Plus,
  X
} from 'lucide-react';
import type { Project, Service } from '../../types/DeveloperOnboarding';

interface AddProjectWizardProps {
  onComplete?: (project: Project, services: Service[], addServicesToCatalog: boolean) => void;
  onCancel?: () => void;
  existingServices?: Service[];
}

const STEP_TITLES = [
  'Project Basics',
  'Services Mapping',
  'Review & Confirm'
];

export function AddProjectWizard({
  onComplete,
  onCancel,
  existingServices = []
}: AddProjectWizardProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  
  // Step 1: Project basics
  const [projectData, setProjectData] = React.useState<Partial<Project>>({
    name: '',
    url: '',
    repositories: [],
    ecosystems: [],
    description: ''
  });

  // Step 2: Services mapping
  const [selectedServiceIds, setSelectedServiceIds] = React.useState<string[]>([]);
  const [newService, setNewService] = React.useState({
    name: '',
    category: 'Development',
    rate: 150,
    responseTime: '24 hours'
  });
  const [addNewServicesToCatalog, setAddNewServicesToCatalog] = React.useState(true);
  const [tempNewServices, setTempNewServices] = React.useState<Service[]>([]);

  // Validation
  const isStep1Valid = () => {
    return projectData.name && 
           projectData.url && 
           projectData.repositories && 
           projectData.repositories.length > 0;
  };

  const isStep2Valid = () => {
    return selectedServiceIds.length > 0 || tempNewServices.length > 0;
  };

  const handleNext = () => {
    if (currentStep < STEP_TITLES.length - 1) {
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

  const handleAddNewService = () => {
    if (!newService.name) return;

    const service: Service = {
      id: `temp-${Date.now()}`,
      ...newService,
      projectIds: []
    };

    setTempNewServices(prev => [...prev, service]);
    setNewService({
      name: '',
      category: 'Development',
      rate: 150,
      responseTime: '24 hours'
    });
  };

  const handleRemoveTempService = (serviceId: string) => {
    setTempNewServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleComplete = () => {
    const project: Project = {
      id: `project-${Date.now()}`,
      name: projectData.name!,
      url: projectData.url!,
      repositories: projectData.repositories!,
      ecosystems: projectData.ecosystems || [],
      description: projectData.description
    };

    // Get selected existing services
    const selectedServices = existingServices.filter(s => 
      selectedServiceIds.includes(s.id)
    );

    // Combine with new services
    const allServices = [...selectedServices, ...tempNewServices];

    // Show success toast
    toast.success(`Project "${project.name}" added successfully!`);

    // Call completion handler
    onComplete?.(project, allServices, addNewServicesToCatalog);
  };

  // Get most recently used services (mock - top 3)
  const recentServices = existingServices.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-navy">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-brand-neutral-950 mb-2">Add New Project</h1>
          <p className="text-brand-neutral-600 text-lg">
            Add a new open source project and configure its services
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <WizardStepIndicator
            steps={STEP_TITLES}
            currentStep={currentStep}
          />
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Project Basics */}
          {currentStep === 0 && (
            <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
              <CardHeader>
                <CardTitle className="text-brand-neutral-950">Project Basics</CardTitle>
                <CardDescription>
                  Tell us about your open source project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  label="Project Name"
                  id="projectName"
                  required
                  helpText="The name of your open source project"
                >
                  <Input
                    id="projectName"
                    placeholder="e.g., react-hooks-pro"
                    value={projectData.name}
                    onChange={(e) => setProjectData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </FormField>

                <FormField
                  label="Project URL"
                  id="projectUrl"
                  required
                  helpText="Main website or homepage for the project"
                >
                  <Input
                    id="projectUrl"
                    placeholder="https://github.com/username/project"
                    value={projectData.url}
                    onChange={(e) => setProjectData(prev => ({ ...prev, url: e.target.value }))}
                    leftIcon={Globe}
                  />
                </FormField>

                <FormField
                  label="Repositories"
                  id="repositories"
                  required
                  helpText="GitHub repositories for this project (one per line)"
                >
                  <ChipInput
                    id="repositories"
                    placeholder="https://github.com/username/repo"
                    value={projectData.repositories || []}
                    onChange={(repos) => setProjectData(prev => ({ ...prev, repositories: repos }))}
                    icon={Github}
                  />
                </FormField>

                <FormField
                  label="Ecosystems"
                  id="ecosystems"
                  helpText="Package managers or ecosystems (e.g., npm, pypi, cargo)"
                >
                  <ChipInput
                    id="ecosystems"
                    placeholder="e.g., npm, typescript, react"
                    value={projectData.ecosystems || []}
                    onChange={(ecosystems) => setProjectData(prev => ({ ...prev, ecosystems }))}
                  />
                </FormField>

                <FormField
                  label="Description (Optional)"
                  id="description"
                  helpText="Brief description of what this project does"
                >
                  <Input
                    id="description"
                    placeholder="A brief description of your project"
                    value={projectData.description}
                    onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                  />
                </FormField>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Services Mapping */}
          {currentStep === 1 && (
            <div className="space-y-6">
              {/* Service Catalog Recap */}
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-brand-neutral-950">Your Service Catalog</CardTitle>
                      <CardDescription>
                        Select which services you want to offer for this project
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleSelectAll} 
                        size="sm" 
                        variant="outline"
                      >
                        Select All
                      </Button>
                      <Button 
                        onClick={handleClearAll} 
                        size="sm" 
                        variant="outline"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {existingServices.length > 0 ? (
                    <>
                      {/* Recent Services Section */}
                      {recentServices.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-brand-neutral-700 mb-2">Most Used Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {recentServices.map(service => (
                              <Badge
                                key={service.id}
                                variant="secondary"
                                className={`cursor-pointer transition-all ${
                                  selectedServiceIds.includes(service.id)
                                    ? 'bg-brand-accent text-white border-brand-accent'
                                    : 'hover:bg-brand-accent/20'
                                }`}
                                onClick={() => handleToggleService(service.id)}
                              >
                                {service.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* All Services List */}
                      <div className="space-y-2">
                        {existingServices.map(service => (
                          <div
                            key={service.id}
                            className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedServiceIds.includes(service.id)
                                ? 'border-brand-accent bg-brand-accent/10'
                                : 'border-brand-neutral-300 bg-white hover:border-brand-accent/50'
                            }`}
                            onClick={() => handleToggleService(service.id)}
                          >
                            <Checkbox
                              checked={selectedServiceIds.includes(service.id)}
                              onCheckedChange={() => handleToggleService(service.id)}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-brand-neutral-950">{service.name}</span>
                                <Badge variant="secondary" className="text-xs">
                                  ${service.rate}/hr
                                </Badge>
                              </div>
                              <p className="text-sm text-brand-neutral-600">
                                {service.category} • Response: {service.responseTime}
                              </p>
                            </div>
                            {selectedServiceIds.includes(service.id) && (
                              <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-brand-neutral-600 text-center py-8">
                      No services in your catalog yet. Add new services below.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Add New Service */}
              <Card className="border-2 border-brand-accent/50 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
                <CardHeader>
                  <CardTitle className="text-brand-neutral-950">Add New Service</CardTitle>
                  <CardDescription>
                    Create a service specific to this project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* New Service Form */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField label="Service Name" id="newServiceName" required>
                      <Input
                        id="newServiceName"
                        placeholder="e.g., Security Audit"
                        value={newService.name}
                        onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </FormField>

                    <FormField label="Rate ($/hour)" id="newServiceRate" required>
                      <Input
                        id="newServiceRate"
                        type="number"
                        placeholder="150"
                        value={newService.rate.toString()}
                        onChange={(e) => setNewService(prev => ({ ...prev, rate: parseInt(e.target.value) || 0 }))}
                      />
                    </FormField>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-lg">
                    <Checkbox
                      id="addToCatalog"
                      checked={addNewServicesToCatalog}
                      onCheckedChange={(checked) => setAddNewServicesToCatalog(!!checked)}
                    />
                    <label 
                      htmlFor="addToCatalog" 
                      className="text-sm text-brand-neutral-950 cursor-pointer"
                    >
                      Also add these services to my maintainer catalog
                    </label>
                  </div>

                  <Button onClick={handleAddNewService} className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Add Service
                  </Button>

                  {/* Temporary New Services List */}
                  {tempNewServices.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-brand-neutral-700">New Services:</p>
                      {tempNewServices.map(service => (
                        <div
                          key={service.id}
                          className="flex items-center gap-3 p-3 border-2 border-brand-success/50 bg-brand-success/10 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-brand-neutral-950">{service.name}</span>
                              <Badge variant="secondary" className="text-xs bg-brand-success/20 text-brand-success border-brand-success/30">
                                ${service.rate}/hr
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                New
                              </Badge>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleRemoveTempService(service.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 2 && (
            <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
              <CardHeader>
                <CardTitle className="text-brand-neutral-950">Review & Confirm</CardTitle>
                <CardDescription>
                  Review your project details before adding
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Project Details */}
                <div>
                  <h3 className="text-brand-neutral-950 mb-3">Project Details</h3>
                  <div className="space-y-2 p-4 bg-white border-2 border-brand-neutral-300 rounded-lg">
                    <div>
                      <span className="text-brand-neutral-600 text-sm">Name:</span>
                      <p className="text-brand-neutral-950">{projectData.name}</p>
                    </div>
                    <div>
                      <span className="text-brand-neutral-600 text-sm">URL:</span>
                      <p className="text-brand-neutral-950">{projectData.url}</p>
                    </div>
                    {projectData.description && (
                      <div>
                        <span className="text-brand-neutral-600 text-sm">Description:</span>
                        <p className="text-brand-neutral-950">{projectData.description}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-brand-neutral-600 text-sm">Repositories:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {projectData.repositories?.map((repo, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {repo}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {projectData.ecosystems && projectData.ecosystems.length > 0 && (
                      <div>
                        <span className="text-brand-neutral-600 text-sm">Ecosystems:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {projectData.ecosystems.map((eco, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {eco}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected Services */}
                <div>
                  <h3 className="text-brand-neutral-950 mb-3">Services</h3>
                  <div className="space-y-2">
                    {/* Existing Services */}
                    {selectedServiceIds.map(serviceId => {
                      const service = existingServices.find(s => s.id === serviceId);
                      if (!service) return null;
                      return (
                        <div
                          key={service.id}
                          className="flex items-center gap-3 p-3 bg-white border-2 border-brand-neutral-300 rounded-lg"
                        >
                          <CheckCircle2 className="h-5 w-5 text-brand-success" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-brand-neutral-950">{service.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                ${service.rate}/hr
                              </Badge>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* New Services */}
                    {tempNewServices.map(service => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 bg-white border-2 border-brand-success/50 rounded-lg"
                      >
                        <CheckCircle2 className="h-5 w-5 text-brand-success" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-brand-neutral-950">{service.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              ${service.rate}/hr
                            </Badge>
                            <Badge variant="secondary" className="text-xs bg-brand-success/20 text-brand-success border-brand-success/30">
                              New
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {addNewServicesToCatalog && tempNewServices.length > 0 && (
                    <div className="mt-3 p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-lg">
                      <p className="text-sm text-brand-neutral-950">
                        ✓ New services will be added to your maintainer catalog
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="mt-8">
            <WizardNavigation
              currentStep={currentStep}
              totalSteps={STEP_TITLES.length}
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
  );
}
