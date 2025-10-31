import React from 'react';
import { DeveloperOnboardingData } from '../../../types/DeveloperOnboarding';
import { CheckCircle2, Mail, User, Code, Zap, Heart, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Button } from '../../ui/button';
import { StepHeader } from '../StepHeader';

interface StepReviewProps {
  data: Partial<DeveloperOnboardingData>;
  onEdit: (step: number) => void;
}

/**
 * StepReview - Step 6 of developer onboarding
 * Final review before submission
 */
export const StepReview: React.FC<StepReviewProps> = ({ data, onEdit }) => {
  const isActive = data.participationModel === 'active';
  const enabledServices = data.services?.filter(s => s.enabled) || [];

  // Success icon for header
  const successIcon = (
    <div className="w-16 h-16 bg-gradient-to-br from-brand-success to-brand-success-light rounded-full flex items-center justify-center">
      <CheckCircle2 className="w-8 h-8 text-white" />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <StepHeader
        stepNumber="06"
        title="Review Your Profile"
        subtitle='Please review your information before submitting. You can edit any section by clicking the "Edit" button.'
        align="center"
        icon={successIcon}
      />

      {/* Review Sections */}
      <div className="space-y-4">
        {/* Contact Information */}
        <div className="bg-brand-secondary-dark rounded-xl border border-brand-neutral-300/10 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-brand-neutral-200">Contact Information</h3>
                <p className="text-sm text-brand-neutral-400">Step 1</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="text-brand-accent hover:text-brand-accent-dark"
            >
              Edit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-brand-neutral-400 mb-1">Full Name</div>
              <div className="text-brand-neutral-200">{data.contact?.fullName || '—'}</div>
            </div>
            <div>
              <div className="text-sm text-brand-neutral-400 mb-1">Email Address</div>
              <div className="text-brand-neutral-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-neutral-500" />
                {data.contact?.email || '—'}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-brand-secondary-dark rounded-xl border border-brand-neutral-300/10 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-highlight/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-brand-highlight" />
              </div>
              <div>
                <h3 className="text-brand-neutral-200">Open Source Projects</h3>
                <p className="text-sm text-brand-neutral-400">Step 2 • {data.projects?.length || 0} projects</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(2)}
              className="text-brand-accent hover:text-brand-accent-dark"
            >
              Edit
            </Button>
          </div>

          {data.projects && data.projects.length > 0 ? (
            <div className="space-y-3">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-start justify-between p-3 bg-brand-card-blue rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-brand-neutral-200 break-all">{project.url}</span>
                      {project.verified && (
                        <CheckCircle2 className="w-4 h-4 text-brand-success flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-sm text-brand-neutral-400">
                      {project.projectType && (
                        <>
                          <span className="capitalize">{project.projectType.replace('_', ' ')}</span>
                          {' • '}
                        </>
                      )}
                      <span className="capitalize">{project.role.replace('_', ' ')}</span>
                      {' • '}
                      <span className="capitalize">{project.mainBranchAccess.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-brand-neutral-400">No projects added</p>
          )}
        </div>

        {/* Participation Model */}
        <div className="bg-brand-secondary-dark rounded-xl border border-brand-neutral-300/10 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isActive ? 'bg-brand-accent/10' : 'bg-brand-highlight/10'
              }`}>
                {isActive ? (
                  <Zap className="w-5 h-5 text-brand-accent" />
                ) : (
                  <Heart className="w-5 h-5 text-brand-highlight" />
                )}
              </div>
              <div>
                <h3 className="text-brand-neutral-200">Participation Model</h3>
                <p className="text-sm text-brand-neutral-400">Step 3</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(3)}
              className="text-brand-accent hover:text-brand-accent-dark"
            >
              Edit
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className={`px-4 py-2 rounded-lg ${
              isActive
                ? 'bg-brand-accent/10 text-brand-accent'
                : 'bg-brand-highlight/10 text-brand-highlight-dark'
            }`}>
              {data.participationModel === 'active' ? 'Active Participation' : 'Passive Participation'}
            </div>
          </div>
        </div>

        {/* Availability (Active only) */}
        {isActive && data.availability && (
          <div className="bg-brand-secondary-dark rounded-xl border border-brand-neutral-300/10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-success/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-success" />
                </div>
                <div>
                  <h3 className="text-brand-neutral-200">Availability & Rates</h3>
                  <p className="text-sm text-brand-neutral-400">Step 4</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(4)}
                className="text-brand-accent hover:text-brand-accent-dark"
              >
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-brand-neutral-400 mb-1">Weekly Hours</div>
                <div className="text-brand-neutral-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-neutral-500" />
                  {data.availability.weeklyHours} hours
                </div>
              </div>
              <div>
                <div className="text-sm text-brand-neutral-400 mb-1">Base Rate</div>
                <div className="text-brand-neutral-200 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-neutral-500" />
                  {data.availability.currency} {data.availability.baseHourlyRate}/hour
                </div>
              </div>
              <div>
                <div className="text-sm text-brand-neutral-400 mb-1">Est. Monthly</div>
                <div className="text-brand-accent">
                  {data.availability.currency}{' '}
                  {(data.availability.weeklyHours * data.availability.baseHourlyRate * 4.33).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Basic Availability Comment */}
            {data.availability.basicAvailabilityComment && (
              <div className="mt-4 pt-4 border-t border-brand-neutral-300/10">
                <div className="text-sm text-brand-neutral-400 mb-2">Comment</div>
                <div className="text-sm text-brand-neutral-300 italic bg-brand-card-blue/50 rounded-lg p-3">
                  "{data.availability.basicAvailabilityComment}"
                </div>
              </div>
            )}

            {data.availability.minimumEngagement && (
              <div className="mt-4 pt-4 border-t border-brand-neutral-300/10">
                <div className="text-sm text-brand-neutral-400 mb-2">Minimum Engagement</div>
                <div className="flex items-center gap-4 text-sm text-brand-neutral-300">
                  {data.availability.minimumEngagement.hoursPerProject && (
                    <span>{data.availability.minimumEngagement.hoursPerProject} hours per project</span>
                  )}
                  {data.availability.minimumEngagement.minimumDuration && (
                    <span>{data.availability.minimumEngagement.minimumDuration} weeks minimum</span>
                  )}
                </div>
              </div>
            )}

            {/* Additional Availability Information */}
            {(data.availability.typicalWeeklyHours || data.availability.hourlyRate || data.availability.openToBiggerOpportunities !== undefined) && (
              <div className="mt-4 pt-4 border-t border-brand-neutral-300/10">
                <div className="text-sm text-brand-neutral-400 mb-3">Additional Information</div>
                <div className="space-y-3">
                  {data.availability.typicalWeeklyHours && (
                    <div>
                      <div className="text-sm text-brand-neutral-300 mb-1">
                        <strong>Typical weekly hours:</strong> {data.availability.typicalWeeklyHours} hours/week
                      </div>
                      {data.availability.typicalWeeklyHoursComment && (
                        <div className="text-sm text-brand-neutral-400 pl-4 italic">
                          "{data.availability.typicalWeeklyHoursComment}"
                        </div>
                      )}
                    </div>
                  )}
                  {data.availability.hourlyRate && (
                    <div>
                      <div className="text-sm text-brand-neutral-300 mb-1">
                        <strong>Hourly rate:</strong> {data.availability.currency} {data.availability.hourlyRate}/hour
                      </div>
                      {data.availability.hourlyRateComment && (
                        <div className="text-sm text-brand-neutral-400 pl-4 italic">
                          "{data.availability.hourlyRateComment}"
                        </div>
                      )}
                    </div>
                  )}
                  {data.availability.openToBiggerOpportunities !== undefined && (
                    <div>
                      <div className="text-sm text-brand-neutral-300 mb-1">
                        <strong>Open to bigger opportunities:</strong>{' '}
                        <span className={data.availability.openToBiggerOpportunities ? 'text-brand-success' : 'text-brand-neutral-400'}>
                          {data.availability.openToBiggerOpportunities ? 'Yes' : 'No'}
                        </span>
                      </div>
                      {data.availability.biggerOpportunitiesComment && (
                        <div className="text-sm text-brand-neutral-400 pl-4 italic">
                          "{data.availability.biggerOpportunitiesComment}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Services (Active only) */}
        {isActive && data.services && enabledServices.length > 0 && (
          <div className="bg-brand-secondary-dark rounded-xl border border-brand-neutral-300/10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-warning/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-brand-warning" />
                </div>
                <div>
                  <h3 className="text-brand-neutral-200">Services Offered</h3>
                  <p className="text-sm text-brand-neutral-400">Step 5 • {enabledServices.length} enabled</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(5)}
                className="text-brand-accent hover:text-brand-accent-dark"
              >
                Edit
              </Button>
            </div>

            <div className="space-y-2">
              {enabledServices.map((service) => {
                const effectiveRate = service.hourlyRate || data.availability?.baseHourlyRate || 0;
                const projectCount = service.projectIds.length;
                
                return (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-3 bg-brand-card-blue rounded-lg"
                  >
                    <div className="flex-1">
                      <span className="text-brand-neutral-200">{service.serviceName}</span>
                      <div className="flex items-center gap-2 mt-1 text-xs text-brand-neutral-400">
                        <span className="capitalize">{service.serviceType.replace('_', ' ')}</span>
                        <span>•</span>
                        <span>{projectCount} project{projectCount !== 1 ? 's' : ''}</span>
                        {service.responseTimeHours && (
                          <>
                            <span>•</span>
                            <span>{service.responseTimeHours}h response</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-brand-accent">
                      {data.availability?.currency}{' '}
                      {effectiveRate}/hr
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Submission Info */}
      <div className="max-w-4xl mx-auto bg-brand-success/5 border border-brand-success/20 rounded-xl p-6">
        <h4 className="text-brand-neutral-200 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-brand-success" />
          Ready to Submit?
        </h4>
        <p className="text-sm text-brand-neutral-300 mb-4">
          By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll review your application and get back to you within 2-3 business days.
        </p>
        <ul className="text-sm text-brand-neutral-300 space-y-2 list-disc list-inside">
          <li>Your profile will be reviewed by our team</li>
          <li>We'll verify your GitHub contributions and project access</li>
          <li>{isActive ? 'You can start accepting work requests after approval' : 'Your projects will be listed in our directory'}</li>
          <li>You can update your profile anytime after submission</li>
        </ul>
      </div>
    </div>
  );
};
