import React from 'react';
import { Card, CardContent } from '../ui/card';
import { TimelineStep } from '../timeline/TimelineStep';
import { SocialFollowButtons } from '../timeline/SocialFollowButtons';
import { NewsletterSignup } from '../timeline/NewsletterSignup';
import { ShareButtons } from '../timeline/ShareButtons';

interface TimelineCardProps {
  email: string;
  subscribed: boolean;
  copied: boolean;
  onEmailChange: (email: string) => void;
  onNewsletterSignup: () => void;
  onShare: (platform: 'twitter' | 'linkedin' | 'email' | 'copy') => void;
}

export function TimelineCard({
  email,
  subscribed,
  copied,
  onEmailChange,
  onNewsletterSignup,
  onShare
}: TimelineCardProps) {
  return (
    <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
      <CardContent className="p-6">
        
        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Timeline Line - centered through the circles */}
          <div className="absolute left-5 top-[20px] bottom-[20px] w-0.5 bg-gradient-to-b from-brand-success via-brand-accent to-brand-highlight" />
          
          {/* Level 1: EASY */}
          <TimelineStep
            stepNumber={1}
            difficulty="easy"
            title="Click Once, Call It a Day"
            description="Takes 5 seconds. Pick any platform below. 😎"
            color="brand-success"
            bgColor="bg-brand-success"
            borderColor="border-brand-neutral-300"
            hoverBorderColor="hover:border-brand-success"
            hoverBgColor="hover:bg-brand-success/10"
            connectorColor="bg-brand-success"
          >
            <SocialFollowButtons
              color="brand-success"
              borderColor="border-brand-neutral-300"
              hoverBorderColor="hover:border-brand-success"
              hoverBgColor="hover:bg-brand-success/10"
            />
          </TimelineStep>

          {/* Level 2: MEDIUM */}
          <TimelineStep
            stepNumber={2}
            difficulty="medium"
            title="Join the Inner Circle"
            description={
              <>
                Get updates on <span className="text-brand-accent">where your $ actually goes</span>. We send emails like once a month. Swear on our GitHub commit history. 📬
              </>
            }
            color="brand-accent"
            bgColor="bg-brand-accent"
            borderColor="border-brand-neutral-300"
            hoverBorderColor="hover:border-brand-accent"
            hoverBgColor="hover:bg-brand-accent/10"
            connectorColor="bg-brand-accent"
          >
            <NewsletterSignup
              email={email}
              subscribed={subscribed}
              onEmailChange={onEmailChange}
              onSignup={onNewsletterSignup}
            />
          </TimelineStep>

          {/* Level 3: HARD */}
          <TimelineStep
            stepNumber={3}
            difficulty="hard"
            title="Become Our Champion"
            description={
              <>
                Tell your network we exist. This is the <span className="text-brand-highlight">big leagues</span>—we're talking enterprise eyeballs here. Your friends will think you're cool. Probably. 🦸
              </>
            }
            color="brand-highlight"
            bgColor="bg-brand-highlight"
            borderColor="border-brand-neutral-300"
            hoverBorderColor="hover:border-brand-highlight"
            hoverBgColor="hover:bg-brand-highlight/10"
            connectorColor="bg-brand-highlight"
            isLast
            showPrewrittenBadge
          >
            <ShareButtons
              borderColor="border-brand-neutral-300"
              hoverBorderColor="hover:border-brand-highlight"
              hoverBgColor="hover:bg-brand-highlight/10"
              onShare={onShare}
              copied={copied}
            />
          </TimelineStep>

        </div>

      </CardContent>
    </Card>
  );
}
