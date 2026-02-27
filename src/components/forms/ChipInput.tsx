import React from 'react';
import { Input } from '../ui/input';
import { Plus, Search } from 'lucide-react';
import { cn } from '../ui/utils';
import { Chip } from '../ui/chip';
import { DROPDOWN_ITEM_STYLES } from '../ui/dropdown-item-styles';

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

  // Ensure values is always an array
  const safeValues = values || [];

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
    !safeValues.includes(suggestion)
  );

  const handleAdd = (value: string) => {
    const trimmedValue = value.trim();
    
    // Check max items limit
    if (maxItems && safeValues.length >= maxItems) {
      return;
    }
    
    // Add if not empty and not already selected
    if (trimmedValue && !safeValues.includes(trimmedValue)) {
      onChange([...safeValues, trimmedValue]);
    }
    
    // Reset search
    setSearchTerm('');
    setShowDropdown(false);
  };

  const handleRemove = (value: string) => {
    onChange(safeValues.filter(v => v !== value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      e.preventDefault();
      handleAdd(searchTerm);
    }
  };

  const isCustomValue = searchTerm && !suggestions.includes(searchTerm);
  const isMaxReached = maxItems && safeValues.length >= maxItems;

  return (
    <div className={cn("space-y-3", className)}>
      {/* Selected Values as Chips */}
      {safeValues.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {safeValues.map((value) => (
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
                  className={cn(
                    DROPDOWN_ITEM_STYLES.dropdownItem,
                    "border-b border-brand-neutral-300/20 px-4 py-3"
                  )}
                >
                  <Plus className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span className="text-brand-neutral-800">
                    Add "<span className="text-brand-accent">{searchTerm}</span>"
                  </span>
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
                      className={cn(
                        DROPDOWN_ITEM_STYLES.selectItem,
                        "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        "cursor-pointer"
                      )}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : searchTerm && safeValues.includes(searchTerm) ? (
                <div className="p-4 text-center text-sm text-brand-neutral-600">
                  Already added
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* Item Count */}
      {showCount && safeValues.length > 0 && (
        <p className="text-xs text-brand-neutral-600">
          {safeValues.length} {countLabel}{safeValues.length !== 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  );
};