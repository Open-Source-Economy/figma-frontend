import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Separator } from '../ui/separator';
import {
  ShieldCheck,
  ShieldX,
  Mail,
  Calendar,
  DollarSign,
  Clock,
  GitBranch,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  User,
  Briefcase,
  Link as LinkIcon,
  Zap
} from 'lucide-react';
import { DeveloperOnboardingData } from '../../types/DeveloperOnboarding';

interface OnboardingSubmissionCardProps {
  submission: DeveloperOnboardingData;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onVerifyProfile: () => void;
  onUnverifyProfile: () => void;
  onVerifyProject: (projectId: string) => void;
  onUnverifyProject: (projectId: string) => void;
}

export const OnboardingSubmissionCard: React.FC<OnboardingSubmissionCardProps> = ({
  submission,
  isExpanded,
  onToggleExpand,
  onVerifyProfile,
  onUnverifyProfile,
  onVerifyProject,
  onUnverifyProject,
}) => {
  const isProfileVerified = submission.status === 'approved';
  const isPending = submission.status === 'submitted';
  const isRejected = submission.status === 'rejected';

  const getStatusBadge = () => {
    if (isProfileVerified) {
      return (
        <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
          <ShieldCheck className="w-3 h-3 mr-1" />
          Verified
        </Badge>
      );
    }
    if (isRejected) {
      return <Badge variant="destructive">Rejected</Badge>;
    }
    if (isPending) {
      return (
        <Badge variant="outline" className="bg-brand-warning/10 text-brand-warning border-brand-warning/30">
          <Clock className="w-3 h-3 mr-1" />
          Pending Review
        </Badge>
      );
    }
    return <Badge variant="outline" className="text-muted-foreground">Draft</Badge>;
  };

  const formatCurrency = (amount: number, currency: string) => {
    const symbols = { USD: '$', EUR: '€', CHF: 'CHF' };
    return `${symbols[currency as keyof typeof symbols] || currency}${amount}`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const verifiedProjectsCount = submission.projects.filter(p => p.verified).length;
  const totalProjects = submission.projects.length;

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-white/20 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary-dark flex items-center justify-center shadow-lg">
                <User className="w-7 h-7 text-white" />
              </div>
              {isProfileVerified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand-success rounded-full border-2 border-white flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-lg truncate">{submission.contact.fullName}</h3>
                {getStatusBadge()}
                {submission.participationModel && submission.participationModel.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {submission.participationModel.includes('active') && (
                      <Badge variant="outline" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 text-xs">
                        <Briefcase className="w-3 h-3 mr-1" />
                        Active Provider
                      </Badge>
                    )}
                    {submission.participationModel.includes('passive') && (
                      <Badge variant="outline" className="bg-brand-highlight/10 text-brand-highlight border-brand-highlight/20 text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        Fund Receiver
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{submission.contact.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{formatDate(submission.lastModified)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{totalProjects} {totalProjects === 1 ? 'project' : 'projects'}</span>
                  {verifiedProjectsCount > 0 && (
                    <Badge variant="outline" className="bg-brand-success/10 text-brand-success border-brand-success/20 text-xs px-1.5 py-0">
                      {verifiedProjectsCount} ✓
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 flex-shrink-0">
            {isProfileVerified ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onUnverifyProfile}
                      className="border-brand-error/30 text-brand-error hover:bg-brand-error/10 hover:border-brand-error/50"
                    >
                      <ShieldX className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Remove verification</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onVerifyProfile}
                className="border-brand-success/30 text-brand-success hover:bg-brand-success/10 hover:border-brand-success/50"
                disabled={submission.status === 'draft'}
              >
                <ShieldCheck className="w-4 h-4 mr-1.5" />
                Verify
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleExpand}
              className="text-muted-foreground hover:text-foreground"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Hide
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Details
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Expanded Details */}
      {isExpanded && (
        <>
          <Separator className="bg-white/30" />
          <CardContent className="space-y-6 pt-6">
            {/* Projects Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-brand-accent/10 rounded-lg">
                  <GitBranch className="w-4 h-4 text-brand-accent" />
                </div>
                <h4 className="text-sm">
                  Project Contributions
                </h4>
                <Badge variant="outline" className="text-xs">{totalProjects}</Badge>
              </div>
              <div className="space-y-3">
                {submission.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30 hover:border-brand-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <LinkIcon className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-primary hover:underline truncate"
                          >
                            {project.url.replace('https://github.com/', '')}
                          </a>
                          {project.verified && (
                            <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30 text-xs px-1.5 py-0">
                              <ShieldCheck className="w-3 h-3" />
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs bg-white/50">
                            {project.role.replace(/_/g, ' ')}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-white/50">
                            {project.mainBranchAccess.replace(/_/g, ' ')}
                          </Badge>
                          {project.ecosystems && project.ecosystems.length > 0 && (
                            project.ecosystems.map(eco => (
                              <Badge key={eco} variant="outline" className="text-xs bg-brand-primary/5 text-brand-primary border-brand-primary/20">
                                {eco}
                              </Badge>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        {project.verified ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => onUnverifyProject(project.id)}
                                  className="h-8 w-8 p-0 text-brand-error hover:bg-brand-error/10"
                                >
                                  <XCircle className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Unverify project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => onVerifyProject(project.id)}
                                  className="h-8 w-8 p-0 text-brand-success hover:bg-brand-success/10"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Verify project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Section (Active participants only) */}
            {submission.participationModel?.['service_provider'] === 'yes' && submission.availability && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-brand-success/10 rounded-lg">
                    <Clock className="w-4 h-4 text-brand-success" />
                  </div>
                  <h4 className="text-sm">Availability & Pricing</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Weekly Hours</p>
                    <p className="text-sm">{submission.availability.weeklyHours} hrs/week</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Hourly Rate</p>
                    <p className="text-sm flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-brand-success" />
                      {formatCurrency(submission.availability.baseHourlyRate, submission.availability.currency)}/hr
                    </p>
                  </div>
                  {submission.availability.openToBiggerOpportunities !== null && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Bigger Opportunities</p>
                      <p className="text-sm">
                        {submission.availability.openToBiggerOpportunities === true
                          ? '✓ Yes'
                          : submission.availability.openToBiggerOpportunities === false
                          ? '✗ No'
                          : '~ Maybe'}
                      </p>
                    </div>
                  )}
                  {submission.availability.basicAvailabilityComment && (
                    <div className="col-span-2 md:col-span-3">
                      <p className="text-xs text-muted-foreground mb-1">Comment</p>
                      <p className="text-sm text-muted-foreground italic">"{submission.availability.basicAvailabilityComment}"</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Services Section (Active participants only) */}
            {submission.participationModel?.['service_provider'] === 'yes' && submission.services && submission.services.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-brand-highlight/10 rounded-lg">
                    <Briefcase className="w-4 h-4 text-brand-highlight" />
                  </div>
                  <h4 className="text-sm">Services Offered</h4>
                  <Badge variant="outline" className="text-xs">
                    {submission.services.filter(s => s.enabled).length}
                  </Badge>
                </div>
                <div className="grid gap-3">
                  {submission.services.filter(s => s.enabled).map((service) => (
                    <div
                      key={service.id}
                      className="p-4 bg-gradient-to-r from-white/40 to-white/30 backdrop-blur-sm rounded-lg border border-white/30"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-sm mb-1">{service.serviceName}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs bg-white/50">
                              {service.serviceType.replace(/_/g, ' ')}
                            </Badge>
                            {service.responseTimeHours && (
                              <Badge variant="outline" className="text-xs bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                                <Clock className="w-3 h-3 mr-1" />
                                {service.responseTimeHours < 168 ? `${service.responseTimeHours}h` : '1 week'}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {service.hourlyRate && (
                          <div className="flex items-center gap-1 text-sm text-brand-success">
                            <DollarSign className="w-3.5 h-3.5" />
                            {formatCurrency(service.hourlyRate, submission.availability?.currency || 'USD')}/hr
                          </div>
                        )}
                      </div>
                      {service.comment && (
                        <p className="text-xs text-muted-foreground mt-2 italic">"{service.comment}"</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Participation Model Badge */}
            {submission.participationModel?.includes('passive') && !submission.participationModel?.includes('active') && (
              <div className="p-4 bg-gradient-to-r from-brand-accent/10 to-brand-highlight/5 rounded-lg border border-brand-accent/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-accent/20 rounded-lg flex-shrink-0">
                    <Zap className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm mb-1">Common Pot Participant</p>
                    <p className="text-xs text-muted-foreground">
                      This maintainer is participating in the common pot model and will receive funding based on their contributions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
};