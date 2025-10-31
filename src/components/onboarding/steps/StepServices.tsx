import React from 'react';
import { DeveloperService, Project, ServiceType, ResponseTimeType } from '../../../types/DeveloperOnboarding';
import { StepHeader } from '../StepHeader';
import { ValidationAlert } from '../../forms/ValidationAlert';
import { InfoMessage } from '../../ui/info-message';
import { ServiceModal } from '../services/ServiceModal';
import { ServiceStats } from '../services/ServiceStats';
import { EmptyServicesState } from '../services/EmptyServicesState';
import { ServicesList } from '../services/ServicesList';
import { QuickResponseTimePicker } from '../services/QuickResponseTimePicker';
import { QuickProjectPicker } from '../services/QuickProjectPicker';
import { getServiceById } from '../../../data/servicesDefinitions';

interface StepServicesProps {
  services: DeveloperService[];
  projects: Project[];
  baseRate: number;
  currency: string;
  onChange: (services: DeveloperService[]) => void;
  errors?: Record<string, string>;
}

/**
 * StepServices - Step 5 of developer onboarding
 * Configure services offered to clients
 */
export const StepServices: React.FC<StepServicesProps> = ({
  services,
  projects,
  baseRate,
  currency,
  onChange,
  errors = {},
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingService, setEditingService] = React.useState<DeveloperService | undefined>(undefined);
  const [modalMode, setModalMode] = React.useState<'add' | 'edit'>('add');
  
  // Quick response time picker
  const [responseTimePickerServiceId, setResponseTimePickerServiceId] = React.useState<string | null>(null);
  const [quickResponseTime, setQuickResponseTime] = React.useState<string>('24');

  // Quick project picker
  const [projectPickerServiceId, setProjectPickerServiceId] = React.useState<string | null>(null);
  const [quickProjectIds, setQuickProjectIds] = React.useState<string[]>([]);

  const handleAddService = () => {
    setEditingService(undefined);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleEditService = (service: DeveloperService) => {
    setEditingService(service);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleRemoveService = (id: string) => {
    onChange(services.filter(s => s.id !== id));
  };

  const handleSaveServices = (newServices: DeveloperService[]) => {
    if (modalMode === 'add') {
      // Add mode: Append new services
      onChange([...services, ...newServices]);
    } else {
      // Edit mode: Replace the edited service
      const updatedService = newServices[0];
      if (updatedService) {
        onChange(services.map(s => s.id === updatedService.id ? updatedService : s));
      }
    }
  };

  const handleToggleService = (id: string) => {
    onChange(services.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const handleOpenResponseTimePicker = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    setResponseTimePickerServiceId(serviceId);
    setQuickResponseTime(service?.responseTimeHours?.toString() || '24');
  };

  const handleSaveQuickResponseTime = () => {
    if (!responseTimePickerServiceId) return;
    
    const responseTime = parseInt(quickResponseTime) as ResponseTimeType;
    onChange(services.map(s => 
      s.id === responseTimePickerServiceId 
        ? { ...s, responseTimeHours: responseTime } 
        : s
    ));
    
    setResponseTimePickerServiceId(null);
  };

  const handleRemoveProjectFromService = (serviceId: string, projectId: string) => {
    onChange(services.map(s => {
      if (s.id === serviceId) {
        const updatedProjectIds = (s.projectIds || []).filter(id => id !== projectId);
        return { ...s, projectIds: updatedProjectIds };
      }
      return s;
    }));
  };

  const handleOpenProjectPicker = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    setProjectPickerServiceId(serviceId);
    setQuickProjectIds(service?.projectIds || []);
  };

  const handleSaveQuickProjects = () => {
    if (!projectPickerServiceId) return;
    
    onChange(services.map(s => 
      s.id === projectPickerServiceId 
        ? { ...s, projectIds: quickProjectIds } 
        : s
    ));
    
    setProjectPickerServiceId(null);
  };

  // Group services by type
  const servicesByType = (services || []).reduce((acc, service) => {
    if (!service.serviceType) return acc; // Safety check
    if (!acc[service.serviceType]) {
      acc[service.serviceType] = [];
    }
    acc[service.serviceType].push(service);
    return acc;
  }, {} as Record<ServiceType, DeveloperService[]>);

  const hasErrors = Object.keys(errors).length > 0;
  
  // Get service name for quick pickers
  const responseTimePickerService = responseTimePickerServiceId 
    ? services.find(s => s.id === responseTimePickerServiceId)
    : null;
  
  const projectPickerService = projectPickerServiceId 
    ? services.find(s => s.id === projectPickerServiceId)
    : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <StepHeader
        stepNumber="05"
        title="Services & Offerings"
        subtitle={`Configure the services you want to offer to clients. Your base rate is ${currency} ${baseRate}/hour.`}
        align="left"
        maxWidth="w-full"
      />

      {/* Error Alert */}
      {hasErrors && (
        <ValidationAlert>
          Please add at least one service to continue. This helps clients understand what services you can provide.
        </ValidationAlert>
      )}

      {/* Stats */}
      {services && services.length > 0 && (
        <ServiceStats
          services={services}
          servicesByType={servicesByType}
        />
      )}

      {/* Services List */}
      {(!services || services.length === 0) ? (
        <EmptyServicesState onAddService={handleAddService} />
      ) : (
        <ServicesList
          servicesByType={servicesByType}
          projects={projects}
          baseRate={baseRate}
          currency={currency}
          onToggle={handleToggleService}
          onEdit={handleEditService}
          onRemove={handleRemoveService}
          onOpenResponseTimePicker={handleOpenResponseTimePicker}
          onOpenProjectPicker={handleOpenProjectPicker}
          onRemoveProjectFromService={handleRemoveProjectFromService}
          onAddService={handleAddService}
        />
      )}

      {/* Service Modal */}
      <ServiceModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveServices}
        projects={projects}
        baseRate={baseRate}
        currency={currency}
        editingService={editingService}
        mode={modalMode}
      />

      {/* Quick Response Time Picker */}
      {responseTimePickerService && (
        <QuickResponseTimePicker
          open={responseTimePickerServiceId !== null}
          serviceName={responseTimePickerService.serviceName}
          responseTime={quickResponseTime}
          onClose={() => setResponseTimePickerServiceId(null)}
          onSave={handleSaveQuickResponseTime}
          onChange={setQuickResponseTime}
        />
      )}

      {/* Quick Project Picker */}
      {projectPickerService && (
        <QuickProjectPicker
          open={projectPickerServiceId !== null}
          serviceName={projectPickerService.serviceName}
          projects={projects}
          selectedProjectIds={quickProjectIds}
          onClose={() => setProjectPickerServiceId(null)}
          onSave={handleSaveQuickProjects}
          onChange={setQuickProjectIds}
        />
      )}

      {/* Help Text */}
      {(!projects || projects.length === 0) && (
        <InfoMessage 
          variant="warning" 
          title="Note:"
          className="max-w-4xl"
        >
          You need to add projects in Step 2 before you can configure services.
        </InfoMessage>
      )}
    </div>
  );
};

/**
 * Validation helper for services
 * Returns true if all services are properly configured
 */
export const validateServices = (services: DeveloperService[]): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!services || services.length === 0) {
    errors.push('At least one service is required');
  }
  
  // Check for services missing required response times
  services.forEach(service => {
    const serviceDef = getServiceById(service.serviceId);
    if (serviceDef?.requiresResponseTime && !service.responseTimeHours) {
      errors.push(`${service.serviceName} requires a response time commitment`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors,
  };
};
