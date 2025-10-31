import React from 'react';
import { DollarSign } from 'lucide-react';
import { FormField } from '../../forms/FormField';
import { SelectField } from '../../forms/SelectField';
import { Input } from '../../ui/input';
import { Currency } from '../../../types/DeveloperOnboarding';

interface ServiceRateInputProps {
  currency: Currency;
  rate: number;
  onCurrencyChange: (currency: Currency) => void;
  onRateChange: (rate: number) => void;
  error?: string;
}

const currencyOptions: { value: Currency; label: string }[] = [
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'CHF', label: 'CHF (Fr)' },
];

export const ServiceRateInput: React.FC<ServiceRateInputProps> = ({
  currency,
  rate,
  onCurrencyChange,
  onRateChange,
  error,
}) => {
  return (
    <FormField
      label="Hourly Rate"
      required
      error={error}
    >
      <div className="flex gap-2">
        <div className="w-32">
          <SelectField
            options={currencyOptions}
            value={currency}
            onChange={(value) => onCurrencyChange(value as Currency)}
          />
        </div>
        <div className="flex-1">
          <Input
            type="number"
            min={0}
            step={5}
            value={rate || ''}
            onChange={(e) => onRateChange(parseFloat(e.target.value) || 0)}
            placeholder="150"
            leftIcon={DollarSign}
            className="w-36"
            variant={error ? 'error' : 'default'}
          />
        </div>
      </div>
    </FormField>
  );
};
