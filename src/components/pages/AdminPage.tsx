import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SectionLayout } from '../layout/SectionLayout';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { Logo } from '../brand/Logo';
import { HeroSection } from '../patterns/HeroSection';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { StatsSection } from '../patterns/StatsSection';
import { TestimonialSection } from '../patterns/TestimonialSection';
import { CallToAction } from '../patterns/CallToAction';
import { HowItWorksShowcase } from '../patterns/HowItWorksShowcase';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';
import { FormField } from '../forms/FormField';
import { ColorShowcase } from '../showcase/ColorShowcase';
import { TypographyShowcase } from '../showcase/TypographyShowcase';
import { FormsShowcase } from '../showcase/FormsShowcase';
import { ComponentsShowcase } from '../showcase/ComponentsShowcase';
import { ProjectsDemo } from '../projects/ProjectsDemo';
import { MaintainerTestimonials } from '../patterns/MaintainerTestimonials';
import { MaintainerTestimonialsCompact } from '../patterns/MaintainerTestimonialsCompact';  
import { MaintainerTestimonialsTimeline } from '../patterns/MaintainerTestimonialsTimeline';
import { MaintainerTestimonialsGrid } from '../patterns/MaintainerTestimonialsGrid';
import { MaintainerTestimonialsMinimal } from '../patterns/MaintainerTestimonialsMinimal';
import { MaintainerTestimonialsSplit } from '../patterns/MaintainerTestimonialsSplit';
import { features, stats, testimonials, designSystemSections } from '../../data/mockData';
import { 
  Users,
  Globe,
  Heart,
  Shield,
  Clock
} from 'lucide-react';

// Reusable configuration constants for DRY principles
const HERO_CONFIG = {
  badge: "Enterprise Open Source Solutions",
  headline: "Connect Your Enterprise with Expert Maintainers",
  description: "Access enterprise-grade open source services from the world's most experienced maintainers. Secure, scalable, and supported.",
  actions: [
    { text: 'Get Started Today', variant: 'default' as const, icon: true },
    { text: 'Schedule Consultation', variant: 'outline' as const }
  ],
  trustIndicators: [
    { icon: Shield, text: 'SOC 2 Compliant' },
    { icon: Clock, text: '24/7 Support' }
  ],
  imageSrc: "https://images.unsplash.com/photo-1559223607-b0f2c487d937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc291cmNlJTIwdGVjaG5vbG9neSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4NzA1Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  layout: "enterprise" as const
};

const BRAND_VALUES = [
  {
    icon: Users,
    title: "Collaborative",
    description: "Interconnected nodes in our logo represent community collaboration",
    bgColor: "bg-brand-primary"
  },
  {
    icon: Globe,
    title: "Global", 
    description: "Supporting open source projects worldwide with accessible design",
    bgColor: "bg-brand-secondary"
  },
  {
    icon: Heart,
    title: "Sustainable",
    description: "Building long-term value through sustainable funding models", 
    bgColor: "bg-brand-accent"
  }
];

const CTA_ACTIONS = [
  { text: 'Get Started', variant: 'default' as const },
  { text: 'Learn More', variant: 'outline' as const }
];

interface AdminPageProps {
  onNavigateHome?: () => void;
}

