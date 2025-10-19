import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  link?: {
    text: string;
    href: string;
  };
}

interface FeatureGridProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  variant?: 'cards' | 'minimal';
  className?: string;
}

export function FeatureGrid({
  title,
  description,
  features,
  columns = 3,
  variant = 'cards',
  className = ''
}: FeatureGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  if (variant === 'minimal') {
    return (
      <section className={`py-12 md:py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || description) && (
            <div className="text-center mb-12">
              {title && <Typography.H2>{title}</Typography.H2>}
              {description && (
                <Typography.BodyLarge className="text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </Typography.BodyLarge>
              )}
            </div>
          )}
          
          <div className={`grid ${gridClasses[columns]} gap-8`}>
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon && (
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    {feature.icon}
                  </div>
                )}
                {feature.badge && (
                  <Badge variant="secondary" className="mb-3">
                    {feature.badge}
                  </Badge>
                )}
                <Typography.H3>{feature.title}</Typography.H3>
                <Typography.BodyMedium className="text-muted-foreground">
                  {feature.description}
                </Typography.BodyMedium>
                {feature.link && (
                  <Typography.LabelMedium as="a" href={feature.link.href} className="text-brand-primary hover:text-brand-primary/80">
                    {feature.link.text} →
                  </Typography.LabelMedium>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <SectionHeader
            title={title || ''}
            description={description}
            spacing="xl"
          />
        )}
        
        <div className={`grid ${gridClasses[columns]} gap-6`}>
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {feature.icon && (
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent flex-shrink-0">
                        {feature.icon}
                      </div>
                    )}
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {feature.title}
                        {feature.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {feature.badge}
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                {feature.link && (
                  <div className="mt-4">
                    <Typography.LabelSmall as="a" href={feature.link.href} className="text-brand-primary hover:text-brand-primary/80">
                      {feature.link.text} →
                    </Typography.LabelSmall>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}