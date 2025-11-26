import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Card } from '../../ui/card';
import { 
  DeveloperOnboardingData, 
  Project, 
  Availability, 
  DeveloperService 
} from '../../../types/DeveloperOnboarding';
import { 
  User, 
  Folder, 
  UserCircle, 
  Clock, 
  Briefcase, 
  Edit2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { 
  ReviewCard, 
  ReviewCardHeader, 
  ReviewField, 
  ReviewSection 
} from '../ReviewComponents';

interface StepReviewProps {
  data: Partial<DeveloperOnboardingData>;
  onEdit: (stepNumber: number) => void;
}

export function StepReview({ data, onEdit }: StepReviewProps) {
  const formatCurrency = (amount: number, currency: string) => {
    const symbols: Record<string, string> = {
      USD: '$',
      EUR: '€',
      CHF: 'CHF'
    };
    return `${symbols[currency] || currency} ${amount}`;
  };

  const formatResponseTime = (hours?: number) => {
    if (!hours) return 'Not specified';
    if (hours === 24) return '24 hours';
    if (hours === 48) return '2 days';
    if (hours === 72) return '3 days';
    if (hours === 168) return '1 week';
    return `${hours} hours`;
  };

  const getRoleLabel = (role: string) => {
    const labels: Record<string, string> = {
      maintainer: 'Maintainer',
      core_contributor: 'Core Contributor',
      contributor: 'Contributor',
      other: 'Other'
    };
    return labels[role] || role;
  };

  const getAccessLabel = (access: string) => {
    const labels: Record<string, string> = {
      full_write: 'Full Write Access',
      write_with_review: 'Write with Review',
      read_only: 'Read Only'
    };
    return labels[access] || access;
  };

  return (
    <div className="space-y-4">
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
          Please review all the information you've provided. You can edit any section by clicking the "Edit" button.
        </p>
      </div>

      {/* Step 1: Identity */}
      <ReviewCard>
        <ReviewCardHeader
          icon={User}
          iconColor="text-brand-accent"
          title="Identity & Contact"
          stepNumber={1}
          onEdit={() => onEdit(1)}
          editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
        />
        <div className="space-y-2.5">
          <ReviewField label="Full Name" value={data.contact?.fullName || 'Not provided'} />
          <ReviewField label="Email" value={data.contact?.email || 'Not provided'} />
          <ReviewField 
            label="Terms" 
            value={
              data.contact?.termsAccepted ? (
                <Badge variant="outline" className="bg-brand-success/20 border-brand-success/30 text-brand-success text-xs h-5 px-2">
                  Accepted
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-brand-error/20 border-brand-error/30 text-brand-error text-xs h-5 px-2">
                  Not Accepted
                </Badge>
              )
            }
          />
        </div>
      </ReviewCard>

      {/* Step 2: Projects */}
      <ReviewCard>
        <ReviewCardHeader
          icon={Folder}
          iconColor="text-brand-highlight"
          title="Open Source Projects"
          stepNumber={2}
          metadata={`${data.projects?.length || 0} projects`}
          onEdit={() => onEdit(2)}
          editButtonColor="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10"
        />
        <div className="space-y-2.5">
          {data.projects && data.projects.length > 0 ? (
            data.projects.map((project, idx) => (
              <div key={project.id} className="border-l-2 border-brand-highlight/30 pl-3 py-1.5 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-brand-neutral-800 text-sm">Project {idx + 1}</span>
                      {project.verified && (
                        <Badge variant="outline" className="bg-brand-success/20 border-brand-success/30 text-brand-success text-xs h-4 px-1.5">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline flex items-center gap-1 text-xs group"
                    >
                      <span className="truncate">{project.url}</span>
                      <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-brand-neutral-500">Role:</span>
                    <span className="text-brand-neutral-900">{getRoleLabel(project.role)}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-brand-neutral-500">Access:</span>
                    <span className="text-brand-neutral-900">{getAccessLabel(project.mainBranchAccess)}</span>
                  </div>
                  {project.ecosystems && project.ecosystems.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-brand-neutral-500">Ecosystems:</span>
                      <div className="flex flex-wrap gap-1">
                        {project.ecosystems.map((eco, i) => (
                          <Badge key={i} variant="outline" className="text-xs h-4 px-1.5">
                            {eco}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-brand-neutral-500 text-sm">No projects added</p>
          )}
        </div>
      </ReviewCard>

      {/* Step 3: Participation Model */}
      <ReviewCard>
        <ReviewCardHeader
          icon={UserCircle}
          iconColor="text-brand-accent"
          title="Participation Model"
          stepNumber={3}
          onEdit={() => onEdit(3)}
          editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
        />
        <div>
          {data.participationModel ? (
            <Badge 
              variant="outline" 
              className={`${
                data.participationModel === 'active' 
                  ? 'bg-brand-accent/20 border-brand-accent/30 text-brand-accent' 
                  : 'bg-brand-highlight/20 border-brand-highlight/30 text-brand-highlight'
              } text-sm px-3 py-1.5`}
            >
              {data.participationModel === 'active' ? 'Active Participation' : 'Passive Participation'}
            </Badge>
          ) : (
            <p className="text-brand-neutral-500 text-sm">Not selected</p>
          )}
        </div>
      </ReviewCard>

      {/* Step 4: Availability (Active only) */}
      {data.participationModel === 'active' && (
        <ReviewCard>
          <ReviewCardHeader
            icon={Clock}
            iconColor="text-brand-highlight"
            title="Availability & Rates"
            stepNumber={4}
            onEdit={() => onEdit(4)}
            editButtonColor="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10"
          />
          <div className="space-y-3">
            {data.availability ? (
              <>
                <ReviewSection>
                  <ReviewField 
                    label="Weekly Hours" 
                    value={`${data.availability.weeklyHours} hrs/week`} 
                    minWidth="min-w-[120px]"
                  />
                  {data.availability.basicAvailabilityComment && (
                    <ReviewField 
                      label="Availability Notes" 
                      value={data.availability.basicAvailabilityComment} 
                      minWidth="min-w-[120px]"
                    />
                  )}
                </ReviewSection>

                <ReviewSection withDivider>
                  <ReviewField 
                    label="Base Hourly Rate" 
                    value={formatCurrency(data.availability.baseHourlyRate, data.availability.currency)} 
                    minWidth="min-w-[120px]"
                  />
                  {data.availability.hourlyRateComment && (
                    <ReviewField 
                      label="Rate Notes" 
                      value={data.availability.hourlyRateComment} 
                      minWidth="min-w-[120px]"
                    />
                  )}
                </ReviewSection>

                {data.availability.openToBiggerOpportunities !== undefined && (
                  <ReviewSection withDivider>
                    <ReviewField 
                      label="Bigger Opportunities" 
                      value={
                        data.availability.openToBiggerOpportunities === true ? 'Yes' :
                        data.availability.openToBiggerOpportunities === false ? 'No' : 'Maybe'
                      }
                      minWidth="min-w-[120px]"
                    />
                    {data.availability.biggerOpportunitiesComment && (
                      <ReviewField 
                        label="Opportunity Notes" 
                        value={data.availability.biggerOpportunitiesComment} 
                        minWidth="min-w-[120px]"
                      />
                    )}
                  </ReviewSection>
                )}
              </>
            ) : (
              <p className="text-brand-neutral-500 text-sm">Not provided</p>
            )}
          </div>
        </ReviewCard>
      )}

      {/* Step 5: Services (Active only) */}
      {data.participationModel === 'active' && (
        <ReviewCard>
          <ReviewCardHeader
            icon={Briefcase}
            iconColor="text-brand-accent"
            title="Services"
            stepNumber={5}
            metadata={`${data.services?.filter(s => s.enabled).length || 0} enabled`}
            onEdit={() => onEdit(5)}
            editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
          />
          <div className="space-y-3">
            {data.services && data.services.length > 0 ? (
              (() => {
                const enabledServices = data.services.filter(service => service.enabled);
                const servicesByType = enabledServices.reduce((acc, service) => {
                  const type = service.serviceType;
                  if (!acc[type]) acc[type] = [];
                  acc[type].push(service);
                  return acc;
                }, {} as Record<string, typeof enabledServices>);

                const categoryLabels: Record<string, string> = {
                  support: 'Support',
                  development: 'Development',
                  advisory: 'Advisory',
                  security_and_compliance: 'Security & Compliance',
                  custom: 'Custom Services'
                };

                return Object.entries(servicesByType).map(([type, services], categoryIdx) => (
                  <div key={type}>
                    {categoryIdx > 0 && <div className="border-t border-brand-neutral-300/30 -mx-4 my-3"></div>}
                    <div className="mb-2">
                      <h4 className="text-brand-neutral-600 text-xs uppercase tracking-wider">{categoryLabels[type] || type}</h4>
                    </div>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <div key={service.id} className="border-l-2 border-brand-accent/30 pl-3 py-1.5 space-y-1.5">
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
                                  {formatCurrency(service.hourlyRate, data.availability?.currency || 'USD')}
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
                                    const project = data.projects?.find(p => p.id === projectId);
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
                      ))}
                    </div>
                  </div>
                ));
              })()
            ) : (
              <p className="text-brand-neutral-500 text-sm">No services enabled</p>
            )}
          </div>
        </ReviewCard>
      )}

      {/* Final Confirmation Note */}
      <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg p-4 text-center">
        <p className="text-brand-neutral-700 text-sm">
          By clicking "Submit Application" below, you confirm that all the information provided is accurate and you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
}