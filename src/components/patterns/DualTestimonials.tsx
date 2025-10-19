import React from 'react';
import { Quote, Building2, Code2 } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  type: 'developer' | 'enterprise';
}

interface DualTestimonialsProps {
  className?: string;
}

export function DualTestimonials({ className = '' }: DualTestimonialsProps) {
  const testimonials: Testimonial[] = [
    // Developer Testimonials (focusing on sustainability)
    {
      id: 'dev-1',
      quote: "For the first time in years, I can focus on building great software instead of worrying about how to pay rent. This platform gives maintainers the financial stability we need to do our best work.",
      author: "Sarah Chen",
      role: "Core Maintainer",
      company: "Vue.js Ecosystem",
      avatar: "👩‍💻",
      type: 'developer'
    },
    {
      id: 'dev-2',
      quote: "The direct relationship with enterprise users has transformed how I prioritize features. I understand their real needs now, and they get solutions that actually work for them.",
      author: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "FastAPI",
      avatar: "👨‍💻",
      type: 'developer'
    },
    {
      id: 'dev-3',
      quote: "Sustainable funding means I can say no to burnout and yes to long-term thinking. My project is stronger because I'm not constantly switching between maintaining code and looking for consulting gigs.",
      author: "Alex Kim",
      role: "Creator & Maintainer",
      company: "Phoenix Framework",
      avatar: "🧑‍💻",
      type: 'developer'
    },
    // Enterprise Testimonials (focusing on expert support)
    {
      id: 'ent-1',
      quote: "Having direct access to the Redis core team saved us months of trial and error. They understood our scaling challenges immediately and provided solutions we never would have found on Stack Overflow.",
      author: "Jennifer Park",
      role: "VP of Engineering",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      type: 'enterprise'
    },
    {
      id: 'ent-2',
      quote: "The Django maintainers helped us optimize our application in ways that generic consultants couldn't. We're not just getting support—we're getting mentorship from the people who built the framework.",
      author: "David Thompson",
      role: "CTO",
      company: "DataScale Inc",
      avatar: "👨‍💼",
      type: 'enterprise'
    },
    {
      id: 'ent-3',
      quote: "Our investment in open source maintainers has paid dividends beyond just technical support. We're contributing to the ecosystem our entire business depends on.",
      author: "Lisa Wang",
      role: "Head of Engineering",
      company: "CloudTech Labs",
      avatar: "👩‍💼",
      type: 'enterprise'
    }
  ];

  const developerTestimonials = testimonials.filter(t => t.type === 'developer');
  const enterpriseTestimonials = testimonials.filter(t => t.type === 'enterprise');

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-card rounded-2xl p-6 border border-brand-neutral-300/50 hover:shadow-lg transition-all duration-300 group">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-brand-accent/30 group-hover:text-brand-accent/50 transition-colors duration-300" />
      </div>

      {/* Quote Text */}
      <blockquote className="text-brand-neutral-700 leading-relaxed mb-6 group-hover:text-brand-neutral-800 transition-colors duration-300">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-brand-neutral-200 to-brand-neutral-300 rounded-full flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-brand-neutral-900">{testimonial.author}</div>
          <div className="text-sm text-brand-neutral-600">
            {testimonial.role} • {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`py-20 lg:py-32 bg-brand-neutral-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 mb-6">
            Voices from Our Community
          </h2>
          <p className="text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Hear from the developers building the future and the enterprises investing in sustainable open source.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Developer Testimonials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-highlight to-brand-highlight-dark rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-neutral-900">
                  From Maintainers
                </h3>
                <p className="text-sm text-brand-neutral-600">
                  Sustainability & Growth
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {developerTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Enterprise Testimonials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-neutral-900">
                  From Enterprises
                </h3>
                <p className="text-sm text-brand-neutral-600">
                  Expert Support & Results
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {enterpriseTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-accent">98%</div>
            <div className="text-sm text-brand-neutral-600">Maintainer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-highlight">94%</div>
            <div className="text-sm text-brand-neutral-600">Enterprise Renewal Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-primary">$2.3M</div>
            <div className="text-sm text-brand-neutral-600">Distributed to Maintainers</div>
          </div>
        </div>
      </div>
    </section>
  );
}