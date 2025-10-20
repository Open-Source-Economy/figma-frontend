import React from 'react';

interface BlogParagraphProps {
  content: string;
}

export function BlogParagraph({ content }: BlogParagraphProps) {
  const renderParagraphWithFormattedText = (text: string) => {
    // Split by both links and bold tags
    const parts = text.split(/(<a[^>]*>.*?<\/a>|<strong>.*?<\/strong>|<b>.*?<\/b>)/g);
    
    return parts.map((part, index) => {
      // Handle links
      const linkMatch = part.match(/<a\s+([^>]*)>(.*?)<\/a>/);
      if (linkMatch) {
        const [, attrs, linkText] = linkMatch;
        const hrefMatch = attrs.match(/href="([^"]*)"/);
        const targetMatch = attrs.match(/target="([^"]*)"/);
        const relMatch = attrs.match(/rel="([^"]*)"/);
        
        const href = hrefMatch ? hrefMatch[1] : '#';
        const target = targetMatch ? targetMatch[1] : undefined;
        const rel = relMatch ? relMatch[1] : undefined;
        
        return (
          <a 
            key={index} 
            href={href}
            className="text-brand-accent underline decoration-transparent hover:text-brand-accent-dark hover:decoration-brand-accent-dark transition-all duration-200"
            target={target}
            rel={rel}
          >
            {linkText}
          </a>
        );
      }
      
      // Handle bold/strong tags
      const strongMatch = part.match(/<strong>(.*?)<\/strong>/);
      if (strongMatch) {
        return (
          <strong key={index} className="text-brand-neutral-900">
            {strongMatch[1]}
          </strong>
        );
      }
      
      const boldMatch = part.match(/<b>(.*?)<\/b>/);
      if (boldMatch) {
        return (
          <strong key={index} className="text-brand-neutral-900">
            {boldMatch[1]}
          </strong>
        );
      }
      
      return part;
    });
  };

  return (
    <p className="text-brand-neutral-700 mb-6">
      {renderParagraphWithFormattedText(content)}
    </p>
  );
}