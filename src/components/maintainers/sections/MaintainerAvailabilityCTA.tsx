import React from 'react';

interface AvailabilityInfo {
  hoursPerWeek: number;
  preferredSchedule?: string;
}

interface MaintainerAvailabilityCTAProps {
  email: string;
  availability: AvailabilityInfo;
  onViewServices: () => void;
  className?: string;
}

/**
 * MaintainerAvailabilityCTA - Bottom CTA section for maintainer profiles
 * Shows availability info with email and view services CTAs
 */
export const MaintainerAvailabilityCTA: React.FC<MaintainerAvailabilityCTAProps> = ({
  email,
  availability,
  onViewServices,
  className = '',
}) => {
  return (
    <section className={`py-10 bg-brand-secondary ${className}`}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-brand-neutral-950 mb-3">Ready to Work Together?</h2>
        <p className="text-brand-neutral-600 mb-6 max-w-2xl mx-auto">
          Currently available for {availability.hoursPerWeek} hours per week. 
          {availability.preferredSchedule && ` ${availability.preferredSchedule}.`}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`mailto:${email}`}
            className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-colors"
          >
            Start a Conversation
          </a>
          <button
            onClick={onViewServices}
            className="px-5 py-2.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};
