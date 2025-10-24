import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { AccessModelComparison } from '../patterns/AccessModelComparison';
import { ProcessStep } from '../patterns/ProcessStep';
import { FeaturePill } from '../ui/feature-pill';
import { Button } from '../ui/button';
import { 
  Handshake,
  Zap,
  Heart,
  Shield,
  Clock,
  Code2,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Sparkles,
  Building2,
  Rocket,
  Layers,
  Award,
  DollarSign,
  Target,
  FileText,
  BarChart3
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onScheduleDemo?: () => void;
}

// Updated 4-Step Process - Aligned with HowItWorksMinimal
const PROCESS_STEPS = [
  {
    icon: Handshake,
    number: '01',
    title: 'Single Contract',
    description: 'One enterprise agreement covers all maintainers across your entire dependency stack. No need to negotiate with individual developers or manage multiple vendor relationships.',
    accentColor: 'accent' as const
  },
  {
    icon: Layers,
    number: '02',
    title: 'Combine 2 Models',
    description: 'Mix reserved time for critical projects with flexible credits for everything else. Adapt your engagement strategy as your needs evolve.',
    accentColor: 'accent' as const
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start Working',
    description: 'Get direct access to expert maintainers and begin solving your toughest challenges. No intermediaries, just expertise and collaboration.',
    accentColor: 'highlight' as const
  },
  {
    icon: Award,
    number: '04',
    title: 'Get Recognized',
    description: 'Support the ecosystem transparently and strengthen the open source community. Your contribution is visible and impactful.',
    accentColor: 'success' as const
  }
];

// Trust Indicators
const TRUST_INDICATORS = [
  { icon: Shield, text: 'NDA Protection' },
  { icon: CheckCircle2, text: 'SOC 2 Compliant' },
  { icon: Code2, text: '100% Open Source Output' },
  { icon: Clock, text: 'Transparent Billing' }
];

