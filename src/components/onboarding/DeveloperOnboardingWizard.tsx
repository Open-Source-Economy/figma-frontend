import React from 'react';
import { WizardStepIndicator, WizardStep } from './WizardStepIndicator';
import { WizardNavigation } from './WizardNavigation';
import { StepSidebar } from './StepSidebar';
import { StepIdentity } from './steps/StepIdentity';
import { StepProjects } from './steps/StepProjects';
import { StepParticipationModel } from './steps/StepParticipationModel';
import { StepAvailability } from './steps/StepAvailability';
import { StepServices } from './steps/StepServices';
import { StepReview } from './steps/StepReview';
import { DeveloperOnboardingData, ContactInfo, Project, ParticipationModel, Availability, Service, ValidationResult } from '../../types/DeveloperOnboarding';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { MockDataToggle } from './MockDataToggle';
import { getMockDataByScenario } from '../../data/developerOnboardingData';

export interface DeveloperOnboardingWizardProps {
  /** Callback when wizard is completed */
  onComplete: (data: DeveloperOnboardingData) => void;
  /** Callback to navigate home */
  onCancel: () => void;
  /** Callback for navigation */
  onNavItemClick: (href: string) => void;
  /** Initial draft data (for resuming) */
  initialData?: Partial<DeveloperOnboardingData>;
  /** Width behavior: 'adaptive' changes width per step (default), 'fixed' uses a consistent max width, or provide custom Tailwind max-width class */
  contentWidth?: 'adaptive' | 'fixed' | string;
}

const WIZARD_STEPS: WizardStep[] = [
  {
    number: 1,
    title: 'Identity',
    description: 'Provide your contact information and professional details'
  },
  {
    number: 2,
    title: 'Open Source Projects',
    description: 'Add the projects you maintain or actively contribute to'
  },
  {
    number: 3,
    title: 'Participation Model',
    description: 'Choose how you want to participate in the platform'
  },
  {
    number: 4,
    title: 'Availability & Rates',
    description: 'Set your availability and hourly rates for services'
  },
  {
    number: 5,
    title: 'Services & Submit',
    description: 'Configure the services you want to provide and submit'
  },
  {
    number: 6,
    title: 'Review & Submit',
    description: 'Review your information and submit your profile'
  }
];

// Step width configuration - adapts to content type
const STEP_MAX_WIDTHS: Record<number, string> = {
  1: 'max-w-2xl',   // Identity - narrow form
  2: 'max-w-4xl',   // Projects - project cards
  3: 'max-w-3xl',   // Participation - selection cards
  4: 'max-w-2xl',   // Availability - form fields
  5: 'max-w-5xl',   // Services - service grid/pricing
  6: 'max-w-5xl',   // Review - summary
};

/**
 * DeveloperOnboardingWizard - Main wizard container
 * Manages state, navigation, and persistence for the entire onboarding flow
 */
