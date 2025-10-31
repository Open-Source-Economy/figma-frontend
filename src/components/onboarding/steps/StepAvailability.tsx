import React from 'react';
import { Availability, Currency } from '../../../types/DeveloperOnboarding';
import { Clock, DollarSign, TrendingUp } from 'lucide-react';
import { StepHeader } from '../StepHeader';
import { BrandModalSection } from '../../ui/brand-modal';
import { ValidationAlert } from '../../forms/ValidationAlert';
import { WeeklyAvailabilityInput } from '../availability/WeeklyAvailabilityInput';
import { ServiceRateInput } from '../availability/ServiceRateInput';
import { PricingInfoBanner } from '../availability/PricingInfoBanner';
import { BiggerOpportunitiesRadioGroup } from '../availability/BiggerOpportunitiesRadioGroup';
import { ExpandableCommentSection } from '../availability/ExpandableCommentSection';

interface StepAvailabilityProps {
  availability: Availability;
  onChange: (availability: Availability) => void;
  errors?: Record<string, string>;
}

/**
 * StepAvailability - Step 4 of developer onboarding (Active only)
 * Collects availability and rate information
 */
export const StepAvailability: React.FC<StepAvailabilityProps> = ({
  availability,
  onChange,
  errors = {},
}) => {
  const [isCommentExpanded, setIsCommentExpanded] = React.useState(
    !!availability.basicAvailabilityComment
  );
  const [isWeeklyHoursCommentExpanded, setIsWeeklyHoursCommentExpanded] = React.useState(
    !!availability.typicalWeeklyHoursComment
  );
  const [isBiggerOpportunitiesCommentExpanded, setIsBiggerOpportunitiesCommentExpanded] = React.useState(
    !!availability.biggerOpportunitiesComment
  );

  const handleChange = (field: keyof Availability, value: any) => {
    onChange({ ...availability, [field]: value });
  };

  const handleDeleteComment = () => {
    handleChange('basicAvailabilityComment', '');
    setIsCommentExpanded(false);
  };

  const handleDeleteWeeklyHoursComment = () => {
    handleChange('typicalWeeklyHoursComment', '');
    setIsWeeklyHoursCommentExpanded(false);
  };

  const handleDeleteBiggerOpportunitiesComment = () => {
    handleChange('biggerOpportunitiesComment', '');
    setIsBiggerOpportunitiesCommentExpanded(false);
  };

  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <StepHeader
        stepNumber="04"
        title="Availability & Rates"
        subtitle="Set your availability and rates. You can adjust these anytime based on your schedule and market rates."
        align="left"
      />

      {/* Error Alert */}
      {hasErrors && (
        <ValidationAlert>
          Please complete all required fields before continuing:
          <ul className="mt-2 ml-4 list-disc space-y-1">
            {errors.weeklyHours && <li>Weekly hours must be specified</li>}
            {errors.baseHourlyRate && <li>Hourly rate must be specified</li>}
            {errors.openToBiggerOpportunities && <li>Please indicate if you're open to bigger opportunities</li>}
          </ul>
        </ValidationAlert>
      )}

      {/* Main Configuration */}
      <div className="space-y-8">
        {/* Typical Weekly Availability Section */}
        <BrandModalSection
          icon={<Clock />}
          title="Typical Weekly Availability"
          description="Approximate hours per week you're typically available (for planning purposes)"
          iconColor="accent"
        >
          <div className="space-y-6">
            <WeeklyAvailabilityInput
              value={availability.weeklyHours}
              onChange={(value) => handleChange('weeklyHours', value)}
              error={errors.weeklyHours}
            />

            {/* Optional Comment Section */}
            <ExpandableCommentSection
              isExpanded={isWeeklyHoursCommentExpanded}
              onToggleExpanded={setIsWeeklyHoursCommentExpanded}
              value={availability.typicalWeeklyHoursComment || ''}
              onChange={(value) => handleChange('typicalWeeklyHoursComment', value)}
              onDelete={handleDeleteWeeklyHoursComment}
              placeholder="Any additional details about your availability (e.g., timezone preferences, specific days, schedule variations)..."
            />
          </div>
        </BrandModalSection>

        {/* Your Service Rate Section */}
        <BrandModalSection
          icon={<DollarSign />}
          title="Your Service Rate"
          description="Your hourly rate for providing services (what you will receive)"
          iconColor="accent"
        >
          <div className="space-y-6">
            <ServiceRateInput
              currency={availability.currency}
              rate={availability.baseHourlyRate}
              onCurrencyChange={(value) => handleChange('currency', value)}
              onRateChange={(value) => handleChange('baseHourlyRate', value)}
              error={errors.baseHourlyRate}
            />

            {/* Pricing Information */}
            <PricingInfoBanner />

            {/* Optional Comment Section */}
            <ExpandableCommentSection
              isExpanded={isCommentExpanded}
              onToggleExpanded={setIsCommentExpanded}
              value={availability.basicAvailabilityComment || ''}
              onChange={(value) => handleChange('basicAvailabilityComment', value)}
              onDelete={handleDeleteComment}
              placeholder="Any additional details about your rates or pricing preferences..."
            />
          </div>
        </BrandModalSection>

        {/* Bigger Opportunities Section */}
        <BrandModalSection
          icon={<TrendingUp />}
          title="Bigger Opportunities"
          description="Explore larger engagements and projects"
          iconColor="success"
        >
          <div className="space-y-6">
            <BiggerOpportunitiesRadioGroup
              value={availability.openToBiggerOpportunities}
              onChange={(value) => handleChange('openToBiggerOpportunities', value)}
              error={errors.openToBiggerOpportunities}
            />

            {/* Optional Comment Section */}
            <ExpandableCommentSection
              isExpanded={isBiggerOpportunitiesCommentExpanded}
              onToggleExpanded={setIsBiggerOpportunitiesCommentExpanded}
              value={availability.biggerOpportunitiesComment || ''}
              onChange={(value) => handleChange('biggerOpportunitiesComment', value)}
              onDelete={handleDeleteBiggerOpportunitiesComment}
              placeholder="What types of bigger opportunities interest you? Any specific requirements or preferences..."
            />
          </div>
        </BrandModalSection>
      </div>
    </div>
  );
};

export default StepAvailability;