// Benefits
const BENEFITS = [
  {
    icon: Users,
    title: 'Expert Access',
    description: 'Work directly with the maintainers who built and know the code best. No intermediaries, just expertise.'
  },
  {
    icon: TrendingUp,
    title: 'Reduce Risk',
    description: 'Ensure critical dependencies are maintained and supported. Get priority bug fixes and security patches.'
  },
  {
    icon: Sparkles,
    title: 'Accelerate Development',
    description: 'Add features faster with maintainer guidance. Reduce time spent debugging dependency issues.'
  },
  {
    icon: Building2,
    title: 'Enterprise Ready',
    description: 'Single contract, unified billing, NDA protection. Built for how enterprises actually work.'
  }
];

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateHome,
  onNavItemClick,
  onScheduleDemo
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-secondary-dark to-brand-neutral-100">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('contact')}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-card-blue">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-highlight/15 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
              <Rocket className="w-4 h-4 text-brand-accent-light" />
              <span className="text-brand-accent-light text-sm">Enterprise Solutions</span>
            </div>
            <h1 className="text-brand-neutral-950 mb-6">
              How Open Source Economy Works
            </h1>
            <p className="text-brand-neutral-700 text-lg max-w-3xl mx-auto mb-8">
              A simple, transparent way to connect your enterprise with expert open source maintainers. 
              One contract, flexible engagement models, and direct access to the developers who built your dependencies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-brand-accent hover:bg-brand-accent-light text-white"
                onClick={onScheduleDemo}
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
                onClick={() => onNavItemClick('contact')}
              >
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-24 bg-gradient-to-b from-brand-card-blue via-[#2c3e50] to-brand-card-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-success/5 opacity-40" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-brand-neutral-950 mb-4">Four Streamlined Steps</h2>
            <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
              From initial agreement to ecosystem impact in four straightforward steps
            </p>
          </div>

          {/* Process Steps with connecting line */}
          <div className="relative mb-20">
            <div className="hidden lg:block absolute top-20 left-0 right-0 px-20">
              <div className="h-1 bg-gradient-to-r from-brand-accent/20 via-brand-highlight/50 to-brand-success/50 rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessStep
                  key={index}
                  icon={step.icon}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  accentColor={step.accentColor}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TRUST_INDICATORS.map((indicator, index) => (
              <FeaturePill key={index} icon={indicator.icon}>
                {indicator.text}
              </FeaturePill>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Two Models - Detailed Explanation */}
      <section className="relative py-20 bg-gradient-to-br from-brand-card-blue via-brand-secondary to-brand-neutral-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-neutral-950 mb-3">Two Access Models</h2>
            <p className="text-brand-neutral-700 max-w-2xl mx-auto">
              Choose Reserved Time for critical projects or On-Demand Access for broad support. Or combine both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Reserved Time */}
            <div className="bg-brand-card-blue/50 backdrop-blur-sm border border-brand-neutral-300/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center border border-brand-accent/30">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-brand-neutral-950 mb-1">Reserved Time</h3>
                  <p className="text-brand-neutral-600 text-sm">Dedicated maintainer hours</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-light mt-0.5 flex-shrink-0" />
                  <span>Guaranteed availability with specific maintainers</span>
                </li>
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-light mt-0.5 flex-shrink-0" />
                  <span>Fixed monthly pricing for predictable budgeting</span>
                </li>
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-light mt-0.5 flex-shrink-0" />
                  <span>Deep partnership for critical infrastructure</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-brand-neutral-300/30">
                <p className="text-brand-neutral-600 text-sm">
                  <span className="text-brand-neutral-900">Best for:</span> Mission-critical dependencies
                </p>
              </div>
            </div>

            {/* On-Demand Access */}
            <div className="bg-brand-card-blue/50 backdrop-blur-sm border border-brand-neutral-300/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-highlight/10 flex items-center justify-center border border-brand-highlight/30">
                  <Zap className="w-6 h-6 text-brand-highlight" />
                </div>
                <div>
                  <h3 className="text-brand-neutral-950 mb-1">On-Demand Access</h3>
                  <p className="text-brand-neutral-600 text-sm">Flexible credit system</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-highlight-light mt-0.5 flex-shrink-0" />
                  <span>Access any maintainer across your dependency stack</span>
                </li>
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-highlight-light mt-0.5 flex-shrink-0" />
                  <span>Pay-as-you-go with prepurchased credits</span>
                </li>
                <li className="flex items-start gap-2 text-brand-neutral-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-highlight-light mt-0.5 flex-shrink-0" />
                  <span>Perfect for supporting hundreds of projects</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-brand-neutral-300/30">
                <p className="text-brand-neutral-600 text-sm">
                  <span className="text-brand-neutral-900">Best for:</span> Broad ecosystem support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Models - Side-by-Side Comparison Table */}
      <section className="relative py-24 bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-card-blue">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-950 mb-4">Compare Models Side-by-Side</h2>
            <p className="text-brand-neutral-700 text-lg max-w-3xl mx-auto">
              Detailed comparison of features, pricing, and use cases to help you choose the right model
            </p>
          </div>
          
          <AccessModelComparison />

          {/* Combination Highlight */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-brand-success/10 via-brand-highlight/10 to-brand-success/10 border border-brand-success/30 backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-success/20 border border-brand-success/40">
                <CheckCircle2 className="w-5 h-5 text-brand-success-light" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-brand-neutral-950 mb-1">Mix & Match Both Models</p>
                <p className="text-brand-neutral-700 text-sm">
                  Reserve time for critical infrastructure + flexible credits for everything else
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Fund Distribution */}
      <section className="relative py-24 bg-gradient-to-br from-brand-card-blue via-brand-secondary to-brand-neutral-200">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-success/15 rounded-full blur-3xl opacity-40" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-success/10 border border-brand-success/30 mb-6">
              <BarChart3 className="w-4 h-4 text-brand-success-light" />
              <span className="text-brand-success-light text-sm">100% Transparent</span>
            </div>
            <h2 className="text-brand-neutral-950 mb-4">Where Your Investment Goes</h2>
            <p className="text-brand-neutral-700 text-lg max-w-3xl mx-auto">
              As a 501(c)(3) non-profit, we're committed to complete transparency in how funds are distributed 
              to maximize impact across the open source ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-success/40 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-success/20 flex items-center justify-center border border-brand-success/40">
                    <Users className="w-6 h-6 text-brand-success-light" />
                  </div>
                  <h3 className="text-brand-neutral-950">Direct to Maintainers</h3>
                </div>
                <div className="text-brand-success-light">75%</div>
              </div>
              <p className="text-brand-neutral-700 text-sm leading-relaxed">
                The majority of funds go directly to the maintainers doing the work, ensuring fair compensation for expertise
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-success/40 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-success/20 flex items-center justify-center border border-brand-success/40">
                    <Layers className="w-6 h-6 text-brand-success-light" />
                  </div>
                  <h3 className="text-brand-neutral-950">Dependencies</h3>
                </div>
                <div className="text-brand-success-light">15%</div>
              </div>
              <p className="text-brand-neutral-700 text-sm leading-relaxed">
                Supporting the dependencies your projects rely on, strengthening the entire stack
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-success/40 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-success/20 flex items-center justify-center border border-brand-success/40">
                    <Heart className="w-6 h-6 text-brand-success-light" />
                  </div>
                  <h3 className="text-brand-neutral-950">Platform & Ecosystem</h3>
                </div>
                <div className="text-brand-success-light">10%</div>
              </div>
              <p className="text-brand-neutral-700 text-sm leading-relaxed">
                Operating the platform and supporting the broader open source community
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="outline"
              className="gap-2 border-brand-success/40 hover:border-brand-success/60 hover:bg-brand-success/10"
              onClick={() => onNavItemClick('fund-redistribution')}
            >
              <DollarSign className="w-4 h-4" />
              See Detailed Fund Distribution
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-24 bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-card-blue">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl opacity-40" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-950 mb-4">Why Enterprises Choose Us</h2>
            <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
              Built specifically for how enterprises use and depend on open source
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/40 mb-4">
                    <benefit.icon className="w-6 h-6 text-brand-accent-light" />
                  </div>
                  <h3 className="text-brand-neutral-950 mb-3">{benefit.title}</h3>
                  <p className="text-brand-neutral-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative py-24 bg-gradient-to-b from-brand-neutral-200 via-brand-secondary to-brand-card-blue">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-950 mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
              Everything you need to know about working with Open Source Economy
            </p>
          </div>

          <div className="space-y-6">
            {/* Pricing FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <DollarSign className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">How does pricing work?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                Pricing is customized based on your needs. Reserved Time is priced as a monthly retainer based on guaranteed hours. 
                On-Demand Access uses a credit system where you pre-purchase credits at a fixed rate. We provide transparent breakdowns 
                showing exactly how funds are distributed to maintainers, dependencies, and ecosystem support. Contact us for a custom quote 
                based on your dependency stack and engagement needs.
              </p>
            </div>

            {/* Model Switching FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <Layers className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">Can I switch between models or combine them?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                Yes! You can adjust your engagement model at any renewal period, and you can combine both models simultaneously. 
                Many enterprises start with On-Demand Access to explore, then add Reserved Time for critical dependencies once they 
                identify their core needs. The most common approach is to reserve time for 2-3 critical projects while maintaining 
                flexible credits for broader ecosystem support.
              </p>
            </div>

            {/* Maintainer Availability FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <Users className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">What if the maintainer I need isn't registered?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                We actively work to onboard maintainers based on enterprise demand. If a critical dependency maintainer isn't yet 
                registered, we'll reach out to them on your behalf to discuss the opportunity. Our track record shows high success 
                in onboarding maintainers when there's clear enterprise interest and fair compensation. We can also help identify 
                alternative maintainers or contribute to getting projects properly maintained.
              </p>
            </div>

            {/* NDA FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <Shield className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">How does NDA protection work?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                All work is covered under enterprise-grade NDAs. Maintainers agree to confidentiality terms before engaging 
                with your team. All code produced remains open source (as required by the licenses), but discussions about your 
                internal architecture, business requirements, timelines, and strategic needs are fully protected. We ensure 
                compliance while maintaining the open source spirit.
              </p>
            </div>

            {/* Getting Started FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <Rocket className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">How quickly can we get started?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                Most enterprises can get started within 2-4 weeks. The timeline includes an initial discovery call to understand 
                your needs, contract negotiation, maintainer matching, and onboarding. For urgent needs, we can expedite this process. 
                Once the contract is signed, you can typically begin working with maintainers within days.
              </p>
            </div>

            {/* Support FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <Clock className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">What kind of support do you provide?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                We provide dedicated account management, technical onboarding, and ongoing platform support. You'll have a single 
                point of contact to help coordinate maintainer engagements, resolve any issues, and optimize your investment. 
                We also provide regular reporting on fund distribution and project outcomes to demonstrate ROI and ecosystem impact.
              </p>
            </div>

            {/* Contract FAQ */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#213654] border border-brand-neutral-400/40 rounded-2xl p-8 hover:border-brand-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <FileText className="w-5 h-5 text-brand-accent-light mt-1 flex-shrink-0" />
                <h3 className="text-brand-neutral-950">What are the contract terms?</h3>
              </div>
              <p className="text-brand-neutral-700 leading-relaxed ml-9">
                We offer flexible contract terms typically ranging from 6-36 months. Reserved Time models usually require minimum 
                6-month commitments to ensure maintainer availability. On-Demand Access can be month-to-month with prepaid credits. 
                All contracts are enterprise-friendly with standard MSA terms, security addendums, and compliance certifications available.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-neutral-700 mb-4">Still have questions?</p>
            <Button 
              variant="outline"
              className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
              onClick={() => onNavItemClick('faq')}
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-t from-brand-secondary via-brand-secondary-dark to-brand-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-highlight/10 opacity-40" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-brand-neutral-950 mb-6">Ready to Get Started?</h2>
          <p className="text-brand-neutral-700 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a 30-minute call to discuss your dependencies and get custom pricing. 
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-brand-accent hover:bg-brand-accent-light text-white shadow-lg shadow-brand-accent/20"
              onClick={onScheduleDemo}
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
              onClick={() => onNavItemClick('projects')}
            >
              Browse Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};
