/**
 * Developer Onboarding Types
 * Complete type definitions for the developer onboarding workflow
 */

export type ParticipationModel = 'active' | 'passive';

export type ProjectType = 'github_repo' | 'github_org' | 'other_url';

export type ProjectRole = 'maintainer' | 'core_contributor' | 'contributor' | 'other';

export type MainBranchAccess = 'full_write' | 'write_with_review' | 'read_only';

export type Currency = 'USD' | 'EUR' | 'CHF';

export type ServiceType = 'support' | 'development' | 'advisory' | 'security_and_compliance' | 'custom';

export type ResponseTimeType = 24 | 48 | 72 | 168; // hours: 24h, 48h, 72h, 1 week

export type OnboardingStatus = 'draft' | 'submitted' | 'approved' | 'rejected';

export interface ContactInfo {
  fullName: string;
  email: string;
  termsAccepted: boolean;
}

export interface Project {
  id: string;
  projectType?: ProjectType; // Optional until user selects
  url: string;
  role: ProjectRole;
  mainBranchAccess: MainBranchAccess;
  ecosystems?: string[]; // Optional ecosystems (e.g., ["React", "Node.js", "TypeScript"])
  verified: boolean;
}

export interface Availability {
  weeklyHours: number;
  baseHourlyRate: number;
  currency: Currency;
  basicAvailabilityComment?: string;
  minimumEngagement?: {
    hoursPerProject?: number;
    minimumDuration?: number; // weeks
  };
  // Additional availability questions
  typicalWeeklyHours?: number;
  typicalWeeklyHoursComment?: string;
  hourlyRate?: number;
  hourlyRateComment?: string;
  openToBiggerOpportunities?: boolean | null; // true = Yes, false = No, null = Maybe
  biggerOpportunitiesComment?: string;
}

// Predefined service definition (from database)
export interface ServiceDefinition {
  id: string;
  serviceType: ServiceType;
  name: string;
  description: string;
  isCustom: boolean;
  hasResponseTime: boolean;
  requiresResponseTime?: boolean; // If true, response time MUST be set (not optional)
}

// Developer's service offering (what they add during onboarding)
export interface DeveloperService {
  id: string;
  serviceId: string; // Reference to ServiceDefinition.id
  serviceName: string; // Cached from ServiceDefinition for display
  serviceType: ServiceType; // Cached from ServiceDefinition for display
  hasResponseTime: boolean; // Cached from ServiceDefinition
  enabled: boolean; // Whether this service is currently active
  projectIds: string[]; // Which projects this service applies to
  hourlyRate?: number; // Optional custom rate (overrides base rate)
  responseTimeHours?: ResponseTimeType; // Optional response time commitment
  comment?: string; // Optional notes
}

// For creating custom services
export interface CustomServiceInput {
  name: string;
  description: string;
  hasResponseTime?: boolean;
}

export interface DeveloperOnboardingData {
  // Step 1: Contact
  contact: ContactInfo;
  
  // Step 2: Projects
  projects: Project[];
  
  // Step 3: Participation Model
  participationModel: ParticipationModel | null;
  
  // Step 4: Availability (if active)
  availability?: Availability;
  
  // Step 5: Services (if active)
  services?: DeveloperService[];
  
  // Metadata
  createdAt: Date;
  lastModified: Date;
  status: OnboardingStatus;
  currentStep: number;
  completedSteps: number[];
}

// Validation result types
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Step validation functions
export type StepValidator = (data: Partial<DeveloperOnboardingData>) => ValidationResult;
