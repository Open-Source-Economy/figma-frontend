import React from 'react';
import { Calendar, Mail, Heart, ArrowRight, Users, Zap } from 'lucide-react';
import { Button } from '../ui/button';

interface CTAOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'secondary';
  action: () => void;
  color: 'accent' | 'highlight' | 'success' | 'warning';
}

interface MultiCTASectionProps {
  className?: string;
  onBookMeeting?: () => void;
  onSubscribeNewsletter?: () => void;
  onSupportPlatform?: () => void;
  onJoinCommunity?: () => void;
}

export function MultiCTASection({ 
  className = '',
  onBookMeeting,
  onSubscribeNewsletter,
  onSupportPlatform,
  onJoinCommunity
}: MultiCTASectionProps) {
  const ctaOptions: CTAOption[] = [
    {
      id: 'book-meeting',
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Book a Meeting",
      description: "Discuss your specific needs with our team and connect with relevant maintainers.",
      buttonText: "Schedule Call",
      buttonVariant: 'default',
      action: onBookMeeting || (() => {}),
      color: 'accent'
    },
    {
      id: 'newsletter',
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Stay Updated",
      description: "Get weekly insights on open source trends, maintainer stories, and platform updates.",
      buttonText: "Subscribe",
      buttonVariant: 'outline',
      action: onSubscribeNewsletter || (() => {}),
      color: 'highlight'
    },
    {
      id: 'support',
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Support the Mission",
      description: "Help us build a sustainable future for open source with a tax-deductible donation.",
      buttonText: "Donate",
      buttonVariant: 'secondary',
      action: onSupportPlatform || (() => {}),
      color: 'success'
    },
    {
      id: 'community',
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Join the Community",
      description: "Connect with other developers and decision-makers who care about sustainable open source.",
      buttonText: "Join Discord",
      buttonVariant: 'outline',
      action: onJoinCommunity || (() => {}),
      color: 'warning'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-brand-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/20 text-brand-accent font-medium text-sm rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 mb-6">
            Choose Your Path Forward
          </h2>
          
          <p className="text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're ready to connect with maintainers or just want to learn more, 
            we have options that fit your current needs and timeline.
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ctaOptions.map((option) => {
            const colorClasses = {
              accent: {
                border: 'border-brand-accent/50',
                borderHover: 'hover:border-brand-accent/70',
                iconBg: 'bg-gradient-to-br from-brand-accent to-brand-accent-dark',
                badge: 'bg-brand-accent',
                titleHover: 'group-hover:text-brand-accent',
                buttonBg: 'bg-brand-accent hover:bg-brand-accent-dark text-white'
              },
              highlight: {
                border: 'border-brand-highlight/50',
                borderHover: 'hover:border-brand-highlight/70',
                iconBg: 'bg-gradient-to-br from-brand-highlight to-brand-highlight-dark',
                badge: 'bg-brand-highlight',
                titleHover: 'group-hover:text-brand-highlight',
                buttonBg: 'bg-brand-highlight hover:bg-brand-highlight-dark text-white'
              },
              success: {
                border: 'border-brand-success/50',
                borderHover: 'hover:border-brand-success/70',
                iconBg: 'bg-gradient-to-br from-brand-success to-brand-success-dark',
                badge: 'bg-brand-success',
                titleHover: 'group-hover:text-brand-success',
                buttonBg: 'bg-brand-success hover:bg-brand-success-dark text-white'
              },
              warning: {
                border: 'border-brand-warning/50',
                borderHover: 'hover:border-brand-warning/70',
                iconBg: 'bg-gradient-to-br from-brand-warning to-brand-warning-dark',
                badge: 'bg-brand-warning',
                titleHover: 'group-hover:text-brand-warning',
                buttonBg: 'bg-brand-warning hover:bg-brand-warning-dark text-white'
              }
            };
            
            const colors = colorClasses[option.color];
            
            return (
              <div 
                key={option.id}
                className={`relative group bg-card rounded-2xl p-6 border ${colors.border} ${colors.borderHover} transition-all duration-300 hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${colors.iconBg}`}>
                  {option.icon}
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className={`font-semibold text-foreground ${colors.titleHover} transition-colors duration-300`}>
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Button */}
                <Button 
                  onClick={option.action}
                  variant={option.buttonVariant}
                  className={`w-full ${colors.buttonBg}`}
                >
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Primary CTA Banner */}
        <div className="bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10 rounded-2xl p-8 lg:p-12 border border-brand-accent/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-brand-neutral-900">
              Ready to Transform Your Open Source Strategy?
            </h3>
            
            <p className="text-lg text-brand-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking companies who are investing in the sustainable future of open source. 
              Book a call today and discover how direct maintainer access can accelerate your development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={onBookMeeting}
                className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-3"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}