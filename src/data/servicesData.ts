import { 
  Headphones, 
  Users,
  RefreshCw,
  Clock,
  Bug,
  CheckCircle2,
  FileText,
  Puzzle,
  BarChart3,
  Target,
  GraduationCap,
  BookOpen,
  Mic2,
  ShieldCheck,
  FileWarning,
  AlertTriangle,
  FileCheck,
  Shield,
  type LucideIcon
} from 'lucide-react';

export interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  type: string;
  title: string;
  icon: LucideIcon;
  description: string;
  accentColor: 'accent' | 'highlight' | 'warning' | 'success';
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    type: 'support',
    title: 'Support Services',
    icon: Headphones,
    description: 'Ongoing assistance and maintenance to keep your systems running smoothly',
    accentColor: 'accent',
    services: [
      {
        name: 'Technical Support',
        description: 'Expert responses to technical questions and troubleshooting assistance.',
        icon: Headphones
      },
      {
        name: 'Customer Support',
        description: 'General assistance and guidance for your team.',
        icon: Users
      },
      {
        name: 'Operational Support',
        description: 'Help with deployment, performance optimization, and reliability concerns.',
        icon: RefreshCw
      },
      {
        name: 'Long Supported Version (LSV)',
        description: 'Extended support and maintenance for specific versions of the project.',
        icon: Clock
      }
    ]
  },
  {
    type: 'development',
    title: 'Development Services',
    icon: Bug,
    description: 'Custom development work to extend and enhance functionality',
    accentColor: 'highlight',
    services: [
      {
        name: 'Bug Fixing',
        description: 'Prioritized resolution of critical issues and bugs.',
        icon: Bug
      },
      {
        name: 'New Features',
        description: 'Development of additional features and capabilities.',
        icon: CheckCircle2
      },
      {
        name: 'Documentation',
        description: 'Creation and improvement of technical documentation.',
        icon: FileText
      },
      {
        name: 'OSS Plugin / Library',
        description: 'Build and open-source new plugins or libraries for the ecosystem.',
        icon: Puzzle
      },
      {
        name: 'Legacy System Migration',
        description: 'Expert assistance migrating from legacy systems to modern solutions.',
        icon: RefreshCw
      }
    ]
  },
  {
    type: 'advisory',
    title: 'Advisory Services',
    icon: Target,
    description: 'Strategic guidance and knowledge transfer from expert maintainers',
    accentColor: 'warning',
    services: [
      {
        name: 'Architectural & Performance Consulting',
        description: 'Expert guidance on designing scalable, high-performance solutions.',
        icon: BarChart3
      },
      {
        name: 'Roadmap & Strategy Workshops',
        description: 'Collaborative sessions to align enterprise needs with project roadmap.',
        icon: Target
      },
      {
        name: 'Developer Mentorship',
        description: 'Personalized mentorship and guidance for your development teams.',
        icon: GraduationCap
      },
      {
        name: 'Training',
        description: 'Customized training programs for enterprise teams.',
        icon: BookOpen
      },
      {
        name: 'Speaking Engagements',
        description: 'Talks and presentations at conferences, meetups, or internal events.',
        icon: Mic2
      }
    ]
  },
  {
    type: 'security_and_compliance',
    title: 'Security & Compliance',
    icon: Shield,
    description: 'Comprehensive security analysis and regulatory compliance services',
    accentColor: 'success',
    services: [
      {
        name: 'Security Audits',
        description: 'In-depth security analysis and review of the project and dependencies.',
        icon: ShieldCheck
      },
      {
        name: 'VEX Reports',
        description: 'Generate VEX (Vulnerability Exploitability eXchange) reports.',
        icon: FileWarning
      },
      {
        name: 'CVE Management',
        description: 'Tracking and managing CVEs (Common Vulnerabilities and Exposures).',
        icon: AlertTriangle
      },
      {
        name: 'Compliance Consulting',
        description: 'Expert guidance on regulations like the EU Cyber Resilience Act.',
        icon: FileCheck
      },
      {
        name: 'Secure Code Review',
        description: 'Detailed review of code for security vulnerabilities and weaknesses.',
        icon: Shield
      },
      {
        name: 'Threat Modeling',
        description: 'Identify and prioritize potential threats to your systems.',
        icon: Target
      }
    ]
  }
];
