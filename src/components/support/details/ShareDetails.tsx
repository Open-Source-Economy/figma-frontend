import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Twitter, Linkedin, Mail, Copy, CheckCircle, Users, Building2 } from 'lucide-react';

type Audience = 'developers' | 'enterprises';
type Platform = 'twitter' | 'linkedin' | 'email';

interface PlatformMessage {
  text: string;
  characterCount: number;
  maxCharacters?: number;
}

export function ShareDetails() {
  const [selectedAudience, setSelectedAudience] = useState<Audience>('developers');
  const [copiedPlatform, setCopiedPlatform] = useState<Platform | null>(null);

  // Platform-specific messages for each audience
  const messages: Record<Audience, Record<Platform, PlatformMessage>> = {
    developers: {
      twitter: {
        text: "🌱 Open Source Economy funds maintainers through enterprise partnerships - sustainable funding for the entire dependency tree! https://opensourceeconomy.org",
        characterCount: 157,
        maxCharacters: 280
      },
      linkedin: {
        text: "I'm excited to support Open Source Economy - a nonprofit connecting enterprises with open source maintainers.\n\nThey're solving the sustainability crisis by giving companies direct access to maintainers under a single contract, with transparent pricing that shows how funds flow to projects, dependencies, and the broader ecosystem.\n\nIf you maintain open source projects or use them in your company, check them out: https://opensourceeconomy.org",
        characterCount: 442,
      },
      email: {
        text: "Hi,\n\nI wanted to share Open Source Economy with you - they're working on sustainable funding for open source maintainers.\n\nThey connect enterprises directly with maintainers through a single contract, and show transparent pricing on how funds are distributed across projects, dependencies, and the ecosystem.\n\nIt's a nonprofit initiative that could really help the open source community. Worth checking out!\n\nhttps://opensourceeconomy.org\n\nBest regards",
        characterCount: 477,
      }
    },
    enterprises: {
      twitter: {
        text: "Open Source Economy gives companies direct access to top maintainers under one contract. Transparent pricing. Sustainable open source. https://opensourceeconomy.org",
        characterCount: 162,
        maxCharacters: 280
      },
      linkedin: {
        text: "For companies relying on open source: Open Source Economy offers a game-changing approach.\n\nGet direct access to the maintainers of the tools your business depends on - all under a single contract. No more fragmented relationships or uncertainty about project sustainability.\n\nWhat sets them apart:\n• Direct access to top open source maintainers\n• Single contract covering multiple projects\n• Transparent pricing showing fund distribution\n• Support flows to dependencies and the broader ecosystem\n• Operated as a nonprofit for community trust\n\nIf your company uses open source (and who doesn't?), this is worth exploring: https://opensourceeconomy.org",
        characterCount: 633,
      },
      email: {
        text: "Hi,\n\nI came across Open Source Economy and thought it might be relevant for your company's open source strategy.\n\nThey provide enterprises with direct access to the maintainers of open source projects you rely on, all under a single contract. The pricing is transparent, showing exactly how funds are distributed to projects, dependencies, and the ecosystem.\n\nAs a nonprofit, they're focused on creating sustainable funding for the open source tools businesses depend on.\n\nLearn more: https://opensourceeconomy.org\n\nBest regards",
        characterCount: 544,
      }
    }
  };

  const handleShare = (platform: Platform) => {
    const message = messages[selectedAudience][platform];
    const url = 'https://opensourceeconomy.org';
    const encoded = encodeURIComponent(message.text);
    const encodedUrl = encodeURIComponent(url);

    const actions = {
      twitter: () => window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank'),
      linkedin: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank'),
      email: () => window.location.href = `mailto:?subject=Check out Open Source Economy&body=${encoded}`,
    };

    actions[platform]();
  };

  const handleCopy = (platform: Platform) => {
    const message = messages[selectedAudience][platform];
    navigator.clipboard.writeText(message.text);
    setCopiedPlatform(platform);
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  const platforms: { id: Platform; icon: typeof Twitter; name: string; color: string }[] = [
    { id: 'twitter', icon: Twitter, name: 'X / Twitter', color: 'text-gray-100' },
    { id: 'linkedin', icon: Linkedin, name: 'LinkedIn', color: 'text-blue-500' },
    { id: 'email', icon: Mail, name: 'Email', color: 'text-brand-success' }
  ];

  return (
    <div className="space-y-6">
      <p className="text-brand-neutral-600">
        Choose your audience and platform. Each message is optimized for its platform and target audience.
      </p>

      {/* Audience Selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedAudience('developers')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
            selectedAudience === 'developers'
              ? 'bg-brand-success/10 border-brand-success text-brand-success shadow-sm'
              : 'bg-white border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-success/50'
          }`}
        >
          <Users className="h-5 w-5" />
          <span>For Developers</span>
        </button>
        <button
          onClick={() => setSelectedAudience('enterprises')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
            selectedAudience === 'enterprises'
              ? 'bg-brand-accent/10 border-brand-accent text-brand-accent shadow-sm'
              : 'bg-white border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
          }`}
        >
          <Building2 className="h-5 w-5" />
          <span>For Enterprises</span>
        </button>
      </div>

      {/* Platform Messages */}
      <div className="grid gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const message = messages[selectedAudience][platform.id];
          const isCopied = copiedPlatform === platform.id;

          return (
            <div
              key={platform.id}
              className="bg-gradient-to-br from-white to-brand-card-blue-light border-2 border-brand-neutral-300/50 rounded-xl p-5 hover:border-brand-neutral-400/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-5 w-5 ${platform.color}`} />
                  <span className="text-brand-neutral-900">{platform.name}</span>
                </div>
                <div className="text-xs text-brand-neutral-500">
                  {message.characterCount} chars
                  {message.maxCharacters && (
                    <span className={message.characterCount > message.maxCharacters ? 'text-brand-error ml-1' : ''}>
                      {' '}/ {message.maxCharacters}
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-white/70 border border-brand-neutral-200 rounded-lg p-3 mb-3">
                <p className="text-sm text-brand-neutral-700 whitespace-pre-line">
                  {message.text}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleShare(platform.id)}
                  className="flex-1 bg-brand-highlight hover:bg-brand-highlight/90 text-white"
                  size="sm"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  Share on {platform.name}
                </Button>
                <Button
                  onClick={() => handleCopy(platform.id)}
                  variant="outline"
                  size="sm"
                  className="border-brand-neutral-300 hover:border-brand-success hover:bg-brand-success/10"
                >
                  {isCopied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
