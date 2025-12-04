import React, { useRef } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SectionHeader } from '../ui/section-header';
import { ProjectHero } from '../projects/ProjectHero';
import { MaintainersList } from '../projects/MaintainersList';
import { TeamServices } from '../projects/TeamServices';
import { DonationOptions } from '../projects/DonationOptions';
import { ServicesPricing } from '../projects/ServicesPricing';
import { ConsultationRequestForm } from '../projects/ConsultationRequestForm';
import { KeyFeaturesGrid } from '../projects/KeyFeaturesGrid';
import { TrustSignals } from '../projects/TrustSignals';
import { FundDistributionVisualization } from '../projects/FundDistributionVisualization';
import { CaseStudyCard } from '../projects/CaseStudyCard';
import { TechnicalQuickStart } from '../projects/TechnicalQuickStart';
import { RoadmapTimeline } from '../projects/RoadmapTimeline';
import { ProjectFAQ } from '../projects/ProjectFAQ';
import { ProjectSupporters } from '../projects/ProjectSupporters';
import { FeaturedVendors } from '../patterns/FeaturedVendors';
import { Button } from '../ui/button';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, BadgeDollarSign, Calendar, Award } from 'lucide-react';
import type { ProjectDetail } from '../../data/projectDetailData';
import { ServiceCategoryCard } from '../projects/ServiceCategoryCard';
import { serviceCategories } from '../../data/servicesData';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onBackToProjects: () => void;
  onDonate?: () => void;
}

