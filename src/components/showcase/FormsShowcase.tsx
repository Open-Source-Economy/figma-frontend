import React from 'react';
import { SectionLayout } from '../layout/SectionLayout';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { FormStateShowcase } from './FormStateShowcase';
import { InputAddonShowcase } from './InputAddonShowcase';
import { SelectionControlsShowcase } from './SelectionControlsShowcase';
import { CompleteFormShowcase } from './CompleteFormShowcase';
import { InteractiveControlsShowcase } from './InteractiveControlsShowcase';
import { AdvancedInputShowcase } from './AdvancedInputShowcase';
import { TextareaShowcase } from './TextareaShowcase';
import { FormField } from '../forms/FormField';
import { InputWithIcon } from '../forms/InputWithIcon';
import { FormGrid } from '../forms/FormGrid';
import { Mail, Lock, Search, Phone, Calendar, Clock, User, Link } from 'lucide-react';
import { useFormState } from '../../hooks/useFormState';

const defaultInputExamples = [
  { label: 'Text Input', type: 'text', placeholder: 'Enter text' },
  { label: 'Email Input', type: 'email', placeholder: 'Enter email', leftIcon: Mail },
  { label: 'Password Input', type: 'password', placeholder: 'Enter password', leftIcon: Lock },
  { label: 'Number Input', type: 'number', placeholder: 'Enter number' },
  { label: 'Search Input', type: 'search', placeholder: 'Search...', leftIcon: Search },
  { label: 'URL Input', type: 'url', placeholder: 'https://example.com', leftIcon: Link },
  { label: 'Phone Input', type: 'tel', placeholder: '+1 (555) 000-0000', leftIcon: Phone },
  { label: 'Date Input', type: 'date', leftIcon: Calendar },
  { label: 'Time Input', type: 'time', leftIcon: Clock }
];

const successInputExamples = [
  { label: 'Valid Text Input', value: 'Valid text content' },
  { label: 'Valid Email', type: 'email', value: 'user@example.com', leftIcon: Mail },
  { label: 'Strong Password', type: 'password', value: 'securepassword123', leftIcon: Lock }
];

const errorInputExamples = [
  { label: 'Invalid Text Input', placeholder: 'Required field', error: 'This field is required' },
  { label: 'Invalid Email', type: 'email', value: 'invalid-email', leftIcon: Mail, error: 'Please enter a valid email address' },
  { label: 'Weak Password', type: 'password', value: '123', leftIcon: Lock, error: 'Password must be at least 8 characters' }
];

const disabledInputExamples = [
  { label: 'Disabled Text', placeholder: 'Disabled input' },
  { label: 'Disabled Email', type: 'email', placeholder: 'Disabled email', leftIcon: Mail },
  { label: 'Disabled Password', type: 'password', placeholder: 'Disabled password', leftIcon: Lock }
];

export function FormsShowcase() {
  return (
    <SectionLayout 
      title="Forms & Input Elements"
      description="Comprehensive collection of form inputs, controls, and their various states including default, focused, disabled, error, and success states."
      maxWidth="6xl"
    >
      <div className="grid gap-8">
        <InputAddonShowcase />
        
        {/* Text Input Types */}
        <ShowcaseCard 
          title="Text Input Types" 
          description="Different input types with various states"
        >
          <div className="space-y-8">
            <FormStateShowcase 
              title="Default State"
              description="Standard input states"
              examples={defaultInputExamples}
              stateType="default"
            />
            
            <FormStateShowcase 
              title="Success State"
              description="Validated inputs"
              examples={successInputExamples}
              stateType="success"
            />
            
            <FormStateShowcase 
              title="Error State"
              description="Inputs with validation errors"
              examples={errorInputExamples}
              stateType="error"
            />
            
            <FormStateShowcase 
              title="Disabled State"
              description="Non-interactive inputs"
              examples={disabledInputExamples}
              stateType="disabled"
            />
          </div>
        </ShowcaseCard>

        <TextareaShowcase />
        <SelectionControlsShowcase />
        <InteractiveControlsShowcase />
        <AdvancedInputShowcase />
        <CompleteFormShowcase />
      </div>
    </SectionLayout>
  );
}