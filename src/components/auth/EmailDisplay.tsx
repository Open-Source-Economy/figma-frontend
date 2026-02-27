import React from 'react';
import { Mail } from 'lucide-react';

interface EmailDisplayProps {
  email: string;
}

export function EmailDisplay({ email }: EmailDisplayProps) {
  return (
    <div className="bg-brand-secondary/20 rounded-lg p-3.5 border border-brand-neutral-400/30">
      <div className="flex items-center gap-2.5">
        <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" />
        <span className="text-brand-neutral-800 text-sm truncate">{email}</span>
      </div>
    </div>
  );
}
