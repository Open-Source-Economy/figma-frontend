import React from 'react';

interface BlogHeadingProps {
  content: string;
  level: number;
  id?: string;
}

export function BlogHeading({ content, level, id }: BlogHeadingProps) {
  const HeadingTag = `h${level || 2}` as keyof JSX.IntrinsicElements;
  
  // Map heading levels to blog-specific classes with visual hierarchy
  const getHeadingClass = () => {
    switch(level) {
      case 2:
        return 'blog-heading-2';
      case 3:
        return 'blog-heading-3';
      case 4:
        return 'blog-heading-4';
      case 5:
        return 'blog-heading-5';
      case 6:
        return 'blog-heading-6';
      default:
        return 'blog-heading-2';
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
