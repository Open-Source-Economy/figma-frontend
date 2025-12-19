import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Heart, Users } from 'lucide-react';
import { ArrowDown } from '../shared/ArrowDown';
import { ChevronDown } from '../shared/ChevronDown';

interface IntroCardProps {
  showDetails: boolean;
  onToggleDetails: () => void;
}

export function IntroCard({ showDetails, onToggleDetails }: IntroCardProps) {
  return (
    <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
      <CardContent className="p-5 text-center">
        <Heart className="h-8 w-8 text-brand-success mx-auto mb-3" />
        <h3 className="text-brand-neutral-900 mb-2">You Already Donated! 💚</h3>
        <p className="text-brand-neutral-600 text-sm mb-4">Thanks a lot for that!</p>
        
        {/* Compact Key Message */}
        <div className="bg-brand-accent/20 border-2 border-brand-accent rounded-lg px-4 py-3 mb-4">
          <p className="text-brand-neutral-900 mb-1">
            <strong>Can we ask you one more small task?</strong>
          </p>
          <p className="text-brand-neutral-700 text-sm">
            Help us build social proof for enterprise partnerships
          </p>
        </div>
        
        {/* Expandable Details */}
        <button
          onClick={onToggleDetails}
          className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent/80 text-sm transition-colors mb-4 cursor-pointer"
        >
          <Users className="h-4 w-4" />
          <span>{showDetails ? 'Hide' : 'Why this matters'}</span>
          <ChevronDown isOpen={showDetails} />
        </button>
        
        {showDetails && (
          <div className="bg-brand-card-blue-light/30 border-l-4 border-brand-card-blue-light rounded px-4 py-3 mb-4 text-left">
            <p className="text-brand-neutral-700 text-sm mb-2">
              When we approach enterprises, they look for community trust signals. Social proof—followers, shares, subscribers—shows we&apos;re legitimate and worth partnering with.
            </p>
            <p className="text-brand-neutral-700 text-sm">
              <strong className="text-brand-neutral-900">Every follow, share, or signup</strong> directly helps us secure enterprise partnerships that fund maintainers long-term.
            </p>
          </div>
        )}
        
        {/* Call to Action with Arrow */}
        <p className="text-brand-neutral-600 text-sm mb-2">
          Pick any action below—even one helps! ✨
        </p>
        <div className="flex justify-center">
          <ArrowDown className="w-6 h-6 text-brand-accent" animated />
        </div>
      </CardContent>
    </Card>
  );
}
