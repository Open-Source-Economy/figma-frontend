import React from 'react';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { blogPosts, formatDate } from '../../data/blogData';

interface BlogTeaserProps {
  className?: string;
  onReadMore?: (slug: string) => void;
  onViewAllPosts?: () => void;
}

export function BlogTeaser({ 
  className = '', 
  onReadMore,
  onViewAllPosts
}: BlogTeaserProps) {
  // Get the first 4 blog posts
  const recentPosts = blogPosts.slice(0, 4);

  const handleReadMore = (slug: string) => {
    if (onReadMore) {
      onReadMore(slug);
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-b from-brand-secondary to-brand-neutral-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-accent/30 rounded-lg mb-6">
            <Calendar className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent">Thought Leadership</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4">
            Latest Insights
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into the economics, technology, and human stories behind sustainable open source development.
          </p>
        </div>

        {/* Featured Post - Full Width */}
        <div className="mb-12">
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
               onClick={() => handleReadMore(recentPosts[0].slug)}>
            
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden">
              <img 
                src={recentPosts[0].featuredImage} 
                alt={recentPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brand-accent/15 text-brand-accent rounded-lg text-sm">
                  {recentPosts[0].category}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-brand-accent transition-colors duration-300">
                {recentPosts[0].title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {recentPosts[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={recentPosts[0].author.avatar} 
                    alt={recentPosts[0].author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-sm">{recentPosts[0].author.name}</div>
                    <div className="text-xs text-muted-foreground">{recentPosts[0].author.role}</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid - 3 Columns */}
        {recentPosts.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recentPosts.slice(1, 4).map((post) => (
              <div 
                key={post.id}
                className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-brand-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                onClick={() => handleReadMore(post.slug)}
              >
                {/* Featured Image */}
                <div className="aspect-video bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 rounded-t-xl overflow-hidden relative">
                  <img 
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Gradient Overlay for Better Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-brand-neutral-300/20 text-muted-foreground rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3 group-hover:text-brand-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author.name}</span>
                    <div className="flex items-center gap-1 text-brand-accent">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            onClick={onViewAllPosts}
            className="border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent/60"
          >
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}