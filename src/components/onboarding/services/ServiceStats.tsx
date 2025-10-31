import React from 'react';
import { DeveloperService, ServiceType } from '../../../types/DeveloperOnboarding';

interface ServiceStatsProps {
  services: DeveloperService[];
  servicesByType: Record<ServiceType, DeveloperService[]>;
}

export const ServiceStats: React.FC<ServiceStatsProps> = ({
  services,
  servicesByType,
}) => {
  const enabledServices = (services || []).filter(s => s.enabled);

  return (
    <div className="flex items-center gap-8">
      <div>
        <div className="text-brand-accent">{(services || []).length}</div>
        <div className="text-sm text-brand-neutral-600">Total Services</div>
      </div>
      <div className="w-px h-10 bg-brand-neutral-300/30" />
      <div>
        <div className="text-brand-success">{enabledServices.length}</div>
        <div className="text-sm text-brand-neutral-600">Enabled</div>
      </div>
      <div className="w-px h-10 bg-brand-neutral-300/30" />
      <div>
        <div className="text-brand-highlight">{Object.keys(servicesByType).length}</div>
        <div className="text-sm text-brand-neutral-600">Categories</div>
      </div>
    </div>
  );
};
