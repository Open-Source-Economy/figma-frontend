import React from 'react';
import { ParticipationModel, ParticipationModelOption, ParticipationSelectionState } from '../../../types/DeveloperOnboarding';
import { StepHeader } from '../StepHeader';
import { ValidationAlert } from '../../forms/ValidationAlert';
import { FieldError } from '../../forms/FieldError';
import { ParticipationCard } from '../participation/ParticipationCard';
import { participationCardConfigs } from '../participation/participationCardConfigs';
import { ServiceProviderCard } from '../participation/ServiceProviderCard';

interface StepParticipationModelProps {
  participationModel: ParticipationModel | null;
  onChange: (model: ParticipationModel) => void;
  errors?: Record<string, string>;
}

/**
 * StepParticipationModel - Step 3 of developer onboarding
 * Allows developers to choose participation models with three states: yes, maybe, not_interested
 */
export const StepParticipationModel: React.FC<StepParticipationModelProps> = ({
  participationModel,
  onChange,
  errors = {},
}) => {
  // Check if there are any errors
  const hasErrors = Object.keys(errors).length > 0;

  // Define the additional participation options (excluding service_provider which has its own card)
  const additionalOptions: ParticipationModelOption[] = ['common_pot', 'individual_donation', 'community_supporter'];

  // Handle selection for three-state model
  const handleSelect = (option: ParticipationModelOption, state: ParticipationSelectionState) => {
    const current = participationModel || {};
    onChange({
      ...current,
      [option]: state
    });
  };

  const getSelectionState = (option: ParticipationModelOption): ParticipationSelectionState | undefined => {
    return participationModel?.[option];
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <StepHeader
        stepNumber="03"
        title="Choose Your Participation Model"
        subtitle="Select your level of interest for each option - you can participate in multiple ways"
        align="center"
      />

      {/* Multi-Select Instruction */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-brand-accent/5 via-brand-highlight/5 to-brand-success/5 border border-brand-accent/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-2xl">✓</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-brand-neutral-900 mb-2">Multiple Selections Allowed</h3>
              <p className="text-sm text-brand-neutral-600 leading-relaxed">
                Choose your interest level for each option. For example, you can commit to providing services now, 
                consider donations as a maybe later, and explore community support. Select "Yes", "Maybe later", or "Not interested" for each card.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {hasErrors && (
        <ValidationAlert>
          Please select at least one participation model with "Yes" to continue.
        </ValidationAlert>
      )}

      {/* Participation Model Options */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Service Provider - Featured Hero Card */}
        <ServiceProviderCard
          selectedState={getSelectionState('service_provider')}
          onSelect={(state) => handleSelect('service_provider', state)}
          hasError={hasErrors}
        />

        {/* Section Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-neutral-300 to-transparent" />
          <span className="text-sm text-brand-neutral-500 px-4">Additional Options</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-neutral-300 to-transparent" />
        </div>

        {/* Other Options Grid */}
        <div className="grid grid-cols-1 gap-6">
          {additionalOptions.map((option) => (
            <ParticipationCard
              key={option}
              config={participationCardConfigs[option]}
              selectedState={getSelectionState(option)}
              onSelect={(state) => handleSelect(option, state)}
              hasError={hasErrors}
            />
          ))}
        </div>
      </div>

      {/* Error Display */}
      <FieldError error={errors.participationModel} className="justify-center" />
    </div>
  );
};