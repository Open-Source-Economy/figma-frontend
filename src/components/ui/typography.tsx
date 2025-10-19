import React from 'react';
import { cn } from './utils';

// Base typography component props
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Display components for hero sections and major headings
export const DisplayLarge = ({ children, className, as: Component = 'h1', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-display-large', className)} {...props}>
      {children}
    </Component>
  );
};

export const DisplayMedium = ({ children, className, as: Component = 'h1', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-display-medium', className)} {...props}>
      {children}
    </Component>
  );
};

export const DisplaySmall = ({ children, className, as: Component = 'h1', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-display-small', className)} {...props}>
      {children}
    </Component>
  );
};

// Semantic heading components
export const H1 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={cn('text-headline-large', className)} {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn('text-headline-medium', className)} {...props}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={cn('text-headline-small', className)} {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 className={cn('text-title-large', className)} {...props}>
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5 className={cn('text-title-medium', className)} {...props}>
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h6 className={cn('text-title-small', className)} {...props}>
      {children}
    </h6>
  );
};

// Body text components
export const BodyLarge = ({ children, className, as: Component = 'p', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-body-large', className)} {...props}>
      {children}
    </Component>
  );
};

export const BodyMedium = ({ children, className, as: Component = 'p', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-body-medium', className)} {...props}>
      {children}
    </Component>
  );
};

export const BodySmall = ({ children, className, as: Component = 'p', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-body-small', className)} {...props}>
      {children}
    </Component>
  );
};

// Specialized text components
export const Lead = ({ children, className, as: Component = 'p', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-lead', className)} {...props}>
      {children}
    </Component>
  );
};

export const Caption = ({ children, className, as: Component = 'span', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-caption', className)} {...props}>
      {children}
    </Component>
  );
};

export const Overline = ({ children, className, as: Component = 'span', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-overline', className)} {...props}>
      {children}
    </Component>
  );
};

// Label components for forms
export const LabelLarge = ({ children, className, as: Component = 'label', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-label-large', className)} {...props}>
      {children}
    </Component>
  );
};

export const LabelMedium = ({ children, className, as: Component = 'label', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-label-medium', className)} {...props}>
      {children}
    </Component>
  );
};

export const LabelSmall = ({ children, className, as: Component = 'label', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-label-small', className)} {...props}>
      {children}
    </Component>
  );
};

// Code component
export const Code = ({ children, className, as: Component = 'code', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-code', className)} {...props}>
      {children}
    </Component>
  );
};

// Blockquote component
export const Blockquote = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote className={cn('border-l-4 border-brand-primary pl-4 italic text-muted-foreground', className)} {...props}>
      {children}
    </blockquote>
  );
};

// List components
export const List = ({ children, className, ordered = false, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement> & { ordered?: boolean }) => {
  const Component = ordered ? 'ol' : 'ul';
  return (
    <Component className={cn('mb-4 pl-6', ordered ? 'list-decimal' : 'list-disc', className)} {...props}>
      {children}
    </Component>
  );
};

export const ListItem = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={cn('mb-1', className)} {...props}>
      {children}
    </li>
  );
};

// Emphasis components
export const Strong = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <strong className={cn('font-semibold', className)} {...props}>
      {children}
    </strong>
  );
};

export const Emphasis = ({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <em className={cn('italic', className)} {...props}>
      {children}
    </em>
  );
};

// Muted text component
export const Muted = ({ children, className, as: Component = 'span', ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component className={cn('text-muted-foreground', className)} {...props}>
      {children}
    </Component>
  );
};

// Headline components (semantic naming)
export const HeadlineLarge = H1;
export const HeadlineMedium = H2;
export const HeadlineSmall = H3;

// Title components (semantic naming)
export const TitleLarge = H4;
export const TitleMedium = H5;
export const TitleSmall = H6;

// Main Typography namespace for easy importing
export const Typography = {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Lead,
  Caption,
  Overline,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  Code,
  Blockquote,
  List,
  ListItem,
  Strong,
  Emphasis,
  Muted,
};

export default Typography;