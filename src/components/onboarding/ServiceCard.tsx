import React from 'react';
import { Badge } from '../ui/badge';
import { DeveloperService, Project } from '../../types/DeveloperOnboarding';

interface ServiceCardProps {
  service: DeveloperService;
  projects?: Project[];
  currency: string;
  formatCurrency: (amount: number, currency: string) => string;
  formatResponseTime: (hours?: number) => string;
}

export function ServiceCard({ 
  service, 
  projects, 
  currency, 
  formatCurrency, 
  formatResponseTime 
}: ServiceCardProps) {
  return (
    <div className="border-l-2 border-brand-accent/30 pl-3 py-2.5 my-2 space-y-1.5 transition-colors hover:bg-brand-neutral-100/50">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <h5 className="text-brand-neutral-900 text-sm">{service.serviceName}</h5>
          </div>
        </div>
        <Badge variant="outline" className="bg-brand-success/20 border-brand-success/30 text-brand-success text-xs h-4 px-1.5">
          ✓
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
        {service.hourlyRate && (
          <div className="flex items-baseline gap-1.5">
            <span className="text-brand-neutral-500">Rate:</span>
            <span className="text-brand-neutral-900">
              {formatCurrency(service.hourlyRate, currency)}
            </span>
          </div>
        )}
        {service.responseTimeHours && (
          <div className="flex items-baseline gap-1.5">
            <span className="text-brand-neutral-500">Response:</span>
            <span className="text-brand-neutral-900">{formatResponseTime(service.responseTimeHours)}</span>
          </div>
        )}
        {service.projectIds.length > 0 && (
          <div className="flex items-baseline gap-1.5 w-full">
            <span className="text-brand-neutral-500">Projects:</span>
            <div className="flex flex-wrap gap-1">
              {service.projectIds.map(projectId => {
                const project = projects?.find(p => p.id === projectId);
                if (!project) return null;
                const projectName = project.url.split('/').pop() || project.url;
                return (
                  <Badge key={projectId} variant="outline" className="text-xs h-4 px-1.5">
                    {projectName}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
        {service.comment && (
          <div className="flex items-baseline gap-1.5 w-full">
            <span className="text-brand-neutral-500">Notes:</span>
            <span className="text-brand-neutral-900 flex-1">{service.comment}</span>
          </div>
        )}
      </div>
    </div>
  );
}
