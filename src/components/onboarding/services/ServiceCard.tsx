import React from 'react';
import { DeveloperService, Project } from '../../../types/DeveloperOnboarding';
import { Clock, AlertCircle, Github, Globe, X } from 'lucide-react';
import { ServiceActions } from './ServiceActions';
import { getServiceById } from '../../../data/servicesDefinitions';
import { getProjectName } from '../../../utils/projectHelpers';

interface ServiceCardProps {
  service: DeveloperService;
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

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
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
  const effectiveRate = service.hourlyRate || baseRate;
  const projectCount = service.projectIds?.length || 0;
  const serviceDef = getServiceById(service.serviceId);
  const needsResponseTime = serviceDef?.requiresResponseTime && !service.responseTimeHours;

  return (
    <div
      className={`bg-brand-card-blue/30 rounded-xl border p-5 transition-all ${
        service.enabled
          ? 'border-brand-neutral-300/30 hover:border-brand-accent/40'
          : 'border-brand-neutral-300/20 opacity-50'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          {/* Service Name */}
          <div>
            <h4 className="text-brand-neutral-900">{service.serviceName}</h4>
            {serviceDef?.description && (
              <p className="text-sm text-brand-neutral-600 mt-1">{serviceDef.description}</p>
            )}
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className={`text-sm flex items-center gap-1.5 ${
                service.hourlyRate 
                  ? 'text-brand-accent' 
                  : 'text-brand-neutral-600'
              }`}>
                {currency} {effectiveRate}/hr
                {!service.hourlyRate && (
                  <span className="text-xs text-brand-neutral-500">(base rate)</span>
                )}
              </span>
              {service.responseTimeHours && (
                <>
                  <span className="text-brand-neutral-400">•</span>
                  <span className="text-sm text-brand-neutral-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {service.responseTimeHours}h response time
                  </span>
                </>
              )}
              {needsResponseTime && (
                <>
                  <span className="text-brand-neutral-400">•</span>
                  <button
                    onClick={() => onOpenResponseTimePicker(service.id)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-warning/10 hover:bg-brand-warning/20 border border-brand-warning/30 rounded-lg text-xs text-brand-warning transition-all cursor-pointer"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Set response time</span>
                  </button>
                </>
              )}
              {projectCount === 0 ? (
                <>
                  <span className="text-brand-neutral-400">•</span>
                  <button
                    onClick={() => onOpenProjectPicker(service.id)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-error/10 hover:bg-brand-error/20 border border-brand-error/30 rounded-lg text-xs text-brand-error transition-all cursor-pointer"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Add projects</span>
                  </button>
                </>
              ) : (
                <>
                  <span className="text-brand-neutral-400">•</span>
                  <span className="text-sm text-brand-neutral-600">
                    {projectCount} project{projectCount !== 1 ? 's' : ''}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Projects */}
          {projectCount > 0 && (
            <div>
              <h5 className="text-xs text-brand-neutral-600 mb-2">
                Projects ({projectCount})
              </h5>
              <div className="flex flex-wrap gap-2">
                {(service.projectIds || []).map((projectId) => {
                  const project = projects.find(p => p.id === projectId);
                  if (!project) return null;
                  const isGithub = project.url.includes('github.com');

                  return (
                    <div
                      key={projectId}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg text-sm text-brand-neutral-800 group"
                    >
                      {isGithub ? (
                        <Github className="w-3.5 h-3.5 text-brand-neutral-600" />
                      ) : (
                        <Globe className="w-3.5 h-3.5 text-brand-neutral-600" />
                      )}
                      <span className="truncate max-w-[200px]">
                        {getProjectName(project.url)}
                      </span>
                      <button
                        onClick={() => onRemoveProjectFromService(service.id, projectId)}
                        className="ml-1 p-0.5 rounded hover:bg-brand-error/20 text-brand-neutral-500 hover:text-brand-error transition-all cursor-pointer"
                        title="Remove project from service"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Comment */}
          {service.comment && (
            <p className="text-sm text-brand-neutral-600 leading-relaxed">
              {service.comment}
            </p>
          )}
        </div>

        {/* Actions */}
        <ServiceActions
          service={service}
          onToggle={onToggle}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
};