export function AdminPage({ onNavigateHome }: AdminPageProps = {}) {
  const [currentSection, setCurrentSection] = React.useState('hero');

  const renderHeroSection = () => (
    <div className="space-y-12">
      <HeroSection {...HERO_CONFIG} />

      {/* Brand Overview Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-brand-secondary/20 bg-brand-secondary/5">
          <CardContent className="p-8">
            <div className="mb-8">
              <Logo size="xl" variant="secondary" className="justify-center mb-6" />
              <SectionHeader
                title="Open Source Economy Branding"
                description="Our brand identity represents collaboration, transparency, and sustainable growth in the open source ecosystem."
                maxWidth="2xl"
              />
            </div>
            
            <ShowcaseGrid columns={3}>
              {BRAND_VALUES.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="text-center p-6 bg-background rounded-lg border">
                    <div className={`w-12 h-12 ${value.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Typography.H4>{value.title}</Typography.H4>
                    <Typography.BodySmall className="text-muted-foreground">
                      {value.description}
                    </Typography.BodySmall>
                  </div>
                );
              })}
            </ShowcaseGrid>
          </CardContent>
        </Card>
      </div>

      <FeatureGrid
        title="Our Mission & Values"
        description="Building a sustainable open source economy through collaboration, transparency, and community-driven innovation."
        features={features}
        columns={3}
      />

      <StatsSection
        title="Community Impact"
        stats={stats}
        variant="highlighted"
      />

      <TestimonialSection
        title="What Our Community Says"
        description="Hear from contributors, maintainers, and organizations who are part of our ecosystem."
        testimonials={testimonials}
      />

      <CallToAction
        title="Join the Open Source Economy"
        description="Be part of building a sustainable future for open source development. Connect with like-minded developers, contribute to meaningful projects, and help shape the future of collaborative innovation."
        emailCapture={{
          placeholder: 'Enter your email to get started',
          buttonText: 'Join Community',
          onSubmit: (email) => console.log('Email submitted:', email)
        }}
        variant="highlighted"
      />
    </div>
  );

  const renderTypographySection = () => (
    <div className="space-y-8">
      <SectionHeader
        title="Typography System"
        description="Our typography system provides consistent and accessible text styling across all components."
      />
      <TypographyShowcase />
    </div>
  );

  const renderColorsSection = () => (
    <div className="space-y-8">
      <SectionHeader
        title="Colors & Branding"
        description="Our premium dark-first design system features navy foundations, vibrant purple accents, warm coral highlights, and semantic emerald success states. Each color serves a specific purpose: purple for primary actions, coral for secondary accents, green for true success, and amber for warnings."
        maxWidth="4xl"
      />
      <ColorShowcase />
    </div>
  );

  const renderFormsSection = () => <FormsShowcase />;

  const renderComponentsSection = () => <ComponentsShowcase />;

  const renderPatternsSection = () => (
    <div className="space-y-0">
      <div className="pb-6">
        <SectionHeader
          title="Pattern Library"
          description="Reusable pattern components that combine our design system elements into common UI patterns."
          spacing="md"
        />
      </div>

      <Separator />

      <HeroSection {...HERO_CONFIG} />

      <Separator />

      <FeatureGrid
        title="Feature Grid Pattern"
        description="Displays features in a responsive grid with icons, badges, descriptions, and optional links."
        features={features.slice(0, 3)}
        columns={3}
        variant="minimal"
      />

      <Separator />

      <StatsSection
        title="Statistics Pattern"
        description="Showcase important metrics and achievements with flexible layout options."
        stats={stats}
        layout="horizontal"
      />

      <Separator />

      <TestimonialSection
        title="Testimonial Pattern"
        description="Display customer feedback and reviews in an engaging grid layout."
        testimonials={testimonials.slice(0, 2)}
      />

      <Separator />

      <CallToAction
        title="Call to Action Pattern"
        description="Encourage user engagement with email capture or action buttons in various styles."
        actions={CTA_ACTIONS}
      />
    </div>
  );

  const renderHowItWorksSection = () => (
    <HowItWorksShowcase onNavigation={handleNavigation} />
  );

  const renderProjectsSection = () => (
    <ProjectsDemo />
  );

  const renderTestimonialsSection = () => (
    <div className="space-y-0">
      <div className="pb-8">
        <SectionHeader
          title="Testimonial Carousel Variations"
          description="Different approaches to displaying maintainer testimonials with various layouts and interactions."
          spacing="lg"
        />
      </div>

      <Separator />

      {/* Original Large Photo Design */}
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Original - Large Photo with Overlay</h3>
            <p className="text-muted-foreground">Hero-style carousel with dramatic large photos and overlaid quotes for maximum visual impact.</p>
          </div>
        </div>
        <MaintainerTestimonials />
      </div>

      <Separator />

      {/* Compact Cards */}  
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Compact Cards</h3>
            <p className="text-muted-foreground">Side-by-side cards with smaller photos and concise testimonials, perfect for overview sections.</p>
          </div>
        </div>
        <MaintainerTestimonialsCompact />
      </div>

      <Separator />

      {/* Timeline */}
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Timeline Story</h3>
            <p className="text-muted-foreground">Vertical timeline layout showing the journey of maintainers joining the platform with detailed stories.</p>
          </div>
        </div>
        <MaintainerTestimonialsTimeline />
      </div>

      <Separator />

      {/* Grid Layout */}
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Interactive Grid</h3>
            <p className="text-muted-foreground">Grid layout showing multiple testimonials at once with expandable details and community stats.</p>
          </div>
        </div>
        <MaintainerTestimonialsGrid />
      </div>

      <Separator />

      {/* Minimal Typography */}
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Minimal Typography</h3>
            <p className="text-muted-foreground">Clean, typography-focused design that puts the quotes front and center with subtle navigation.</p>
          </div>
        </div>
        <MaintainerTestimonialsMinimal />
      </div>

      <Separator />

      {/* Split Screen */}
      <div className="mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Split Screen Experience</h3>
            <p className="text-muted-foreground">Cinematic split-screen layout with large photos and alternating personal/enterprise perspectives.</p>
          </div>
        </div>
        <MaintainerTestimonialsSplit />
      </div>
    </div>
  );

  const handleNavigation = (href: string) => {
    if (href === 'admin') {
      // Already on admin page, do nothing
      return;
    } else if (onNavigateHome) {
      onNavigateHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavItemClick={handleNavigation}
        ctaText="Back to Homepage"
        onCtaClick={onNavigateHome}
        navItems={[
          { title: 'Homepage', href: 'home' },
          { title: 'Admin', href: 'admin' },
          { title: 'Verification', href: 'admin-verification' }
        ]}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Header */}
        <div className="mb-8">
          <SectionHeader
            title="Design System Admin"
            description="Comprehensive design system showcase and component library for Open Source Economy"
            badge="Admin Dashboard"
            spacing="lg"
          />
        </div>

        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {designSystemSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentSection(section.id)}
                  leftIcon={IconComponent}
                >
                  {section.title}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        {currentSection === 'hero' && renderHeroSection()}
        {currentSection === 'typography' && renderTypographySection()}
        {currentSection === 'colors' && renderColorsSection()}
        {currentSection === 'forms' && renderFormsSection()}
        {currentSection === 'components' && renderComponentsSection()}
        {currentSection === 'patterns' && renderPatternsSection()}
        {currentSection === 'testimonials' && renderTestimonialsSection()}
        {currentSection === 'how-it-works' && renderHowItWorksSection()}
        {currentSection === 'projects' && renderProjectsSection()}
      </div>

      <Footer />
    </div>
  );
}