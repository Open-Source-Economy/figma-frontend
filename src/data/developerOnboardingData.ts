/**
 * Developer Onboarding Mock Data
 * Comprehensive sample data for testing the developer onboarding workflow
 */

import { 
  DeveloperOnboardingData, 
  ContactInfo, 
  Project, 
  Availability, 
  DeveloperService 
} from '../types/DeveloperOnboarding';

/**
 * Mock Contact Information
 */
export const mockContactInfo: ContactInfo = {
  fullName: 'Sarah Chen',
  email: 'sarah.chen@example.com',
  termsAccepted: true,
};

/**
 * Mock Projects - Multiple examples showing different roles and access levels
 */
export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    projectType: 'github_repo',
    url: 'https://github.com/tanstack/react-query',
    role: 'core_contributor',
    mainBranchAccess: 'write_with_review',
    ecosystems: ['React', 'TypeScript', 'JavaScript'],
    verified: true,
  },
  {
    id: 'proj-2',
    projectType: 'github_repo',
    url: 'https://github.com/tailwindlabs/tailwindcss',
    role: 'contributor',
    mainBranchAccess: 'read_only',
    ecosystems: ['CSS', 'JavaScript', 'PostCSS'],
    verified: true,
  },
  {
    id: 'proj-3',
    projectType: 'github_org',
    url: 'https://github.com/nodejs',
    role: 'maintainer',
    mainBranchAccess: 'full_write',
    ecosystems: ['Node.js', 'JavaScript', 'C++'],
    verified: false,
  },
];

/**
 * Mock Availability - Active participation model
 */
export const mockAvailability: Availability = {
  weeklyHours: 20,
  baseHourlyRate: 150,
  currency: 'USD',
  basicAvailabilityComment: 'I am based in EST timezone and prefer to work during standard business hours. Open to occasional evening calls for urgent matters.',
  minimumEngagement: {
    hoursPerProject: 5,
    minimumDuration: 4, // weeks
  },
  typicalWeeklyHours: 15,
  typicalWeeklyHoursComment: 'Usually available 15 hours per week, but can increase to 25 hours during certain months.',
  hourlyRate: 150,
  hourlyRateComment: 'Rate is flexible for long-term contracts and non-profit organizations.',
  openToBiggerOpportunities: true,
  biggerOpportunitiesComment: 'Interested in full-time opportunities or major feature development projects that last 3+ months.',
};

/**
 * Mock Services - Various service offerings
 */
export const mockServices: DeveloperService[] = [
  {
    id: 'dev-svc-1',
    serviceId: 'svc-dev-bugfix',
    serviceName: 'Bug Fixing',
    serviceType: 'development',
    hasResponseTime: false,
    enabled: true,
    projectIds: ['proj-1', 'proj-2', 'proj-3'],
  },
  {
    id: 'dev-svc-2',
    serviceId: 'svc-dev-feature',
    serviceName: 'New Feature',
    serviceType: 'development',
    hasResponseTime: false,
    enabled: true,
    projectIds: ['proj-1', 'proj-3'],
    hourlyRate: 175,
    comment: 'Prefer working on larger features that span multiple weeks',
  },
  {
    id: 'dev-svc-3',
    serviceId: 'svc-support-technical',
    serviceName: 'Technical Support',
    serviceType: 'support',
    hasResponseTime: true,
    enabled: true,
    projectIds: ['proj-1', 'proj-2'],
    responseTimeHours: 48,
  },
  {
    id: 'dev-svc-4',
    serviceId: 'svc-advisory-architecture',
    serviceName: 'Architectural & Performance Consulting',
    serviceType: 'advisory',
    hasResponseTime: false,
    enabled: true,
    projectIds: ['proj-1', 'proj-3'],
    hourlyRate: 200,
    comment: 'Available for architecture reviews and performance optimization consulting',
  },
  {
    id: 'dev-svc-5',
    serviceId: 'svc-security-audit',
    serviceName: 'Security Audits',
    serviceType: 'security_and_compliance',
    hasResponseTime: false,
    enabled: false,
    projectIds: ['proj-3'],
    hourlyRate: 225,
  },
];

/**
 * Complete Mock Developer Onboarding Data - Active Developer
 */
