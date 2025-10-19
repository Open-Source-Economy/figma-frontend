import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SectionBadge } from '../ui/section-badge';
import { IconBox } from '../ui/icon-box';
import { PercentageCard } from '../ui/percentage-card';
import { InfoCard } from '../ui/info-card';
import { ValueCard } from '../ui/value-card';
import { FeatureListItem } from '../ui/feature-list-item';
import {
  Heart,
  DollarSign,
  Users,
  Shield,
  TrendingUp,
  Code2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Clock,
  Handshake,
  MessageCircle,
  Sparkles,
  Github,
  Settings,
  Layers,
  Briefcase,
  Target,
  Phone,
  FileText,
  BookOpen,
  Wrench,
  AlertCircle,
  ArrowUpCircle,
  HelpCircle,
  Plug,
  Package,
  Gauge,
  Layout,
  Award,
  Lightbulb,
  ClipboardList,
  GitPullRequest,
  ShieldCheck,
  FileSearch,
  CheckSquare,
  GraduationCap,
  MonitorPlay,
  Share2,
  FileCheck,
  Siren,
  History,
  Headphones
} from 'lucide-react';

interface MaintainerRegistrationPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

export function MaintainerRegistrationPage({
  onNavigateHome,
  onNavItemClick
}: MaintainerRegistrationPageProps) {
  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-accent/10 py-20 border-b border-brand-neutral-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-highlight/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center">
            <SectionBadge icon={Code2} text="FOR OPEN SOURCE MAINTAINERS" variant="success" className="mb-6 uppercase tracking-wider" />
            
            <h1 className="text-brand-neutral-950 mb-6">
              Get Paid for Your Open Source Work
            </h1>
            
            <p className="text-brand-neutral-600 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              A Swiss non-profit that helps open source developers get funding — full-time, part-time, or just every now and then. 
              We adapt to your needs and values, whether you're aligned with free software ideals or focused on sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-accent hover:bg-brand-accent-dark text-white shadow-xl">
                <Github className="h-5 w-5 mr-2" />
                Sign in with GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-brand-neutral-300 hover:bg-brand-card-blue">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-brand-accent/10 via-brand-secondary to-brand-neutral-200 border-y border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-success/10 border border-brand-success/20 rounded-full mb-4">
              <Shield className="w-4 h-4 text-brand-success" />
              <span className="text-sm text-brand-success">Swiss Non-Profit</span>
            </div>
            <h2 className="text-brand-neutral-950 mb-4">
              Our Mission: Solve Open Source Sustainability
            </h2>
            <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
              We connect maintainers with the <span className="text-brand-success">$27B→$44B services market</span> while ensuring funds flow to the entire ecosystem—not VCs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {/* What */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-accent/10 rounded-lg">
                  <Target className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-brand-neutral-900">What We Do</h3>
              </div>
              <p className="text-sm text-brand-neutral-600 leading-relaxed">
                A platform where you provide services at your rates while we handle business operations and automatically fund your dependencies.
              </p>
            </div>

            {/* Why */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-success/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-brand-success" />
                </div>
                <h3 className="text-brand-neutral-900">Why It Works</h3>
              </div>
              <p className="text-sm text-brand-neutral-600 leading-relaxed">
                The OSS services market is massive. We tap into it systematically, considering dependency trees and market reality.
              </p>
            </div>

            {/* How */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-highlight/10 rounded-lg">
                  <Heart className="w-5 h-5 text-brand-highlight" />
                </div>
                <h3 className="text-brand-neutral-900">Why Non-Profit</h3>
              </div>
              <p className="text-sm text-brand-neutral-600 leading-relaxed">
                As a non-profit, revenue flows throughout the ecosystem—strengthening the foundation, not enriching VCs.
              </p>
            </div>
          </div>

          {/* Core Values Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-success/10 border border-brand-success/20 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-brand-success" />
              <span className="text-sm text-brand-neutral-800">100% Non-Profit</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Users className="w-4 h-4 text-brand-accent" />
              <span className="text-sm text-brand-neutral-800">Community First</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-highlight/10 border border-brand-highlight/20 rounded-full">
              <Heart className="w-4 h-4 text-brand-highlight" />
              <span className="text-sm text-brand-neutral-800">Respects Your Values</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
              <Shield className="w-4 h-4 text-brand-primary" />
              <span className="text-sm text-brand-neutral-800">Swiss Transparency</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-success/10 border border-brand-success/20 rounded-full">
              <Code2 className="w-4 h-4 text-brand-success" />
              <span className="text-sm text-brand-neutral-800">FOSS Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Open Source Economy */}
      <section className="py-20 bg-gradient-to-b from-brand-secondary via-brand-neutral-200 to-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-neutral-950 mb-4">
              What is Open Source Economy?
            </h2>
            <p className="text-brand-neutral-600 text-lg max-w-3xl mx-auto">
              We're building a platform designed to help open source projects grow and sustain themselves long-term. 
              As a non-profit, we're committed to aligning with your needs and values — not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="100% Non-Profit"
              description="All earnings are reinvested in open-source. We're committed to transparency on where the funds go, supporting OSS neutrality and independence."
              badge="Swiss registered non-profit"
              variant="success"
            />

            <ValueCard
              icon={Heart}
              title="Your Values Matter"
              description="We deeply respect free software and community-led projects. Whether you're focused on ideals or practical sustainability, we adapt to you."
              badge="Free software aligned"
              variant="accent"
            />

            <ValueCard
              icon={Users}
              title="Community First"
              description="We're here to support your work, not steer it. You maintain full control over what you build, how you build it, and at what price."
              badge="You stay in control"
              variant="highlight"
            />
          </div>
        </div>
      </section>

      {/* You Focus on Code, We Handle Everything Else */}


      {/* How the Service Model Works */}
      <section className="py-20 bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-card-blue relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--brand-accent-dark)_0%,_transparent_50%)] opacity-5 -z-10" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--brand-success)_0%,_transparent_50%)] opacity-5 -z-10" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge icon={Handshake} text="TRUE PARTNERSHIP" variant="highlight" className="mb-6 uppercase tracking-wider" />
            <h2 className="text-brand-neutral-950 mb-4">
              You Code. We Handle Everything Else.
            </h2>
            <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
              Focus on what you do best while we take care of sales, contracts, payments, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative mb-16">
            {/* Your Side: Services That Fit Your Lifestyle */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-brand-card-blue via-brand-card-blue-dark to-brand-secondary border-2 border-brand-accent/50 rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-3">
                    <Code2 className="w-4 h-4 text-brand-accent" />
                    <span className="text-sm text-brand-accent">Your Focus</span>
                  </div>
                  <h3 className="text-brand-neutral-950">
                    Code & Services
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl p-4 hover:bg-brand-accent/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={Layers}
                      title="Choose Your Projects"
                      description="Select which open source projects to offer services for"
                      variant="accent"
                    />
                  </div>
                  
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl p-4 hover:bg-brand-accent/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={Briefcase}
                      title="Choose Which Services to Offer"
                      description="Bug fixes, features, consulting, support, or any combination"
                      variant="accent"
                    />
                  </div>
                  
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl p-4 hover:bg-brand-accent/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={DollarSign}
                      title="Set Your Rates"
                      description="Full pricing control for each commitment level"
                      variant="accent"
                    />
                  </div>
                  
                  <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl p-4 hover:bg-brand-accent/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={Clock}
                      title="Define Commitment Levels"
                      description="Work full-time, part-time, or flexibly"
                      variant="accent"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-accent/20">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Sparkles className="h-4 w-4" />
                    <p className="text-sm">No sales calls. No negotiations. Just code.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Side: Finding & Managing Funding */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-success/20 to-brand-success/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-brand-card-blue via-brand-card-blue-dark to-brand-secondary border-2 border-brand-success/50 rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-success/10 border border-brand-success/20 rounded-full mb-3">
                    <DollarSign className="w-4 h-4 text-brand-success" />
                    <span className="text-sm text-brand-success">Our Focus</span>
                  </div>
                  <h3 className="text-brand-neutral-950">
                    Business & Admin
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-brand-success/5 border-l-4 border-brand-success rounded-r-xl p-4 hover:bg-brand-success/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={Users}
                      title="Client Acquisition"
                      description="We find enterprises, pitch your services, and bring you opportunities"
                      variant="success"
                    />
                  </div>
                  
                  <div className="bg-brand-success/5 border-l-4 border-brand-success rounded-r-xl p-4 hover:bg-brand-success/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={FileText}
                      title="Legal & Contracts"
                      description="We draft, negotiate, and manage all legal agreements on your behalf"
                      variant="success"
                    />
                  </div>
                  
                  <div className="bg-brand-success/5 border-l-4 border-brand-success rounded-r-xl p-4 hover:bg-brand-success/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={DollarSign}
                      title="Payments & Billing"
                      description="We handle invoicing, payment collection, and timely payouts to you"
                      variant="success"
                    />
                  </div>
                  
                  <div className="bg-brand-success/5 border-l-4 border-brand-success rounded-r-xl p-4 hover:bg-brand-success/10 transition-colors duration-200">
                    <FeatureListItem
                      icon={Headphones}
                      title="Client Relations"
                      description="We manage ongoing communication, expectations, and satisfaction"
                      variant="success"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-success/20">
                  <div className="flex items-center gap-2 text-brand-success">
                    <Handshake className="h-4 w-4" />
                    <p className="text-sm">You approve every contract. True partnership.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Levels */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-brand-neutral-950 mb-3">
                Choose Your Commitment Level
              </h3>
              <p className="text-brand-neutral-600 max-w-3xl mx-auto">
                Commitment levels define your <span className="text-brand-accent">time obligations and guarantees</span> — not what services you offer. You can provide any service at any level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Lightweight */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-success/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-neutral-300 group-hover:border-brand-success/50 rounded-2xl p-6 transition-all duration-300">
                  <div className="mb-4">
                    <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
                      Lightweight
                    </Badge>
                  </div>
                  <h4 className="text-brand-neutral-950 mb-3">
                    Best Effort
                  </h4>
                  <p className="text-brand-neutral-600 text-sm mb-6">
                    Work on your own schedule. No deadlines or time requirements. Help when you can, how you can.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                      <span className="text-brand-neutral-700 text-sm">No time commitments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                      <span className="text-brand-neutral-700 text-sm">Complete flexibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                      <span className="text-brand-neutral-700 text-sm">Occasional work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Committed */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-accent group-hover:border-brand-accent-light rounded-2xl p-6 transition-all duration-300 shadow-lg shadow-brand-accent/10">
                  <div className="mb-4">
                    <Badge className="bg-brand-accent/20 text-brand-accent border-brand-accent/30">
                      Committed
                    </Badge>
                  </div>
                  <h4 className="text-brand-neutral-950 mb-3">
                    Regular Engagement
                  </h4>
                  <p className="text-brand-neutral-600 text-sm mb-6">
                    Structured commitment with regular hours and agreed availability. Deliver within reasonable timeframes.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-brand-neutral-700 text-sm">Agreed hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-brand-neutral-700 text-sm">Expected timelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-brand-neutral-700 text-sm">Part or full-time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-highlight/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-neutral-300 group-hover:border-brand-highlight/50 rounded-2xl p-6 transition-all duration-300">
                  <div className="mb-4">
                    <Badge className="bg-brand-highlight/20 text-brand-highlight border-brand-highlight/30">
                      Enterprise
                    </Badge>
                  </div>
                  <h4 className="text-brand-neutral-950 mb-3">
                    Full Commitment + SLAs
                  </h4>
                  <p className="text-brand-neutral-600 text-sm mb-6">
                    Guaranteed availability with SLAs, response time guarantees, and formal obligations.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight" />
                      <span className="text-brand-neutral-700 text-sm">SLA response times</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight" />
                      <span className="text-brand-neutral-700 text-sm">Guaranteed availability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight" />
                      <span className="text-brand-neutral-700 text-sm">Full-time dedication</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Common Services Section - Dedicated */}
      <section className="py-20 bg-gradient-to-br from-brand-neutral-100 via-brand-secondary to-brand-card-blue">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-highlight/20 border border-brand-highlight/30 px-4 py-2 rounded-full mb-6">
              <Code2 className="h-4 w-4 text-brand-highlight" />
              <span className="text-brand-highlight text-sm uppercase tracking-wider">Service Catalog</span>
            </div>
            <h2 className="text-brand-neutral-950 mb-4">
              What Services Can You Offer?
            </h2>
            <p className="text-brand-neutral-600 text-lg max-w-3xl mx-auto">
              You decide what services to provide based on your expertise and interests. Here are common services maintainers offer — mix and match at any commitment level.
            </p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Support & Maintenance */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-brand-success/20 border border-brand-success/30 flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-brand-success" />
                    </div>
                    <h4 className="text-brand-neutral-950 leading-tight">Support & Maintenance</h4>
                  </div>
                  <ul className="space-y-3.5 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-4 h-4 mt-0.5 flex-shrink-0">
                        <Wrench className="h-4 w-4 text-brand-success" />
                      </div>
                      <span className="text-sm text-brand-neutral-700 leading-relaxed">Bug fixes and patches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-4 h-4 mt-0.5 flex-shrink-0">
                        <AlertCircle className="h-4 w-4 text-brand-success" />
                      </div>
                      <span className="text-sm text-brand-neutral-700 leading-relaxed">Priority issue resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-4 h-4 mt-0.5 flex-shrink-0">
                        <ArrowUpCircle className="h-4 w-4 text-brand-success" />
                      </div>
                      <span className="text-sm text-brand-neutral-700 leading-relaxed">Version upgrades & migrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-4 h-4 mt-0.5 flex-shrink-0">
                        <HelpCircle className="h-4 w-4 text-brand-success" />
                      </div>
                      <span className="text-sm text-brand-neutral-700 leading-relaxed">Technical Q&A support</span>
                    </li>
                  </ul>
                </div>

                {/* Development */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                      <Code2 className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h4 className="text-brand-neutral-950">Development</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-brand-neutral-600 flex-1">
                    <li className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Custom feature development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Plug className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>API integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Package className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Plugin/extension creation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gauge className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Consulting & Architecture */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-highlight/20 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-brand-highlight" />
                    </div>
                    <h4 className="text-brand-neutral-950">Consulting & Architecture</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-brand-neutral-600 flex-1">
                    <li className="flex items-start gap-3">
                      <Layout className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Architecture review & guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Best practices consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Technology strategy sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ClipboardList className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Implementation planning</span>
                    </li>
                  </ul>
                </div>

                {/* Code Review & Quality */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h4 className="text-brand-neutral-950">Code Review & Quality</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-brand-neutral-600 flex-1">
                    <li className="flex items-start gap-3">
                      <GitPullRequest className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Pull request reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Security audits & hardening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileSearch className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Code quality assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Testing strategy & coverage</span>
                    </li>
                  </ul>
                </div>

                {/* Training & Documentation */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-success/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-brand-success" />
                    </div>
                    <h4 className="text-brand-neutral-950">Training & Documentation</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-brand-neutral-600 flex-1">
                    <li className="flex items-start gap-3">
                      <GraduationCap className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <span>Team onboarding & training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <span>Documentation creation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MonitorPlay className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <span>Workshop facilitation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Share2 className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <span>Knowledge transfer sessions</span>
                    </li>
                  </ul>
                </div>

                {/* Enterprise Support */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-highlight/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-brand-highlight" />
                    </div>
                    <h4 className="text-brand-neutral-950">Enterprise Support</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-brand-neutral-600 flex-1">
                    <li className="flex items-start gap-3">
                      <FileCheck className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>SLA-backed support contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Emergency hotfix services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <History className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Long-term version support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Headphones className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span>Dedicated communication channels</span>
                    </li>
                  </ul>
                </div>
              </div>


        </div>
      </section>

      {/* Two Funding Models */}
      <section className="py-20 bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-card-blue">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-highlight/20 border-2 border-brand-highlight/40 px-4 py-2 rounded-full mb-6">
              <Handshake className="h-4 w-4 text-brand-highlight" />
              <span className="text-brand-highlight uppercase tracking-wider">The Solidarity Model</span>
            </div>
            <h2 className="text-brand-neutral-950 mb-4">
              Three Revenue Streams
            </h2>
            <p className="text-brand-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Earn from your direct services, receive passive funding from the ecosystem, and claim work from the collective pool
            </p>
          </div>

          {/* Three Revenue Streams - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Stream 1: Direct Services */}
            <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-accent/50 rounded-2xl p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-3">
                  <Handshake className="h-7 w-7 text-brand-accent" />
                </div>
                <Badge className="bg-brand-accent/20 text-brand-accent border-brand-accent/40 mb-2">
                  Stream 1
                </Badge>
                <h3 className="text-brand-neutral-950 mb-2">Service Payments</h3>
                <p className="text-brand-neutral-600 text-sm leading-relaxed">
                  Get paid directly for professional services you provide to enterprises
                </p>
              </div>
            </div>

            {/* Stream 2: Ecosystem Funding */}
            <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-success/50 rounded-2xl p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-success/20 border border-brand-success/40 flex items-center justify-center mb-3">
                  <Package className="h-7 w-7 text-brand-success" />
                </div>
                <Badge className="bg-brand-success/20 text-brand-success border-brand-success/40 mb-2">
                  Stream 2
                </Badge>
                <h3 className="text-brand-neutral-950 mb-2">Dependency Funding</h3>
                <p className="text-brand-neutral-600 text-sm leading-relaxed">
                  Receive automatic payments when others use your projects as dependencies
                </p>
              </div>
            </div>

            {/* Stream 3: Common Pool */}
            <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-2 border-brand-highlight/50 rounded-2xl p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-highlight/20 border border-brand-highlight/40 flex items-center justify-center mb-3">
                  <Heart className="h-7 w-7 text-brand-highlight" />
                </div>
                <Badge className="bg-brand-highlight/20 text-brand-highlight border-brand-highlight/40 mb-2">
                  Stream 3
                </Badge>
                <h3 className="text-brand-neutral-950 mb-2">Common Pool Work</h3>
                <p className="text-brand-neutral-600 text-sm leading-relaxed">
                  Claim maintenance work funded by the collective ecosystem pool
                </p>
              </div>
            </div>
          </div>

          {/* How Every $100 is Split */}
          <div className="mb-16">
            {/* Title Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-success/10 border border-brand-success/30 rounded-full px-4 py-2 mb-4">
                <Handshake className="h-4 w-4 text-brand-success" />
                <span className="text-brand-success text-sm">The Solidarity Model</span>
              </div>
              <h2 className="text-brand-neutral-950 mb-4">Every Service Payment Sustains the Ecosystem</h2>
              <p className="text-brand-neutral-600 max-w-3xl mx-auto">
                When you provide services, <span className="text-brand-success">you're not just earning—you're making open source sustainable</span>. Here's how every payment flows through the ecosystem:
              </p>
            </div>

            {/* Payment Allocation */}
            <div className="mb-12">
              <h3 className="text-brand-neutral-950 mb-6 text-center">The Payment Allocation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 text-center hover:border-brand-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div className="text-brand-accent mb-2">40%</div>
                  <div className="text-brand-neutral-950 text-sm mb-1">Direct to You</div>
                  <p className="text-brand-neutral-600 text-xs">Your primary income</p>
                </div>

                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 text-center hover:border-brand-highlight/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-highlight/10 border border-brand-highlight/20 flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="h-6 w-6 text-brand-highlight" />
                  </div>
                  <div className="text-brand-highlight mb-2">30%</div>
                  <div className="text-brand-neutral-950 text-sm mb-1">Common Pool</div>
                  <p className="text-brand-neutral-600 text-xs">Maintenance work</p>
                </div>

                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 text-center hover:border-brand-success/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-success/10 border border-brand-success/20 flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-brand-success" />
                  </div>
                  <div className="text-brand-success mb-2">20%</div>
                  <div className="text-brand-neutral-950 text-sm mb-1">Dependencies</div>
                  <p className="text-brand-neutral-600 text-xs">Your stack</p>
                </div>

                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 text-center hover:border-brand-neutral-400/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-neutral-400/10 border border-brand-neutral-400/20 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-brand-neutral-500" />
                  </div>
                  <div className="text-brand-neutral-700 mb-2">10%</div>
                  <div className="text-brand-neutral-950 text-sm mb-1">Platform</div>
                  <p className="text-brand-neutral-600 text-xs">Non-profit ops</p>
                </div>
              </div>
            </div>

            {/* An Open Source Solidarity Model */}
            <div>
              <h3 className="text-brand-neutral-950 mb-8 text-center">An Open Source Solidarity Model</h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Point 1: You Fund Others, Others Fund You */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 hover:border-brand-success/50 transition-colors flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-brand-success/10 border border-brand-success/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-brand-success" />
                    </div>
                    <h4 className="text-brand-neutral-950">You Fund Others, Others Fund You</h4>
                  </div>
                  
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-4">
                    Every time you earn from services, part of your payment flows to:
                  </p>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-brand-success/10 border border-brand-success/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3 w-3 text-brand-success" />
                      </div>
                      <p className="text-brand-neutral-700 text-sm leading-relaxed">
                        The common pool of the project you worked on.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-brand-success/10 border border-brand-success/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3 w-3 text-brand-success" />
                      </div>
                      <p className="text-brand-neutral-700 text-sm leading-relaxed">
                        The common pools of your dependencies.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-5">
                    And when other maintainers earn, part of their payments flow back to your pool and to you as one of their dependencies.
                  </p>
                  
                  <div className="bg-brand-success/5 border border-brand-success/20 rounded-lg p-4 mt-auto">
                    <div className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <p className="text-brand-neutral-800 text-sm leading-relaxed">
                        This creates a reciprocal funding cycle—a self-sustaining economy where everyone benefits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 2: Sustainable for Everyone */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 hover:border-brand-accent/50 transition-colors flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h4 className="text-brand-neutral-950">Sustainable for Everyone</h4>
                  </div>
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-5">
                    Service income rewards visible projects and contributors—but what about the invisible yet essential work: bug fixes, security patches, and documentation?
                  </p>
                  
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-5">
                    This isn't charity—it's a systemic funding model. Successful maintainers automatically uplift the entire stack they depend on.
                  </p>
                  
                  <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-4 mt-auto">
                    <div className="flex items-start gap-2">
                      <Heart className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <p className="text-brand-neutral-800 text-sm leading-relaxed">
                        Even the quiet, critical work gets funded. The whole ecosystem grows together.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 3: Participating Maintainers Only */}
                <div className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300 rounded-xl p-6 hover:border-brand-highlight/50 transition-colors flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-highlight/10 border border-brand-highlight/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-brand-highlight" />
                    </div>
                    <h4 className="text-brand-neutral-950">Participating Maintainers Only</h4>
                  </div>
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-5">
                    The common pool is reserved for verified maintainers who actively participate in the solidarity model. This creates a foundation of trust—ensuring that funds circulate only among those who contribute real value to the ecosystem.
                  </p>
                  
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-5">
                    Participation isn't just about access to funding—it's about mutual accountability. Every maintainer knows that their peers are also investing time, care, and expertise into the shared stack.
                  </p>
                  
                  <div className="bg-brand-highlight/5 border border-brand-highlight/20 rounded-lg p-4 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <p className="text-brand-neutral-800 text-sm leading-relaxed">
                        By joining, you both contribute to and receive from the collective—building a thriving future for open source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-gradient-to-br from-brand-accent/5 via-brand-secondary to-brand-highlight/5 border-y border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-neutral-950 mb-4">
              Why Join Open Source Economy?
            </h2>
            <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
              A Swiss non-profit aligned with your values, not venture capital interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: '100% Non-Profit',
                description: 'Swiss registered non-profit. All earnings reinvested in open source, supporting OSS neutrality and independence.'
              },
              {
                icon: Heart,
                title: 'Your Values Matter',
                description: 'We deeply respect free software principles. Whether focused on ideals or sustainability, we adapt to you.'
              },
              {
                icon: DollarSign,
                title: 'Fair Compensation',
                description: 'You set your rates. Transparent pricing and automatic ecosystem funding for all maintainers.'
              },
              {
                icon: Handshake,
                title: 'No Sales Work',
                description: 'We handle all outreach, sales, negotiations, and contracts. You never have to pitch or chase clients.'
              },
              {
                icon: Clock,
                title: 'Your Terms',
                description: 'Choose your projects, services, rates, and availability. Full control over what you offer and when.'
              },
              {
                icon: Users,
                title: 'Community First',
                description: 'Part of a network supporting sustainable open source. Solidarity model benefits the entire ecosystem.'
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue border border-brand-neutral-300 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/20 hover:border-brand-accent/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-brand-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-card-blue via-brand-card-blue-dark to-brand-secondary border-t border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-brand-accent/10 via-brand-card-blue to-brand-highlight/10 border-2 border-brand-accent rounded-3xl p-12 text-center shadow-2xl shadow-brand-accent/20">
            <div className="w-20 h-20 rounded-2xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-brand-accent" />
            </div>
            
            <h2 className="text-brand-neutral-950 mb-4">
              Ready to Get Started?
            </h2>
            
            <p className="text-brand-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              Sign in with GitHub to set up your profile, define your services, and start earning. 
              We'll handle finding clients and all the business side.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-brand-accent hover:bg-brand-accent-dark text-white shadow-xl">
                <Github className="h-5 w-5 mr-2" />
                Sign in with GitHub
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-neutral-300 hover:bg-brand-card-blue">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book a Call
              </Button>
            </div>

            <p className="text-brand-neutral-500 text-sm">
              Join the growing community of maintainers getting fairly compensated for their work
            </p>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
