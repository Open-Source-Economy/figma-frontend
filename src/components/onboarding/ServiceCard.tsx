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
    <div className="rounded border border-brand-neutral-300/20 bg-brand-navy/30 px-3 py-2.5 hover:bg-brand-navy/50 hover:border-brand-neutral-300/40 transition-all group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h5 className="text-brand-neutral-900 text-sm mb-1.5">{service.serviceName}</h5>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            {service.hourlyRate && (
              <div className="flex items-center gap-1">
                <span className="text-brand-neutral-500">Rate:</span>
                <span className="text-brand-neutral-800">
                  {formatCurrency(service.hourlyRate, currency)}
                </span>
              </div>
            )}
            {service.responseTimeHours && (
              <div className="flex items-center gap-1">
                <span className="text-brand-neutral-500">Response:</span>
                <span className="text-brand-neutral-800">{formatResponseTime(service.responseTimeHours)}</span>
              </div>
            )}
            {service.projectIds.length > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-brand-neutral-500">Projects:</span>
                <div className="flex flex-wrap gap-1">
                  {service.projectIds.map(projectId => {
                    const project = projects?.find(p => p.id === projectId);
                    if (!project) return null;
                    const projectName = project.url.split('/').pop() || project.url;
                    return (
                      <Badge key={projectId} variant="outline" className="text-xs h-4 px-1.5 bg-brand-accent/10 border-brand-accent/30 text-brand-accent">
                        {projectName}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {service.comment && (
            <p className="text-xs text-brand-neutral-600 mt-1.5 italic">{service.comment}</p>
          )}
        </div>
        <Badge variant="outline" className="bg-brand-success/10 border-brand-success/30 text-brand-success text-xs h-5 px-2 shrink-0">
          Active
        </Badge>
      </div>
    </div>
  );
}