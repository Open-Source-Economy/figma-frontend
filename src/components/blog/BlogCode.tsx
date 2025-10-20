import React from 'react';

interface BlogCodeProps {
  content: string;
  language?: string;
}

export function BlogCode({ content, language }: BlogCodeProps) {
  return (
    <pre className="bg-brand-neutral-100 rounded-xl p-6 overflow-x-auto mb-6 border border-brand-neutral-300/20">
      <code className="font-mono text-brand-neutral-800">
        {content}
      </code>
    </pre>
  );
}
