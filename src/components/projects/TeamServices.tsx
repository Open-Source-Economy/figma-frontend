import React from 'react';
import { Badge } from '../ui/badge';
import { 
  Headphones, 
  Code, 
  Lightbulb, 
  Shield, 
  FileCheck,
  Clock,
  Bug,
  FileText,
  Puzzle,
  RefreshCw,
  BarChart3,
  Users,
  GraduationCap,
  Mic2,
  ShieldCheck,
  FileWarning,
  AlertTriangle,
  BookOpen,
  Target,
  CheckCircle2
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  hasResponseTime?: boolean;
  isCustom?: boolean;
}

interface ServiceCategory {
  type: string;
  title: string;
  icon: any;
  description: string;
  accentColor: string;
  services: Service[];
}

interface TeamServicesProps {
  consultationRate?: number;
  supportContract?: {
    monthlyPrice: number;
    hoursIncluded: number;
  };
  customDevelopmentAvailable?: boolean;
}

export function TeamServices({
  consultationRate = 250,
  supportContract,
  customDevelopmentAvailable = true
}: TeamServicesProps) {
  const serviceCategories: ServiceCategory[] = [
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
          hasResponseTime: true
        },
        {
          name: 'Customer Support',
          description: 'General assistance and guidance for your team.',
          hasResponseTime: true
        },
        {
          name: 'Operational Support',
          description: 'Help with deployment, performance optimization, and reliability concerns.',
          hasResponseTime: true
        },
        {
          name: 'Long Supported Version (LSV)',
          description: 'Extended support and maintenance for specific versions of the project.',
          hasResponseTime: false
        }
      ]
    },
    {
      type: 'development',
      title: 'Development Services',
      icon: Code,
      description: 'Custom development work to extend and enhance functionality',
      accentColor: 'highlight',
      services: [
        {
          name: 'Bug Fixing',
          description: 'Prioritized resolution of critical issues and bugs.',
          hasResponseTime: false
        },
        {
          name: 'New Features',
          description: 'Development of additional features and capabilities.',
          hasResponseTime: false
        },
        {
          name: 'Documentation',
          description: 'Creation and improvement of technical documentation.',
          hasResponseTime: false
        },
        {
          name: 'OSS Plugin / Library',
          description: 'Build and open-source new plugins or libraries for the ecosystem.',
          hasResponseTime: false
        },
        {
          name: 'Legacy System Migration',
          description: 'Expert assistance migrating from legacy systems to modern solutions.',
          hasResponseTime: false
        }
      ]
    },
    {
      type: 'advisory',
      title: 'Advisory Services',
      icon: Lightbulb,
      description: 'Strategic guidance and knowledge transfer from expert maintainers',
      accentColor: 'warning',
      services: [
        {
          name: 'Architectural & Performance Consulting',
          description: 'Expert guidance on designing scalable, high-performance solutions.',
          hasResponseTime: false
        },
        {
          name: 'Roadmap & Strategy Workshops',
          description: 'Collaborative sessions to align enterprise needs with project roadmap.',
          hasResponseTime: false
        },
        {
          name: 'Developer Mentorship',
          description: 'Personalized mentorship and guidance for your development teams.',
          hasResponseTime: false
        },
        {
          name: 'Training',
          description: 'Customized training programs for enterprise teams.',
          hasResponseTime: false
        },
        {
          name: 'Speaking Engagements',
          description: 'Talks and presentations at conferences, meetups, or internal events.',
          hasResponseTime: false
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
          hasResponseTime: false
        },
        {
          name: 'VEX Reports',
          description: 'Generate VEX (Vulnerability Exploitability eXchange) reports.',
          hasResponseTime: false
        },
        {
          name: 'CVE Management',
          description: 'Tracking and managing CVEs (Common Vulnerabilities and Exposures).',
          hasResponseTime: false
        },
        {
          name: 'Compliance Consulting',
          description: 'Expert guidance on regulations like the EU Cyber Resilience Act.',
          hasResponseTime: false
        },
        {
          name: 'Secure Code Review',
          description: 'Detailed review of code for security vulnerabilities and weaknesses.',
          hasResponseTime: false
        },
        {
          name: 'Threat Modeling',
          description: 'Identify and prioritize potential threats to your systems.',
          hasResponseTime: false
        }
      ]
    }
  ];

  const getIconForService = (serviceName: string) => {
    const iconMap: Record<string, any> = {
      'Technical Support': Headphones,
      'Customer Support': Users,
      'Operational Support': RefreshCw,
      'Long Supported Version (LSV)': Clock,
      'Bug Fixing': Bug,
      'New Features': CheckCircle2,
      'Documentation': FileText,
      'OSS Plugin / Library': Puzzle,
      'Legacy System Migration': RefreshCw,
      'Architectural & Performance Consulting': BarChart3,
      'Roadmap & Strategy Workshops': Target,
      'Developer Mentorship': GraduationCap,
      'Training': BookOpen,
      'Speaking Engagements': Mic2,
      'Security Audits': ShieldCheck,
      'VEX Reports': FileWarning,
      'CVE Management': AlertTriangle,
      'Compliance Consulting': FileCheck,
      'Secure Code Review': Shield,
      'Threat Modeling': Target
    };
    return iconMap[serviceName] || CheckCircle2;
  };

  return (
    <div className="space-y-8">
      {serviceCategories.map((category, catIdx) => {
        const CategoryIcon = category.icon;
        
        return (
          <div key={catIdx} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg bg-brand-${category.accentColor}/10 border border-brand-${category.accentColor}/20 flex items-center justify-center flex-shrink-0`}>
                <CategoryIcon className={`h-5 w-5 text-brand-${category.accentColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-neutral-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-brand-neutral-600">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.services.map((service, svcIdx) => {
                const ServiceIcon = getIconForService(service.name);
                
                return (
                  <div
                    key={svcIdx}
                    className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-3 hover:border-brand-accent/50 transition-all group"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-brand-${category.accentColor}/10 border border-brand-${category.accentColor}/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-${category.accentColor}/20 transition-colors`}>
                        <ServiceIcon className={`h-4 w-4 text-brand-${category.accentColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-brand-neutral-900 mb-0.5 leading-tight">
                          {service.name}
                        </h4>
                        {service.hasResponseTime && (
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-brand-success/10 text-brand-success border-brand-success/30 mb-1.5"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            SLA Available
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-brand-neutral-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Consultation CTA Card */}
      <div className="bg-brand-card-blue border border-brand-accent/30 rounded-lg p-6 mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-brand-neutral-900 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-brand-neutral-600 mb-4">
              Book a consultation to discuss your specific needs and get custom pricing for your organization. All services include NDA options and can be tailored to your enterprise requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-brand-success/10 border border-brand-success/30 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-3 w-3 text-brand-success" />
                </div>
                <span className="text-brand-neutral-700 text-sm">NDA Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-brand-success/10 border border-brand-success/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-3 w-3 text-brand-success" />
                </div>
                <span className="text-brand-neutral-700 text-sm">SLA Guarantees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-brand-success/10 border border-brand-success/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 text-brand-success" />
                </div>
                <span className="text-brand-neutral-700 text-sm">Custom Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
