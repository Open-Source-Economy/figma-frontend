import React from 'react';

interface BlogQuoteProps {
  content: string;
  author?: string;
  role?: string;
}

export function BlogQuote({ content, author, role }: BlogQuoteProps) {
  return (
    <blockquote className="border-l-4 border-brand-accent pl-6 py-4 my-8 bg-brand-accent/5 rounded-r-xl">
      <p className="text-brand-neutral-800 italic mb-3">
        {content}
      </p>
      {(author || role) && (
        <footer>
          {author && (
            <cite className="text-brand-neutral-700 not-italic">
              — {author}
            </cite>
          )}
          {role && (
            <span className="text-brand-neutral-500">
              {author ? ', ' : '— '}{role}
            </span>
          )}
        </footer>
      )}
    </blockquote>
  );
}
