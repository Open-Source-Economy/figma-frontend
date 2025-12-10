import './styles/globals.css';
import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/patterns/HeroSection';
import { MaintainerTestimonials } from './components/patterns/MaintainerTestimonials';
import { WhatIsOpenSourceEconomy } from './components/patterns/WhatIsOpenSourceEconomy';
import { HowItWorksSimple } from './components/patterns/HowItWorksSimple';
import { HowItWorksMinimal } from './components/patterns/HowItWorksMinimal';
import { WinWinWinPartnership } from './components/patterns/WinWinWinPartnership';
import { FundDistributionMinimal } from './components/patterns/FundDistributionMinimal';
import { ProjectsShowcaseCompact } from './components/projects/ProjectsShowcaseCompact';
import { TestimonialsSection } from './components/patterns/TestimonialsSection';
import { UniqueSellingPoints } from './components/patterns/UniqueSellingPoints';
import { MultiCTASection } from './components/patterns/MultiCTASection';
import { BlogTeaser } from './components/patterns/BlogTeaser';
import { TransformCTASection } from './components/patterns/TransformCTASection';
import { HowItWorksAlternating } from './components/patterns/HowItWorksAlternating';
import { SupportersSection } from './components/patterns/SupportersSection';
import { FeaturedVendors } from './components/patterns/FeaturedVendors';
import { PlatformSponsors } from './components/patterns/PlatformSponsors';
import { AdminPage } from './components/pages/AdminPage';
import { AdminVerificationPage } from './components/pages/AdminVerificationPage';
import { AdminOnboardingPage } from './components/pages/AdminOnboardingPage';
import { RoleSelectionPage } from './components/pages/RoleSelectionPage';
import { FundRedistributionPage } from './components/pages/FundRedistributionPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { BlogListingPage } from './components/pages/BlogListingPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { HeadingLevelsDemo } from './components/examples/HeadingLevelsDemo';
import { ServerErrorExamples } from './components/examples/ServerErrorExamples';
import { LoadingStateExamples } from './components/examples/LoadingStateExamples';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { FAQPage } from './components/pages/FAQPage';
import { MaintainerProfilePage } from './components/pages/MaintainerProfilePage';
import { MaintainerRegistrationPage } from './components/pages/MaintainerRegistrationPage';
import { MaintainersDirectoryPage } from './components/pages/MaintainersDirectoryPage';
import { DonationPage } from './components/pages/DonationPage';
import { MissionPage } from './components/pages/MissionPage';
import { RequestProjectPage } from './components/pages/RequestProjectPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { ProjectCommonPotPage } from './components/pages/ProjectCommonPotPage';
import { DeveloperOnboardingWizard } from './components/onboarding/DeveloperOnboardingWizard';
import { OnboardingSuccessPage } from './components/pages/OnboardingSuccessPage';
import { SponsorshipPage } from './components/pages/SponsorshipPage';
import { SponsorLandingPage } from './components/pages/SponsorLandingPage';
import { IndividualSponsorPage } from './components/pages/IndividualSponsorPage';
import { EnterpriseSponsorPage } from './components/pages/EnterpriseSponsorPage';
import { MaintainerDashboardPage } from './components/pages/MaintainerDashboardPage';
import { AddProjectWizard } from './components/maintainers/AddProjectWizard';
import { LoginPage } from './components/pages/LoginPage';
import { getProjectBySlug } from './data/projectDetailData';
import { sampleMaintainerProfile } from './data/maintainerProfileData';
import { getMockDataByScenario } from './data/developerOnboardingData';
import { Shield, Clock, Heart } from 'lucide-react';
import { ExampleBanner } from './components/ui/example-banner';
import { PageTransition } from './components/ui/page-transition';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentBlogSlug, setCurrentBlogSlug] = React.useState<string>('');
  const [currentProjectSlug, setCurrentProjectSlug] = React.useState<string>('');
  const [currentMaintainerId, setCurrentMaintainerId] = React.useState<string>('');
  const [donationProjectName, setDonationProjectName] = React.useState<string>('');
  const [contactDemoState, setContactDemoState] = React.useState<'idle' | 'submitting' | 'success' | 'error' | undefined>(undefined);
  const [isPageTransitioning, setIsPageTransitioning] = React.useState(false);
  
  // Developer Onboarding Mock Data Toggle
  // Set to true to pre-fill onboarding wizard with sample data for testing
  // Options: 'empty', 'step1', 'step2', 'step3', 'step4', 'step5', 'active', 'passive'
  const [onboardingMockMode, setOnboardingMockMode] = React.useState<'empty' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'active' | 'passive'>('empty');

  // Log component examples info on mount
  React.useEffect(() => {
    console.log('%c🎨 Component Examples Available!', 'font-size: 16px; font-weight: bold; color: #ff7f50;');
    console.log('%cNew reusable components are ready to use:', 'font-size: 14px; color: #94a3b8;');
    console.log('%c  ✓ ServerErrorAlert - Error handling component', 'color: #10b981;');
    console.log('%c  ✓ LoadingState - Loading indicators system', 'color: #10b981;');
    console.log('%c  ✓ AdminVerificationPage - Maintainer verification dashboard', 'color: #10b981;');
    console.log('%c\nView Examples:', 'font-size: 14px; font-weight: bold; color: #ff7f50;');
    console.log('%c  → Click "Examples" in the navigation menu', 'color: #94a3b8;');
    console.log('%c  → Try the Footer newsletter to see them in action', 'color: #94a3b8;');
    console.log('%c\nAdmin Features:', 'font-size: 14px; font-weight: bold; color: #ff7f50;');
    console.log('%c  → Navigate to Admin page, then click "Verification"', 'color: #94a3b8;');
    console.log('%c  → Or type: setCurrentPage("admin-verification") in console', 'color: #94a3b8;');
    console.log('%c\nDocumentation:', 'font-size: 14px; font-weight: bold; color: #ff7f50;');
    console.log('%c  → /ADMIN_VERIFICATION_SYSTEM.md', 'color: #94a3b8;');
    console.log('%c  → /PROJECT_VERIFICATION_SYSTEM.md', 'color: #94a3b8;');
    console.log('%c  → /SERVER_ERROR_ALERT.md', 'color: #94a3b8;');
    console.log('%c  → /LOADING_STATE.md', 'color: #94a3b8;');
    console.log('%c  → /QUICK_START.md', 'color: #94a3b8;');
    console.log('%c\\nSponsorship Pages:', 'font-size: 14px; font-weight: bold; color: #ff7f50;');
    console.log('%c  → setCurrentPage("sponsor-landing") - Sponsor decision page', 'color: #94a3b8;');
    console.log('%c  → setCurrentPage("sponsor-individual") - Individual support', 'color: #94a3b8;');
    console.log('%c  → setCurrentPage("sponsor-enterprise") - Enterprise partnerships', 'color: #94a3b8;');
  }, []);

  // Scroll to top on page navigation and hide transition
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Hide transition after content is ready
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentPage, currentBlogSlug, currentProjectSlug]);

  // Enterprise-focused hero configuration
  const HERO_CONFIG = {
    badge: "Enterprise Open Source Solutions",
    headline: "Connect Your Enterprise with Expert Maintainers",
    description: "Get direct access to the world's most experienced open source maintainers under a single enterprise contract. Prioritize bug fixes, add features, and ensure long-term support for your critical dependencies.",
    actions: [
      { text: 'Get Started Today', variant: 'default' as const, icon: true },
      { text: 'Schedule Demo', variant: 'outline' as const }
    ],
    trustIndicators: [
      { icon: Shield, text: 'SOC 2 Compliant' },
      { icon: Clock, text: '24/7 Support' },
      { icon: Heart, text: '501(c)(3) Non-Profit' }
    ],
    layout: "split" as const,
    imageSrc: "https://images.unsplash.com/photo-1559223607-b0f2c487d937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJzJTIwdGFsa2luZyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzYwNzc1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Two developers in discussion about open source projects"
  };



  const handleNavigation = (href: string) => {
    // Don't show transition for anchor links
    if (!href.startsWith('#')) {
      setIsPageTransitioning(true);
    }
    
    if (href === 'admin') {
      setCurrentPage('admin');
    } else if (href === 'admin-verification') {
      setCurrentPage('admin-verification');
    } else if (href === 'services') {
      setCurrentPage('services');
    } else if (href === 'projects') {
      setCurrentPage('projects');
    } else if (href === 'blog') {
      setCurrentPage('blog');
    } else if (href === 'contact') {
      setCurrentPage('contact');
      setContactDemoState(undefined);
    } else if (href === 'contact-success') {
      setCurrentPage('contact');
      setContactDemoState('success');
    } else if (href === 'contact-error') {
      setCurrentPage('contact');
      setContactDemoState('error');
    } else if (href === 'contact-submitting') {
      setCurrentPage('contact');
      setContactDemoState('submitting');
    } else if (href === 'faq') {
      setCurrentPage('faq');
    } else if (href === 'mission') {
      setCurrentPage('mission');
    } else if (href === 'maintainer-profile') {
      setCurrentPage('maintainer-profile');
    } else if (href === 'maintainer-registration') {
      setCurrentPage('maintainer-registration');
    } else if (href === 'maintainers-directory') {
      setCurrentPage('maintainers-directory');
    } else if (href === 'donation') {
      setCurrentPage('donation');
    } else if (href === 'request-project') {
      setCurrentPage('request-project');
    } else if (href === 'how-it-works') {
      setCurrentPage('how-it-works');
    } else if (href === 'privacy-policy') {
      setCurrentPage('privacy-policy');
    } else if (href === 'get-started') {
      setCurrentPage('role-selection');
    } else if (href === 'fund-redistribution') {
      setCurrentPage('fund-redistribution');
    } else if (href === 'heading-levels') {
      setCurrentPage('heading-levels');
    } else if (href === 'error-examples') {
      setCurrentPage('error-examples');
    } else if (href === 'loading-examples') {
      setCurrentPage('loading-examples');
    } else if (href === 'developer-onboarding') {
      setCurrentPage('developer-onboarding');
    } else if (href === 'onboarding-success') {
      setCurrentPage('onboarding-success');
    } else if (href === 'common-pot') {
      setCurrentPage('common-pot');
    } else if (href === 'project-detail') {
      setCurrentProjectSlug('react'); // Default to React project as example
      setCurrentPage('project-detail');
    } else if (href === 'sponsorship' || href === 'sponsor') {
      setCurrentPage('sponsor-landing');
    } else if (href === 'sponsor-individual') {
      setCurrentPage('sponsor-individual');
    } else if (href === 'sponsor-enterprise') {
      setCurrentPage('sponsor-enterprise');
    } else if (href === 'maintainer-dashboard') {
      setCurrentPage('maintainer-dashboard');
    } else if (href === 'add-project') {
      setCurrentPage('add-project');
    } else if (href === 'login') {
      setCurrentPage('login');
    } else if (href === 'home' || href === '/') {
      setCurrentPage('home');
    } else if (href.startsWith('#')) {
      // Handle anchor links for smooth scrolling
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Unknown route - show 404
      setCurrentPage('not-found');
    }
  };

  const handleRoleSelection = (role: string) => {
    // In a real app, this would navigate to role-specific onboarding
    console.log(`Selected role: ${role}`);
    // For now, navigate back to home
    setCurrentPage('home');
  };

  const HomePage = () => (
    <div className="min-h-screen">
      <Header 
        onNavItemClick={handleNavigation}
        ctaText="Get Started Today"
        onCtaClick={() => setCurrentPage('role-selection')}
        onDeveloperRegister={() => {
          setCurrentPage('developer-onboarding');
        }}
      />
      
      {/* Example Components Banner */}
      <ExampleBanner onNavigateToExamples={() => setCurrentPage('loading-examples')} />
      
      {/* Maintainer Testimonials - Social Proof Opening with Warm Glow */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-neutral-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-highlight/10 rounded-full blur-3xl opacity-30" />
        <MaintainerTestimonials />
      </section>
      
      {/* Hero Section - Primary CTA with Premium Navy Foundation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-neutral-100 via-brand-secondary to-brand-secondary-dark">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-highlight/15 rounded-full blur-3xl opacity-50" />
        <HeroSection {...HERO_CONFIG} />
      </section>

      {/* What is Open Source Economy - Educational Foundation */}
      <WhatIsOpenSourceEconomy className="bg-gradient-to-br from-brand-secondary-dark via-brand-neutral-100 to-brand-card-blue" />

      {/* How It Works - Minimal Version for Home Page */}
      <HowItWorksMinimal 
        className="bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-200"
        onScheduleDemo={() => setCurrentPage('contact')}
        onLearnMore={() => setCurrentPage('how-it-works')}
      />

      {/* Win-Win-Win Partnership - Value Proposition */}
      <WinWinWinPartnership 
        onStartBuilding={() => setCurrentPage('role-selection')}
        className="bg-gradient-to-br from-brand-neutral-200 via-brand-secondary to-brand-card-blue-dark"
      />

      {/* Fund Distribution - Transparency with Semantic Green Accents */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-card-blue-dark via-brand-secondary to-brand-neutral-100">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-success/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-success/10 rounded-full blur-2xl opacity-30" />
        <FundDistributionMinimal 
          onViewDetails={() => setCurrentPage('fund-redistribution')}
        />
      </div>

      {/* Featured Projects - Portfolio Showcase with Deep Navy */}
      <ProjectsShowcaseCompact
        onNavigateToProjects={() => setCurrentPage('projects')}
        onViewProject={(slug) => {
          setCurrentProjectSlug(slug);
          setCurrentPage('project-detail');
        }}
        className="bg-gradient-to-br from-brand-neutral-100 via-brand-secondary-dark to-brand-card-blue"
      />

      {/* Featured Vendors - Open Source Partners */}
      <FeaturedVendors 
        className="bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-200"
        onVendorClick={(vendorName) => {
          console.log('Viewing vendor:', vendorName);
          // In production, would navigate to vendor detail page
        }}
      />

      {/* Testimonials Section - Success Stories */}
      <TestimonialsSection 
        onReadMoreStories={() => {
          console.log('Viewing all testimonials');
        }}
        className="bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-card-blue-dark"
      />

      {/* Platform Sponsors - Leading Organizations with Visual Hierarchy */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-card-blue-dark via-brand-secondary to-brand-neutral-200">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-success/12 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl opacity-30" />
        <PlatformSponsors 
          onBecomeSponsorClick={() => setCurrentPage('sponsor-landing')}
        />
      </div>

      {/* Supporters Section - Trust & Mission with Green Accents */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-neutral-200 via-brand-secondary to-brand-secondary-dark">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-success/12 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-success/8 rounded-full blur-2xl opacity-30" />
        <SupportersSection />
      </div>

      {/* Unique Selling Points - Differentiation with Warm Accents */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-secondary-dark via-brand-neutral-100 to-brand-card-blue">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-brand-accent/8 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-brand-highlight/8 rounded-full blur-3xl opacity-40" />
        <UniqueSellingPoints />
      </div>

      {/* How It Works Alternating - Detailed Process */}
      <HowItWorksAlternating className="bg-gradient-to-br from-brand-card-blue via-brand-secondary to-brand-neutral-200" />

      {/* Blog Teaser - Thought Leadership with Navy Depth */}
      <BlogTeaser 
        onReadMore={(slug) => {
          setCurrentBlogSlug(slug);
          setCurrentPage('blog-post');
        }}
        onViewAllPosts={() => {
          setCurrentPage('blog');
        }}
        className="bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-secondary-dark"
      />

      {/* Transform CTA - Primary Conversion with Warm Brand Glow */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-secondary-dark via-brand-neutral-100 to-brand-card-blue">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-highlight/20 rounded-full blur-3xl opacity-50" />
        <TransformCTASection 
          onGetStarted={() => setCurrentPage('role-selection')}
          onScheduleDemo={() => setCurrentPage('contact')}
        />
      </div>

      {/* Multi-CTA Section - Final Conversion Opportunities */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-secondary-dark">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-highlight/10 rounded-full blur-3xl opacity-40" />
        <MultiCTASection 
          onBookMeeting={() => setCurrentPage('role-selection')}
          onSubscribeNewsletter={() => {
            console.log('Newsletter subscription requested');
          }}
          onSupportPlatform={() => {
            console.log('Platform support requested');
          }}
          onJoinCommunity={() => {
            console.log('Community join requested');
          }}
        />
      </div>

      {/* Footer - Deep Foundation Closing */}
      <section className="bg-gradient-to-t from-brand-neutral-50 via-brand-secondary-dark to-brand-secondary">
        <Footer onNavItemClick={handleNavigation} />
      </section>
    </div>
  );

  // Simple page router
  if (currentPage === 'admin') {
    return (
      <AdminPage onNavigateHome={() => setCurrentPage('home')} />
    );
  }

  if (currentPage === 'admin-verification') {
    return (
      <AdminVerificationPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'role-selection') {
    return (
      <RoleSelectionPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateToRole={handleRoleSelection}
      />
    );
  }

  if (currentPage === 'fund-redistribution') {
    return (
      <FundRedistributionPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'services') {
    return (
      <ServicesPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'projects') {
    return (
      <ProjectsPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onViewProject={(slug) => {
          setCurrentProjectSlug(slug);
          setCurrentPage('project-detail');
        }}
      />
    );
  }

  if (currentPage === 'blog') {
    return (
      <BlogListingPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onViewPost={(slug) => {
          setCurrentBlogSlug(slug);
          setCurrentPage('blog-post');
        }}
      />
    );
  }

  if (currentPage === 'blog-post') {
    return (
      <BlogPostPage 
        slug={currentBlogSlug}
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onViewPost={(slug) => {
          setCurrentBlogSlug(slug);
          setCurrentPage('blog-post');
        }}
        onBackToBlog={() => setCurrentPage('blog')}
      />
    );
  }

  if (currentPage === 'heading-levels') {
    return (
      <HeadingLevelsDemo
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'error-examples') {
    return (
      <ServerErrorExamples
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'loading-examples') {
    return (
      <LoadingStateExamples
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'contact') {
    return (
      <ContactPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        demoState={contactDemoState}
      />
    );
  }

  if (currentPage === 'faq') {
    return (
      <FAQPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'maintainer-profile') {
    return (
      <MaintainerProfilePage
        profile={sampleMaintainerProfile}
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onViewProject={(slug) => {
          setCurrentProjectSlug(slug);
          setCurrentPage('project-detail');
        }}
      />
    );
  }

  if (currentPage === 'donation') {
    return (
      <DonationPage
        projectName={donationProjectName}
        projectSlug={currentProjectSlug}
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onBackToProject={() => setCurrentPage('project-detail')}
      />
    );
  }

  if (currentPage === 'maintainer-registration') {
    return (
      <MaintainerRegistrationPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'maintainers-directory') {
    return (
      <MaintainersDirectoryPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        isAdmin={false} // Set to true to enable admin controls
      />
    );
  }

  if (currentPage === 'request-project') {
    return (
      <RequestProjectPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onBackToProjects={() => setCurrentPage('projects')}
      />
    );
  }

  if (currentPage === 'mission') {
    return (
      <MissionPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'project-detail') {
    const project = getProjectBySlug(currentProjectSlug);
    if (!project) {
      // Show 404 if project not found
      return (
        <NotFoundPage 
          onNavigateHome={() => setCurrentPage('home')}
          onNavItemClick={handleNavigation}
        />
      );
    }
    
    return (
      <ProjectDetailPage
        project={project}
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onBackToProjects={() => setCurrentPage('projects')}
        onDonate={() => {
          setDonationProjectName(project.name);
          setCurrentPage('donation');
        }}
      />
    );
  }

  if (currentPage === 'how-it-works') {
    return (
      <HowItWorksPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onScheduleDemo={() => setCurrentPage('contact')}
      />
    );
  }

  if (currentPage === 'privacy-policy') {
    return (
      <PrivacyPolicyPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'developer-onboarding') {
    // Load mock data based on the selected scenario
    const mockData = onboardingMockMode !== 'empty' ? getMockDataByScenario(onboardingMockMode) : undefined;
    
    return (
      <DeveloperOnboardingWizard
        onComplete={(data) => {
          console.log('Onboarding completed:', data);
          // In production, this would submit to backend
          setCurrentPage('onboarding-success');
        }}
        onCancel={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        initialData={mockData}
      />
    );
  }

  if (currentPage === 'onboarding-success') {
    return (
      <OnboardingSuccessPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'common-pot') {
    return (
      <ProjectCommonPotPage
        projectSlug={currentProjectSlug || 'react'}
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
        onBecomeProvider={() => setCurrentPage('developer-onboarding')}
      />
    );
  }

  if (currentPage === 'sponsorship') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <SponsorshipPage onNavigate={handleNavigation} />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'sponsor-landing') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <SponsorLandingPage onNavigate={handleNavigation} />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'sponsor-individual') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <IndividualSponsorPage onNavigate={handleNavigation} />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'sponsor-enterprise') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <EnterpriseSponsorPage onNavigate={handleNavigation} />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'maintainer-dashboard') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <MaintainerDashboardPage 
          onNavigateHome={() => setCurrentPage('home')}
          onNavItemClick={handleNavigation}
          onAddProject={() => setCurrentPage('add-project')}
          onManageProjectServices={(projectId) => {
            console.log('Managing services for project:', projectId);
            // In production, would open ManageProjectServicesDialog with project data
          }}
        />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'add-project') {
    return (
      <>
        <Header onNavItemClick={handleNavigation} />
        <AddProjectWizard
          onComplete={(project, services, addToCatalog) => {
            console.log('Project added:', project);
            console.log('Services:', services);
            console.log('Add to catalog:', addToCatalog);
            // In production, would save to backend
            setCurrentPage('maintainer-dashboard');
          }}
          onCancel={() => setCurrentPage('maintainer-dashboard')}
          existingServices={[
            {
              id: '1',
              name: 'Bug Fixing',
              category: 'Development',
              rate: 150,
              projectIds: [],
              responseTime: '24 hours'
            },
            {
              id: '2',
              name: 'Code Review',
              category: 'Development',
              rate: 100,
              projectIds: [],
              responseTime: '48 hours'
            },
            {
              id: '3',
              name: 'Feature Development',
              category: 'Development',
              rate: 200,
              projectIds: [],
              responseTime: '1 week'
            }
          ]}
        />
        <Footer onNavItemClick={handleNavigation} />
      </>
    );
  }

  if (currentPage === 'login') {
    return (
      <LoginPage
        onNavigateHome={() => setCurrentPage('home')}
        onLoginSuccess={() => setCurrentPage('maintainer-dashboard')}
      />
    );
  }

  if (currentPage === 'admin') {
    return (
      <AdminPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'admin-onboarding') {
    return (
      <AdminOnboardingPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'admin-verification') {
    return (
      <AdminVerificationPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  if (currentPage === 'not-found') {
    return (
      <NotFoundPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
      />
    );
  }

  return (
    <>
      <PageTransition isLoading={isPageTransitioning} />
      <HomePage />
      <Toaster />
    </>
  );
}