export const DeveloperOnboardingWizard: React.FC<DeveloperOnboardingWizardProps> = ({
  onComplete,
  onCancel,
  onNavItemClick,
  initialData,
  contentWidth = 'adaptive'
}) => {
  const [currentStep, setCurrentStep] = React.useState(initialData?.currentStep || 1);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>(initialData?.completedSteps || []);
  const [highestStepReached, setHighestStepReached] = React.useState(initialData?.currentStep || 1);
  const [isSaving, setIsSaving] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
  
  // Form data state
  const [formData, setFormData] = React.useState<Partial<DeveloperOnboardingData>>({
    contact: initialData?.contact || {
      fullName: '',
      email: '',
      termsAccepted: false,
    },
    projects: initialData?.projects || [],
    participationModel: initialData?.participationModel || null,
    availability: initialData?.availability,
    services: initialData?.services,
    createdAt: initialData?.createdAt || new Date(),
    lastModified: new Date(),
    status: 'draft',
    currentStep: initialData?.currentStep || 1,
    completedSteps: initialData?.completedSteps || []
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Auto-save to localStorage
  React.useEffect(() => {
    const timer = setTimeout(() => {
      saveToLocalStorage();
    }, 2000); // Save 2 seconds after last change

    return () => clearTimeout(timer);
  }, [formData, highestStepReached]);

  const saveToLocalStorage = () => {
    setIsSaving(true);
    try {
      localStorage.setItem('developer-onboarding-draft', JSON.stringify({
        ...formData,
        highestStepReached,
        lastModified: new Date()
      }));
      setLastSaved(new Date());
    } catch (error) {
      console.error('Failed to save draft:', error);
    } finally {
      setTimeout(() => setIsSaving(false), 500);
    }
  };

  // Load draft from localStorage on mount
  React.useEffect(() => {
    const draft = localStorage.getItem('developer-onboarding-draft');
    if (draft && !initialData) {
      try {
        const parsed = JSON.parse(draft);
        setFormData(parsed);
        setCurrentStep(parsed.currentStep || 1);
        setCompletedSteps(parsed.completedSteps || []);
        setHighestStepReached(parsed.highestStepReached || parsed.currentStep || 1);
      } catch (error) {
        console.error('Failed to load draft:', error);
      }
    }
  }, []);

  // Validate Step 1 (Identity)
  const validateStep1 = (): ValidationResult => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.contact?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.contact?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.contact?.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the Terms and Conditions to continue';
    }
    
    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  };

  // Validate Step 2 (Projects)
  const validateStep2 = (): ValidationResult => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.projects || formData.projects.length === 0) {
      newErrors.projects = 'Please add at least one project';
    }
    
    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  };

  // Validate Step 3 (Participation Model)
  const validateStep3 = (): ValidationResult => {
    const newErrors: Record<string, string> = {};
    
    // Check if at least one participation model is selected with "yes"
    const hasYesSelection = formData.participationModel && 
      Object.values(formData.participationModel).some(value => value === 'yes');
    
    if (!hasYesSelection) {
      newErrors.participationModel = 'Please select at least one participation model with "Yes" to continue';
    }
    
    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  };

  // Validate Step 4 (Availability) - Active participation only
  const validateStep4 = (): ValidationResult => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.availability?.weeklyHours || formData.availability.weeklyHours <= 0) {
      newErrors.weeklyHours = 'Please specify your weekly hours';
    }
    
    if (!formData.availability?.baseHourlyRate || formData.availability.baseHourlyRate <= 0) {
      newErrors.baseHourlyRate = 'Please specify your hourly rate';
    }
    
    if (formData.availability?.openToBiggerOpportunities === undefined) {
      newErrors.openToBiggerOpportunities = 'Please indicate if you are open to bigger opportunities';
    }
    
    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  };

  const handleNext = () => {
    // Handle final submission on step 6
    if (currentStep === 6) {
      // Mark final step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      
      // Clear localStorage draft
      localStorage.removeItem('developer-onboarding-draft');
      
      // Submit the form
      onComplete(formData as DeveloperOnboardingData);
      return;
    }
    
    // Validate current step
    if (currentStep === 1) {
      const validation = validateStep1();
      if (!validation.isValid) {
        setErrors(validation.errors);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setErrors({});
      
      // Mark step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    } else if (currentStep === 2) {
      const validation = validateStep2();
      if (!validation.isValid) {
        setErrors(validation.errors);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setErrors({});
      
      // Mark step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    } else if (currentStep === 3) {
      const validation = validateStep3();
      if (!validation.isValid) {
        setErrors(validation.errors);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setErrors({});
      
      // Mark step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    } else if (currentStep === 4 && formData.participationModel?.['service_provider'] === 'yes') {
      const validation = validateStep4();
      if (!validation.isValid) {
        setErrors(validation.errors);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setErrors({});
      
      // Mark step as completed
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    }
    
    // Move to next step
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setFormData({ ...formData, currentStep: nextStep });
    
    // Track highest step reached
    if (nextStep > highestStepReached) {
      setHighestStepReached(nextStep);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setFormData({ ...formData, currentStep: currentStep - 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (stepNumber: number) => {
    // Allow navigation to completed steps, past steps, or steps that have been reached before
    if (completedSteps.includes(stepNumber) || stepNumber < currentStep || stepNumber <= highestStepReached) {
      setCurrentStep(stepNumber);
      setFormData({ ...formData, currentStep: stepNumber });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactChange = (contact: ContactInfo) => {
    setFormData({ ...formData, contact });
  };

  const handleProjectsChange = (projects: Project[]) => {
    setFormData({ ...formData, projects });
  };

  const handleParticipationModelChange = (participationModel: ParticipationModel) => {
    setFormData({ ...formData, participationModel });
  };

  const handleAvailabilityChange = (availability: Availability) => {
    setFormData({ ...formData, availability });
  };

  const handleServicesChange = (services: Service[]) => {
    setFormData({ ...formData, services });
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
    // Track if user navigates to a new highest step
    if (step > highestStepReached) {
      setHighestStepReached(step);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle mock data loading
  const handleLoadMockData = (scenario: 'empty' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6' | 'active' | 'passive') => {
    const mockData = getMockDataByScenario(scenario);
    
    // Clear localStorage draft
    localStorage.removeItem('developer-onboarding-draft');
    
    // Load mock data
    setFormData({
      ...mockData,
      createdAt: new Date(),
      lastModified: new Date(),
    });
    
    // Set current step and completed steps from mock data
    setCurrentStep(mockData.currentStep || 1);
    setCompletedSteps(mockData.completedSteps || []);
    setErrors({});
    
    console.log(`Loaded mock data scenario: ${scenario}`, mockData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepIdentity
            data={formData.contact!}
            onChange={handleContactChange}
            errors={errors}
            onNavItemClick={onNavItemClick}
          />
        );
      case 2:
        return (
          <StepProjects
            projects={formData.projects || []}
            onChange={handleProjectsChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <StepParticipationModel
            participationModel={formData.participationModel || null}
            onChange={handleParticipationModelChange}
            errors={errors}
          />
        );
      case 4:
        // Only show availability for active participation
        if (formData.participationModel?.['service_provider'] === 'yes') {
          return (
            <StepAvailability
              availability={formData.availability || {
                weeklyHours: 0,
                baseHourlyRate: 0,
                currency: 'USD',
              }}
              onChange={handleAvailabilityChange}
              errors={errors}
            />
          );
        } else {
          // Skip to next step for passive
          return (
            <div className="text-center py-12">
              <p className="text-brand-neutral-600">This step is only for active participation. Click Continue to proceed.</p>
            </div>
          );
        }
      case 5:
        // Only show services for active participation
        if (formData.participationModel?.['service_provider'] === 'yes' && formData.availability) {
          return (
            <StepServices
              services={formData.services || []}
              projects={formData.projects || []}
              baseRate={formData.availability.baseHourlyRate}
              currency={formData.availability.currency}
              onChange={handleServicesChange}
              errors={errors}
              onNavItemClick={onNavItemClick}
            />
          );
        } else {
          // Final step for passive participation
          return (
            <div className="text-center py-12">
              <p className="text-brand-neutral-600">This step is only for active participation. Click Submit to complete your profile.</p>
            </div>
          );
        }
      case 6:
        return (
          <StepReview
            data={formData as DeveloperOnboardingData}
            onEdit={handleEditStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      {/* Header */}
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={onCancel}
        onDeveloperRegister={() => {}} // Already on onboarding page
      />

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Progress Indicator */}
        <WizardStepIndicator
          steps={WIZARD_STEPS}
          currentStep={currentStep}
          completedSteps={completedSteps}
          highestStepReached={highestStepReached}
          onStepClick={handleStepClick}
        />

        {/* Main Content - Streamlined without card background */}
        <div className="py-8 lg:py-12">
          {/* Desktop: Sidebar + Content Layout */}
          <div className="flex gap-8 lg:gap-12">
              {/* Step Sidebar - Desktop Only */}
              {(() => {
                const currentStepData = WIZARD_STEPS[currentStep - 1];
                return (
                  <>
                    <StepSidebar
                      stepNumber={currentStep}
                      title={currentStepData.title}
                      description={currentStepData.description}
                    />

                    {/* Step Content */}
                    <div className={`flex-1 min-h-96 flex flex-col w-full ${contentWidth === 'adaptive' ? STEP_MAX_WIDTHS[currentStep] : contentWidth}`}>
                      {/* Step Content Area */}
                      <div className="flex-1">
                        {renderCurrentStep()}
                      </div>

                      <WizardNavigation
                        currentStep={currentStep}
                        totalSteps={WIZARD_STEPS.length}
                        isSaving={isSaving}
                        lastSaved={lastSaved}
                        onBack={handleBack}
                        onCancel={onCancel}
                        onNext={handleNext}
                        onNavItemClick={onNavItemClick}
                      />
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
      </div>

      {/* Footer */}
      <Footer onNavItemClick={onNavItemClick} />

      {/* Mock Data Toggle - Developer Tool */}
      <MockDataToggle onLoadMockData={handleLoadMockData} />
    </div>
  );
};