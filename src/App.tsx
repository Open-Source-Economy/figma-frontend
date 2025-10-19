import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/patterns/HeroSection';
import { MaintainerTestimonials } from './components/patterns/MaintainerTestimonials';
import { WhatIsOpenSourceEconomy } from './components/patterns/WhatIsOpenSourceEconomy';
import { HowItWorksSimple } from './components/patterns/HowItWorksSimple';
import { WinWinWinPartnership } from './components/patterns/WinWinWinPartnership';
import { FundDistributionMinimal } from './components/patterns/FundDistributionMinimal';
import { ProjectsShowcaseCompact } from './components/projects/ProjectsShowcaseCompact';
import { TestimonialsSection } from './components/patterns/TestimonialsSection';
import { UniqueSellingPoints } from './components/patterns/UniqueSellingPoints';
import { MultiCTASection } from './components/patterns/MultiCTASection';
import { BlogTeaser } from './components/patterns/BlogTeaser';
import { HowItWorksAlternating } from './components/patterns/HowItWorksAlternating';
import { SupportersSection } from './components/patterns/SupportersSection';
import { AdminPage } from './components/pages/AdminPage';
import { RoleSelectionPage } from './components/pages/RoleSelectionPage';
import { FundRedistributionPage } from './components/pages/FundRedistributionPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { BlogListingPage } from './components/pages/BlogListingPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { HeadingLevelsDemo } from './components/examples/HeadingLevelsDemo';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { FAQPage } from './components/pages/FAQPage';
import { MaintainerProfilePage } from './components/pages/MaintainerProfilePage';
import { MaintainerRegistrationPage } from './components/pages/MaintainerRegistrationPage';
import { DonationPage } from './components/pages/DonationPage';
import { MissionPage } from './components/pages/MissionPage';
import { RequestProjectPage } from './components/pages/RequestProjectPage';
import { getProjectBySlug } from './data/projectDetailData';
import { sampleMaintainerProfile } from './data/maintainerProfileData';
import { Shield, Clock } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentBlogSlug, setCurrentBlogSlug] = React.useState<string>('');
  const [currentProjectSlug, setCurrentProjectSlug] = React.useState<string>('');
  const [currentMaintainerId, setCurrentMaintainerId] = React.useState<string>('');
  const [donationProjectName, setDonationProjectName] = React.useState<string>('');

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
      { icon: Clock, text: '24/7 Support' }
    ],
    layout: "enterprise" as const
  };



  const handleNavigation = (href: string) => {
    if (href === 'admin') {
      setCurrentPage('admin');
    } else if (href === 'services') {
      setCurrentPage('services');
    } else if (href === 'projects') {
      setCurrentPage('projects');
    } else if (href === 'blog') {
      setCurrentPage('blog');
    } else if (href === 'contact') {
      setCurrentPage('contact');
    } else if (href === 'faq') {
      setCurrentPage('faq');
    } else if (href === 'mission') {
      setCurrentPage('mission');
    } else if (href === 'maintainer-profile') {
      setCurrentPage('maintainer-profile');
    } else if (href === 'maintainer-registration') {
      setCurrentPage('maintainer-registration');
    } else if (href === 'donation') {
      setCurrentPage('donation');
    } else if (href === 'request-project') {
      setCurrentPage('request-project');
    } else if (href === 'get-started') {
      setCurrentPage('role-selection');
    } else if (href === 'fund-redistribution') {
      setCurrentPage('fund-redistribution');
    } else if (href === 'heading-levels') {
      setCurrentPage('heading-levels');
    } else if (href.startsWith('#')) {
      // Handle anchor links for smooth scrolling
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage('home');
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
          setCurrentPage('maintainer-registration');
        }}
      />
      
      {/* Maintainer Testimonials Carousel - Dark Gradient Background */}
      <section className="bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-neutral-100 transition-all duration-1000 ease-in-out">
        <MaintainerTestimonials />
      </section>
      
      {/* Hero Section - Primary Dark Background */}
      <section className="bg-gradient-to-r from-brand-secondary to-brand-neutral-200 transition-all duration-1000 ease-in-out">
        <HeroSection {...HERO_CONFIG} />
      </section>

      {/* What is Open Source Economy Section - Subtle Accent Background */}
      <WhatIsOpenSourceEconomy className="bg-gradient-to-bl from-brand-neutral-200 via-brand-secondary to-brand-accent/5" />

      {/* Smooth Background Transition */}
      <div className="h-32 bg-gradient-to-b from-brand-accent/5 via-brand-secondary to-brand-neutral-100 transition-all duration-1000 ease-in-out" />

      {/* How It Works Section - Simple Process Overview */}
      <HowItWorksSimple 
        className="bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-card-blue"
        headerVisibility="normal"
      />

      {/* Win-Win-Win Partnership Section - Value Proposition */}
      <WinWinWinPartnership 
        onStartBuilding={() => setCurrentPage('role-selection')}
        className="bg-gradient-to-r from-brand-neutral-100 via-brand-secondary to-brand-neutral-200"
      />



      {/* Fund Distribution Section - Transparency & Trust */}
      <FundDistributionMinimal 
        onViewDetails={() => setCurrentPage('fund-redistribution')}
        className="bg-gradient-to-b from-brand-success/5 via-brand-secondary to-brand-accent/5"
      />

      {/* Featured Projects Section - Rich Dark Background */}
      <ProjectsShowcaseCompact
        onNavigateToProjects={() => setCurrentPage('projects')}
        onViewProject={(slug) => {
          setCurrentProjectSlug(slug);
          setCurrentPage('project-detail');
        }}
        className="bg-gradient-to-b from-brand-secondary-dark via-brand-neutral-100 to-brand-primary/10"
      />

      {/* Testimonials Section - Success Stories */}
      <TestimonialsSection 
        onReadMoreStories={() => {
          // In a real app, this would navigate to a testimonials page
          console.log('Viewing all testimonials');
        }}
        className="bg-gradient-to-br from-brand-neutral-100 via-brand-secondary to-brand-success/5"
      />

      {/* Supporters & Clients Section - Trust & Credibility */}
      <SupportersSection className="bg-gradient-to-b from-brand-secondary via-brand-neutral-200 to-brand-secondary-dark" />

      {/* Unique Selling Points Section - Premium Highlight Background */}
      <UniqueSellingPoints className="bg-gradient-to-r from-brand-accent/3 via-brand-secondary to-brand-highlight/5" />

      {/* How It Works Alternating Section - Step by Step Process */}
      <HowItWorksAlternating className="bg-gradient-to-b from-brand-secondary via-brand-neutral-200 to-brand-secondary-dark" />

      {/* Blog/Content Teaser Section - Thought Leadership */}
      <BlogTeaser 
        onReadMore={(slug) => {
          setCurrentBlogSlug(slug);
          setCurrentPage('blog-post');
        }}
        onViewAllPosts={() => {
          setCurrentPage('blog');
        }}
      />

      {/* Multi-CTA Section - Conversion Paths */}
      <MultiCTASection 
        onBookMeeting={() => setCurrentPage('role-selection')}
        onSubscribeNewsletter={() => {
          // In a real app, this would open a newsletter signup modal
          console.log('Newsletter subscription requested');
        }}
        onSupportPlatform={() => {
          // In a real app, this would navigate to donation page
          console.log('Platform support requested');
        }}
        onJoinCommunity={() => {
          // In a real app, this would open Discord invite
          console.log('Community join requested');
        }}
        className="bg-gradient-to-b from-brand-highlight/5 via-brand-secondary-dark to-brand-primary/10"
      />

      {/* Footer - Deep Background */}
      <section className="bg-gradient-to-t from-brand-neutral-50 to-brand-secondary-dark transition-all duration-1000 ease-in-out">
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
    return <HeadingLevelsDemo />;
  }

  if (currentPage === 'contact') {
    return (
      <ContactPage 
        onNavigateHome={() => setCurrentPage('home')}
        onNavItemClick={handleNavigation}
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
      // Fallback to projects page if project not found
      setCurrentPage('projects');
      return null;
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

  return <HomePage />;
}