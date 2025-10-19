// Maintainer Profile Data Structure
// This defines the data model for maintainer profiles including their projects, roles, and services

export interface MaintainerProject {
  projectName: string;
  projectSlug: string;
  role: string;
  roleType: 'core' | 'contributor' | 'advisor' | 'security';
  contributionLevel: 'primary' | 'secondary' | 'occasional';
  yearsActive: number;
  description: string;
}

export interface MaintainerService {
  id: string;
  name: string;
  category: 'support' | 'development' | 'advisory' | 'security_and_compliance';
  description: string;
  baseRate: number; // Per hour
  availability: 'available' | 'limited' | 'unavailable';
  responseTime?: string;
  minHours?: number;
}

export interface PricingBreakdown {
  baseRate: number;
  projectAllocation: number; // Percentage
  dependenciesAllocation: number; // Percentage
  platformFee: number; // Percentage
  maintainerReceives: number; // Percentage
}

export interface MaintainerProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  location: string;
  timezone: string;
  yearsInOpenSource: number;
  totalContributions: number;
  languages: string[];
  expertise: string[];
  projects: MaintainerProject[];
  services: MaintainerService[];
  pricingBreakdown: PricingBreakdown;
  availability: {
    hoursPerWeek: number;
    preferredSchedule: string;
  };
  contact: {
    email: string;
    github: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Sample maintainer profile data
export const sampleMaintainerProfile: MaintainerProfile = {
  id: 'maintainer-001',
  name: 'Sarah Chen',
  title: 'Core Maintainer & TypeScript Expert',
  bio: 'Passionate about building robust, scalable open source tools. Core maintainer of multiple widely-used TypeScript libraries with over 50M monthly downloads combined. Specialized in developer tooling, build systems, and performance optimization.',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  location: 'San Francisco, CA',
  timezone: 'PST (UTC-8)',
  yearsInOpenSource: 8,
  totalContributions: 12500,
  languages: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'],
  expertise: [
    'Developer Tooling',
    'Build Systems',
    'Performance Optimization',
    'API Design',
    'TypeScript Compiler',
    'Package Management'
  ],
  projects: [
    {
      projectName: 'Vite',
      projectSlug: 'vite',
      role: 'Core Team Member',
      roleType: 'core',
      contributionLevel: 'primary',
      yearsActive: 3,
      description: 'Core contributor focusing on plugin architecture and TypeScript integration'
    },
    {
      projectName: 'Vitest',
      projectSlug: 'vitest',
      role: 'Co-Maintainer',
      roleType: 'core',
      contributionLevel: 'primary',
      yearsActive: 2,
      description: 'Lead development of testing utilities and TypeScript support'
    },
    {
      projectName: 'esbuild',
      projectSlug: 'esbuild',
      role: 'Contributor',
      roleType: 'contributor',
      contributionLevel: 'secondary',
      yearsActive: 4,
      description: 'Contributing to performance optimizations and bug fixes'
    },
    {
      projectName: 'TypeScript',
      projectSlug: 'typescript',
      role: 'Community Contributor',
      roleType: 'contributor',
      contributionLevel: 'occasional',
      yearsActive: 5,
      description: 'Contributing documentation improvements and community support'
    },
    {
      projectName: 'Rollup',
      projectSlug: 'rollup',
      role: 'Technical Advisor',
      roleType: 'advisor',
      contributionLevel: 'occasional',
      yearsActive: 3,
      description: 'Providing guidance on plugin ecosystem and performance'
    }
  ],
  services: [
    {
      id: 'tech-support',
      name: 'Technical Support',
      category: 'support',
      description: 'Expert responses to technical questions, troubleshooting, and implementation guidance for Vite, Vitest, and build tooling.',
      baseRate: 250,
      availability: 'available',
      responseTime: '24 hours',
      minHours: 2
    },
    {
      id: 'bug-fixing',
      name: 'Priority Bug Fixing',
      category: 'development',
      description: 'Prioritized resolution of critical issues and bugs in supported projects.',
      baseRate: 300,
      availability: 'available',
      minHours: 4
    },
    {
      id: 'feature-dev',
      name: 'Custom Feature Development',
      category: 'development',
      description: 'Development of new features and enhancements tailored to your needs.',
      baseRate: 350,
      availability: 'limited',
      minHours: 8
    },
    {
      id: 'architecture',
      name: 'Architecture Consulting',
      category: 'advisory',
      description: 'Expert guidance on build system architecture, performance optimization, and tooling strategy.',
      baseRate: 400,
      availability: 'available',
      minHours: 2
    },
    {
      id: 'code-review',
      name: 'Code Review & Best Practices',
      category: 'advisory',
      description: 'In-depth code reviews with focus on TypeScript best practices and performance.',
      baseRate: 300,
      availability: 'available',
      minHours: 2
    },
    {
      id: 'training',
      name: 'Team Training',
      category: 'advisory',
      description: 'Customized training sessions for your team on build tooling and TypeScript.',
      baseRate: 500,
      availability: 'limited',
      minHours: 4
    },
    {
      id: 'security-audit',
      name: 'Security Audit',
      category: 'security_and_compliance',
      description: 'Comprehensive security review of your build pipeline and dependencies.',
      baseRate: 400,
      availability: 'available',
      minHours: 8
    },
    {
      id: 'migration',
      name: 'Migration Support',
      category: 'development',
      description: 'Expert assistance migrating from webpack, CRA, or other build tools to Vite.',
      baseRate: 350,
      availability: 'available',
      minHours: 8
    }
  ],
  pricingBreakdown: {
    baseRate: 300, // Average hourly rate
    projectAllocation: 40, // 40% goes to the project
    dependenciesAllocation: 20, // 20% goes to dependencies
    platformFee: 10, // 10% platform fee
    maintainerReceives: 30 // 30% goes to maintainer
  },
  availability: {
    hoursPerWeek: 20,
    preferredSchedule: 'Flexible, primarily PST business hours'
  },
  contact: {
    email: 'sarah.chen@opensourceeconomy.org',
    github: 'sarahchen',
    twitter: '@sarahchen_dev',
    linkedin: 'sarahchen'
  }
};

// Helper function to get role badge color
export function getRoleColor(roleType: MaintainerProject['roleType']): string {
  switch (roleType) {
    case 'core':
      return 'accent';
    case 'contributor':
      return 'highlight';
    case 'advisor':
      return 'warning';
    case 'security':
      return 'error';
    default:
      return 'accent';
  }
}

// Helper function to get contribution level display
export function getContributionLevel(level: MaintainerProject['contributionLevel']): string {
  switch (level) {
    case 'primary':
      return 'Primary Focus';
    case 'secondary':
      return 'Active';
    case 'occasional':
      return 'Occasional';
    default:
      return 'Active';
  }
}

// Helper function to get availability status color
export function getAvailabilityColor(availability: MaintainerService['availability']): string {
  switch (availability) {
    case 'available':
      return 'success';
    case 'limited':
      return 'warning';
    case 'unavailable':
      return 'error';
    default:
      return 'success';
  }
}

// Helper function to calculate actual cost breakdown
export function calculatePricing(baseRate: number, breakdown: PricingBreakdown) {
  return {
    total: baseRate,
    toProject: (baseRate * breakdown.projectAllocation) / 100,
    toDependencies: (baseRate * breakdown.dependenciesAllocation) / 100,
    toPlatform: (baseRate * breakdown.platformFee) / 100,
    toMaintainer: (baseRate * breakdown.maintainerReceives) / 100
  };
}
