import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { NextStepsCard } from '../onboarding/NextStepsCard';
import { CheckCircle2, Mail, HelpCircle, ArrowRight, Heart, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

interface OnboardingSuccessPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

/**
 * OnboardingSuccessPage - Displayed after successful onboarding submission
 * Modern, streamlined design with purple/coral branding
 */
export const OnboardingSuccessPage: React.FC<OnboardingSuccessPageProps> = ({
  onNavigateHome,
  onNavItemClick,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={onNavigateHome}
        onDeveloperRegister={() => {}}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon & Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-success to-brand-success-dark rounded-2xl mb-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="mb-3">
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent">
                You're In! Welcome Aboard 🎉
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thanks for taking the leap! We're excited to have you join the Open Source Economy community. Our team is reviewing your application and we'll reach out soon.
            </p>
          </div>

          {/* Volunteer Notice */}
          <div className="mb-12 p-6 bg-gradient-to-br from-brand-highlight/5 to-brand-accent/5 border border-brand-accent/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-highlight to-brand-accent rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Made with Love by Our Community</h3>
                <p className="text-sm text-muted-foreground">
                  We're powered by passionate volunteers who believe in open source. We'll review your profile and get back to you soon—thanks for your patience!
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-center mb-8">What's Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <NextStepsCard
                icon={Clock}
                title="We'll Review It"
                description="Our team will take a look at your details and make sure everything looks good."
                timeline="Usually 2-3 business days"
                brandColor="accent"
              />

              <NextStepsCard
                icon={Send}
                title="You'll Hear From Us"
                description="We'll send you an email with everything you need to get started!"
                timeline="Keep an eye on your inbox"
                brandColor="primary"
              />

              <NextStepsCard
                icon={Sparkles}
                title="Start Your Journey"
                description="Connect with companies looking to support your projects and get funded!"
                timeline="The fun part begins"
                brandColor="highlight"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => onNavItemClick('contact')}
                leftIcon={Mail}
              >
                Questions? Reach Out
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavItemClick('faq')}
                leftIcon={HelpCircle}
              >
                Browse FAQ
              </Button>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={onNavigateHome}
                rightIcon={ArrowRight}
                icon
              >
                Back to Home
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              We'll send your application reference number to your email—keep it handy!
            </p>
          </div>
        </div>
      </main>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};
