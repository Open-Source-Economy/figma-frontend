import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

interface CurrencyOption {
  value: string;
  label: string;
  symbol?: string;
  flag?: string;
}

interface CurrencyInputProps {
  value?: string;
  currency?: string;
  onValueChange?: (value: string) => void;
  onCurrencyChange?: (currency: string) => void;
  currencies?: CurrencyOption[];
  placeholder?: string;
  suffix?: string;
  quickAmounts?: number[];
  showRangeIndicator?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  currentValue?: number;
  state?: 'default' | 'error' | 'success';
  disabled?: boolean;
  className?: string;
}

const defaultCurrencies: CurrencyOption[] = [
  { value: 'usd', label: 'USD', symbol: '$', flag: '🇺🇸' },
  { value: 'eur', label: 'EUR', symbol: '€', flag: '🇪🇺' },
  { value: 'gbp', label: 'GBP', symbol: '£', flag: '🇬🇧' },
  { value: 'cad', label: 'CAD', symbol: 'C$', flag: '🇨🇦' },
];

export function CurrencyInput({
  value,
  currency = 'usd',
  onValueChange,
  onCurrencyChange,
  currencies = defaultCurrencies,
  placeholder = "75",
  suffix = "/hour",
  quickAmounts,
  showRangeIndicator = false,
  rangeMin = 60,
  rangeMax = 120,
  currentValue,
  state = 'default',
  disabled = false,
  className
}: CurrencyInputProps) {
  const stateClasses = {
    error: "border-brand-error focus:ring-brand-error",
    success: "border-brand-success focus:ring-brand-success", 
    default: ""
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex">
        <Select value={currency} onValueChange={onCurrencyChange} disabled={disabled}>
          <SelectTrigger className={cn(
            "w-24 rounded-r-none border-r-0",
            stateClasses[state]
          )}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((curr) => (
              <SelectItem key={curr.value} value={curr.value}>
                {curr.flag ? `${curr.flag} ${curr.label}` : curr.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className={cn(
            "rounded-none border-x-0",
            stateClasses[state]
          )}
          step="0.01"
          min="0"
          disabled={disabled}
        />
        <div className={cn(
          "flex items-center px-3 bg-muted border border-l-0 rounded-r-md text-sm text-muted-foreground",
          stateClasses[state]
        )}>
          {suffix}
        </div>
      </div>

      {quickAmounts && (
        <div className="flex gap-1">
          {quickAmounts.map((amount) => {
            const symbol = currencies.find(c => c.value === currency)?.symbol || '$';
            return (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                className="text-xs px-2 py-1"
                onClick={() => onValueChange?.(amount.toString())}
                disabled={disabled}
              >
                {symbol}{amount}
              </Button>
            );
          })}
        </div>
      )}

      {showRangeIndicator && currentValue && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Market range:</span>
          <div className="flex-1 bg-muted rounded-full h-2 relative">
            <div className="bg-brand-secondary w-2/3 h-2 rounded-full"></div>
            <div 
              className="absolute top-0 w-1 h-2 bg-brand-accent rounded-full"
              style={{ 
                left: `${Math.min(Math.max((currentValue - rangeMin) / (rangeMax - rangeMin) * 100, 0), 100)}%` 
              }}
            ></div>
          </div>
          <span>${rangeMin}-{rangeMax}</span>
        </div>
      )}
    </div>
  );
}