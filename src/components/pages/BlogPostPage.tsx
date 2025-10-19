import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link2,
  Mail,
  BookOpen,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { blogPosts, getRelatedPosts, formatDate } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';
import { BlogContentRenderer } from '../blog/BlogContentRenderer';
import { RelatedPostCard } from '../blog/RelatedPostCard';

interface BlogPostPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onViewPost: (slug: string) => void;
  onBackToBlog: () => void;
}

export function BlogPostPage({ 
  slug, 
  onNavigateHome, 
  onNavItemClick,
  onViewPost,
  onBackToBlog
}: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = post ? getRelatedPosts(post.id) : [];
  const [activeSection, setActiveSection] = React.useState<string>('');
  
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [subscriptionError, setSubscriptionError] = React.useState('');
  const [showErrorDemo, setShowErrorDemo] = React.useState(false);

  // Generate table of contents from headings
  const tableOfContents = React.useMemo(() => {
    if (!post) return [];
    return post.content
      .filter(item => item.type === 'heading' && item.level === 2)
      .map((item, index) => ({
        id: `section-${index}`,
        title: item.content as string
      }));
  }, [post]);

  // Scroll spy effect
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-brand-neutral-900 mb-4">Post Not Found</h1>
          <Button onClick={onBackToBlog}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionStatus('idle');
    setSubscriptionError('');

    try {
      // Simulate a subscription request
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For demonstration purposes, check if we should simulate an error
      if (showErrorDemo) {
        setShowErrorDemo(false); // Reset the toggle
        throw new Error('Unable to subscribe at this time. The server encountered an error. Please try again later.');
      }

      setSubscriptionStatus('success');
    } catch (error) {
      setSubscriptionStatus('error');
      setSubscriptionError(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />
      
      {/* Hero Section */}
      <section className="relative">
        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] max-h-[500px] overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/50 to-transparent" />
        </div>

        {/* Title Overlay */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto -mt-32 relative z-10">
            <div className="bg-brand-card-blue/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-brand-neutral-300/10">
              {/* Back Button */}
              <button
                onClick={onBackToBlog}
                className="flex items-center gap-2 text-brand-neutral-600 hover:text-brand-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>

              {/* Category */}
              <Badge className="mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                {post.category}
              </Badge>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl text-brand-neutral-900 mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-brand-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
                {post.updatedAt && (
                  <div className="text-brand-neutral-500">
                    Updated: {formatDate(post.updatedAt)}
                  </div>
                )}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pb-6 border-b border-brand-neutral-300/10">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="text-brand-neutral-900">{post.author.name}</p>
                  <p className="text-brand-neutral-600">{post.author.role}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-lg text-brand-neutral-600 bg-brand-neutral-200/50 border border-brand-neutral-300/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Sidebar */}
            {tableOfContents.length > 0 && (
              <aside className="lg:col-span-3 order-2 lg:order-1">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-brand-card-blue rounded-2xl p-6 border border-brand-neutral-300/10">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-4 h-4 text-brand-accent" />
                      <h3 className="text-brand-neutral-900">Table of Contents</h3>
                    </div>
                    <nav>
                      <ul className="space-y-2">
                        {tableOfContents.map(item => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className={`block py-2 px-4 rounded-lg transition-all ${
                                activeSection === item.id
                                  ? 'bg-brand-accent/10 text-brand-accent border-l-2 border-brand-accent'
                                  : 'text-brand-neutral-600 hover:bg-brand-accent/10 hover:text-brand-accent'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  {/* Share Buttons */}
                  <div className="bg-brand-card-blue rounded-2xl p-6 border border-brand-neutral-300/10 mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Share2 className="w-4 h-4 text-brand-accent" />
                      <h3 className="text-brand-neutral-900">Share Article</h3>
                    </div>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-neutral-200/30 hover:bg-brand-accent/10 hover:text-brand-accent transition-all text-brand-neutral-600"
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-neutral-200/30 hover:bg-brand-accent/10 hover:text-brand-accent transition-all text-brand-neutral-600"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-neutral-200/30 hover:bg-brand-accent/10 hover:text-brand-accent transition-all text-brand-neutral-600"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-neutral-200/30 hover:bg-brand-accent/10 hover:text-brand-accent transition-all text-brand-neutral-600"
                      >
                        <Link2 className="w-4 h-4" />
                        <span>Copy Link</span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* Article Content */}
            <article className={`${tableOfContents.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'} order-1 lg:order-2`}>
              <div className="max-w-none">
                <BlogContentRenderer content={post.content} />
              </div>

              {/* Author Bio */}
              <div className="mt-16 bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
                <div className="flex items-start gap-6">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl text-brand-neutral-900 mb-2">About {post.author.name}</h3>
                    <p className="text-brand-neutral-600 mb-4">{post.author.bio}</p>
                    <div className="flex gap-4">
                      {post.author.twitter && (
                        <a 
                          href={`https://twitter.com/${post.author.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-neutral-500 hover:text-brand-accent transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {post.author.github && (
                        <a 
                          href={`https://github.com/${post.author.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-neutral-500 hover:text-brand-accent transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-12 bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10 rounded-2xl p-8 border border-brand-accent/20">
                <div className="max-w-2xl mx-auto">
                  {/* Demo Toggle - Development only */}
                  {process.env.NODE_ENV === 'development' && (
                    <div className="mb-6 p-4 bg-brand-card-blue/50 rounded-lg border border-brand-warning/30">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={showErrorDemo}
                          onChange={(e) => setShowErrorDemo(e.target.checked)}
                          className="w-4 h-4 rounded border-brand-neutral-300"
                        />
                        <span className="text-brand-warning">Simulate Subscription Error (Dev Only)</span>
                      </label>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl text-brand-neutral-900 mb-3">Stay Updated</h3>
                    <p className="text-brand-neutral-600 mb-6">
                      Subscribe to our newsletter for insights on open source sustainability and best practices
                    </p>

                    {/* Success State */}
                    {subscriptionStatus === 'success' ? (
                      <div className="space-y-4">
                        <Alert className="bg-brand-success/10 border-brand-success text-left">
                          <CheckCircle2 className="h-5 w-5 text-brand-success" />
                          <AlertDescription className="text-brand-neutral-700">
                            Thanks for subscribing! Check your email to confirm your subscription.
                          </AlertDescription>
                        </Alert>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSubscriptionStatus('idle');
                            setNewsletterEmail('');
                          }}
                          className="w-full sm:w-auto"
                        >
                          Subscribe Another Email
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                        {/* Error Alert */}
                        {subscriptionStatus === 'error' && subscriptionError && (
                          <Alert className="bg-brand-error/10 border-brand-error text-left">
                            <AlertCircle className="h-5 w-5 text-brand-error" />
                            <AlertDescription className="text-brand-neutral-700">
                              {subscriptionError} If this continues, please contact{' '}
                              <a href="mailto:support@opensourceeconomy.org" className="text-brand-accent hover:underline">
                                support@opensourceeconomy.org
                              </a>
                            </AlertDescription>
                          </Alert>
                        )}

                        <div className="flex gap-3 max-w-md mx-auto">
                          <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 h-11 px-4 rounded-lg bg-brand-card-blue border border-brand-neutral-300/20 text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent disabled:opacity-50 disabled:cursor-not-allowed"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              // Clear error when user starts typing
                              if (subscriptionStatus === 'error') {
                                setSubscriptionStatus('idle');
                                setSubscriptionError('');
                              }
                            }}
                            disabled={isSubscribing}
                            required
                          />
                          <Button 
                            type="submit"
                            className="h-11 bg-brand-accent hover:bg-brand-accent-dark"
                            disabled={isSubscribing || !newsletterEmail}
                          >
                            {isSubscribing ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Subscribing...
                              </>
                            ) : (
                              'Subscribe'
                            )}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-brand-neutral-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <RelatedPostCard 
                  key={relatedPost.id} 
                  post={relatedPost} 
                  onViewPost={onViewPost}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}