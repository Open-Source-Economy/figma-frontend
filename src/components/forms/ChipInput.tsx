import React from 'react';
import { Input } from '../ui/input';
import { Plus, Search } from 'lucide-react';
import { cn } from '../ui/utils';
import { Chip } from '../ui/chip';

export interface ChipInputProps {
  /** Current selected values */
  values: string[];
  /** Callback when values change */
  onChange: (values: string[]) => void;
  /** Placeholder text for the search input */
  placeholder?: string;
  /** Array of suggested values to show in dropdown */
  suggestions?: string[];
  /** Allow adding custom values not in suggestions */
  allowCustom?: boolean;
  /** Show item count below input */
  showCount?: boolean;
  /** Custom label for count (e.g., "ecosystem", "tag", "skill") - pluralized automatically */
  countLabel?: string;
  /** Custom class for the container */
  className?: string;
  /** Disable the input */
  disabled?: boolean;
  /** Maximum number of items allowed */
  maxItems?: number;
}

/**
 * ChipInput - Reusable multi-select chip/tag input component
 * 
 * Features:
 * - Display selected items as removable chips
 * - Search/filter from suggestions
 * - Add custom values (optional)
 * - Item counter
 * - Keyboard navigation (Enter to add)
 * 
 * @example
 * ```tsx
 * <ChipInput
 *   values={formData.ecosystems || []}
 *   onChange={(ecosystems) => handleFieldChange('ecosystems', ecosystems)}
 *   suggestions={ecosystemSuggestions}
 *   placeholder="Type to search or add custom ecosystem..."
 *   allowCustom
 *   showCount
 *   countLabel="ecosystem"
 * />
 * ```
 */
export const ChipInput: React.FC<ChipInputProps> = ({
  values,
  onChange,
  placeholder = 'Type to search or add...',
  suggestions = [],
  allowCustom = true,
  showCount = false,
  countLabel = 'item',
  className,
  disabled = false,
  maxItems,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDropdown]);

  // Filter suggestions based on search term and already selected values
  const filteredSuggestions = suggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !values.includes(suggestion)
  );

  const handleAdd = (value: string) => {
    const trimmedValue = value.trim();
    
    // Check max items limit
    if (maxItems && values.length >= maxItems) {
      return;
    }
    
    // Add if not empty and not already selected
    if (trimmedValue && !values.includes(trimmedValue)) {
      onChange([...values, trimmedValue]);
    }
    
    // Reset search
    setSearchTerm('');
    setShowDropdown(false);
  };

  const handleRemove = (value: string) => {
    onChange(values.filter(v => v !== value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      e.preventDefault();
      handleAdd(searchTerm);
    }
  };

  const isCustomValue = searchTerm && !suggestions.includes(searchTerm);
  const isMaxReached = maxItems && values.length >= maxItems;

  return (
    <div className={cn("space-y-3", className)}>
      {/* Selected Values as Chips */}
      {values.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {values.map((value) => (
            <Chip
              key={value}
              size="lg"
              onRemove={() => handleRemove(value)}
              disabled={disabled}
            >
              {value}
            </Chip>
          ))}
        </div>
      )}

      {/* Search and Add Input */}
      <div className="relative" ref={dropdownRef}>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          placeholder={isMaxReached ? `Maximum ${maxItems} ${countLabel}s reached` : placeholder}
          leftIcon={Search}
          disabled={disabled || isMaxReached}
        />

        {/* Dropdown with Suggestions */}
        {showDropdown && !disabled && !isMaxReached && (searchTerm || filteredSuggestions.length > 0) && (
          <div className="absolute z-10 w-full mt-2 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg shadow-xl max-h-64 overflow-hidden">
            <div className="overflow-y-auto max-h-64">
              {/* Custom value option when searching */}
              {allowCustom && isCustomValue && (
                <button
                  type="button"
                  onClick={() => handleAdd(searchTerm)}
                  className="w-full px-4 py-3 text-left hover:bg-brand-secondary-dark transition-colors border-b border-brand-neutral-300/20"
                >
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span className="text-brand-neutral-800">
                      Add "<span className="text-brand-accent">{searchTerm}</span>"
                    </span>
                  </div>
                </button>
              )}

              {/* Filtered Suggestions */}
              {filteredSuggestions.length > 0 ? (
                <div className="p-1">
                  {filteredSuggestions.slice(0, 10).map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleAdd(suggestion)}
                      className="w-full px-3 py-2.5 text-left rounded-lg hover:bg-brand-secondary-dark transition-colors group cursor-pointer"
                    >
                      <p className="text-sm text-brand-neutral-800 group-hover:text-brand-accent transition-colors">
                        {suggestion}
                      </p>
                    </button>
                  ))}
                </div>
              ) : searchTerm && values.includes(searchTerm) ? (
                <div className="p-4 text-center text-sm text-brand-neutral-600">
                  Already added
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* Item Count */}
      {showCount && values.length > 0 && (
        <p className="text-xs text-brand-neutral-600">
          {values.length} {countLabel}{values.length !== 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  );
};
