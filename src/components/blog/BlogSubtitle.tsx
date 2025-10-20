import React from 'react';

interface BlogSubtitleProps {
  content: string;
}

export function BlogSubtitle({ content }: BlogSubtitleProps) {
  return (
    <p className="text-brand-neutral-600 italic border-l-3 border-brand-accent pl-6 my-8">
      {content}
    </p>
  );
}
