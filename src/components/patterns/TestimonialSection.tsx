import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: {
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
}

interface TestimonialSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  layout?: 'grid' | 'carousel';
  showRating?: boolean;
  className?: string;
}

export function TestimonialSection({
  title,
  description,
  testimonials,
  layout = 'grid',
  showRating = true,
  className = ''
}: TestimonialSectionProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className={`py-12 md:py-20 bg-brand-neutral-200/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <SectionHeader
            title={title || ''}
            description={description}
            spacing="xl"
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                {showRating && testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                )}
                
                <Typography.Blockquote className="mb-6">
                  "{testimonial.content}"
                </Typography.Blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage 
                      src={testimonial.author.avatar} 
                      alt={testimonial.author.name} 
                    />
                    <AvatarFallback>
                      {getInitials(testimonial.author.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <Typography.LabelMedium className="text-foreground">
                      {testimonial.author.name}
                    </Typography.LabelMedium>
                    <Typography.BodySmall className="text-muted-foreground">
                      {testimonial.author.title}
                      {testimonial.author.company && (
                        <> at {testimonial.author.company}</>
                      )}
                    </Typography.BodySmall>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}