export function ProjectDetailPage({
  project,
  onNavigateHome,
  onNavItemClick,
  onBackToProjects,
  onDonate
}: ProjectDetailPageProps) {
  const consultationRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);
  const [showAllMaintainers, setShowAllMaintainers] = React.useState(false);
  const [expandedServiceCategories, setExpandedServiceCategories] = React.useState<Set<string>>(new Set());

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleServiceCategory = (categoryType: string) => {
    setExpandedServiceCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryType)) {
        newSet.delete(categoryType);
      } else {
        newSet.add(categoryType);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-brand-secondary">
      {/* Header */}
      <Header
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
        onDeveloperRegister={() => onNavItemClick('get-started')}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Button
          variant="ghost"
          onClick={onBackToProjects}
          className="text-brand-neutral-700 hover:text-brand-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </div>

      {/* Hero */}
      <ProjectHero
        name={project.name}
        tagline={project.tagline}
        logo={project.logo}
        category={project.category}
        stats={{
          stars: project.stars,
          downloads: project.downloads,
          version: project.version,
          license: project.license
        }}
        githubUrl={project.githubUrl}
        docsUrl={project.docsUrl}
        onScheduleConsultation={scrollToConsultation}
        onDonate={onDonate || scrollToDonation}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl space-y-24">
        {/* Maintainers */}
        <section>
          <SectionHeader
            title="Meet the Maintainers"
            description="Get direct access to the experts behind the project"
            spacing="lg"
            visibility="normal"
          />
          <MaintainersList
            maintainers={showAllMaintainers ? project.maintainers : project.maintainers.slice(0, 2)}
            projectName={project.name}
          />
          {project.maintainers.length > 2 && (
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAllMaintainers(!showAllMaintainers)}
                className="text-brand-neutral-700 hover:text-brand-accent border-brand-neutral-300"
              >
                {showAllMaintainers 
                  ? 'Show Less' 
                  : `See All ${project.maintainers.length} Maintainers`}
              </Button>
            </div>
          )}
        </section>

        {/* Team Services */}
        <section>
          <SectionHeader
            title="Professional Services from Expert Maintainers"
            description="Get enterprise-grade support directly from the team that built and maintains this project"
            spacing="lg"
            visibility="normal"
          />
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-brand-neutral-100/60 to-brand-neutral-100/30 rounded-lg border border-brand-neutral-300/60 shadow-sm">
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-accent/10 border border-brand-accent/20">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              </div>
              <span className="text-brand-neutral-800 text-sm">NDAs Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-brand-neutral-100/60 to-brand-neutral-100/30 rounded-lg border border-brand-neutral-300/60 shadow-sm">
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-accent/10 border border-brand-accent/20">
                <Clock className="w-3.5 h-3.5 text-brand-accent" />
              </div>
              <span className="text-brand-neutral-800 text-sm">SLA Guarantees Possible</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-brand-neutral-100/60 to-brand-neutral-100/30 rounded-lg border border-brand-neutral-300/60 shadow-sm">
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-accent/10 border border-brand-accent/20">
                <Award className="w-3.5 h-3.5 text-brand-accent" />
              </div>
              <span className="text-brand-neutral-800 text-sm">Brand Recognition Benefits</span>
            </div>
          </div>
          
          {/* Service Categories - Accordion Pattern */}
          <div className="space-y-4">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.type}
                title={category.title}
                description={category.description}
                icon={category.icon}
                accentColor={category.accentColor}
                services={category.services}
                isExpanded={expandedServiceCategories.has(category.type)}
                onToggle={() => toggleServiceCategory(category.type)}
              />
            ))}
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-20 border-t border-border bg-gradient-to-br from-brand-card-blue via-brand-card-blue-light to-brand-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center bg-brand-card-blue-dark/50 border border-brand-accent/20 rounded-2xl p-16 shadow-lg shadow-brand-accent/10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-8">
                <Calendar className="w-10 h-10 text-brand-accent" />
              </div>
              
              <h2 className="text-brand-neutral-950 mb-6">
                Work Directly with Expert Maintainers
              </h2>
              <p className="text-brand-neutral-700 mb-8 max-w-2xl mx-auto">
                Get expert guidance, custom development, and enterprise support tailored to your organization's needs. All services include flexible terms and transparent pricing.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-success/10 rounded-md border border-brand-success/30">
                  <ShieldCheck className="w-4 h-4 text-brand-success" />
                  <span className="text-brand-neutral-700 text-sm">NDA Available</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 rounded-md border border-brand-accent/30">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span className="text-brand-neutral-700 text-sm">SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-warning/10 rounded-md border border-brand-warning/30">
                  <BadgeDollarSign className="w-4 h-4 text-brand-warning" />
                  <span className="text-brand-neutral-700 text-sm">Custom Pricing</span>
                </div>
              </div>

              {/* Primary CTA */}
              <Button 
                size="lg"
                onClick={scrollToConsultation}
                className="bg-brand-accent hover:bg-brand-accent-dark text-white shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/30 transition-all"
              >
                Schedule a Consultation
              </Button>
              <p className="text-brand-neutral-600 text-sm mt-4">
                Discuss your needs and get a custom quote for your organization
              </p>
            </div>
          </div>
        </section>

        {/* Fund Distribution */}
        <section>
          <FundDistributionVisualization
            distribution={project.fundDistribution}
            projectName={project.name}
          />
        </section>

        {/* Supporters */}
        <section>
          <ProjectSupporters
            tiers={project.supporterTiers}
            individualSupporters={project.individualSupporters}
            projectName={project.name}
            onBecomeSupporterClick={onDonate || scrollToDonation}
          />
        </section>

        {/* Featured Vendors */}
        <section>
          <FeaturedVendors 
            onVendorClick={(vendorName) => {
              console.log('Viewing vendor:', vendorName);
              // In production, would navigate to vendor detail page
            }}
          />
        </section>

        {/* FAQ */}
        <section>
          <ProjectFAQ items={project.faqItems} />
        </section>

        {/* Final CTAs */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-card-blue via-brand-card-blue-light to-brand-accent/5 border border-brand-accent/30 rounded-2xl p-16 shadow-xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-transparent to-brand-highlight/5 pointer-events-none" />
          
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6 shadow-lg shadow-brand-accent/10">
              <CheckCircle2 className="w-8 h-8 text-brand-accent" />
            </div>
            
            {/* Heading */}
            <h3 className="text-brand-neutral-950 mb-4">
              Ready to Get Expert Support for {project.name}?
            </h3>
            
            {/* Description */}
            <p className="text-brand-neutral-700 mb-10 max-w-2xl mx-auto">
              Join thousands of companies that trust Open Source Economy for their critical dependencies
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToConsultation}
                className="bg-brand-accent hover:bg-brand-accent-dark text-white shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/30 transition-all"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToDonation}
                className="border-brand-neutral-300 hover:border-brand-accent hover:bg-brand-accent/5 text-brand-neutral-800 hover:text-brand-accent transition-all"
              >
                Support {project.name}
              </Button>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
          <p className="text-brand-neutral-600 text-sm text-center max-w-4xl mx-auto">
            This collective is not officially affiliated with the Apache Pekko project (or the Apache Software Foundation) 
            but aims to support development and testing work related to that project. 
            Apache Pekko will continue to be Free and Open Source Software.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}