import React from 'react';
import { DeveloperService, ServiceType, Project } from '../../../types/DeveloperOnboarding';
import { ServiceCard } from './ServiceCard';
import { getServiceTypeLabel } from '../../../data/servicesDefinitions';
import { getServiceTypeIcon } from '../../../utils/serviceHelpers';

interface ServiceCategorySectionProps {
  type: ServiceType;
  services: DeveloperService[];
  projects: Project[];
  baseRate: number;
  currency: string;
  onToggle: (id: string) => void;
  onEdit: (service: DeveloperService) => void;
  onRemove: (id: string) => void;
  onOpenResponseTimePicker: (serviceId: string) => void;
  onOpenProjectPicker: (serviceId: string) => void;
  onRemoveProjectFromService: (serviceId: string, projectId: string) => void;
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({
  type,
  services,
  projects,
  baseRate,
  currency,
  onToggle,
  onEdit,
  onRemove,
  onOpenResponseTimePicker,
  onOpenProjectPicker,
  onRemoveProjectFromService,
}) => {
  const Icon = getServiceTypeIcon(type);

  return (
    <div className="space-y-3">
      {/* Category Header */}
      <div className="flex items-center gap-3 pb-2">
        <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-brand-accent" />
        </div>
        <div>
          <h3 className="text-brand-neutral-900">{getServiceTypeLabel(type)}</h3>
          <p className="text-xs text-brand-neutral-600">
            {services.length} service{services.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Services in this category */}
      <div className="space-y-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            projects={projects}
            baseRate={baseRate}
            currency={currency}
            onToggle={onToggle}
            onEdit={onEdit}
            onRemove={onRemove}
            onOpenResponseTimePicker={onOpenResponseTimePicker}
            onOpenProjectPicker={onOpenProjectPicker}
            onRemoveProjectFromService={onRemoveProjectFromService}
          />
        ))}
      </div>
    </div>
  );
};