export const mockDeveloperOnboardingDataActive: DeveloperOnboardingData = {
  contact: mockContactInfo,
  projects: mockProjects,
  participationModel: ['service_provider'],
  availability: mockAvailability,
  services: mockServices,
  createdAt: new Date('2024-01-15T10:00:00Z'),
  lastModified: new Date('2024-01-15T14:30:00Z'),
  status: 'draft',
  currentStep: 1,
  completedSteps: [],
};

/**
 * Complete Mock Developer Onboarding Data - Passive Developer
 */
export const mockDeveloperOnboardingDataPassive: DeveloperOnboardingData = {
  contact: {
    fullName: 'Alex Kumar',
    email: 'alex.kumar@example.com',
    termsAccepted: true,
  },
  projects: [
    {
      id: 'proj-4',
      projectType: 'github_repo',
      url: 'https://github.com/vercel/next.js',
      role: 'contributor',
      mainBranchAccess: 'read_only',
      verified: true,
    },
  ],
  participationModel: ['common_pot'],
  createdAt: new Date('2024-01-20T09:00:00Z'),
  lastModified: new Date('2024-01-20T09:15:00Z'),
  status: 'draft',
  currentStep: 1,
  completedSteps: [],
};

/**
 * Partial Mock Data for Step 1 (Identity) Only
 */
export const mockStep1Only: Partial<DeveloperOnboardingData> = {
  contact: {
    fullName: 'Jordan Smith',
    email: 'jordan.smith@example.com',
    termsAccepted: true,
  },
  projects: [],
  participationModel: null,
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 1,
  completedSteps: [],
};

/**
 * Mock Data for Testing Step 2 (Projects)
 */
export const mockStep2Testing: Partial<DeveloperOnboardingData> = {
  contact: mockContactInfo,
  projects: [
    {
      id: 'proj-test-1',
      projectType: 'github_repo',
      url: 'https://github.com/vuejs/vue',
      role: 'maintainer',
      mainBranchAccess: 'full_write',
      verified: false,
    },
  ],
  participationModel: null,
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 2,
  completedSteps: [1],
};

/**
 * Mock Data for Testing Step 3 (Participation Model)
 */
export const mockStep3Testing: Partial<DeveloperOnboardingData> = {
  contact: mockContactInfo,
  projects: mockProjects,
  participationModel: null,
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 3,
  completedSteps: [1, 2],
};

/**
 * Mock Data for Testing Step 4 (Availability)
 */
export const mockStep4Testing: Partial<DeveloperOnboardingData> = {
  contact: mockContactInfo,
  projects: mockProjects,
  participationModel: ['service_provider'],
  availability: {
    weeklyHours: 10,
    baseHourlyRate: 100,
    currency: 'USD',
  },
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 4,
  completedSteps: [1, 2, 3],
};

/**
 * Mock Data for Testing Step 5 (Services)
 */
export const mockStep5Testing: Partial<DeveloperOnboardingData> = {
  contact: mockContactInfo,
  projects: mockProjects,
  participationModel: ['service_provider'],
  availability: mockAvailability,
  services: [
    {
      id: 'dev-svc-test-1',
      serviceId: 'svc-dev-bugfix',
      serviceName: 'Bug Fixing',
      serviceType: 'development',
      hasResponseTime: false,
      enabled: true,
      projectIds: ['proj-1', 'proj-2', 'proj-3'],
    },
  ],
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 5,
  completedSteps: [1, 2, 3, 4],
};



/**
 * Empty Initial State (for new users)
 */
export const emptyDeveloperOnboardingData: Partial<DeveloperOnboardingData> = {
  contact: {
    fullName: '',
    email: '',
    termsAccepted: false,
  },
  projects: [],
  participationModel: null,
  createdAt: new Date(),
  lastModified: new Date(),
  status: 'draft',
  currentStep: 1,
  completedSteps: [],
};

/**
 * Helper: Get mock data by scenario
 */
export const getMockDataByScenario = (scenario: 'active' | 'passive' | 'empty' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5'): Partial<DeveloperOnboardingData> => {
  switch (scenario) {
    case 'active':
      return mockDeveloperOnboardingDataActive;
    case 'passive':
      return mockDeveloperOnboardingDataPassive;
    case 'empty':
      return emptyDeveloperOnboardingData;
    case 'step1':
      return mockStep1Only;
    case 'step2':
      return mockStep2Testing;
    case 'step3':
      return mockStep3Testing;
    case 'step4':
      return mockStep4Testing;
    case 'step5':
      return mockStep5Testing;
    default:
      return emptyDeveloperOnboardingData;
  }
};