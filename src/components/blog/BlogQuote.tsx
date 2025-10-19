import React from 'react';

interface BlogQuoteProps {
  content: string;
  author?: string;
  role?: string;
}

export function BlogQuote({ content, author, role }: BlogQuoteProps) {
  return (
    <blockquote className="blog-quote">
      <p className="blog-quote-text">
        {content}
      </p>
      {(author || role) && (
        <footer>
          {author && (
            <cite className="blog-quote-author">
              — {author}
            </cite>
          )}
          {role && (
            <span className="blog-quote-role">
              {author ? ', ' : '— '}{role}
            </span>
          )}
        </footer>
      )}
    </blockquote>
  );
}
