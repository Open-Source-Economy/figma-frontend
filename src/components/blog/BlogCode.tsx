import React from 'react';

interface BlogCodeProps {
  content: string;
  language?: string;
}

export function BlogCode({ content, language }: BlogCodeProps) {
  return (
    <pre className="blog-code-block">
      <code className="blog-code-text">
        {content}
      </code>
    </pre>
  );
}
