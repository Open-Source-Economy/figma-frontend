import React from 'react';
import { ContactInfo } from '../../../types/DeveloperOnboarding';
import { Mail, User } from 'lucide-react';
import { StepHeader } from '../StepHeader';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import { ValidatedInput } from '../../forms/ValidatedInput';
import { FieldError } from '../../forms/FieldError';
import { InfoMessage } from '../../ui/info-message';

export interface StepIdentityProps {
  data: ContactInfo;
  onChange: (data: ContactInfo) => void;
  errors?: Record<string, string>;
  onNavItemClick?: (href: string) => void;
}

/**
 * StepIdentity - Step 1: Contact & Identity
 * Collects name, email, and GitHub username with verification
 */
export const StepIdentity: React.FC<StepIdentityProps> = ({
  data,
  onChange,
  errors = {},
  onNavItemClick
}) => {
  const handleChange = (field: keyof ContactInfo, value: string | boolean) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div>
      {/* Header */}
      <StepHeader
        stepNumber="01"
        title="Welcome to Open Source Economy"
        subtitle="Let's start with your basic information. This will help us create your maintainer profile and connect you with enterprise opportunities."
        align="center"
      />

      {/* Form */}
      <div className="space-y-5 sm:space-y-6">
        {/* Full Name */}
        <ValidatedInput
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={(value) => handleChange('fullName', value)}
          placeholder="Jane Doe"
          leftIcon={User}
          required
          error={errors.fullName}
        />

        {/* Email Address */}
        <ValidatedInput
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={(value) => handleChange('email', value)}
          placeholder="jane@example.com"
          leftIcon={Mail}
          required
          error={errors.email}
          hint="We'll use this to contact you about opportunities and send important updates."
        />

        {/* Terms and Conditions */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-start gap-3">
            <Checkbox
              id="termsAccepted"
              checked={data.termsAccepted}
              onCheckedChange={(checked) => handleChange('termsAccepted', checked as boolean)}
              className="mt-0.5"
            />
            <Label 
              htmlFor="termsAccepted" 
              className="flex-1 text-sm text-brand-neutral-700 cursor-pointer leading-relaxed"
            >
              By submitting this form, I agree to the{' '}
              <button
                type="button"
                onClick={() => onNavItemClick?.('terms-and-conditions')}
                className="text-brand-accent hover:text-brand-accent-light underline underline-offset-2 transition-colors duration-200 inline-block"
              >
                Terms and Conditions
              </button>
              {' '}<span className="text-brand-error">*</span>
            </Label>
          </div>
          <FieldError error={errors.termsAccepted} className="mt-2" />
        </div>

        {/* Privacy Notice - Subtle */}
        <InfoMessage variant="muted" className="mt-6 sm:mt-8">
          Your information is secure and will only be used to connect you with enterprise
          opportunities. We never share your contact details without your permission — learn more in our{' '}
          <button
            type="button"
            onClick={() => onNavItemClick?.('privacy-policy')}
            className="text-brand-accent hover:text-brand-accent-light underline underline-offset-2 transition-colors duration-200 inline-block"
          >
            Privacy Policy
          </button>.
        </InfoMessage>
      </div>
    </div>
  );
};
