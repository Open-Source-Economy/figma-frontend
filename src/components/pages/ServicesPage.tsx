import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ServiceColumn } from '../patterns/ServiceColumn';
import { 
  ArrowRight, 
  Users, 
  MessageSquare, 
  CheckCircle,
  Heart,
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
  Clock
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
            <div className="relative text-center mb-16">
              {/* Background decoration - Blue to Green Journey */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-primary/6 via-brand-accent/4 to-brand-success/8 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-primary/8 via-brand-accent/6 to-transparent rounded-full blur-2xl opacity-40"></div>
                <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-brand-accent/6 via-brand-success/4 to-transparent rounded-full blur-xl opacity-35"></div>
              </div>
              
              {/* Content */}
              <div className="relative max-w-4xl mx-auto space-y-6">
                {/* Premium badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 via-brand-primary/5 to-transparent rounded-full border border-brand-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-brand-primary tracking-wide">Enterprise-Grade Services</span>
                </div>
                
                {/* Main title with blue-to-green gradient journey */}
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Comprehensive
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent">
                    Open Source Services
                  </span>
                </h1>
                
                {/* Enhanced description with brand journey colors */}
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Professional support for every aspect of your open source journey, from 
                  <span className="text-brand-primary font-medium"> enterprise development</span> through 
                  <span className="text-brand-accent font-medium"> strategic growth</span> to 
                  <span className="text-brand-success font-medium"> sustainable ecosystem funding</span>
                </p>
                
                {/* Decorative elements */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                    Trusted by Enterprises
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

              {/* Security & Compliance - Updated to use accent color (bridge green) */}
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
            <div className="relative mb-12">
              {/* Background decoration - Blue to Green Journey */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-primary/5 via-brand-accent/4 to-brand-success/6 rounded-full blur-2xl opacity-60"></div>
              </div>
              
              <Card className="bg-gradient-to-br from-background via-background to-brand-accent/3 border-brand-primary/15 shadow-md backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center max-w-4xl mx-auto">
                    {/* Enhanced Header with Blue-to-Green Journey */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/15 via-brand-accent/12 to-brand-success/15 blur-xl opacity-40 rounded-full"></div>
                      <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-primary/8 via-brand-accent/10 to-brand-success/8 rounded-full border border-brand-accent/20 backdrop-blur-sm shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="w-1 h-1 bg-brand-success rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-brand-accent-dark tracking-wide">Enterprise-Grade Assurance</span>
                        <Shield className="w-4 h-4 text-brand-accent" />
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent">
                        Professional Service Guarantees
                      </span>
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                      Enterprise-grade <span className="text-brand-primary font-semibold">legal frameworks</span> with 
                      <span className="text-brand-accent font-semibold"> strategic partnerships</span> designed for 
                      <span className="text-brand-success font-semibold"> sustainable growth</span> at scale.
                    </p>

                    {/* Premium Enterprise Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      {/* NDA Card */}
                      <div className="group relative bg-gradient-to-br from-card via-card to-brand-primary/5 rounded-2xl border border-border/50 overflow-hidden hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-2xl opacity-60"></div>
                        
                        <div className="relative p-8 h-full flex flex-col">
                          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-brand-primary-dark mb-4 text-center">Non-Disclosure Agreements</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow text-center min-h-[4rem] flex items-end justify-center">
                            <span className="block">
                              <span className="font-medium text-foreground">Comprehensive legal protection</span> for your proprietary information with industry-standard confidentiality frameworks and secure data handling.
                            </span>
                          </p>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="w-full mt-auto"
                            leftIcon={FileText}
                            onClick={() => handleNavigation('get-started')}
                          >
                            Request NDA
                          </Button>
                        </div>
                      </div>

                      {/* SLA Card */}
                      <div className="group relative bg-gradient-to-br from-card via-card to-brand-success/5 rounded-2xl border border-border/50 overflow-hidden hover:border-brand-success/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-success/20 to-transparent rounded-full blur-2xl opacity-60"></div>
                        
                        <div className="relative p-8 h-full flex flex-col">
                          <div className="w-16 h-16 bg-gradient-to-br from-brand-success to-brand-success-dark rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <Clock className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-brand-success-dark mb-4 text-center">Service Level Agreements</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow text-center min-h-[4rem] flex items-end justify-center">
                            <span className="block">
                              <span className="font-medium text-foreground">Guaranteed response times</span> and performance metrics with enterprise-grade uptime commitments and 24/7 support availability.
                            </span>
                          </p>
                          
                          <Button 
                            size="sm" 
                            variant="success"
                            className="w-full mt-auto"
                            leftIcon={Clock}
                            onClick={() => handleNavigation('get-started')}
                          >
                            Request SLA
                          </Button>
                        </div>
                      </div>

                      {/* Ecosystem Growth Card - Updated from Brand Recognition to align with sustainability theme */}
                      <div className="group relative bg-gradient-to-br from-card via-card to-brand-success/5 rounded-2xl border border-border/50 overflow-hidden hover:border-brand-success/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-success/20 to-transparent rounded-full blur-2xl opacity-60"></div>
                        
                        <div className="relative p-8 h-full flex flex-col">
                          <div className="w-16 h-16 bg-gradient-to-br from-brand-success to-brand-success-dark rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-brand-success-dark mb-4 text-center">Ecosystem Growth Programs</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow text-center min-h-[4rem] flex items-end justify-center">
                            <span className="block">
                              <span className="font-medium text-foreground">Strategic ecosystem development</span> showcasing your open source leadership while fostering sustainable community growth.
                            </span>
                          </p>
                          
                          <Button 
                            size="sm" 
                            variant="success"
                            className="w-full mt-auto"
                            leftIcon={Globe}
                            onClick={() => handleNavigation('get-started')}
                          >
                            Request Program
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Trust Indicator - Blue to Green Journey */}
                    <div className="bg-gradient-to-r from-brand-primary/5 via-brand-accent/6 to-brand-success/5 border border-brand-accent/20 rounded-2xl p-6">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success rounded-full flex items-center justify-center shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent flex-1 max-w-32"></div>
                        <span className="text-2xl">🤝</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent flex-1 max-w-32"></div>
                      </div>
                      <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        <span className="font-semibold text-brand-primary">Swiss 501(c)(3) non-profit</span> status ensures complete transparency and enterprise alignment. 
                        <span className="font-medium text-brand-accent">Zero conflicts of interest</span> — we exist solely to 
                        <span className="font-semibold text-brand-success">strengthen sustainable open source ecosystems</span>.
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>

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