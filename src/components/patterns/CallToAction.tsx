import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';

interface CTAAction {
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  onClick?: () => void;
}

interface CallToActionProps {
  title: string;
  description: string;
  actions?: CTAAction[];
  emailCapture?: {
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
  };
  variant?: 'default' | 'highlighted' | 'minimal';
  className?: string;
}

export function CallToAction({
  title,
  description,
  actions = [],
  emailCapture,
  variant = 'default',
  className = ''
}: CallToActionProps) {
  const [email, setEmail] = React.useState('');
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(''); // Clear previous messages
    
    if (!email) {
      setSubmitMessage('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }
    
    if (emailCapture?.onSubmit) {
      try {
        emailCapture.onSubmit(email);
        setSubmitMessage('Thank you for subscribing!');
        setEmail('');
      } catch (error) {
        setSubmitMessage('An error occurred. Please try again.');
      }
    }
  };

  if (variant === 'highlighted') {
    return (
      <section 
        className={`py-12 md:py-20 bg-brand-accent text-white ${className}`}
        role="region"
        aria-labelledby="cta-title"
        aria-describedby="cta-description"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title={title}
              description={description}
              spacing="none"
              className="mb-8 text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/80"
              titleId="cta-title"
              descriptionId="cta-description"
            />
            
            {/* Live region for form feedback */}
            <div 
              id="cta-feedback" 
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="sr-only"
            >
              {submitMessage}
            </div>
            
            {emailCapture ? (
              <form 
                onSubmit={handleEmailSubmit} 
                className="max-w-md mx-auto"
                aria-labelledby="cta-title"
                aria-describedby="cta-description"
                noValidate
              >
                <div className="flex gap-2">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address for {title.toLowerCase()}
                  </label>
                  <Input
                    id="cta-email"
                    type="email"
                    placeholder={emailCapture.placeholder || 'Enter your email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-input-background text-foreground placeholder:text-muted-foreground border-border focus:border-brand-primary focus:ring-brand-primary"
                    required
                    aria-required="true"
                    aria-invalid={submitMessage && submitMessage.includes('error') ? 'true' : 'false'}
                    aria-describedby="cta-description cta-feedback"
                    autoComplete="email"
                  />
                  <Button 
                    type="submit"
                    variant="brand"
                    aria-describedby="cta-feedback"
                  >
                    {emailCapture.buttonText || 'Subscribe'}
                  </Button>
                </div>
              </form>
            ) : (
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                role="group"
                aria-labelledby="cta-title"
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || 'default'}
                    onClick={action.onClick}
                    size="lg"
                    aria-describedby="cta-description"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return (
      <section className={`py-12 md:py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Typography.H2>{title}</Typography.H2>
            <Typography.BodyLarge className="text-muted-foreground mb-8">
              {description}
            </Typography.BodyLarge>
            
            {emailCapture ? (
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder={emailCapture.placeholder || 'Enter your email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit">
                    {emailCapture.buttonText || 'Subscribe'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || 'default'}
                    onClick={action.onClick}
                    size="lg"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-20 bg-brand-neutral-200 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Typography.H2>{title}</Typography.H2>
          <Typography.BodyLarge className="text-muted-foreground mb-8">
            {description}
          </Typography.BodyLarge>
          
          {emailCapture ? (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={emailCapture.placeholder || 'Enter your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit">
                  {emailCapture.buttonText || 'Subscribe'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'default'}
                  onClick={action.onClick}
                  size="lg"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}