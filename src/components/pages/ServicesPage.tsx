import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { ServiceColumn } from '../patterns/ServiceColumn';
import { ServicesHeroSection } from '../services/sections/ServicesHeroSection';
import { EnterpriseAddonsSection } from '../services/sections/EnterpriseAddonsSection';
import { 
  ArrowRight, 
  Users, 
  Bug,
  LifeBuoy,
  UserCheck,
  Plus,
  Shield,
  FileText,
  GraduationCap,
  AlertTriangle,
  Globe,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onNavItemClick?: (href: string) => void;
}

export function ServicesPage({ onNavigateHome, onNavItemClick }: ServicesPageProps) {
  const handleNavigation = (href: string) => {
    if (onNavItemClick) {
      onNavItemClick(href);
    }
  };

  // Enterprise services configuration
  const enterpriseServices = [
    {
      icon: FileText,
      title: 'Non-Disclosure Agreements',
      description: (
        <>
          <span className="font-medium text-foreground">Comprehensive legal protection</span> for your proprietary information with industry-standard confidentiality frameworks and secure data handling.
        </>
      ),
      buttonText: 'Request NDA',
      colorScheme: 'primary' as const,
    },
    {
      icon: Clock,
      title: 'Service Level Agreements',
      description: (
        <>
          <span className="font-medium text-foreground">Guaranteed response times</span> and performance metrics with enterprise-grade uptime commitments and 24/7 support availability.
        </>
      ),
      buttonText: 'Request SLA',
      colorScheme: 'success' as const,
    },
    {
      icon: Globe,
      title: 'Ecosystem Growth Programs',
      description: (
        <>
          <span className="font-medium text-foreground">Strategic ecosystem development</span> showcasing your open source leadership while fostering sustainable community growth.
        </>
      ),
      buttonText: 'Request Program',
      colorScheme: 'success' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavItemClick={handleNavigation}
        ctaText="Get Started Today"
        onCtaClick={onNavigateHome}
      />
      
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <ServicesHeroSection
              title={
                <h1 className="text-4xl lg:text-5xl tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    What Maintainers
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent">
                    Typically Offer
                  </span>
                </h1>
              }
              description={
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Our network of expert open source maintainers provides professional services across
                  <span className="text-brand-primary"> development work</span>,
                  <span className="text-brand-accent"> strategic consulting</span>, and
                  <span className="text-brand-success"> security & compliance</span>
                </p>
              }
            />

            {/* Services Overview Grid */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {/* Development Services */}
              <ServiceColumn
                title="Development"
                description="Priority development work by expert maintainers who understand your codebase"
                mainIcon={<Bug className="w-9 h-9" />}
                colorScheme="primary"
                services={[
                  { name: 'Bug Fixing', icon: <Bug className="w-5 h-5" />, description: 'Critical issue resolution' },
                  { name: 'New Feature Development', icon: <Plus className="w-5 h-5" />, description: 'Custom functionality' },
                  { name: 'Documentation Updates', icon: <FileText className="w-5 h-5" />, description: 'Clear, comprehensive docs' },
                  { name: 'OSS Plugin/Library Creation', icon: <Zap className="w-5 h-5" />, description: 'Tailored extensions' }
                ]}
              />

              {/* Advisory & Support Services */}
              <ServiceColumn
                title="Advisory & Support"
                description="Strategic guidance and technical support from experienced maintainers"
                mainIcon={<GraduationCap className="w-9 h-9" />}
                colorScheme="success"
                services={[
                  { name: 'Technical Support', icon: <LifeBuoy className="w-5 h-5" />, description: 'Expert problem solving' },
                  { name: 'Architectural Consulting', icon: <Users className="w-5 h-5" />, description: 'System design guidance' },
                  { name: 'Developer Mentorship', icon: <UserCheck className="w-5 h-5" />, description: 'Skills development' },
                  { name: 'Training & Workshops', icon: <GraduationCap className="w-5 h-5" />, description: 'Team education programs' }
                ]}
              />

              {/* Security & Compliance */}
              <ServiceColumn
                title="Security & Compliance"
                description="Security auditing and compliance support for enterprise environments"
                mainIcon={<Shield className="w-9 h-9" />}
                colorScheme="accent"
                services={[
                  { name: 'Security Audits', icon: <Shield className="w-5 h-5" />, description: 'Comprehensive assessments' },
                  { name: 'CVE Management', icon: <AlertTriangle className="w-5 h-5" />, description: 'Vulnerability handling' },
                  { name: 'Compliance Consulting', icon: <CheckCircle className="w-5 h-5" />, description: 'Regulatory alignment' },
                  { name: 'Secure Code Review', icon: <Bug className="w-5 h-5" />, description: 'Security-focused analysis' }
                ]}
              />
            </div>

            {/* Enterprise Add-ons Section */}
            <EnterpriseAddonsSection
              services={enterpriseServices}
              onServiceRequest={(serviceType) => handleNavigation('get-started')}
            />

            {/* Call to Action */}
            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => handleNavigation('get-started')}
                rightIcon={ArrowRight}
                icon
              >
                Get Started Today
              </Button>
            </div>

          </div>
        </section>
      </main>
      
      <Footer onNavItemClick={handleNavigation} />
    </div>
  );
}
