import React from 'react';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats: Stat[];
  layout?: 'horizontal' | 'grid';
  variant?: 'default' | 'highlighted';
  className?: string;
}

export function StatsSection({
  title,
  description,
  stats,
  layout = 'horizontal',
  variant = 'default',
  className = ''
}: StatsSectionProps) {
  if (variant === 'highlighted') {
    return (
      <section className={`py-12 md:py-20 bg-brand-accent text-white ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || description) && (
            <SectionHeader
              title={title || ''}
              description={description}
              spacing="xl"
              className="text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/80"
            />
          )}
          
          <div className={`${
            layout === 'grid' 
              ? 'grid grid-cols-2 md:grid-cols-4 gap-8' 
              : 'flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${
                  layout === 'horizontal' 
                    ? 'py-6 md:py-0 md:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0' 
                    : ''
                }`}
              >
                <Typography.DisplaySmall className="text-primary-foreground">{stat.value}</Typography.DisplaySmall>
                <Typography.BodyLarge className="text-primary-foreground/80">{stat.label}</Typography.BodyLarge>
                {stat.description && (
                  <Typography.BodyMedium className="text-primary-foreground/60">
                    {stat.description}
                  </Typography.BodyMedium>
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
            titleLevel="h3"
            spacing="md"
            maxWidth="2xl"
          />
        )}
        
        <div className={`${
          layout === 'grid' 
            ? 'grid grid-cols-2 md:grid-cols-4 gap-8' 
            : 'flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-border'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center ${
                layout === 'horizontal' 
                  ? 'py-6 md:py-0 md:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0' 
                  : ''
              }`}
            >
              <Typography.DisplaySmall>{stat.value}</Typography.DisplaySmall>
              <Typography.BodyLarge className="text-muted-foreground">{stat.label}</Typography.BodyLarge>
              {stat.description && (
                <Typography.BodySmall className="text-muted-foreground">
                  {stat.description}
                </Typography.BodySmall>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}