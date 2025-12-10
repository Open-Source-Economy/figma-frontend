import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SectionBadge } from '../ui/section-badge';
import { DecorativeOverlay } from '../ui/decorative-overlay';
import { DecorativeOrb } from '../ui/decorative-orb';
import {
  Target,
  TrendingUp,
  Shield,
  Heart,
  Users,
  Code2,
  Building2,
  CheckCircle2,
  Handshake,
  GitBranch,
  DollarSign,
  Zap,
  Award,
  Globe
} from 'lucide-react';

interface MissionPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

export function MissionPage({ onNavigateHome, onNavItemClick }: MissionPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header onNavItemClick={onNavItemClick} />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-neutral-100">
        <DecorativeOverlay variant="warm-gradient" opacity="subtle" direction="tl" />
        <DecorativeOrb size="extra-large" position="top-left" variant="accent" intensity="subtle" animated={false} className="top-20 -left-20" />
        <DecorativeOrb size="large" position="bottom-right" variant="success" intensity="subtle" animated={false} className="bottom-20 -right-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-accent" />
              <span className="text-sm text-brand-neutral-600">Open Source Economy Initiative</span>
            </div>
            
            {/* Main headline - large and bold */}
            <h1 className="mb-8 leading-tight">
              <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-neutral-900">
                Commons-Owned LTS Infrastructure for{' '}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">
                <span className="text-brand-accent">Open Source </span>
                <span className="bg-gradient-to-r from-brand-highlight via-brand-warning to-brand-accent bg-clip-text text-transparent">
                  Sustainability
                </span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-brand-neutral-500 leading-relaxed max-w-4xl mx-auto mb-12">
              Building reusable infrastructure so open-source communities can enter the enterprise services market, with revenue flowing back through dependency trees to the maintainers doing the work.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-brand-neutral-300/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-neutral-700">
                <div className="text-4xl md:text-5xl text-brand-accent mb-3">$44B</div>
                <div className="text-sm text-brand-neutral-500">Open-source services market by 2027</div>
              </div>
              <div className="bg-brand-neutral-300/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-neutral-700">
                <div className="text-4xl md:text-5xl text-brand-warning mb-3">837k+</div>
                <div className="text-sm text-brand-neutral-500">GitHub stars across partner projects</div>
              </div>
              <div className="bg-brand-neutral-300/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-neutral-700">
                <div className="text-4xl md:text-5xl text-brand-highlight mb-3">215+</div>
                <div className="text-sm text-brand-neutral-500">Projects in our network</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-brand-secondary rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-brand-accent/20">
                Learn About Our Approach
                <Zap className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-brand-neutral-200/50 text-brand-neutral-800 border border-brand-neutral-600 rounded-xl transition-all duration-200">
                View Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Opportunity */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-neutral-100 via-brand-secondary to-brand-card-blue">
        <DecorativeOverlay variant="accent-success" opacity="subtle" direction="br" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">The Challenge We're Addressing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Open source powers the digital economy, yet maintainers struggle to earn a living while billions flow to agencies and VCs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* The Problem */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-warning/10 rounded-xl">
                    <Target className="w-8 h-8 text-brand-warning" />
                  </div>
                  <h3>The Sustainability Crisis</h3>
                </div>
                <ul className="space-y-4">
                  <ProblemItem text="Maintainers can't focus on their projects while handling business operations" />
                  <ProblemItem text="Critical dependencies are underfunded and at risk" />
                  <ProblemItem text="Consulting revenue bypasses creators and their dependencies" />
                  <ProblemItem text="VC-backed solutions extract value instead of distributing it" />
                </ul>
              </div>

              {/* The Opportunity */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-success/10 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-brand-success" />
                  </div>
                  <h3>The Market Reality</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-brand-success/5 rounded-xl border border-brand-success/10">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl text-brand-success">$27B</span>
                      <span className="text-muted-foreground">in 2022</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Open source services market value</p>
                  </div>
                  <div className="p-4 bg-brand-success/5 rounded-xl border border-brand-success/10">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl text-brand-success">$44B</span>
                      <span className="text-muted-foreground">by 2027</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Projected market growth</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Companies need expert maintainers for bug fixes, features, consulting, and support. This massive market should sustain the ecosystem, not VCs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Systemic Solution */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-100">
        <DecorativeOverlay variant="primary-accent" opacity="subtle" direction="tl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Systemic Solution</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A platform that connects maintainers with the professional services market while ensuring funds flow throughout the entire dependency tree.
              </p>
            </div>

            {/* How It Works */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <SolutionCard
                icon={Code2}
                title="Maintainers Focus on Code"
                description="You set your rates and choose your projects. We handle client acquisition, contracts, payments, and all business operations."
                color="accent"
              />
              <SolutionCard
                icon={Handshake}
                title="Companies Get Expert Help"
                description="Direct access to maintainers under enterprise contracts with SOC 2 compliance, NDAs, and SLAs."
                color="success"
              />
              <SolutionCard
                icon={GitBranch}
                title="Dependencies Are Funded"
                description="Revenue automatically flows to your dependency tree, ensuring the entire ecosystem is sustainable."
                color="highlight"
              />
            </div>

            {/* The Key Difference */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-10 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-brand-highlight/10 rounded-2xl mb-6">
                <Heart className="w-12 h-12 text-brand-highlight" />
              </div>
              <h3 className="mb-4">Why Non-Profit Matters</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Because we're a <span className="text-brand-highlight">100% non-profit</span>, every dollar flowing through the platform strengthens the <span className="text-brand-highlight">entire dependency tree</span> — not venture capital portfolios. We're building a <span className="text-brand-highlight">systemic solution</span> that reflects how open source actually works: interconnected and interdependent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-neutral-100 via-brand-secondary to-brand-secondary-dark">
        <DecorativeOverlay variant="cool-gradient" opacity="subtle" direction="br" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                As a Swiss non-profit, we're committed to transparency, neutrality, and the long-term sustainability of the open source ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={Shield}
                title="100% Non-Profit"
                description="All earnings are reinvested in open source. Swiss transparency standards with complete accountability on where funds go. Supporting OSS neutrality and independence."
                badge="Swiss Registered 501(c)(3)"
              />
              <ValueCard
                icon={Heart}
                title="Your Values Matter"
                description="We deeply respect free software and community-led projects. Whether you're focused on ideals or practical sustainability, we adapt to you."
                badge="Free Software Aligned"
              />
              <ValueCard
                icon={Users}
                title="Community First"
                description="You maintain full control over what you build, how you build it, and at what price. We're here to support your work, not steer it."
                badge="You Stay in Control"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Enable */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-secondary-dark via-brand-neutral-100 to-brand-card-blue">
        <DecorativeOverlay variant="warm-gradient" opacity="subtle" direction="tl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">What We Enable</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform removes the burden of business operations, allowing you to focus entirely on what you do best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <EnablementCard
                icon={Zap}
                title="Focus on Your Work"
                items={[
                  "No sales calls or client hunting",
                  "No contract negotiations",
                  "No invoicing or payment chasing",
                  "No tax and legal paperwork"
                ]}
              />
              <EnablementCard
                icon={Handshake}
                title="We Handle the Rest"
                items={[
                  "Client acquisition and matching",
                  "Legal agreements and compliance",
                  "Payment processing and distribution",
                  "Ongoing client relationships"
                ]}
              />
              <EnablementCard
                icon={DollarSign}
                title="Fair Compensation"
                items={[
                  "Set your own hourly rates",
                  "Define your availability",
                  "Choose which projects to accept",
                  "Transparent revenue sharing"
                ]}
              />
              <EnablementCard
                icon={Globe}
                title="Ecosystem Impact"
                items={[
                  "Your dependencies get funded",
                  "Community projects receive support",
                  "Long-term sustainability secured",
                  "Entire ecosystem strengthened"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-secondary-dark">
        <DecorativeOverlay variant="accent-success" opacity="medium" direction="br" />
        <DecorativeOrb size="large" position="top-right" variant="accent" intensity="subtle" animated={false} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-brand-accent/10 rounded-2xl mb-6">
              <Award className="w-12 h-12 text-brand-accent" />
            </div>
            <h2 className="mb-6">Join Us in Building a Sustainable Future</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Whether you're a maintainer looking to focus on your work, or a company seeking expert support, together we can build a sustainable open source ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavItemClick('maintainer-registration')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-xl transition-colors duration-200"
              >
                <Code2 className="w-5 h-5" />
                Register as Maintainer
              </button>
              <button 
                onClick={() => onNavItemClick('contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border hover:bg-card/80 text-foreground rounded-xl transition-colors duration-200"
              >
                <Building2 className="w-5 h-5" />
                Contact for Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}

interface ProblemItemProps {
  text: string;
}

function ProblemItem({ text }: ProblemItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-brand-warning/20 border border-brand-warning/30 flex items-center justify-center shrink-0 mt-0.5">
        <div className="w-2 h-2 rounded-full bg-brand-warning" />
      </div>
      <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
    </li>
  );
}

interface SolutionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'accent' | 'success' | 'highlight';
}

function SolutionCard({ icon: Icon, title, description, color }: SolutionCardProps) {
  const colorStyles = {
    accent: 'bg-brand-accent/10 text-brand-accent',
    success: 'bg-brand-success/10 text-brand-success',
    highlight: 'bg-brand-highlight/10 text-brand-highlight'
  };

  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-colors duration-200">
      <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${colorStyles[color]}`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

function ValueCard({ icon: Icon, title, description, badge }: ValueCardProps) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-colors duration-200">
      <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-xl mb-4">
        <Icon className="w-8 h-8 text-brand-primary" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div className="inline-flex items-center px-3 py-1.5 bg-brand-success/10 border border-brand-success/20 rounded-full">
        <span className="text-xs text-brand-success">{badge}</span>
      </div>
    </div>
  );
}

interface EnablementCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

function EnablementCard({ icon: Icon, title, items }: EnablementCardProps) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-brand-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-brand-accent" />
        </div>
        <h3>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
