import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Alert } from '../ui/alert';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ConsultationRequestFormProps {
  projectName: string;
  maintainerName: string;
  onSubmit?: (data: FormData) => Promise<void>;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  projectInterest: string;
  preferredContact: 'email' | 'phone' | 'video';
  message: string;
}

export function ConsultationRequestForm({ 
  projectName, 
  maintainerName,
  onSubmit 
}: ConsultationRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectInterest: '',
    preferredContact: 'email',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Demo mode
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectInterest: '',
        preferredContact: 'email',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
      <div className="mb-6">
        <h3 className="text-brand-neutral-900 mb-2">
          Request Consultation with {maintainerName}
        </h3>
        <p className="text-brand-neutral-600">
          Get expert guidance on {projectName}. We'll review your request and get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@company.com"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Acme Corporation"
            disabled={isSubmitting}
          />
        </div>

        {/* Project Interest */}
        <div className="space-y-2">
          <Label htmlFor="project-interest">What brings you to {projectName}?</Label>
          <Input
            id="project-interest"
            type="text"
            value={formData.projectInterest}
            onChange={(e) => handleChange('projectInterest', e.target.value)}
            placeholder="e.g., Migration support, Performance optimization"
            disabled={isSubmitting}
          />
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <Label htmlFor="contact-method">Preferred Contact Method *</Label>
          <select
            id="contact-method"
            value={formData.preferredContact}
            onChange={(e) => handleChange('preferredContact', e.target.value as FormData['preferredContact'])}
            className="w-full h-11 px-4 bg-form-background border border-form-border rounded-lg text-brand-neutral-900 transition-colors hover:border-form-border-hover focus:border-form-border-focus focus:outline-none disabled:opacity-50"
            required
            disabled={isSubmitting}
          >
            <option value="email">Email</option>
            <option value="phone">Phone Call</option>
            <option value="video">Video Conference</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us more about your needs, timeline, and any specific questions..."
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <Alert className="bg-brand-success/10 border-brand-success">
            <CheckCircle2 className="h-4 w-4 text-brand-success" />
            <div className="ml-2">
              <p className="text-brand-success">Request submitted successfully!</p>
              <p className="text-brand-neutral-600 mt-1">
                {maintainerName} will review your request and respond within 24 hours.
              </p>
            </div>
          </Alert>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <Alert className="bg-brand-error/10 border-brand-error">
            <AlertCircle className="h-4 w-4 text-brand-error" />
            <div className="ml-2">
              <p className="text-brand-error">Submission failed</p>
              <p className="text-brand-neutral-600 mt-1">{errorMessage}</p>
            </div>
          </Alert>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Request...
            </>
          ) : (
            'Submit Consultation Request'
          )}
        </Button>

        <p className="text-brand-neutral-500 text-center">
          All consultations are covered by NDA. Your information is kept confidential.
        </p>
      </form>
    </div>
  );
}
