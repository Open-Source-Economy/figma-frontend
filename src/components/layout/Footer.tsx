import React from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Alert, AlertDescription } from '../ui/alert';
import { Github, Twitter, Mail, Heart, Youtube, Linkedin, AtSign, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  showNewsletter?: boolean;
  className?: string;
  onNavItemClick?: (href: string) => void;
}

const defaultSections: FooterSection[] = [
  {
    title: 'About',
    links: [
      { title: 'About Us', href: 'about' },
      { title: 'Our Mission', href: 'about#mission' },
      { title: 'Team', href: 'about#team' },
      { title: 'Contact', href: 'contact' },
      { title: 'Careers', href: '#careers' }
    ]
  },
  {
    title: 'Platform',
    links: [
      { title: 'Services', href: 'services' },
      { title: 'Projects', href: 'projects' },
      { title: 'Pricing', href: 'fund-redistribution' },
      { title: 'How It Works', href: '#how-it-works' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: 'blog' },
      { title: 'FAQ', href: 'faq' },
      { title: 'Documentation', href: '#docs' },
      { title: 'Community', href: '#community' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '#privacy' },
      { title: 'Terms of Service', href: '#terms' },
      { title: 'Cookie Policy', href: '#cookies' }
    ]
  }
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Github size={20} />, href: '#github', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: '#twitter', label: 'Twitter' },
  { icon: <AtSign size={20} />, href: '#mastodon', label: 'Mastodon' },
  { icon: <Youtube size={20} />, href: '#youtube', label: 'YouTube' },
  { icon: <Linkedin size={20} />, href: '#linkedin', label: 'LinkedIn' },
  { icon: <Mail size={20} />, href: '#email', label: 'Email' }
];

export function Footer({ 
  sections = defaultSections, 
  socialLinks = defaultSocialLinks,
  showNewsletter = true,
  className = '',
  onNavItemClick
}: FooterProps) {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [showErrorDemo, setShowErrorDemo] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear any previous errors
    setErrorMessage('');
    setSubmissionStatus('idle');
    
    // Validate email
    if (!email || !email.includes('@')) {
      setSubmissionStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with demo toggle
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (showErrorDemo) {
      // Simulate server error
      setSubmissionStatus('error');
      setErrorMessage('Subscription failed. Please try again later or contact support@opensourceeconomy.org');
      setIsSubmitting(false);
      setShowErrorDemo(false);
    } else {
      // Simulate success
      setSubmissionStatus('success');
      setIsSubmitting(false);
      setEmail('');
    }
  };

  const handleResetSuccess = () => {
    setSubmissionStatus('idle');
    setEmail('');
  };

  return (
    <footer className={`bg-brand-secondary border-t border-border ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-muted-foreground max-w-md">
              Building a sustainable open source economy through collaboration, 
              innovation, and community-driven development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="text-left">
                <h3 className="font-medium mb-4 text-left">{section.title}</h3>
                <ul className="space-y-2 text-left pl-0">
                  {section.links.map((link) => (
                    <li key={link.title} className="text-left list-none">
                      <button
                        onClick={() => onNavItemClick ? onNavItemClick(link.href) : window.location.href = link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                      >
                        {link.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {showNewsletter && (
          <div className="border-t border-border mt-8 pt-8">
            <div className="max-w-md">
              <h3 className="font-medium mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest updates on open source projects and community news.
              </p>

              {/* Demo Toggle - Development Only */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-4 p-3 bg-brand-card-blue-light border border-brand-warning rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-warning">Demo Mode</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-xs text-brand-neutral-600">Simulate Error</span>
                      <input
                        type="checkbox"
                        checked={showErrorDemo}
                        onChange={(e) => setShowErrorDemo(e.target.checked)}
                        className="w-4 h-4"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Success State */}
              {submissionStatus === 'success' && (
                <Alert className="mb-4 border-brand-success bg-brand-success/10">
                  <CheckCircle2 className="h-4 w-4 text-brand-success" />
                  <AlertDescription className="text-brand-success">
                    Thanks for subscribing! Check your email to confirm your subscription.
                  </AlertDescription>
                </Alert>
              )}

              {/* Error State */}
              {submissionStatus === 'error' && (
                <Alert className="mb-4 border-brand-error bg-brand-error/10">
                  <AlertCircle className="h-4 w-4 text-brand-error" />
                  <AlertDescription className="text-brand-error">
                    {errorMessage}
                  </AlertDescription>
                </Alert>
              )}

              {/* Subscription Form */}
              {submissionStatus !== 'success' && (
                <form onSubmit={handleSubscribe} className="flex gap-2 items-center">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    variant="outline"
                    className="flex-1 h-10"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submissionStatus === 'error') {
                        setSubmissionStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="default" 
                    className="h-10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </form>
              )}

              {/* Success - Show action to subscribe again */}
              {submissionStatus === 'success' && (
                <Button 
                  variant="outline" 
                  size="default" 
                  className="h-10 w-full"
                  onClick={handleResetSuccess}
                >
                  Subscribe Another Email
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Open Source Economy. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-2 sm:mt-0">
            Made with <Heart size={14} className="text-brand-highlight" /> by the community
          </p>
        </div>
      </div>
    </footer>
  );
}