import React from 'react';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  donorName: string;
}

export function HeroSection({ donorName }: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center text-center mb-6 lg:mb-2">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-success/20 rounded-full mb-4 animate-pulse">
        <Heart className="h-12 w-12 text-brand-success" />
      </div>
      <h1 className="text-brand-neutral-950 mb-4 leading-tight">
        Thank You, {donorName}! 🎉
      </h1>
      <p className="text-brand-neutral-600 text-xl mb-4 max-w-2xl">
        Your contribution is making a real difference in the open source ecosystem
      </p>
      <p className="text-brand-neutral-600 leading-relaxed mb-6">
        Your support empowers the <span className="text-brand-accent">Open Source Economy</span> team—from leadership to volunteers—to connect enterprises with open source maintainers and build sustainable funding across the entire dependency tree.
      </p>
    </div>
  );
}
