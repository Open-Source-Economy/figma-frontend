import React from 'react';

interface BlogSubtitleProps {
  content: string;
}

export function BlogSubtitle({ content }: BlogSubtitleProps) {
  return (
    <p className="blog-subtitle">
      {content}
    </p>
  );
}
