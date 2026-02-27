import React from 'react';
import { SelectField, SelectOption } from '../forms/SelectField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

interface CurrencyOption {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

interface CurrencySelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  variant?: 'default' | 'compact';
  label?: string;
  className?: string;
}

const currencies: CurrencyOption[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', symbol: 'CHF' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', symbol: '₹' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', symbol: 'R$' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', symbol: '$' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', symbol: 'kr' },
];

export function CurrencySelector({ 
  value, 
  onValueChange, 
  variant = 'default',
  label,
  className 
}: CurrencySelectorProps) {
  const currentCurrency = currencies.find(c => c.code === value) || currencies[0];

  // Use SelectField for default variant (with label support)
  if (variant === 'default') {
    const currencyOptions: SelectOption[] = currencies.map(curr => ({
      value: curr.code,
      label: `${curr.flag} ${curr.code} - ${curr.name}`
    }));

    return (
      <SelectField
        label={label || 'Currency'}
        value={value}
        onChange={onValueChange}
        options={currencyOptions}
        placeholder="Select currency"
        className={className}
      />
    );
  }

  // Compact variant with custom rendering for minimal footer display
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`cursor-pointer ${className}`} variant="ghost" size="sm">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{currentCurrency.flag}</span>
            <span>{currentCurrency.code}</span>
            <span className="text-muted-foreground">({currentCurrency.symbol})</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency) => (
          <SelectItem key={currency.code} value={currency.code} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <span>{currency.flag}</span>
              <span className="text-sm">{currency.code}</span>
              <span className="text-xs text-muted-foreground">({currency.symbol})</span>
              <span className="text-xs text-muted-foreground">- {currency.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { currencies };
export type { CurrencyOption };