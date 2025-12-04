import React from 'react';
import { ParticipationSelectionState } from '../../../types/DeveloperOnboarding';

interface ParticipationSelectionButtonsProps {
  selectedState: ParticipationSelectionState | undefined;
  onSelect: (state: ParticipationSelectionState) => void;
  colorScheme?: string;
}

export const ParticipationSelectionButtons: React.FC<ParticipationSelectionButtonsProps> = ({
  selectedState,
  onSelect,
  colorScheme = 'brand-accent',
}) => {
  const getButtonClasses = (state: ParticipationSelectionState) => {
    const isSelected = selectedState === state;
    
    if (state === 'yes') {
      return isSelected
        ? `bg-${colorScheme} text-white border-${colorScheme} shadow-md`
        : `bg-brand-card-blue text-brand-neutral-700 border-brand-neutral-300 hover:border-${colorScheme} hover:bg-${colorScheme}/5`;
    }
    
    if (state === 'maybe') {
      return isSelected
        ? 'bg-brand-warning text-white border-brand-warning shadow-md'
        : 'bg-brand-card-blue text-brand-neutral-700 border-brand-neutral-300 hover:border-brand-warning hover:bg-brand-warning/5';
    }
    
    // not_interested
    return isSelected
      ? 'bg-brand-neutral-400 text-white border-brand-neutral-400 shadow-md'
      : 'bg-brand-card-blue text-brand-neutral-700 border-brand-neutral-300 hover:border-brand-neutral-400 hover:bg-brand-neutral-100';
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect('yes');
        }}
        className={`flex-1 px-3 py-2 rounded-lg border-2 text-sm transition-all duration-200 cursor-pointer ${getButtonClasses('yes')}`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect('maybe');
        }}
        className={`flex-1 px-3 py-2 rounded-lg border-2 text-sm transition-all duration-200 cursor-pointer ${getButtonClasses('maybe')}`}
      >
        Maybe later
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect('not_interested');
        }}
        className={`flex-1 px-3 py-2 rounded-lg border-2 text-sm transition-all duration-200 cursor-pointer ${getButtonClasses('not_interested')}`}
      >
        Not interested
      </button>
    </div>
  );
};