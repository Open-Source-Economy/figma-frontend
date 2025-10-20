import './styles/globals.css';
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
import { TransformCTASection } from './components/patterns/TransformCTASection';
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
import { Shield, Clock, Heart } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentBlogSlug, setCurrentBlogSlug] = React.useState<string>('');
  const [currentProjectSlug, setCurrentProjectSlug] = React.useState<string>('');
  const [currentMaintainerId, setCurrentMaintainerId] = React.useState<string>('');
  const [donationProjectName, setDonationProjectName] = React.useState<string>('');

  // Scroll to top on page navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
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

      {/* How It Works Simple - Process Overview with Navy Base */}
      <HowItWorksSimple 
        className="bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-200"
        headerVisibility="normal"
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

      {/* Testimonials Section - Success Stories */}
      <TestimonialsSection 
        onReadMoreStories={() => {
          console.log('Viewing all testimonials');
        }}
        className="bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-200"
      />

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