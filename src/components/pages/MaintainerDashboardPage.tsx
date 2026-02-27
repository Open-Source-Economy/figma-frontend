import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { ReviewCard, ReviewCardHeader, ReviewField, ReviewSection } from '../onboarding/ReviewComponents';
import { ProjectCard } from '../onboarding/ProjectCard';
import { ServiceCard } from '../onboarding/ServiceCard';
import { CollapsibleServiceCategory } from '../onboarding/CollapsibleServiceCategory';
import { EmptyStateMessage } from '../onboarding/EmptyStateMessage';
import { toast } from 'sonner@2.0.3';
import { 
  User, 
  Mail, 
  Globe, 
  Twitter, 
  Github,
  Code,
  FolderPlus,
  Edit,
  Trash2,
  Briefcase,
  BarChart3,
  Folder,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';
import type { DeveloperOnboardingData, DeveloperService, Project as OnboardingProject, ProjectRole, MainBranchAccess, ServiceType } from '../../types/DeveloperOnboarding';

interface MaintainerDashboardPageProps {
  onNavigateHome?: () => void;
  onNavItemClick?: (href: string) => void;
  onAddProject?: () => void;
  onManageProjectServices?: (projectId: string) => void;
}

export function MaintainerDashboardPage({
  onNavigateHome,
  onNavItemClick,
  onAddProject,
  onManageProjectServices
}: MaintainerDashboardPageProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isEditing, setIsEditing] = React.useState<string | null>(null);
  
  // Mock data - in production, this would come from API/backend
  const [maintainerData, setMaintainerData] = React.useState<DeveloperOnboardingData>({
    identity: {
      fullName: 'Sarah Chen',
      email: 'sarah@example.com',
      website: 'https://sarahchen.dev',
      twitter: '@sarahchen',
      mastodon: '@sarah@mastodon.social',
      matrix: '@sarah:matrix.org',
      github: 'sarahchen'
    },
    projects: [
      {
        id: '1',
        name: 'react-hooks-pro',
        url: 'https://github.com/sarahchen/react-hooks-pro',
        repositories: ['https://github.com/sarahchen/react-hooks-pro'],
        ecosystems: ['npm', 'javascript'],
        description: 'Advanced React hooks library for professional applications'
      },
      {
        id: '2',
        name: 'typescript-utils',
        url: 'https://github.com/sarahchen/typescript-utils',
        repositories: ['https://github.com/sarahchen/typescript-utils'],
        ecosystems: ['npm', 'typescript'],
        description: 'Type-safe utility functions for TypeScript projects'
      }
    ],
    services: [
      {
        id: '1',
        name: 'Bug Fixing',
        category: 'Development',
        rate: 150,
        projectIds: ['1', '2'],
        responseTime: '24 hours'
      },
      {
        id: '2',
        name: 'Code Review',
        category: 'Development',
        rate: 100,
        projectIds: ['1'],
        responseTime: '48 hours'
      },
      {
        id: '3',
        name: 'Feature Development',
        category: 'Development',
        rate: 200,
        projectIds: ['1', '2'],
        responseTime: '1 week'
      },
      {
        id: '4',
        name: 'Technical Consulting',
        category: 'Consulting',
        rate: 250,
        projectIds: ['1'],
        responseTime: '24 hours'
      }
    ],
    availability: {
      weeklyHours: 20,
      biggerOpportunities: 'open',
      serviceRates: {},
      comments: 'Available for consulting and development work. Prefer async communication.'
    },
    participationModel: 'service-provider'
  });

  const handleSaveContact = () => {
    // Optimistic update with toast
    toast.success('Contact information updated successfully');
    setIsEditing(null);
  };

  const handleSaveServices = () => {
    toast.success('Services updated successfully');
    setIsEditing(null);
  };

  const handleRemoveProject = (projectId: string) => {
    setMaintainerData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== projectId)
    }));
    toast.success('Project removed successfully');
  };

  const handleRemoveService = (serviceId: string) => {
    setMaintainerData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== serviceId)
    }));
    toast.success('Service removed successfully');
  };

  // Get services for a specific project
  const getProjectServices = (projectId: string) => {
    return maintainerData.services.filter(s => s.projectIds?.includes(projectId));
  };

  // Get top 3 services
  const topServices = maintainerData.services.slice(0, 3);

  // Helper functions for ProjectCard
  const getRoleLabel = (role: string): string => {
    const labels: Record<string, string> = {
      maintainer: 'Maintainer',
      core_contributor: 'Core Contributor',
      contributor: 'Contributor',
      other: 'Other'
    };
    return labels[role] || role;
  };

  const getAccessLabel = (access: string): string => {
    const labels: Record<string, string> = {
      full_write: 'Full Write',
      write_with_review: 'Write with Review',
      read_only: 'Read Only'
    };
    return labels[access] || access;
  };

  // Helper functions for ServiceCard
  const formatCurrency = (amount: number, currency: string): string => {
    return `$${amount}/hr`;
  };

  const formatResponseTime = (hours?: number): string => {
    if (!hours) return 'Not specified';
    if (hours === 24) return '24 hours';
    if (hours === 48) return '2 days';
    if (hours === 72) return '3 days';
    if (hours === 168) return '1 week';
    return `${hours} hours`;
  };

  // Convert maintainerData to proper types for reusable components
  const convertedProjects: OnboardingProject[] = maintainerData.projects.map(p => ({
    ...p,
    role: (p.role || 'maintainer') as ProjectRole,
    mainBranchAccess: (p.mainBranchAccess || 'full_write') as MainBranchAccess,
    projectType: p.projectType || 'github_repo'
  }));

  const convertedServices: DeveloperService[] = maintainerData.services.map(s => {
    // Map category string to ServiceType
    let serviceType: ServiceType = 'support';
    if (s.category === 'Development') serviceType = 'development';
    else if (s.category === 'Advisory' || s.category === 'Consulting') serviceType = 'advisory';
    else if (s.category === 'Security') serviceType = 'security_and_compliance';
    else if (s.category === 'Support') serviceType = 'support';
    
    return {
      id: s.id,
      serviceId: s.id,
      serviceName: s.name,
      serviceType: serviceType,
      hourlyRate: s.rate,
      responseTimeHours: s.responseTime === '24 hours' ? 24 : 
                         s.responseTime === '48 hours' ? 48 :
                         s.responseTime === '2 days' ? 48 :
                         s.responseTime === '3 days' ? 72 :
                         s.responseTime === '1 week' ? 168 : 24,
      projectIds: s.projectIds || [],
      enabled: true,
      comment: undefined,
      hasResponseTime: true
    };
  });

  // Category configuration
  const serviceCategoryConfig = {
    development: {
      label: 'Development',
      icon: Code,
      iconColor: 'text-brand-accent'
    },
    advisory: {
      label: 'Advisory',
      icon: Lightbulb,
      iconColor: 'text-brand-highlight'
    },
    support: {
      label: 'Support',
      icon: Briefcase,
      iconColor: 'text-brand-success'
    },
    security_and_compliance: {
      label: 'Security & Compliance',
      icon: ShieldCheck,
      iconColor: 'text-brand-warning'
    },
    custom: {
      label: 'Custom Services',
      icon: Code,
      iconColor: 'text-brand-neutral-600'
    }
  };

  // Group services by category
  const groupServicesByCategory = (services: DeveloperService[]) => {
    const grouped = services.reduce((acc, service) => {
      const category = service.serviceType || 'custom';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as Record<ServiceType, DeveloperService[]>);
    return grouped;
  };

  const groupedServices = groupServicesByCategory(convertedServices);

  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Header */}
      <section className="border-b border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24 border-4 border-brand-accent">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" />
              <AvatarFallback className="bg-brand-accent text-white text-2xl">
                SC
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-brand-neutral-950 mb-2">
                {maintainerData.identity.fullName}
              </h1>
              <p className="text-brand-neutral-600 text-lg mb-4">
                Open Source Maintainer & Developer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-brand-success/20 text-brand-success border-brand-success/30">
                  {maintainerData.projects.length} Projects
                </Badge>
                <Badge variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30">
                  {maintainerData.services.length} Services
                </Badge>
                <Badge variant="secondary" className="bg-brand-highlight/20 text-brand-highlight border-brand-highlight/30">
                  {maintainerData.availability.weeklyHours}h/week Available
                </Badge>
              </div>
            </div>
            <Button onClick={onAddProject} className="gap-2">
              <FolderPlus className="h-4 w-4" />
              Add Project
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Identity Information from Step 1 */}
            <ReviewCard>
              <ReviewCardHeader
                icon={User}
                iconColor="text-brand-highlight"
                title="Contact & Identity"
                onEdit={() => setActiveTab('contact')}
                editButtonColor="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10"
              />
              <div className="space-y-3">
                <ReviewField
                  label="Full Name"
                  value={maintainerData.identity.fullName}
                  minWidth="min-w-[140px]"
                />
                <ReviewField
                  label="Email"
                  value={maintainerData.identity.email}
                  minWidth="min-w-[140px]"
                />
                {maintainerData.identity.github && (
                  <ReviewField
                    label="GitHub"
                    value={`@${maintainerData.identity.github}`}
                    minWidth="min-w-[140px]"
                  />
                )}
                {maintainerData.identity.website && (
                  <ReviewField
                    label="Website"
                    value={
                      <a 
                        href={maintainerData.identity.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-accent hover:underline"
                      >
                        {maintainerData.identity.website}
                      </a>
                    }
                    minWidth="min-w-[140px]"
                  />
                )}
                {maintainerData.identity.twitter && (
                  <ReviewField
                    label="Twitter"
                    value={maintainerData.identity.twitter}
                    minWidth="min-w-[140px]"
                  />
                )}
              </div>
            </ReviewCard>

            {/* Participation Model & Availability from Step 3 */}
            <ReviewCard>
              <ReviewCardHeader
                icon={Briefcase}
                iconColor="text-brand-success"
                title="Participation & Availability"
                editButtonColor="text-brand-success hover:text-brand-success-dark hover:bg-brand-success/10"
              />
              <div className="space-y-3">
                <ReviewField
                  label="Participation Model"
                  value={
                    <Badge variant="secondary" className="bg-brand-success/20 text-brand-success border-brand-success/30">
                      {maintainerData.participationModel === 'service-provider' ? 'Service Provider' : 
                       maintainerData.participationModel === 'donation-receiver' ? 'Donation Receiver' :
                       maintainerData.participationModel === 'community-supporter' ? 'Community Supporter' :
                       maintainerData.participationModel}
                    </Badge>
                  }
                  minWidth="min-w-[140px]"
                />
                <ReviewField
                  label="Weekly Availability"
                  value={`${maintainerData.availability.weeklyHours} hours per week`}
                  minWidth="min-w-[140px]"
                />
                <ReviewField
                  label="Bigger Opportunities"
                  value={
                    maintainerData.availability.biggerOpportunities === 'open' ? 'Open to bigger opportunities' :
                    maintainerData.availability.biggerOpportunities === 'maybe' ? 'Maybe interested' :
                    'Not currently interested'
                  }
                  minWidth="min-w-[140px]"
                />
                {maintainerData.availability.comments && (
                  <ReviewField
                    label="Additional Notes"
                    value={maintainerData.availability.comments}
                    minWidth="min-w-[140px]"
                  />
                )}
              </div>
            </ReviewCard>

            {/* Projects Summary */}
            {convertedProjects.length > 0 && (
              <ReviewCard>
                <ReviewCardHeader
                  icon={Folder}
                  iconColor="text-brand-accent"
                  title="Projects"
                  metadata={`${convertedProjects.length} total`}
                  onEdit={() => setActiveTab('projects')}
                  editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
                />
                <div className="space-y-1">
                  {convertedProjects.slice(0, 3).map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      getRoleLabel={getRoleLabel}
                      getAccessLabel={getAccessLabel}
                    />
                  ))}
                  {convertedProjects.length > 3 && (
                    <div className="text-center pt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveTab('projects')}
                        className="text-xs"
                      >
                        View all {convertedProjects.length} projects
                      </Button>
                    </div>
                  )}
                </div>
              </ReviewCard>
            )}

            {/* Services Summary */}
            {convertedServices.length > 0 && (
              <ReviewCard>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-brand-highlight" />
                    <h3 className="text-brand-neutral-900">Services Delivered</h3>
                    <Badge variant="outline" className="text-xs">
                      {convertedServices.length} total
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('services')}
                    className="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10 h-8 gap-1.5"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    Manage
                  </Button>
                </div>
                <div className="space-y-2">
                  {/* Render each service category */}
                  {(Object.keys(groupedServices) as ServiceType[]).map((category) => {
                    const config = serviceCategoryConfig[category];
                    const categoryServices = groupedServices[category];
                    
                    return (
                      <CollapsibleServiceCategory
                        key={category}
                        category={category}
                        categoryLabel={config.label}
                        services={categoryServices}
                        projects={convertedProjects}
                        currency="USD"
                        formatCurrency={formatCurrency}
                        formatResponseTime={formatResponseTime}
                        icon={config.icon}
                        iconColor={config.iconColor}
                        defaultExpanded={false}
                        showActions={false}
                      />
                    );
                  })}
                </div>
              </ReviewCard>
            )}

            {/* Empty States */}
            {convertedProjects.length === 0 && (
              <EmptyStateMessage
                title="No Projects Yet"
                message="Add your first open source project to get started with Open Source Economy."
              />
            )}
          </TabsContent>

          {/* Contact Info Tab */}
          <TabsContent value="contact" className="space-y-6">
            <ReviewCard>
              <ReviewCardHeader
                icon={User}
                iconColor="text-brand-highlight"
                title="Contact Information"
                onEdit={() => setIsEditing(isEditing === 'contact' ? null : 'contact')}
                editButtonColor="text-brand-highlight hover:text-brand-highlight-dark hover:bg-brand-highlight/10"
              />
              {isEditing === 'contact' ? (
                <div className="space-y-4">
                  <FormField
                    label="Full Name"
                    id="fullName"
                    required
                  >
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      value={maintainerData.identity.fullName}
                      onChange={(e) => setMaintainerData(prev => ({
                        ...prev,
                        identity: { ...prev.identity, fullName: e.target.value }
                      }))}
                      leftIcon={User}
                    />
                  </FormField>

                  <FormField
                    label="Email"
                    id="email"
                    required
                  >
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={maintainerData.identity.email}
                      onChange={(e) => setMaintainerData(prev => ({
                        ...prev,
                        identity: { ...prev.identity, email: e.target.value }
                      }))}
                      leftIcon={Mail}
                    />
                  </FormField>

                  <FormField
                    label="Website"
                    id="website"
                  >
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value={maintainerData.identity.website}
                      onChange={(e) => setMaintainerData(prev => ({
                        ...prev,
                        identity: { ...prev.identity, website: e.target.value }
                      }))}
                      leftIcon={Globe}
                    />
                  </FormField>

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      label="GitHub Username"
                      id="github"
                    >
                      <Input
                        id="github"
                        placeholder="yourusername"
                        value={maintainerData.identity.github}
                        onChange={(e) => setMaintainerData(prev => ({
                          ...prev,
                          identity: { ...prev.identity, github: e.target.value }
                        }))}
                        leftIcon={Github}
                      />
                    </FormField>

                    <FormField
                      label="Twitter Handle"
                      id="twitter"
                    >
                      <Input
                        id="twitter"
                        placeholder="@yourusername"
                        value={maintainerData.identity.twitter}
                        onChange={(e) => setMaintainerData(prev => ({
                          ...prev,
                          identity: { ...prev.identity, twitter: e.target.value }
                        }))}
                        leftIcon={Twitter}
                      />
                    </FormField>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button onClick={handleSaveContact} size="sm">
                      Save Changes
                    </Button>
                    <Button onClick={() => setIsEditing(null)} size="sm" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <ReviewField
                    label="Full Name"
                    value={maintainerData.identity.fullName}
                    minWidth="min-w-[120px]"
                  />
                  <ReviewField
                    label="Email"
                    value={maintainerData.identity.email}
                    minWidth="min-w-[120px]"
                  />
                  {maintainerData.identity.website && (
                    <ReviewField
                      label="Website"
                      value={
                        <a 
                          href={maintainerData.identity.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-accent hover:underline"
                        >
                          {maintainerData.identity.website}
                        </a>
                      }
                      minWidth="min-w-[120px]"
                    />
                  )}
                  {maintainerData.identity.github && (
                    <ReviewField
                      label="GitHub"
                      value={`@${maintainerData.identity.github}`}
                      minWidth="min-w-[120px]"
                    />
                  )}
                  {maintainerData.identity.twitter && (
                    <ReviewField
                      label="Twitter"
                      value={maintainerData.identity.twitter}
                      minWidth="min-w-[120px]"
                    />
                  )}
                </div>
              )}
            </ReviewCard>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            {convertedServices.length > 0 ? (
              <>
                {/* Render each service category */}
                {(Object.keys(groupedServices) as ServiceType[]).map((category) => {
                  const config = serviceCategoryConfig[category];
                  const categoryServices = groupedServices[category];
                  
                  return (
                    <CollapsibleServiceCategory
                      key={category}
                      category={category}
                      categoryLabel={config.label}
                      services={categoryServices}
                      projects={convertedProjects}
                      currency="USD"
                      formatCurrency={formatCurrency}
                      formatResponseTime={formatResponseTime}
                      icon={config.icon}
                      iconColor={config.iconColor}
                      defaultExpanded={false}
                      onRemoveService={handleRemoveService}
                      showActions={true}
                    />
                  );
                })}
                
                {/* Add New Service Button */}
                <div className="pt-2">
                  <Button onClick={() => {/* TODO: Add service modal */}} variant="outline" className="w-full gap-2">
                    <FolderPlus className="h-4 w-4" />
                    Add New Service
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <EmptyStateMessage
                  title="No Services Yet"
                  message="Add services to your catalog to offer them across your projects."
                />
                <div className="text-center">
                  <Button onClick={() => {/* TODO: Add service modal */}} className="gap-2">
                    <FolderPlus className="h-4 w-4" />
                    Add Your First Service
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            {convertedProjects.length > 0 ? (
              convertedProjects.map((project, index) => {
                const projectServices = getProjectServices(project.id);
                const projectConvertedServices = convertedServices.filter(s => s.projectIds.includes(project.id));
                
                return (
                  <ReviewCard key={project.id}>
                    <ReviewCardHeader
                      icon={Folder}
                      iconColor="text-brand-accent"
                      title={project.name || `Project ${index + 1}`}
                      metadata={`${projectServices.length} services`}
                      editButtonColor="text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent/10"
                    />
                    
                    {/* Project Details */}
                    <div className="space-y-1 mb-4">
                      <ProjectCard
                        project={project}
                        index={index}
                        getRoleLabel={getRoleLabel}
                        getAccessLabel={getAccessLabel}
                      />
                    </div>

                    {/* Project Services */}
                    {projectConvertedServices.length > 0 && (
                      <div className="pt-4 border-t border-brand-neutral-300/30">
                        <h4 className="text-brand-neutral-700 text-sm mb-2">Services for this project:</h4>
                        <div className="space-y-1">
                          {projectConvertedServices.map((service) => (
                            <ServiceCard
                              key={service.id}
                              service={service}
                              projects={convertedProjects}
                              currency="USD"
                              formatCurrency={formatCurrency}
                              formatResponseTime={formatResponseTime}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-brand-neutral-300/30 mt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2"
                        onClick={() => onManageProjectServices?.(project.id)}
                      >
                        <Briefcase className="h-3 w-3" />
                        Manage Services
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Edit className="h-3 w-3" />
                        Edit Project
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2 text-red-600 hover:text-red-700 ml-auto"
                        onClick={() => handleRemoveProject(project.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                        Remove
                      </Button>
                    </div>
                  </ReviewCard>
                );
              })
            ) : (
              <div className="space-y-4">
                <EmptyStateMessage
                  title="No Projects Yet"
                  message="Add your first open source project to get started with Open Source Economy."
                />
                <div className="text-center">
                  <Button onClick={onAddProject} className="gap-2">
                    <FolderPlus className="h-4 w-4" />
                    Add Your First Project
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}