import React from 'react';
import { Button } from '../../ui/button';
import { StatefulAction } from '../../ui/StatefulAction';
import { Linkedin, Github, Youtube, Twitter, Share2, Egg, Heart, Sparkles } from 'lucide-react';

export function VisibilityDetails() {
  const platforms = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/opensourceeconomy', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/opensourceeconomy', color: 'text-gray-100', bgColor: 'bg-gray-100/10' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@opensourceeconomy', color: 'text-red-500', bgColor: 'bg-red-500/10' },
    { name: 'X', icon: Twitter, url: 'https://x.com/opensourceeco', color: 'text-gray-100', bgColor: 'bg-gray-100/10' },
    { name: 'Eggs', icon: Egg, url: 'https://eggs.mu/opensourceeconomy', color: 'text-orange-400', bgColor: 'bg-orange-400/10' },
    { name: 'Mastodon', icon: Share2, url: 'https://mastodon.social/@opensourceeconomy', color: 'text-purple-400', bgColor: 'bg-purple-400/10' }
  ];

  return (
    <div className="space-y-6">
      {/* Funny Thank You Box */}
      <div className="relative bg-gradient-to-r from-brand-highlight/20 via-brand-accent/20 to-brand-success/20 border-2 border-brand-accent border-dashed rounded-xl p-6 overflow-hidden">
        <div className="absolute top-2 right-2">
          <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Heart className="h-8 w-8 text-brand-highlight fill-brand-highlight" />
          </div>
          <div>
            <h3 className="text-brand-neutral-950 mb-2">Every. Single. Follower. Counts! 🎉</h3>
            <p className="text-brand-neutral-600 mb-3">
              Seriously, you have no idea how much a simple follow means to us. When we approach enterprises, they check our social proof. 
              Your follow isn't just a number—it's validation that what we're building matters. Thank you for being awesome! 💚
            </p>
            <p className="text-sm text-brand-neutral-500 italic">
              P.S. If you follow us on all platforms, you're basically a superhero in our eyes. 🦸
            </p>
          </div>
        </div>
      </div>

      <p className="text-brand-neutral-600">
        Click any platform below to follow us. Each one takes just 5 seconds and makes a huge difference!
      </p>
      
      <StatefulAction
        successContent={{
          title: "Following Successful! 🎉",
          message: "Thank you for supporting Open Source Economy!",
        }}
        errorContent={{
          title: "Oops!",
          message: "Something went wrong. Please try again.",
          retry: () => {},
          retryLabel: "Retry",
        }}
        loadingContent={{
          message: "Opening social platform...",
        }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Button
                key={platform.name}
                variant="outline"
                onClick={() => window.open(platform.url, '_blank')}
                className="h-auto flex-col gap-2 p-4 border-2 border-brand-neutral-300/50 hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105 transition-all"
              >
                <Icon className={`h-12 w-12 ${platform.color}`} />
                <span className="text-xs text-brand-neutral-900">{platform.name}</span>
              </Button>
            );
          })}
        </div>
      </StatefulAction>
    </div>
  );
}