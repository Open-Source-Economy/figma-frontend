import React from 'react';

interface BlogHeadingProps {
  content: string;
  level: number;
  id?: string;
}

export function BlogHeading({ content, level, id }: BlogHeadingProps) {
  const HeadingTag = `h${level || 2}` as keyof JSX.IntrinsicElements;
  
  // Map heading levels to Tailwind classes for spacing and colors
  // Typography (font-size, weight, line-height) inherits from base layer
  const getHeadingClass = () => {
    switch(level) {
      case 2:
        return 'text-brand-neutral-950 mt-12 mb-6 scroll-mt-24';
      case 3:
        return 'text-brand-neutral-900 mt-10 mb-5 scroll-mt-24';
      case 4:
        return 'text-brand-neutral-800 mt-8 mb-4 scroll-mt-24';
      case 5:
        return 'text-brand-neutral-700 mt-7 mb-3 scroll-mt-24';
      case 6:
        return 'text-brand-neutral-600 mt-6 mb-2 scroll-mt-24 uppercase';
      default:
        return 'text-brand-neutral-950 mt-12 mb-6 scroll-mt-24';
    }
  };
  
  return (
    <HeadingTag 
      id={id}
      className={getHeadingClass()}
    >
      {content}
    </HeadingTag>
  );
}
