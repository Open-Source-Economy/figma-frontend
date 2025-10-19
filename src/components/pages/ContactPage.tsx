import React, { useState, useMemo, useEffect } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SectionHeader } from '../ui/section-header';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { CheckboxField } from '../forms/CheckboxField';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { ArrowLeft, Send, Building2, Heart, Code2, Newspaper, TrendingUp, Users, HelpCircle, Github, Calendar, CheckCircle2, XCircle, Loader2, AlertCircle, Plus, Trash2, ChevronDown, Shield, Clock, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { projectsDatabase } from '../../data/projectsData';
import { serviceCategories } from '../../data/servicesData';

// Flatten services from categories for easier selection
const services = serviceCategories.flatMap(category => 
  category.services.map(service => ({
    id: `${category.type}-${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
    title: service.name,
    description: service.description,
    category: category.title
  }))
);

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

type UserRole = 
  | 'enterprise' 
  | 'foundation' 
  | 'commercial-oss' 
  | 'press' 
  | 'investors' 
  | 'oss-developers' 
  | 'other'
  | null;

interface FormData {
  // Enterprise fields
  name?: string;
  email?: string;
  role?: string;
  company?: string;
  size?: string;
  industry?: string;
  country?: string;
  ossProjects?: string;
  message?: string;
  selectedProjects?: string[];
  customProjectUrls?: string[];
  selectedServices?: string[];
  
  // OSS Developer fields
  githubProfile?: string;
  projectName?: string;
  projectUrl?: string;
  maintainerRole?: string;
  
  // Foundation/Non-profit fields
  organizationName?: string;
  organizationType?: string;
  
  // Press fields
  publication?: string;
  deadline?: string;
  
  // Investor fields
  firmName?: string;
  investmentFocus?: string;
  
  // Other
  userType?: string;
  
  // Meeting preference
  scheduleMeeting?: boolean;
  
  // Enterprise requirements
  requiresNda?: boolean;
  requiresSla?: boolean;
  requiresBrandRecognition?: boolean;
}

const ROLE_OPTIONS = [
  { 
    id: 'enterprise' as const, 
    label: 'Enterprise', 
    icon: Building2,
    description: 'Companies using open source software'
  },
  { 
    id: 'foundation' as const, 
    label: 'Foundation / Non-profit', 
    icon: Heart,
    description: 'Non-profit organizations supporting OSS'
  },
  { 
    id: 'commercial-oss' as const, 
    label: 'Commercial Open Source Project', 
    icon: Code2,
    description: 'Companies building on open source'
  },
  { 
    id: 'press' as const, 
    label: 'Press', 
    icon: Newspaper,
    description: 'Journalists and media inquiries'
  },
  { 
    id: 'investors' as const, 
    label: 'Investors', 
    icon: TrendingUp,
    description: 'Investment opportunities'
  },
  { 
    id: 'oss-developers' as const, 
    label: 'OSS Developers', 
    icon: Users,
    description: 'Open source maintainers and contributors'
  },
  { 
    id: 'other' as const, 
    label: 'Other', 
    icon: HelpCircle,
    description: 'General inquiries'
  },
];

const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1001-5000 employees',
  '5000+ employees'
];

const INDUSTRIES = [
  'Technology',
  'Financial Services',
  'Healthcare',
  'E-commerce',
  'Education',
  'Government',
  'Manufacturing',
  'Media & Entertainment',
  'Telecommunications',
  'Other'
];

export function ContactPage({ onNavigateHome, onNavItemClick }: ContactPageProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [formData, setFormData] = useState<FormData>({
    selectedProjects: [],
    customProjectUrls: [''],
    selectedServices: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showErrorDemo, setShowErrorDemo] = useState(false);
  
  // Project search states
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showAllSelectedProjects, setShowAllSelectedProjects] = useState(false);
  
  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!projectSearchQuery.trim()) return [];
    
    const query = projectSearchQuery.toLowerCase();
    return projectsDatabase.filter(project => 
      project.name.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.description?.toLowerCase().includes(query)
    );
  }, [projectSearchQuery]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showProjectDropdown) {
        setShowProjectDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProjectDropdown]);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    
    // Demo: Pre-populate with some selected projects for Enterprise to show the UI
    const demoSelectedProjects = role === 'enterprise' 
      ? ['react', 'typescript', 'nodejs', 'webpack', 'eslint']
      : [];
    
    setFormData({
      selectedProjects: demoSelectedProjects,
      customProjectUrls: [''],
      selectedServices: [],
      // Demo: Pre-select some enterprise requirements
      requiresSla: role === 'enterprise',
      requiresBrandRecognition: role === 'enterprise'
    });
    setSubmissionStatus('idle');
    setErrorMessage('');
    setIsSubmitted(false);
    setProjectSearchQuery('');
    setShowProjectDropdown(false);
    setShowAllSelectedProjects(false);
  };

  const handleBackToRoles = () => {
    setSelectedRole(null);
    setFormData({
      selectedProjects: [],
      customProjectUrls: [''],
      selectedServices: []
    });
    setIsSubmitted(false);
    setSubmissionStatus('idle');
    setErrorMessage('');
    setProjectSearchQuery('');
    setShowProjectDropdown(false);
    setShowAllSelectedProjects(false);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (submissionStatus === 'error') {
      setSubmissionStatus('idle');
      setErrorMessage('');
    }
  };

  const toggleProjectSelection = (projectId: string) => {
    setFormData(prev => {
      const selectedProjects = prev.selectedProjects || [];
      const isSelected = selectedProjects.includes(projectId);
      return {
        ...prev,
        selectedProjects: isSelected
          ? selectedProjects.filter(id => id !== projectId)
          : [...selectedProjects, projectId]
      };
    });
  };

  const toggleServiceSelection = (serviceId: string) => {
    setFormData(prev => {
      const selectedServices = prev.selectedServices || [];
      const isSelected = selectedServices.includes(serviceId);
      return {
        ...prev,
        selectedServices: isSelected
          ? selectedServices.filter(id => id !== serviceId)
          : [...selectedServices, serviceId]
      };
    });
  };

  const updateCustomProjectUrl = (index: number, value: string) => {
    setFormData(prev => {
      const urls = [...(prev.customProjectUrls || [''])];
      urls[index] = value;
      return { ...prev, customProjectUrls: urls };
    });
  };

  const addCustomProjectUrl = () => {
    setFormData(prev => ({
      ...prev,
      customProjectUrls: [...(prev.customProjectUrls || ['']), '']
    }));
  };

  const removeCustomProjectUrl = (index: number) => {
    setFormData(prev => {
      const urls = prev.customProjectUrls || [''];
      if (urls.length === 1) return prev; // Keep at least one
      return {
        ...prev,
        customProjectUrls: urls.filter((_, i) => i !== index)
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');
    
    // Simulate API call with random success/failure for demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes: simulate error if email contains "error" or success otherwise
    // In production, this would be based on actual API response
    const shouldSimulateError = showErrorDemo || formData.email?.toLowerCase().includes('error');
    
    if (shouldSimulateError) {
      // Simulate server error
      setSubmissionStatus('error');
      setErrorMessage('Unable to submit your form. The server encountered an error processing your request. Please try again later or contact support@opensourceeconomy.org');
      setIsSubmitting(false);
      setShowErrorDemo(false);
    } else {
      // Simulate success
      console.log('Form submitted:', { role: selectedRole, data: formData });
      setSubmissionStatus('success');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const renderEnterpriseForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">
            Name <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <Label htmlFor="email">
            Email <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@company.com"
          />
        </div>
        
        <div>
          <Label htmlFor="role">
            Role <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="role"
            type="text"
            required
            value={formData.role || ''}
            onChange={(e) => handleInputChange('role', e.target.value)}
            placeholder="CTO, Engineering Manager, etc."
          />
        </div>
        
        <div>
          <Label htmlFor="company">
            Company <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="company"
            type="text"
            required
            value={formData.company || ''}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Company Name"
          />
        </div>
        
        <div>
          <Label htmlFor="size">
            Company Size <span className="text-brand-error">*</span>
          </Label>
          <select
            id="size"
            required
            value={formData.size || ''}
            onChange={(e) => handleInputChange('size', e.target.value)}
            className="w-full bg-form-background border border-form-border rounded-lg px-4 py-3 text-brand-neutral-900 focus:border-brand-accent focus:outline-none transition-colors"
          >
            <option value="">Select size</option>
            {COMPANY_SIZES.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div>
          <Label htmlFor="industry">
            Industry <span className="text-brand-error">*</span>
          </Label>
          <select
            id="industry"
            required
            value={formData.industry || ''}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full bg-form-background border border-form-border rounded-lg px-4 py-3 text-brand-neutral-900 focus:border-brand-accent focus:outline-none transition-colors"
          >
            <option value="">Select industry</option>
            {INDUSTRIES.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        
        <div>
          <Label htmlFor="country">
            Country <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="country"
            type="text"
            required
            value={formData.country || ''}
            onChange={(e) => handleInputChange('country', e.target.value)}
            placeholder="United States"
          />
        </div>
        
      </div>

      {/* Projects Selection Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-brand-neutral-900 mb-2">Open Source Projects</h3>
          <p className="text-sm text-brand-neutral-600 mb-4">
            Select projects you currently use or would like support for
          </p>
        </div>

        {/* Registered Projects */}
        <div className="p-4 bg-background/50 border border-border rounded-lg">
          <Label htmlFor="project-search" className="mb-3 block">Projects in Our Network</Label>
          <p className="text-xs text-brand-neutral-600 mb-3">
            Search and select from {projectsDatabase.length}+ projects in our network
          </p>
          
          {/* Search Input */}
          <div className="relative mb-3">
            <Input
              id="project-search"
              type="text"
              placeholder="Search projects... (e.g., React, TypeScript, Node.js)"
              value={projectSearchQuery}
              onChange={(e) => setProjectSearchQuery(e.target.value)}
              onFocus={() => setShowProjectDropdown(true)}
              className="pr-10"
            />
            {projectSearchQuery && (
              <button
                type="button"
                onClick={() => {
                  setProjectSearchQuery('');
                  setShowProjectDropdown(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-neutral-500 hover:text-brand-neutral-700"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dropdown Results */}
          {showProjectDropdown && projectSearchQuery && (
            <div className="mb-3 max-h-64 overflow-y-auto border border-border rounded-lg bg-brand-card-blue shadow-lg">
              {filteredProjects.length > 0 ? (
                <div className="p-2">
                  {filteredProjects.slice(0, 50).map((project) => {
                    const isSelected = formData.selectedProjects?.includes(project.id);
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => {
                          toggleProjectSelection(project.id);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          isSelected
                            ? 'bg-brand-accent/20 text-brand-accent'
                            : 'hover:bg-background/50 text-brand-neutral-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-brand-neutral-900 truncate">{project.name}</div>
                            <div className="text-xs text-brand-neutral-500">{project.category}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  {filteredProjects.length > 50 && (
                    <div className="px-3 py-2 text-xs text-brand-neutral-500 text-center">
                      Showing 50 of {filteredProjects.length} results. Refine your search for more specific results.
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-brand-neutral-500">
                  No projects found. Try a different search term or add a custom URL below.
                </div>
              )}
            </div>
          )}

          {/* Selected Projects - Compact View */}
          {formData.selectedProjects && formData.selectedProjects.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label className="text-xs">Selected Projects:</Label>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-accent text-white rounded-full text-xs">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{formData.selectedProjects.length}</span>
                  </div>
                </div>
                {formData.selectedProjects.length > 3 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllSelectedProjects(!showAllSelectedProjects)}
                    className="text-xs h-auto py-1 px-2"
                  >
                    {showAllSelectedProjects ? 'Show Less' : `Show All (${formData.selectedProjects.length})`}
                  </Button>
                )}
              </div>
              
              <div className={`flex flex-wrap gap-2 ${!showAllSelectedProjects && formData.selectedProjects.length > 3 ? 'max-h-20 overflow-hidden' : 'max-h-64 overflow-y-auto'}`}>
                {formData.selectedProjects
                  .slice(0, showAllSelectedProjects ? undefined : 3)
                  .map((projectId) => {
                    const project = projectsDatabase.find(p => p.id === projectId);
                    if (!project) return null;
                    return (
                      <div
                        key={projectId}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-sm"
                      >
                        <span className="text-brand-neutral-900">{project.name}</span>
                        <button
                          type="button"
                          onClick={() => toggleProjectSelection(projectId)}
                          className="text-brand-neutral-600 hover:text-brand-error transition-colors"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                  
                {!showAllSelectedProjects && formData.selectedProjects.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setShowAllSelectedProjects(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-neutral-300 border border-brand-neutral-400 rounded-full text-sm text-brand-neutral-700 hover:bg-brand-neutral-400 transition-colors"
                  >
                    <span>+ {formData.selectedProjects.length - 3} more</span>
                  </button>
                )}
              </div>
              
              {showAllSelectedProjects && formData.selectedProjects.length > 3 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, selectedProjects: [] }));
                      setShowAllSelectedProjects(false);
                    }}
                    className="text-xs h-auto py-1.5 px-3 text-brand-error hover:text-brand-error hover:bg-brand-error/10"
                  >
                    Clear All Selected
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Custom Project URLs */}
        <div className="p-4 bg-background/50 border border-border rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <Label>Other Projects (GitHub URLs)</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addCustomProjectUrl}
              className="flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              Add URL
            </Button>
          </div>
          <div className="space-y-2">
            {(formData.customProjectUrls || ['']).map((url, index) => (
              <div key={index} className="flex gap-2">
                <div className="relative flex-1">
                  <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="url"
                    value={url}
                    onChange={(e) => updateCustomProjectUrl(index, e.target.value)}
                    placeholder="https://github.com/org/project"
                    className="pl-10"
                  />
                </div>
                {(formData.customProjectUrls?.length || 0) > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCustomProjectUrl(index)}
                    className="text-brand-error hover:text-brand-error hover:bg-brand-error/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Selection Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-brand-neutral-900 mb-2">Services of Interest</h3>
          <p className="text-sm text-brand-neutral-600 mb-4">
            Select the services you're interested in
          </p>
        </div>

        <div className="p-4 bg-background/50 border border-border rounded-lg">
          <div className="grid grid-cols-1 gap-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-start gap-2">
                <Checkbox
                  id={`service-${service.id}`}
                  checked={formData.selectedServices?.includes(service.id)}
                  onCheckedChange={() => toggleServiceSelection(service.id)}
                />
                <label
                  htmlFor={`service-${service.id}`}
                  className="text-sm text-brand-neutral-700 cursor-pointer flex-1 leading-tight"
                >
                  <span className="text-brand-neutral-900 block">{service.title}</span>
                  <span className="text-xs text-brand-neutral-500">{service.description}</span>
                </label>
              </div>
            ))}
          </div>
          {formData.selectedServices && formData.selectedServices.length > 0 && (
            <p className="text-xs text-brand-accent mt-3">
              {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </div>
      </div>
      
      <CheckboxField
        id="schedule-meeting-enterprise"
        checked={formData.scheduleMeeting || false}
        onCheckedChange={(checked) => handleInputChange('scheduleMeeting', checked)}
        label="I'd also like to schedule a meeting to discuss this"
        description="We'll include a Calendly link in our response email"
      />
      
      <div>
        <Label htmlFor="message">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="message"
          value={formData.message || ''}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          placeholder="Any specific requirements, questions, or additional context..."
        />
      </div>
      
      <div className="text-sm text-brand-neutral-600">
        By clicking "Submit" I acknowledge receipt of our{' '}
        <button
          type="button"
          onClick={() => onNavItemClick('privacy')}
          className="text-brand-accent hover:text-brand-accent-dark underline transition-colors"
        >
          Privacy Policy
        </button>
        .
      </div>
      
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 flex-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );

  const renderOSSDeveloperForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="oss-name">
            Name <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="oss-name"
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <Label htmlFor="oss-email">
            Email <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="oss-email"
            type="email"
            required
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        
        <div className="md:col-span-2">
          <Label htmlFor="oss-github">
            GitHub Profile <span className="text-brand-error">*</span>
          </Label>
          <div className="relative">
            <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-neutral-500" />
            <Input
              id="oss-github"
              type="url"
              required
              value={formData.githubProfile || ''}
              onChange={(e) => handleInputChange('githubProfile', e.target.value)}
              className="pl-12"
              placeholder="https://github.com/yourusername"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="oss-project-name">
            Main Open Source Project <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="oss-project-name"
            type="text"
            required
            value={formData.projectName || ''}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            placeholder="Project name"
          />
        </div>
        
        <div>
          <Label htmlFor="oss-project-url">
            Project URL
          </Label>
          <Input
            id="oss-project-url"
            type="url"
            value={formData.projectUrl || ''}
            onChange={(e) => handleInputChange('projectUrl', e.target.value)}
            placeholder="https://github.com/org/project"
          />
        </div>
        
        <div className="md:col-span-2">
          <Label htmlFor="oss-role">
            Your Role <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="oss-role"
            type="text"
            required
            value={formData.maintainerRole || ''}
            onChange={(e) => handleInputChange('maintainerRole', e.target.value)}
            placeholder="Maintainer, Core Contributor, etc."
          />
        </div>
      </div>
      
      <CheckboxField
        id="schedule-meeting-oss"
        checked={formData.scheduleMeeting || false}
        onCheckedChange={(checked) => handleInputChange('scheduleMeeting', checked)}
        label="I'd also like to schedule a meeting to discuss this"
        description="We'll include a Calendly link in our response email"
      />
      
      <div>
        <Label htmlFor="oss-message">
          Tell us about your project and how we can help <span className="text-brand-error">*</span>
        </Label>
        <Textarea
          id="oss-message"
          required
          value={formData.message || ''}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={6}
          placeholder="Describe your project, your funding needs, or what you're looking for..."
        />
      </div>
      
      <div className="text-sm text-brand-neutral-600">
        By clicking "Submit" I acknowledge receipt of our{' '}
        <button
          type="button"
          onClick={() => onNavItemClick('privacy')}
          className="text-brand-accent hover:text-brand-accent-dark underline transition-colors"
        >
          Privacy Policy
        </button>
        .
      </div>
      
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 flex-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Github className="w-4 h-4" />
              Register Interest
            </>
          )}
        </Button>
      </div>
    </form>
  );

  const renderGenericForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="gen-name">
            Name <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="gen-name"
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <Label htmlFor="gen-email">
            Email <span className="text-brand-error">*</span>
          </Label>
          <Input
            id="gen-email"
            type="email"
            required
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        
        {selectedRole === 'foundation' && (
          <>
            <div>
              <Label htmlFor="gen-org-name">
                Organization Name <span className="text-brand-error">*</span>
              </Label>
              <Input
                id="gen-org-name"
                type="text"
                required
                value={formData.organizationName || ''}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                placeholder="Foundation name"
              />
            </div>
            <div>
              <Label htmlFor="gen-org-type">
                Organization Type
              </Label>
              <Input
                id="gen-org-type"
                type="text"
                value={formData.organizationType || ''}
                onChange={(e) => handleInputChange('organizationType', e.target.value)}
                placeholder="501(c)(3), etc."
              />
            </div>
          </>
        )}
        
        {selectedRole === 'press' && (
          <>
            <div>
              <Label htmlFor="gen-publication">
                Publication <span className="text-brand-error">*</span>
              </Label>
              <Input
                id="gen-publication"
                type="text"
                required
                value={formData.publication || ''}
                onChange={(e) => handleInputChange('publication', e.target.value)}
                placeholder="Publication name"
              />
            </div>
            <div>
              <Label htmlFor="gen-deadline">
                Deadline
              </Label>
              <Input
                id="gen-deadline"
                type="date"
                value={formData.deadline || ''}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
              />
            </div>
          </>
        )}
        
        {selectedRole === 'investors' && (
          <>
            <div>
              <Label htmlFor="gen-firm">
                Firm Name <span className="text-brand-error">*</span>
              </Label>
              <Input
                id="gen-firm"
                type="text"
                required
                value={formData.firmName || ''}
                onChange={(e) => handleInputChange('firmName', e.target.value)}
                placeholder="Investment firm"
              />
            </div>
            <div>
              <Label htmlFor="gen-focus">
                Investment Focus
              </Label>
              <Input
                id="gen-focus"
                type="text"
                value={formData.investmentFocus || ''}
                onChange={(e) => handleInputChange('investmentFocus', e.target.value)}
                placeholder="Open source, SaaS, etc."
              />
            </div>
          </>
        )}
        
        {selectedRole === 'commercial-oss' && (
          <div>
            <Label htmlFor="gen-company">
              Company <span className="text-brand-error">*</span>
            </Label>
            <Input
              id="gen-company"
              type="text"
              required
              value={formData.company || ''}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Company name"
            />
          </div>
        )}
        
        {selectedRole === 'other' && (
          <div className="md:col-span-2">
            <Label htmlFor="gen-usertype">
              What best describes you? <span className="text-brand-error">*</span>
            </Label>
            <Input
              id="gen-usertype"
              type="text"
              required
              value={formData.userType || ''}
              onChange={(e) => handleInputChange('userType', e.target.value)}
              placeholder="Describe your role or interest"
            />
          </div>
        )}
      </div>
      
      <CheckboxField
        id="schedule-meeting-generic"
        checked={formData.scheduleMeeting || false}
        onCheckedChange={(checked) => handleInputChange('scheduleMeeting', checked)}
        label="I'd also like to schedule a meeting to discuss this"
        description="We'll include a Calendly link in our response email"
      />
      
      <div>
        <Label htmlFor="gen-message">
          Message <span className="text-brand-error">*</span>
        </Label>
        <Textarea
          id="gen-message"
          required
          value={formData.message || ''}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={6}
          placeholder="How can we help you?"
        />
      </div>
      
      <div className="text-sm text-brand-neutral-600">
        By clicking "Submit" I acknowledge receipt of our{' '}
        <button
          type="button"
          onClick={() => onNavItemClick('privacy')}
          className="text-brand-accent hover:text-brand-accent-dark underline transition-colors"
        >
          Privacy Policy
        </button>
        .
      </div>
      
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 flex-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );

  const renderForm = () => {
    if (selectedRole === 'enterprise') {
      return renderEnterpriseForm();
    } else if (selectedRole === 'oss-developers') {
      return renderOSSDeveloperForm();
    } else {
      const titles: Record<string, string> = {
        'foundation': 'Foundation / Non-profit Contact',
        'commercial-oss': 'Commercial Open Source Contact',
        'press': 'Press Inquiry',
        'investors': 'Investor Inquiry',
        'other': 'General Contact'
      };
      return renderGenericForm(titles[selectedRole || 'other'] || 'Contact Form');
    }
  };

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      <main className="container mx-auto px-6 py-20">
        {!selectedRole && !isSubmitted && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-brand-neutral-950 mb-3">Get in Touch</h2>
              <p className="text-brand-neutral-600 max-w-2xl mx-auto">
                Select your role below to get started with the Open Source Economy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ROLE_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleRoleSelect(option.id)}
                    className="bg-brand-card-blue border border-border rounded-xl p-6 text-left hover:border-brand-accent hover:bg-brand-card-blue-light transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-accent/10 rounded-lg group-hover:bg-brand-accent/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-brand-neutral-900 mb-2">
                          {option.label}
                        </h3>
                        <p className="text-sm text-brand-neutral-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedRole && !isSubmitted && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBackToRoles}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Role Selection
              </Button>
            </div>
            
            <div className="bg-brand-card-blue border border-border rounded-xl p-8 relative">
              {/* Demo Mode Badge - Subtle Corner Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <Button
                  type="button"
                  variant={showErrorDemo ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setShowErrorDemo(!showErrorDemo)}
                  className="h-8 text-xs"
                >
                  {showErrorDemo ? (
                    <>
                      <XCircle className="w-3 h-3 mr-1.5" />
                      Demo: ON
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 mr-1.5" />
                      Demo
                    </>
                  )}
                </Button>
              </div>

              <div className="mb-8">
                <h2 className="text-brand-neutral-900 mb-2">
                  {ROLE_OPTIONS.find(r => r.id === selectedRole)?.label} Contact
                </h2>
                <p className="text-sm text-brand-neutral-600">
                  We'll respond within 24-48 hours
                </p>
              </div>

              {/* Success Alert */}
              {submissionStatus === 'success' && (
                <Alert className="mb-8 bg-brand-success/10 border-brand-success text-brand-success">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Message Sent!</AlertTitle>
                  <AlertDescription className="text-brand-success/90">
                    We'll respond within 24-48 hours.
                  </AlertDescription>
                </Alert>
              )}

              {/* Error Alert */}
              {submissionStatus === 'error' && errorMessage && (
                <Alert variant="destructive" className="mb-8 bg-brand-error/10 border-brand-error">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {errorMessage}
                  </AlertDescription>
                </Alert>
              )}

              {/* Enterprise Form */}
              {selectedRole === 'enterprise' && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">
                        Name <span className="text-brand-error">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">
                        Email <span className="text-brand-error">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="role">
                        Role <span className="text-brand-error">*</span>
                      </Label>
                      <Input
                        id="role"
                        type="text"
                        required
                        value={formData.role || ''}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="CTO, Engineering Manager, etc."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">
                        Company <span className="text-brand-error">*</span>
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company || ''}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="size">
                        Company Size <span className="text-brand-error">*</span>
                      </Label>
                      <select
                        id="size"
                        required
                        value={formData.size || ''}
                        onChange={(e) => handleInputChange('size', e.target.value)}
                        className="w-full bg-form-background border border-form-border rounded-lg px-4 py-3 text-brand-neutral-900 focus:border-brand-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select size</option>
                        {COMPANY_SIZES.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="industry">
                        Industry <span className="text-brand-error">*</span>
                      </Label>
                      <select
                        id="industry"
                        required
                        value={formData.industry || ''}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full bg-form-background border border-form-border rounded-lg px-4 py-3 text-brand-neutral-900 focus:border-brand-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select industry</option>
                        {INDUSTRIES.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="country">
                        Country <span className="text-brand-error">*</span>
                      </Label>
                      <Input
                        id="country"
                        type="text"
                        required
                        value={formData.country || ''}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  {/* Projects Selection Section */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-brand-neutral-900">Open Source Projects</h3>
                      <p className="text-sm text-brand-neutral-600 mt-1">
                        Select projects you currently use or would like support for
                      </p>
                    </div>

                    {/* Registered Projects Search */}
                    <div className="p-6 bg-background/50 border border-border rounded-lg space-y-4">
                      <div>
                        <Label htmlFor="project-search">Projects in Our Network</Label>
                        <p className="text-xs text-brand-neutral-500 mt-1">
                          Search {projectsDatabase.length}+ projects
                        </p>
                      </div>
                      
                      {/* Search Input */}
                      <div className="relative">
                        <Input
                          id="project-search"
                          type="text"
                          placeholder="Search projects... (e.g., React, TypeScript, Node.js)"
                          value={projectSearchQuery}
                          onChange={(e) => setProjectSearchQuery(e.target.value)}
                          onFocus={() => setShowProjectDropdown(true)}
                          className="pr-10"
                        />
                        {projectSearchQuery && (
                          <button
                            type="button"
                            onClick={() => {
                              setProjectSearchQuery('');
                              setShowProjectDropdown(false);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-neutral-500 hover:text-brand-neutral-700"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Dropdown Results */}
                      {showProjectDropdown && projectSearchQuery && (
                        <div className="absolute z-50 w-full mt-2 max-h-64 overflow-y-auto border border-border rounded-lg bg-brand-card-blue shadow-lg">
                          {filteredProjects.length > 0 ? (
                            <div className="p-2">
                              {filteredProjects.slice(0, 50).map((project) => {
                                const isSelected = formData.selectedProjects?.includes(project.id);
                                return (
                                  <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => {
                                      toggleProjectSelection(project.id);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                      isSelected
                                        ? 'bg-brand-accent/20 text-brand-accent'
                                        : 'hover:bg-background/50 text-brand-neutral-700'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />}
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm text-brand-neutral-900 truncate">{project.name}</div>
                                        <div className="text-xs text-brand-neutral-500">{project.category}</div>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                              {filteredProjects.length > 50 && (
                                <div className="px-3 py-2 text-xs text-brand-neutral-500 text-center">
                                  Showing 50 of {filteredProjects.length} results. Refine your search for more specific results.
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="p-4 text-center text-sm text-brand-neutral-500">
                              No projects found. Try a different search term or add a custom URL below.
                            </div>
                          )}
                        </div>
                      )}

                      {/* Selected Projects - Compact View */}
                      {formData.selectedProjects && formData.selectedProjects.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-brand-neutral-600">Selected:</span>
                              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-accent text-white rounded-full text-xs">
                                <span>{formData.selectedProjects.length}</span>
                              </div>
                            </div>
                            {formData.selectedProjects.length > 3 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAllSelectedProjects(!showAllSelectedProjects)}
                                className="text-xs h-auto py-1 px-2"
                              >
                                {showAllSelectedProjects ? 'Show Less' : `Show All (${formData.selectedProjects.length})`}
                              </Button>
                            )}
                          </div>
                          
                          <div className={`flex flex-wrap gap-2 ${!showAllSelectedProjects && formData.selectedProjects.length > 3 ? 'max-h-20 overflow-hidden' : 'max-h-64 overflow-y-auto'}`}>
                            {formData.selectedProjects
                              .slice(0, showAllSelectedProjects ? undefined : 3)
                              .map((projectId) => {
                                const project = projectsDatabase.find(p => p.id === projectId);
                                if (!project) return null;
                                return (
                                  <div
                                    key={projectId}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-sm"
                                  >
                                    <span className="text-brand-neutral-900">{project.name}</span>
                                    <button
                                      type="button"
                                      onClick={() => toggleProjectSelection(projectId)}
                                      className="text-brand-neutral-600 hover:text-brand-error transition-colors"
                                    >
                                      <XCircle className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                );
                              })}
                              
                            {!showAllSelectedProjects && formData.selectedProjects.length > 3 && (
                              <button
                                type="button"
                                onClick={() => setShowAllSelectedProjects(true)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-neutral-300 border border-brand-neutral-400 rounded-full text-sm text-brand-neutral-700 hover:bg-brand-neutral-400 transition-colors"
                              >
                                <span>+ {formData.selectedProjects.length - 3} more</span>
                              </button>
                            )}
                          </div>
                          
                          {showAllSelectedProjects && formData.selectedProjects.length > 3 && (
                            <div className="flex justify-end">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, selectedProjects: [] }));
                                  setShowAllSelectedProjects(false);
                                }}
                                className="text-xs h-auto py-1.5 px-3 text-brand-error hover:text-brand-error hover:bg-brand-error/10"
                              >
                                Clear All Selected
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Custom Project URLs */}
                    <div className="p-6 bg-background/50 border border-border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Other Projects</Label>
                          <p className="text-xs text-brand-neutral-500 mt-1">Add GitHub URLs</p>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addCustomProjectUrl}
                          className="flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add URL
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {(formData.customProjectUrls || ['']).map((url, index) => (
                          <div key={index} className="flex gap-2">
                            <div className="relative flex-1">
                              <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                type="url"
                                value={url}
                                onChange={(e) => updateCustomProjectUrl(index, e.target.value)}
                                placeholder="https://github.com/org/project"
                                className="pl-10"
                              />
                            </div>
                            {(formData.customProjectUrls?.length || 0) > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeCustomProjectUrl(index)}
                                className="text-brand-error hover:text-brand-error hover:bg-brand-error/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Services Selection Section */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-brand-neutral-900">Services of Interest</h3>
                      <p className="text-sm text-brand-neutral-600 mt-1">
                        Select categories or individual services
                      </p>
                    </div>

                    <div className="p-6 bg-background/50 border border-border rounded-lg">
                      <Accordion type="multiple" className="w-full space-y-2">
                        {serviceCategories.map((category) => {
                          // Get all service IDs for this category
                          const categoryServiceIds = category.services.map(service => 
                            `${category.type}-${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
                          );
                          
                          // Check how many services in this category are selected
                          const selectedInCategory = categoryServiceIds.filter(id => 
                            formData.selectedServices?.includes(id)
                          );
                          const allSelected = selectedInCategory.length === categoryServiceIds.length && categoryServiceIds.length > 0;
                          const someSelected = selectedInCategory.length > 0 && !allSelected;
                          
                          const toggleCategory = () => {
                            if (allSelected) {
                              // Deselect all services in this category
                              setFormData(prev => ({
                                ...prev,
                                selectedServices: (prev.selectedServices || []).filter(
                                  id => !categoryServiceIds.includes(id)
                                )
                              }));
                            } else {
                              // Select all services in this category
                              setFormData(prev => ({
                                ...prev,
                                selectedServices: [
                                  ...(prev.selectedServices || []).filter(id => !categoryServiceIds.includes(id)),
                                  ...categoryServiceIds
                                ]
                              }));
                            }
                          };
                          
                          return (
                            <AccordionItem key={category.type} value={category.type} className="border border-border rounded-lg bg-brand-card-blue/50">
                              <div className="flex items-center gap-2 px-4 py-2">
                                <div className="relative">
                                  <Checkbox
                                    id={`category-${category.type}`}
                                    checked={allSelected || someSelected}
                                    onCheckedChange={toggleCategory}
                                    className={someSelected && !allSelected ? 'opacity-60' : ''}
                                  />
                                  {someSelected && !allSelected && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                      <div className="w-2 h-0.5 bg-white rounded-full"></div>
                                    </div>
                                  )}
                                </div>
                                <AccordionTrigger className="hover:no-underline py-2 flex-1">
                                  <div className="flex items-center gap-3 flex-1 text-left">
                                    <label 
                                      htmlFor={`category-${category.type}`}
                                      className="flex-1 cursor-pointer"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <div className="text-sm text-brand-neutral-900">{category.title}</div>
                                      <div className="text-xs text-brand-neutral-500">{category.description}</div>
                                    </label>
                                    {selectedInCategory.length > 0 && (
                                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-accent text-white rounded-full text-xs">
                                        <span>{selectedInCategory.length}/{categoryServiceIds.length}</span>
                                      </div>
                                    )}
                                  </div>
                                </AccordionTrigger>
                              </div>
                              <AccordionContent className="px-4 pb-3">
                                <div className="pl-6 space-y-2 border-l-2 border-brand-neutral-300 ml-2">
                                  {category.services.map((service) => {
                                    const serviceId = `${category.type}-${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
                                    return (
                                      <div key={serviceId} className="flex items-start gap-2">
                                        <Checkbox
                                          id={`service-${serviceId}`}
                                          checked={formData.selectedServices?.includes(serviceId)}
                                          onCheckedChange={() => toggleServiceSelection(serviceId)}
                                        />
                                        <label
                                          htmlFor={`service-${serviceId}`}
                                          className="text-sm text-brand-neutral-700 cursor-pointer flex-1 leading-tight"
                                        >
                                          <span className="text-brand-neutral-900 block">{service.name}</span>
                                          <span className="text-xs text-brand-neutral-500">{service.description}</span>
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                      
                      {formData.selectedServices && formData.selectedServices.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-border">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                            <p className="text-xs text-brand-accent">
                              {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enterprise Requirements */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-brand-neutral-900">Enterprise Requirements</h3>
                      <p className="text-sm text-brand-neutral-600 mt-1">
                        Additional requirements (optional)
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <CheckboxField
                        id="requires-nda"
                        checked={formData.requiresNda || false}
                        onCheckedChange={(checked) => handleInputChange('requiresNda', checked)}
                        label="Non-Disclosure Agreement (NDA)"
                        description="Require a mutual NDA for confidential discussions and proprietary information"
                        icon={Shield}
                      />
                      
                      <CheckboxField
                        id="requires-sla"
                        checked={formData.requiresSla || false}
                        onCheckedChange={(checked) => handleInputChange('requiresSla', checked)}
                        label="Service Level Agreements (SLAs)"
                        description="Define guaranteed response times, uptime requirements, and support commitments"
                        icon={Clock}
                      />
                      
                      <CheckboxField
                        id="requires-brand-recognition"
                        checked={formData.requiresBrandRecognition || false}
                        onCheckedChange={(checked) => handleInputChange('requiresBrandRecognition', checked)}
                        label="Brand Recognition Campaign"
                        description="Publicly recognize your company's contribution to the open source community"
                        icon={Award}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Additional Information <span className="text-brand-neutral-500">(Optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message || ''}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      placeholder="Specific requirements, questions, timeline, or additional context..."
                      className="resize-none"
                    />
                  </div>
                  
                  <CheckboxField
                    id="schedule-meeting-enterprise"
                    checked={formData.scheduleMeeting || false}
                    onCheckedChange={(checked) => handleInputChange('scheduleMeeting', checked)}
                    label="Schedule a meeting to discuss"
                    description="We'll include a Calendly link in our response"
                    icon={Calendar}
                  />
                  
                  <div className="pt-6 border-t border-border space-y-4">
                    <p className="text-xs text-brand-neutral-500">
                      By submitting this form, you acknowledge our{' '}
                      <button
                        type="button"
                        onClick={() => onNavItemClick('privacy')}
                        className="text-brand-accent hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </p>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* OSS Developer Form */}
              {selectedRole === 'oss-developers' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Copy existing OSS Developer form here */}
                  {renderOSSDeveloperForm()}
                </form>
              )}

              {/* Generic Forms for other roles */}
              {selectedRole && !['enterprise', 'oss-developers'].includes(selectedRole) && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderGenericForm()}
                </form>
              )}
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-brand-card-blue border border-brand-success rounded-xl p-12">
              <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-success" />
              </div>
              <h2 className="text-brand-neutral-900 mb-4">
                Thank You!
              </h2>
              <p className="text-brand-neutral-700 mb-8">
                We've received your message and will get back to you within 24-48 hours.
                {formData.scheduleMeeting && (
                  <span className="block mt-2">
                    We'll include a Calendly link to schedule a meeting in our response.
                  </span>
                )}
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={handleBackToRoles}>
                  Submit Another
                </Button>
                <Button onClick={onNavigateHome}>
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}