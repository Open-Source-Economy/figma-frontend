import React from 'react';

interface BlogImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8">
      <img 
        src={src} 
        alt={alt || ''} 
        className="w-full rounded-xl"
      />
      {(caption || alt) && (
        <figcaption className="text-center text-brand-neutral-500 mt-3 italic">
          {caption || alt}
        </figcaption>
      )}
    </figure>
  );
}
