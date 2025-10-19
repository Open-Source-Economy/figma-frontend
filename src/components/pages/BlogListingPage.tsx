import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SectionHeader } from '../ui/section-header';
import { Badge } from '../ui/badge';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, formatDate } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';

interface BlogListingPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onViewPost: (slug: string) => void;
}

export function BlogListingPage({ 
  onNavigateHome, 
  onNavItemClick,
  onViewPost 
}: BlogListingPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedTag, setSelectedTag] = React.useState<string>('all');

  // Get unique categories and tags
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false;
    if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />
      
      <main className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Page Header */}
        <div className="mb-16">
          <SectionHeader
            title="Open Source Economy Insights"
            description="Expert perspectives on sustainable open source funding, enterprise best practices, and building resilient software infrastructure"
            spacing="lg"
            align="center"
            maxWidth="3xl"
            className="[&_h2]:text-brand-neutral-950 [&_h2]:text-4xl"
          />
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl text-brand-neutral-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <FeaturedBlogCard 
                  key={post.id} 
                  post={post} 
                  onViewPost={onViewPost}
                />
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-brand-neutral-600 mb-3">Filter by Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-accent text-white'
                      : 'bg-brand-card-blue text-brand-neutral-600 hover:bg-brand-card-blue-light hover:text-brand-neutral-800'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex-1">
            <label className="block text-brand-neutral-600 mb-3">Filter by Tag</label>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 6).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-brand-accent text-white'
                      : 'bg-brand-card-blue text-brand-neutral-600 hover:bg-brand-card-blue-light hover:text-brand-neutral-800'
                  }`}
                >
                  {tag === 'all' ? 'All Tags' : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onViewPost={onViewPost}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-neutral-600">No posts found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag('all');
              }}
              className="mt-4 text-brand-accent hover:text-brand-accent-light transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}

function FeaturedBlogCard({ post, onViewPost }: { post: BlogPost; onViewPost: (slug: string) => void }) {
  return (
    <article 
      className="group relative bg-brand-card-blue rounded-2xl overflow-hidden border border-brand-neutral-300/10 hover:border-brand-accent/30 transition-all duration-500 cursor-pointer"
      onClick={() => onViewPost(post.slug)}
    >
      {/* Featured Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category Badge */}
        <Badge className="mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/20">
          {post.category}
        </Badge>

        {/* Title */}
        <h3 className="text-2xl text-brand-neutral-900 mb-3 group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-brand-neutral-600 mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-brand-neutral-500">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-neutral-500">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-brand-neutral-800">{post.author.name}</p>
            <p className="text-brand-neutral-500">{post.author.role}</p>
          </div>
        </div>

        {/* Read More Arrow */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-6 h-6 text-brand-accent" />
        </div>
      </div>
    </article>
  );
}

function BlogCard({ post, onViewPost }: { post: BlogPost; onViewPost: (slug: string) => void }) {
  return (
    <article 
      className="group relative bg-brand-card-blue rounded-2xl overflow-hidden border border-brand-neutral-300/10 hover:border-brand-accent/30 transition-all duration-500 cursor-pointer flex flex-col"
      onClick={() => onViewPost(post.slug)}
    >
      {/* Featured Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category Badge */}
        <Badge className="mb-3 bg-brand-accent/10 text-brand-accent border-brand-accent/20 self-start">
          {post.category}
        </Badge>

        {/* Title */}
        <h3 className="text-brand-neutral-900 mb-2 group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-brand-neutral-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 rounded text-brand-neutral-500 bg-brand-neutral-200/50 border border-brand-neutral-300/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-brand-neutral-500 pt-4 border-t border-brand-neutral-300/10">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}