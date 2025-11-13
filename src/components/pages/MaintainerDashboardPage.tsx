import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { SelectField } from '../forms/SelectField';
import { ChipInput } from '../forms/ChipInput';
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
  Settings,
  Save,
  X
} from 'lucide-react';
import type { DeveloperOnboardingData, Service, Project } from '../../types/DeveloperOnboarding';

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
            <div className="grid gap-6 md:grid-cols-2">
              {/* Quick Stats */}
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
                <CardHeader>
                  <CardTitle className="text-brand-neutral-950">Quick Stats</CardTitle>
                  <CardDescription>Your maintainer activity at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-neutral-700">Active Projects</span>
                    <span className="text-2xl text-brand-neutral-950">{maintainerData.projects.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-neutral-700">Services Offered</span>
                    <span className="text-2xl text-brand-neutral-950">{maintainerData.services.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-neutral-700">Weekly Availability</span>
                    <span className="text-2xl text-brand-neutral-950">{maintainerData.availability.weeklyHours}h</span>
                  </div>
                </CardContent>
              </Card>

              {/* Primary Projects */}
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
                <CardHeader>
                  <CardTitle className="text-brand-neutral-950">Primary Projects</CardTitle>
                  <CardDescription>Your main open source contributions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {maintainerData.projects.slice(0, 3).map(project => (
                    <div key={project.id} className="flex items-center gap-3">
                      <div className="p-2 bg-brand-accent/20 rounded-lg">
                        <Code className="h-4 w-4 text-brand-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-brand-neutral-950">{project.name}</p>
                        <p className="text-brand-neutral-600 text-sm">
                          {getProjectServices(project.id).length} services
                        </p>
                      </div>
                    </div>
                  ))}
                  {maintainerData.projects.length === 0 && (
                    <p className="text-brand-neutral-600 text-sm text-center py-4">
                      No projects yet. Add your first project to get started.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Top Services */}
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-brand-neutral-950">Top Services</CardTitle>
                  <CardDescription>Most popular services you offer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {topServices.map(service => (
                      <div key={service.id} className="p-4 border-2 border-brand-neutral-300 rounded-lg bg-gradient-to-br from-white to-brand-neutral-100">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-brand-neutral-950">{service.name}</h4>
                          <Badge variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30 text-xs">
                            ${service.rate}/hr
                          </Badge>
                        </div>
                        <p className="text-brand-neutral-600 text-sm mb-2">{service.category}</p>
                        <p className="text-brand-neutral-500 text-xs">
                          Response: {service.responseTime}
                        </p>
                      </div>
                    ))}
                    {topServices.length === 0 && (
                      <p className="text-brand-neutral-600 text-sm text-center py-4 col-span-3">
                        No services yet. Add services to your catalog.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Info Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-brand-neutral-950">Contact Information</CardTitle>
                  <CardDescription>Manage how people can reach you</CardDescription>
                </div>
                {isEditing === 'contact' ? (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveContact} size="sm" className="gap-2">
                      <Save className="h-4 w-4" />
                      Save
                    </Button>
                    <Button onClick={() => setIsEditing(null)} size="sm" variant="outline" className="gap-2">
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing('contact')} size="sm" variant="outline" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
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
                    disabled={isEditing !== 'contact'}
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
                    disabled={isEditing !== 'contact'}
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
                    disabled={isEditing !== 'contact'}
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
                      disabled={isEditing !== 'contact'}
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
                      disabled={isEditing !== 'contact'}
                      leftIcon={Twitter}
                    />
                  </FormField>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-brand-neutral-950">Service Catalog</CardTitle>
                  <CardDescription>Your global list of services available across all projects</CardDescription>
                </div>
                <Button onClick={() => {/* TODO: Add service modal */}} className="gap-2">
                  <FolderPlus className="h-4 w-4" />
                  Add Service
                </Button>
              </CardHeader>
              <CardContent>
                {maintainerData.services.length > 0 ? (
                  <div className="space-y-3">
                    {maintainerData.services.map(service => (
                      <div 
                        key={service.id}
                        className="flex items-center gap-4 p-4 border-2 border-brand-neutral-300 rounded-lg bg-white hover:border-brand-accent transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-brand-neutral-950">{service.name}</h4>
                            <Badge variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30">
                              ${service.rate}/hr
                            </Badge>
                            <Badge variant="secondary">
                              {service.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-brand-neutral-600">
                            <span>Response: {service.responseTime}</span>
                            <span>•</span>
                            <span>Used in {service.projectIds?.length || 0} project(s)</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-2">
                            <Edit className="h-3 w-3" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="gap-2 text-red-600 hover:text-red-700"
                            onClick={() => handleRemoveService(service.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-brand-neutral-600 mb-4">No services in your catalog yet.</p>
                    <Button onClick={() => {/* TODO: Add service modal */}} className="gap-2">
                      <FolderPlus className="h-4 w-4" />
                      Add Your First Service
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-brand-neutral-950">My Projects</CardTitle>
                  <CardDescription>Manage your open source projects and their services</CardDescription>
                </div>
                <Button onClick={onAddProject} className="gap-2">
                  <FolderPlus className="h-4 w-4" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                {maintainerData.projects.length > 0 ? (
                  <div className="space-y-4">
                    {maintainerData.projects.map(project => {
                      const projectServices = getProjectServices(project.id);
                      return (
                        <div 
                          key={project.id}
                          className="p-6 border-2 border-brand-neutral-300 rounded-lg bg-white"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-brand-accent/20 rounded-lg">
                                  <Code className="h-5 w-5 text-brand-accent" />
                                </div>
                                <div>
                                  <h3 className="text-brand-neutral-950">{project.name}</h3>
                                  <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-brand-accent text-sm hover:underline"
                                  >
                                    {project.url}
                                  </a>
                                </div>
                              </div>
                              {project.description && (
                                <p className="text-brand-neutral-600 text-sm mb-3 ml-14">
                                  {project.description}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-2 ml-14">
                                {project.ecosystems?.map(eco => (
                                  <Badge key={eco} variant="secondary" className="text-xs">
                                    {eco}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Project Services */}
                          <div className="ml-14 mt-4 pt-4 border-t border-brand-neutral-300">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-brand-neutral-950 text-sm">
                                Services ({projectServices.length})
                              </h4>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="gap-2"
                                onClick={() => onManageProjectServices?.(project.id)}
                              >
                                <Settings className="h-3 w-3" />
                                Manage Services
                              </Button>
                            </div>
                            {projectServices.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {projectServices.map(service => (
                                  <Badge 
                                    key={service.id}
                                    variant="secondary"
                                    className="bg-brand-success/20 text-brand-success border-brand-success/30"
                                  >
                                    {service.name} - ${service.rate}/hr
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-brand-neutral-600 text-sm">
                                No services configured for this project yet.
                              </p>
                            )}
                          </div>

                          {/* Project Actions */}
                          <div className="flex gap-2 mt-4 ml-14">
                            <Button size="sm" variant="outline" className="gap-2">
                              <Edit className="h-3 w-3" />
                              Edit Project
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="gap-2 text-red-600 hover:text-red-700"
                              onClick={() => handleRemoveProject(project.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Code className="h-12 w-12 text-brand-neutral-400 mx-auto mb-4" />
                    <p className="text-brand-neutral-600 mb-4">No projects yet.</p>
                    <Button onClick={onAddProject} className="gap-2">
                      <FolderPlus className="h-4 w-4" />
                      Add Your First Project
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
