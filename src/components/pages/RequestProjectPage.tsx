import React, { useState } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { CheckboxField } from '../forms/CheckboxField';
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Github,
  Lightbulb
} from 'lucide-react';

interface RequestProjectPageProps {
  onNavigateHome: () => void;
  onNavItemClick?: (href: string) => void;
  onBackToProjects?: () => void;
}

interface ProjectRequest {
  id: string;
  name: string;
  githubUrl: string;
  reason: string;
}

interface FormData {
  projects: ProjectRequest[];
  contactName: string;
  contactEmail: string;
  company: string;
  scheduleMeeting: boolean;
}

export function RequestProjectPage({
  onNavigateHome,
  onNavItemClick,
  onBackToProjects
}: RequestProjectPageProps) {
  const [formData, setFormData] = useState<FormData>({
    projects: [
      { id: '1', name: '', githubUrl: '', reason: '' }
    ],
    contactName: '',
    contactEmail: '',
    company: '',
    scheduleMeeting: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNavigation = (href: string) => {
    if (onNavItemClick) {
      onNavItemClick(href);
    }
  };

  const addProject = () => {
    const newProject: ProjectRequest = {
      id: Date.now().toString(),
      name: '',
      githubUrl: '',
      reason: ''
    };
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const removeProject = (id: string) => {
    if (formData.projects.length === 1) return; // Keep at least one project
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const updateProject = (id: string, field: keyof ProjectRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(p =>
        p.id === id ? { ...p, [field]: value } : p
      )
    }));
  };

  const updateContactField = (field: keyof Omit<FormData, 'projects'>, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    // Check if at least one project has a name
    const hasValidProject = formData.projects.some(p => p.name.trim() !== '');
    if (!hasValidProject) {
      setErrorMessage('Please provide at least one project name.');
      return false;
    }

    // Check contact information
    if (!formData.contactName.trim()) {
      setErrorMessage('Please provide your name.');
      return false;
    }

    if (!formData.contactEmail.trim()) {
      setErrorMessage('Please provide your email address.');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmissionStatus('idle');
    setErrorMessage('');

    if (!validateForm()) {
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an API call
      console.log('Form submitted:', formData);
      
      setSubmissionStatus('success');
      setIsSubmitted(true);
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage('Failed to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      projects: [{ id: Date.now().toString(), name: '', githubUrl: '', reason: '' }],
      contactName: '',
      contactEmail: '',
      company: '',
      scheduleMeeting: false
    });
    setIsSubmitted(false);
    setSubmissionStatus('idle');
    setErrorMessage('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header 
          onNavItemClick={handleNavigation}
          ctaText="Get Started Today"
          onCtaClick={onNavigateHome}
        />
        
        <main className="flex-1 container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-brand-card-blue border border-brand-success rounded-xl p-12">
              <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-success" />
              </div>
              <h2 className="text-brand-neutral-900 mb-4">
                Thank You for Your Request!
              </h2>
              <p className="text-brand-neutral-700 mb-8">
                We've received your project request{formData.projects.length > 1 ? 's' : ''} and will review {formData.projects.length > 1 ? 'them' : 'it'} carefully. 
                Our team will reach out within 2-4 business days to discuss next steps.
                {formData.scheduleMeeting && (
                  <span className="block mt-2">
                    We'll include a meeting link in our response to discuss your needs.
                  </span>
                )}
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={handleReset}>
                  Submit Another Request
                </Button>
                {onBackToProjects && (
                  <Button variant="outline" onClick={onBackToProjects}>
                    Back to Projects
                  </Button>
                )}
                <Button onClick={onNavigateHome}>
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer onNavItemClick={handleNavigation} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavItemClick={handleNavigation}
        ctaText="Get Started Today"
        onCtaClick={onNavigateHome}
      />
      
      <main className="flex-1 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            {onBackToProjects ? (
              <Button
                type="button"
                variant="outline"
                onClick={onBackToProjects}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                onClick={onNavigateHome}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            )}
          </div>

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-brand-neutral-950 mb-3">
              Request Open Source Projects
            </h1>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Tell us which open source projects you'd like to see on our platform. We'll work to bring their expert maintainers on board.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-brand-card-blue border border-border rounded-xl p-8">
            {/* Projects Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-brand-neutral-900 mb-1">
                    Project Requests
                  </h2>
                  <p className="text-sm text-brand-neutral-600">
                    Add one or more projects you'd like us to support
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addProject}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </Button>
              </div>

              <div className="space-y-6">
                {formData.projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="p-5 bg-background/50 border border-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-brand-neutral-900">
                        Project {index + 1}
                      </h3>
                      {formData.projects.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProject(project.id)}
                          className="text-brand-error hover:text-brand-error hover:bg-brand-error/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`project-name-${project.id}`}>
                            Project Name *
                          </Label>
                          <Input
                            id={`project-name-${project.id}`}
                            type="text"
                            value={project.name}
                            onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                            placeholder="e.g., React, Vue.js, TypeScript"
                            required={index === 0}
                          />
                        </div>

                        <div>
                          <Label htmlFor={`project-url-${project.id}`}>
                            GitHub URL (Optional)
                          </Label>
                          <div className="relative">
                            <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id={`project-url-${project.id}`}
                              type="url"
                              value={project.githubUrl}
                              onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                              placeholder="https://github.com/..."
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`project-reason-${project.id}`}>
                          Why is this project important to you? (Optional)
                        </Label>
                        <Textarea
                          id={`project-reason-${project.id}`}
                          value={project.reason}
                          onChange={(e) => updateProject(project.id, 'reason', e.target.value)}
                          placeholder="Tell us how you use this project or why you'd like to see it supported..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Helpful tip */}
              <div className="mt-4 p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg flex gap-3">
                <Lightbulb className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-brand-neutral-700">
                    <span className="font-medium">Tip:</span> Include the GitHub URL to help us identify the exact project. 
                    Tell us why it matters to you so we can prioritize effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-border"></div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-brand-neutral-900 mb-1">
                Contact Information
              </h2>
              <p className="text-sm text-brand-neutral-600 mb-6">
                We'll use this information to follow up with you
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateContactField('contactName', e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => updateContactField('contactEmail', e.target.value)}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateContactField('company', e.target.value)}
                    placeholder="Your company name"
                  />
                </div>

                <div className="pt-2">
                  <CheckboxField
                    id="schedule-meeting"
                    checked={formData.scheduleMeeting}
                    onCheckedChange={(checked) => updateContactField('scheduleMeeting', checked)}
                    label="I'd like to schedule a meeting to discuss this request"
                  />
                </div>
              </div>
            </div>

            {/* Success Alert */}
            {submissionStatus === 'success' && (
              <Alert className="mb-6 bg-brand-success/10 border-brand-success text-brand-success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription className="text-brand-success/90">
                  Your request has been submitted successfully.
                </AlertDescription>
              </Alert>
            )}

            {/* Error Alert */}
            {submissionStatus === 'error' && errorMessage && (
              <Alert variant="destructive" className="mb-6 bg-brand-error/10 border-brand-error">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Submission Failed</AlertTitle>
                <AlertDescription>
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                disabled={isSubmitting}
              >
                Reset Form
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-accent hover:bg-brand-accent-dark text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-brand-neutral-500 text-center mt-4">
              We typically respond to project requests within 2-4 business days
            </p>
          </form>
        </div>
      </main>

      <Footer onNavItemClick={handleNavigation} />
    </div>
  );
}
