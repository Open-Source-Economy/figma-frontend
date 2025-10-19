import React from 'react';

interface BlogImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="blog-figure">
      <img 
        src={src} 
        alt={alt || ''} 
        className="w-full rounded-xl"
      />
      {(caption || alt) && (
        <figcaption className="blog-caption">
          {caption || alt}
        </figcaption>
      )}
    </figure>
  );
}
