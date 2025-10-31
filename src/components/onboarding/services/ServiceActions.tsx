import React from 'react';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { Edit, Trash2 } from 'lucide-react';
import { DeveloperService } from '../../../types/DeveloperOnboarding';

interface ServiceActionsProps {
  service: DeveloperService;
  onToggle: (id: string) => void;
  onEdit: (service: DeveloperService) => void;
  onRemove: (id: string) => void;
}

export const ServiceActions: React.FC<ServiceActionsProps> = ({
  service,
  onToggle,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Switch
          checked={service.enabled}
          onCheckedChange={() => onToggle(service.id)}
          title={service.enabled ? 'Disable service' : 'Enable service'}
        />
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs whitespace-nowrap ${
          service.enabled
            ? 'bg-brand-success/10 text-brand-success border border-brand-success/20'
            : 'bg-brand-neutral-300/20 text-brand-neutral-500 border border-brand-neutral-300/30'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full ${
            service.enabled ? 'bg-brand-success' : 'bg-brand-neutral-500'
          }`} />
          {service.enabled ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className="w-px h-6 bg-brand-neutral-300/30" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(service)}
        className="h-9 w-9 p-0 text-brand-accent hover:text-brand-accent-light hover:bg-brand-accent/10 transition-all"
        title="Edit service"
      >
        <Edit className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(service.id)}
        className="h-9 w-9 p-0 text-brand-error hover:text-brand-error-light hover:bg-brand-error/10 transition-all"
        title="Remove service"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
