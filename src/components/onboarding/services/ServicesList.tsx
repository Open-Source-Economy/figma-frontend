import React from 'react';
import { DeveloperService, ServiceType, Project } from '../../../types/DeveloperOnboarding';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';
import { ServiceCategorySection } from './ServiceCategorySection';

interface ServicesListProps {
  servicesByType: Record<ServiceType, DeveloperService[]>;
  projects: Project[];
  baseRate: number;
  currency: string;
  onToggle: (id: string) => void;
  onEdit: (service: DeveloperService) => void;
  onRemove: (id: string) => void;
  onOpenResponseTimePicker: (serviceId: string) => void;
  onOpenProjectPicker: (serviceId: string) => void;
  onRemoveProjectFromService: (serviceId: string, projectId: string) => void;
  onAddService: () => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  servicesByType,
  projects,
  baseRate,
  currency,
  onToggle,
  onEdit,
  onRemove,
  onOpenResponseTimePicker,
  onOpenProjectPicker,
  onRemoveProjectFromService,
  onAddService,
}) => {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Services grouped by category */}
      {(Object.keys(servicesByType) as ServiceType[]).map((type) => (
        <ServiceCategorySection
          key={type}
          type={type}
          services={servicesByType[type]}
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

      {/* Add More Services Button */}
      <Button
        onClick={onAddService}
        variant="outline"
        className="w-full border-brand-accent/40 hover:bg-brand-accent/10 hover:border-brand-accent/60 text-brand-neutral-800 hover:text-brand-accent transition-all"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add More Services
      </Button>
    </div>
  );
};
