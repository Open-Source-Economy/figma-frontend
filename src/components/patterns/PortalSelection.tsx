import React from 'react';
import { PortalCard, PortalCardProps } from './PortalCard';

/**
 * PortalSelection Component
 * 
 * A reusable section component for displaying portal selection options.
 * Follows DRY principles by:
 * - Using the reusable SectionHeader component for consistent heading display
 * - Delegating card rendering to the PortalCard component
 * - Accepting data-driven configuration via props
 * - Using Tailwind CSS variables for all branding (no inline CSS)
 * 
 * @param portals - Array of portal configuration objects
 * @param onSelectPortal - Callback when a portal is selected
 * @param className - Optional additional CSS classes for the section wrapper
 */
interface PortalSelectionProps {
  portals: Omit<PortalCardProps, 'onSelect'>[];
  onSelectPortal: (portalId: string) => void;
  className?: string;
}

export function PortalSelection({ portals, onSelectPortal, className = '' }: PortalSelectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portals.map((portal) => (
            <PortalCard
              key={portal.id}
              {...portal}
              onSelect={onSelectPortal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}