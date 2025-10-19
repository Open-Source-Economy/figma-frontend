import React from 'react';

interface ShowcaseCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseCard({ title, description, children, className }: ShowcaseCardProps) {
  return (
    <div className={className}>

      {children}
    </div>
  );
}