import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { BlogPost } from '../../data/blogData';

interface RelatedPostCardProps {
  post: BlogPost;
  onViewPost: (slug: string) => void;
}

export function RelatedPostCard({ post, onViewPost }: RelatedPostCardProps) {
  return (
    <article 
      className="group bg-brand-card-blue rounded-2xl overflow-hidden border border-brand-neutral-300/10 hover:border-brand-accent/30 transition-all duration-500 cursor-pointer"
      onClick={() => onViewPost(post.slug)}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <Badge className="mb-3 bg-brand-accent/10 text-brand-accent border-brand-accent/20">
          {post.category}
        </Badge>
        <h3 className="text-brand-neutral-900 mb-2 group-hover:text-brand-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-brand-neutral-500">
          <Clock className="w-3 h-3" />
          <span>{post.readingTime} min read</span>
          <ChevronRight className="w-4 h-4 ml-auto text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </article>
  );
}
