import React from 'react';

interface BlogVideoProps {
  videoId: string;
  caption?: string;
}

function getYouTubeEmbedId(url: string): string {
  // If it's already just an ID (11 characters)
  if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
    return url;
  }
  
  // Extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
    /youtube\.com\/watch\?.*v=([\w-]{11})/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return url; // Return as-is if no pattern matches
}

export function BlogVideo({ videoId, caption }: BlogVideoProps) {
  const embedId = getYouTubeEmbedId(videoId);
  
  return (
    <figure className="blog-figure">
      <div className="relative w-full rounded-xl overflow-hidden bg-brand-neutral-200" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={caption || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="blog-caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
