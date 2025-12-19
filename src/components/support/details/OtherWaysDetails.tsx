import React from 'react';
import { Button } from '../../ui/button';
import { Code, BookOpen, MessageCircle, Star, FileText, Users2, Megaphone, GitPullRequest, ArrowRight } from 'lucide-react';

interface OtherWaysDetailsProps {
  onNavigate?: (page: string) => void;
}

export function OtherWaysDetails({ onNavigate }: OtherWaysDetailsProps) {
  const ways = [
    { icon: Code, title: 'Contribute Code', link: 'https://github.com/opensourceeconomy', external: true },
    { icon: BookOpen, title: 'Write Content', page: 'contact' },
    { icon: MessageCircle, title: 'Join Discord', link: 'https://discord.gg/opensourceeconomy', external: true },
    { icon: Star, title: 'Leave Reviews', page: 'contact' },
    { icon: FileText, title: 'Case Studies', page: 'contact' },
    { icon: Users2, title: 'Host Events', page: 'contact' },
    { icon: Megaphone, title: 'Speak About Us', page: 'contact' },
    { icon: GitPullRequest, title: 'Become Maintainer', page: 'maintainer-registration' }
  ];

  const handleClick = (way: typeof ways[0]) => {
    if (way.external && way.link) {
      window.open(way.link, '_blank');
    } else if (way.page) {
      onNavigate?.(way.page);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-brand-neutral-600">
        Many ways to contribute beyond donations and social media. Every contribution helps build sustainable open source!
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ways.map((way) => {
          const Icon = way.icon;
          return (
            <Button
              key={way.title}
              variant="outline"
              onClick={() => handleClick(way)}
              className="h-auto flex-col gap-2 p-4 border-2 border-brand-neutral-300 hover:border-brand-success hover:bg-brand-success/10"
            >
              <Icon className="h-5 w-5 text-brand-success" />
              <span className="text-xs text-center">{way.title}</span>
              <ArrowRight className="h-3 w-3 text-brand-neutral-500" />
            </Button>
          );
        })}
      </div>

      <div className="bg-brand-success/10 border-l-4 border-brand-success rounded p-3">
        <p className="text-sm text-brand-neutral-700">
          <strong>Have another idea?</strong> We&apos;re open to creative collaborations!
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate?.('contact')}
          className="mt-2 border-brand-success hover:bg-brand-success/10"
        >
          Share Your Idea
        </Button>
      </div>
    </div>
  );
}
