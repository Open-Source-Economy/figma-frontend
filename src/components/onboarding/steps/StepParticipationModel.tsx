import React from 'react';
import { ParticipationModel } from '../../../types/DeveloperOnboarding';
import { StepHeader } from '../StepHeader';
import { ValidationAlert } from '../../forms/ValidationAlert';
import { FieldError } from '../../forms/FieldError';
import { ServiceProviderCard } from '../participation/ServiceProviderCard';
import { CommonPotParticipantCard } from '../participation/CommonPotParticipantCard';
import { ParticipationDivider } from '../participation/ParticipationDivider';

interface StepParticipationModelProps {
  participationModel: ParticipationModel | null;
  onChange: (model: ParticipationModel) => void;
  errors?: Record<string, string>;
}

/**
 * StepParticipationModel - Step 3 of developer onboarding
 * Allows developers to choose between active and passive participation
 */
export const StepParticipationModel: React.FC<StepParticipationModelProps> = ({
  participationModel,
  onChange,
  errors = {},
}) => {
  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <StepHeader
        stepNumber="03"
        title="Choose Your Participation Model"
        subtitle="Select one of the two options below. You can toggle between models anytime from your profile settings."
        align="center"
      />

      {/* Error Alert */}
      {hasErrors && (
        <ValidationAlert>
          Please select a participation model to continue. Choose between Service Provider (active) or Fund Receiver (passive) based on your availability and goals.
        </ValidationAlert>
      )}

      {/* Asymmetric Layout - Service Provider Hero + Secondary Option */}
      <div className="space-y-6">
        {/* Service Provider - Featured Hero Card */}
        <ServiceProviderCard
          isSelected={participationModel === 'active'}
          onSelect={() => onChange('active')}
        />

        {/* Divider with OR */}
        <ParticipationDivider />

        {/* Common Pot Participant - Compact Secondary Option */}
        <CommonPotParticipantCard
          isSelected={participationModel === 'passive'}
          onSelect={() => onChange('passive')}
        />
      </div>

      {/* Error Display */}
      <FieldError error={errors.participationModel} className="justify-center" />
    </div>
  );
};
