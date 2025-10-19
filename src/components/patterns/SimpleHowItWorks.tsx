import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  ArrowRight,
  Handshake,
  Users,
  Heart,
  Shield,
  FileText,
  CheckCircle,
  Workflow
} from 'lucide-react';

interface SimpleHowItWorksProps {
  onGetStarted?: () => void;
  className?: string;
}

const steps = [
  {
    step: 1,
    title: "Connect",
    subtitle: "Secure Enterprise Onboarding",
    description: "Connect your enterprise with expert maintainers through our secure, NDA-protected platform. We handle all legal frameworks and compliance requirements.",
    icon: <Handshake className="w-8 h-8" />,
    features: [
      "Enterprise-grade security",
      "NDA protection included",
      "SOC 2 compliance",
      "Single contract framework"
    ],
    color: "from-brand-primary to-brand-accent"
  },
  {
    step: 2,
    title: "Collaborate",
    subtitle: "Direct Expert Access",
    description: "Work directly with world-class maintainers on your critical dependencies. Get prioritized bug fixes, custom features, and dedicated support.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Direct maintainer access",
      "Priority support queues",
      "Custom feature development",
      "24/7 expert availability"
    ],
    color: "from-brand-accent to-brand-highlight"
  },
  {
    step: 3,
    title: "Support",
    subtitle: "Ecosystem Sustainability",
    description: "Your investment supports the entire open source ecosystem with full transparency. See exactly how your funds create lasting impact across projects and dependencies.",
    icon: <Heart className="w-8 h-8" />,
    features: [
      "100% transparent funding",
      "Ecosystem-wide impact",
      "Dependency chain support",
      "Sustainability metrics"
    ],
    color: "from-brand-highlight to-brand-success"
  }
];

const trustFeatures = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enterprise Security",
    description: "SOC 2 compliant with comprehensive NDA protection"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Full Transparency",
    description: "Complete visibility into fund distribution and impact"
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Proven Results",
    description: "Trusted by leading enterprises for critical infrastructure"
  }
];

export function SimpleHowItWorks({ onGetStarted, className = '' }: SimpleHowItWorksProps) {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-highlight/10 border border-brand-accent/20 rounded-full mb-6">
            <Workflow className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-brand-accent to-brand-highlight bg-clip-text text-transparent">
            Simple, Secure, Sustainable
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with expert maintainers through our transparent, NDA-protected platform in three simple steps.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-brand-accent/30 to-brand-accent/10 z-10 transform translate-x-4" />
              )}
              
              <Card className="relative border border-border/50 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg group-hover:transform group-hover:scale-105">
                <CardContent className="p-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                        {step.icon}
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-brand-accent mb-2">{step.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading enterprises who trust Open Source Economy for their critical infrastructure needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={onGetStarted}
              className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white"
              rightIcon={ArrowRight}
              icon
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
            >
              <Shield className="w-5 h-5 mr-2" />
              View Security Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}