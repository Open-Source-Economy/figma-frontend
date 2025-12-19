import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { HeroSection } from '../thankyou/HeroSection';
import { ContributionSummary } from '../thankyou/ContributionSummary';
import { IntroCard } from '../thankyou/IntroCard';
import { TimelineCard } from '../thankyou/TimelineCard';
import { VideoMessage } from '../thankyou/VideoMessage';
import { FounderMessage } from '../thankyou/FounderMessage';
import { TeamSection } from '../thankyou/TeamSection';
import { Sparkles } from 'lucide-react';
import { volunteers, maintainers } from '../../data/teamData';

interface ThankYouPageProps {
  donorName?: string;
  amount?: number;
  frequency?: 'monthly' | 'one-time';
  onNavigate?: (page: string) => void;
}

export function ThankYouPage({ 
  donorName = 'Friend',
  amount,
  frequency,
  onNavigate
}: ThankYouPageProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const shareUrl = 'https://opensourceeconomy.org';
  const shareMessage = "I just supported Open Source Economy - helping fund open source maintainers through enterprise contracts. Join me in building sustainable funding for the entire dependency tree! 🌱";

  const handleShare = (platform: 'twitter' | 'linkedin' | 'email' | 'copy') => {
    const encodedMessage = encodeURIComponent(shareMessage);
    const encodedUrl = encodeURIComponent(shareUrl);

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent('Support Open Source Economy')}&body=${encodedMessage}%0A%0A${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareMessage}\n\n${shareUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleNewsletterSignup = () => {
    // Mock newsletter signup - would integrate with actual service
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-brand-navy overflow-x-hidden">
      <div className="w-full mx-auto px-4 py-16 max-w-7xl">
        
        {/* Contribution Summary (if provided) */}
        {amount && (
          <ContributionSummary
            amount={amount}
            frequency={frequency}
          />
        )}

        {/* Responsive layout with order control */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Hero Section - Order 1 on mobile, part of left column on desktop */}
          <div className="order-1 lg:col-span-2">
            <HeroSection
              donorName={donorName}
            />
          </div>

          {/* Right Column - CTAs - Order 2 on mobile, right column on desktop */}
          <div className="order-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1 lg:row-span-2 space-y-4">
            
            {/* Intro Card */}
            <IntroCard
              showDetails={showDetails}
              onToggleDetails={() => setShowDetails(!showDetails)}
            />
            
            {/* All CTAs in One Card with Timeline */}
            <TimelineCard
              email={email}
              subscribed={subscribed}
              copied={copied}
              onEmailChange={setEmail}
              onNewsletterSignup={handleNewsletterSignup}
              onShare={handleShare}
            />

            {/* Bottom encouragement */}
            <div className="text-center py-2 px-3 bg-brand-success/[0.02] rounded-lg border border-brand-success/10">
              <p className="text-brand-neutral-500 text-xs">
                <span className="text-brand-success/70">Completed all 3 levels?</span> You're in the OSE Hall of Fame! <Sparkles className="h-3 w-3 inline text-brand-success/70" />
              </p>
            </div>

          </div>

          {/* Details Section - Order 3 on mobile, continues left column on desktop */}
          <div className="order-3 lg:col-span-2 space-y-6">
            
            {/* Video Message */}
            <VideoMessage />
            
            {/* Founder Message */}
            <FounderMessage />
            
            {/* Two Column Section: Volunteers & Maintainers */}
            <TeamSection
              volunteers={volunteers}
              maintainers={maintainers}
            />

          </div>

        </div>

        {/* Closing Message */}
        <div className="text-center mt-12 pt-8 border-t border-brand-neutral-300">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-brand-accent" />
            <span className="text-brand-neutral-600 text-lg">
              With gratitude from the entire Open Source Economy community
            </span>
            <Heart className="h-6 w-6 text-brand-accent" />
          </div>
        </div>

      </div>
    </div>
  );
}