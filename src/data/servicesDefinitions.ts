/**
 * Predefined Service Definitions
 * These match the services table in the database
 */

import { ServiceDefinition, ServiceType } from '../types/DeveloperOnboarding';

export const serviceDefinitions: ServiceDefinition[] = [
  // ===== SUPPORT SERVICES =====
  {
    id: 'svc-support-technical',
    serviceType: 'support' as ServiceType,
    name: 'Technical Support',
    description: 'Respond to technical questions.',
    isCustom: false,
    hasResponseTime: true,
    requiresResponseTime: true, // REQUIRED
  },
  {
    id: 'svc-support-customer',
    serviceType: 'support' as ServiceType,
    name: 'Customer Support',
    description: 'Respond to general questions.',
    isCustom: false,
    hasResponseTime: true,
    requiresResponseTime: true, // REQUIRED
  },
  {
    id: 'svc-support-operational',
    serviceType: 'support' as ServiceType,
    name: 'Operational Support',
    description: 'Assist with deployment, performance issues, or reliability concerns.',
    isCustom: false,
    hasResponseTime: true,
    requiresResponseTime: true, // REQUIRED
  },
  {
    id: 'svc-support-lsv',
    serviceType: 'support' as ServiceType,
    name: 'Long Supported Version',
    description: 'Provide long-term support for a specific version of the project.',
    isCustom: false,
    hasResponseTime: false,
  },

  // ===== DEVELOPMENT SERVICES =====
  {
    id: 'svc-dev-bugfix',
    serviceType: 'development' as ServiceType,
    name: 'Bug Fixing',
    description: 'Prioritize addressing issues.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-dev-feature',
    serviceType: 'development' as ServiceType,
    name: 'New Feature',
    description: 'Development of additional features in a oss project.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-dev-documentation',
    serviceType: 'development' as ServiceType,
    name: 'Documentation',
    description: 'Development of additional features in a oss project.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-dev-plugin',
    serviceType: 'development' as ServiceType,
    name: 'OSS Plugin / Library',
    description: 'Create and open-source new plugins or libraries.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-dev-migration',
    serviceType: 'development' as ServiceType,
    name: 'Legacy System Migration',
    description: 'Help enterprises migrate their systems.',
    isCustom: false,
    hasResponseTime: false,
  },

  // ===== ADVISORY SERVICES =====
  {
    id: 'svc-advisory-architecture',
    serviceType: 'advisory' as ServiceType,
    name: 'Architectural & Performance Consulting',
    description: 'Expert guidance on designing scalable and high-performance solutions.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-advisory-roadmap',
    serviceType: 'advisory' as ServiceType,
    name: 'Roadmap & Strategy Workshops',
    description: 'Collaborative sessions to align enterprise needs with project roadmap.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-advisory-mentorship',
    serviceType: 'advisory' as ServiceType,
    name: 'Developer Mentorship',
    description: 'Personalized mentorship and guidance for enterprise development teams.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-advisory-training',
    serviceType: 'advisory' as ServiceType,
    name: 'Training',
    description: 'Customized training for enterprise teams.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-advisory-speaking',
    serviceType: 'advisory' as ServiceType,
    name: 'Speaking Engagements',
    description: 'Provide talks and presentations at conferences, meetups, or internal company events.',
    isCustom: false,
    hasResponseTime: false,
  },

  // ===== SECURITY & COMPLIANCE SERVICES =====
  {
    id: 'svc-security-audit',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'Security Audits',
    description: 'In-depth security analysis and review of the project and its dependencies.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-security-vex',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'VEX Reports',
    description: 'Generate VEX (Vulnerability Exploitability eXchange) reports for the project.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-security-cve',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'CVE Management',
    description: 'Assistance with tracking and managing CVEs (Common Vulnerabilities and Exposures).',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-security-compliance',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'Compliance Consulting',
    description: 'Consulting on compliance with regulations like the EU Cyber Resilience Act.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-security-code-review',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'Secure Code Review',
    description: 'Detailed review of code for security vulnerabilities and weaknesses.',
    isCustom: false,
    hasResponseTime: false,
  },
  {
    id: 'svc-security-threat',
    serviceType: 'security_and_compliance' as ServiceType,
    name: 'Threat Modeling',
    description: 'Identify and prioritize potential threats to the project and its ecosystem.',
    isCustom: false,
    hasResponseTime: false,
  },
];

// Helper functions
export const getServicesByType = (type: ServiceType): ServiceDefinition[] => {
  return serviceDefinitions.filter(s => s.serviceType === type);
};

export const getServiceById = (id: string): ServiceDefinition | undefined => {
  return serviceDefinitions.find(s => s.id === id);
};

export const getServiceTypeLabel = (type: ServiceType): string => {
  const labels: Record<ServiceType, string> = {
    support: 'Support',
    development: 'Development',
    advisory: 'Advisory',
    security_and_compliance: 'Security & Compliance',
    custom: 'Custom',
  };
  return labels[type];
};

export const getServiceTypeDescription = (type: ServiceType): string => {
  const descriptions: Record<ServiceType, string> = {
    support: 'Provide timely responses and assistance to users and enterprises',
    development: 'Build features, fix bugs, and improve project quality',
    advisory: 'Share expertise through consulting, training, and mentorship',
    security_and_compliance: 'Ensure project security and regulatory compliance',
    custom: 'Custom services tailored to specific needs',
  };
  return descriptions[type];
};

export const getResponseTimeLabel = (hours: number): string => {
  if (hours === 24) return '24 hours';
  if (hours === 48) return '48 hours';
  if (hours === 72) return '72 hours';
  if (hours === 168) return '1 week';
  return `${hours} hours`;
};
