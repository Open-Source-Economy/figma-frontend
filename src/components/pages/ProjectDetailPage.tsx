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
import { Button } from '../ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
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
          
          <div className="space-y-6">
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

            {/* Value Proposition & CTA */}
            <div className="bg-brand-card-blue border border-brand-accent/20 rounded-xl p-6 text-center">
              <p className="text-brand-neutral-700 max-w-2xl mx-auto mb-6">
                Work directly with the maintainers who know this project inside and out. Get expert guidance, custom development, and enterprise support tailored to your organization's needs.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-6 pb-6 border-b border-brand-neutral-300">
                <div className="flex items-center gap-2 text-brand-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                  <span className="text-sm">NDA Available</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                  <span className="text-sm">SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                  <span className="text-sm">Custom Pricing</span>
                </div>
              </div>

              {/* Primary CTA */}
              <Button 
                size="lg"
                onClick={scrollToConsultation}
              >
                Schedule a Consultation
              </Button>
              <p className="text-brand-neutral-600 text-sm mt-3">
                Discuss your needs and get a custom quote for your organization
              </p>
            </div>
          </div>
        </section>

        {/* Fund Distribution */}
        <section>
          <SectionHeader
            title="Transparent Fund Distribution"
            description="See exactly how your investment supports the ecosystem"
            spacing="lg"
            visibility="normal"
          />
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

        {/* FAQ */}
        <section>
          <ProjectFAQ items={project.faqItems} />
        </section>

        {/* Final CTAs */}
        <section className="bg-gradient-to-r from-brand-accent/10 via-brand-highlight/10 to-brand-accent/10 border border-brand-accent/20 rounded-xl p-12 text-center">
          <h3 className="text-brand-neutral-900 mb-4">
            Ready to Get Expert Support for {project.name}?
          </h3>
          <p className="text-brand-neutral-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Open Source Economy for their critical dependencies
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={scrollToConsultation}>
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToDonation}>
              Support {project.name}
            </Button>
  
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