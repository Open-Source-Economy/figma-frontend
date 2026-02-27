/**
 * Shared dropdown/select item styles for consistent hover behavior
 * Following DRY principles across ChipInput, SelectField, SelectItem, and other dropdown components
 * Uses gradient hover effects matching the design system
 */

// Core styles used by SelectItem and other dropdown items
export const DROPDOWN_ITEM_BASE = "relative flex w-full cursor-default items-center gap-2 rounded-md py-2 pl-3 text-sm outline-hidden select-none transition-all duration-200";

// Hover and focus gradient states
export const DROPDOWN_ITEM_STATES = "hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-accent/10 focus:bg-gradient-to-r focus:from-brand-primary/15 focus:to-brand-accent/15 focus:text-brand-primary data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-brand-primary/15 data-[highlighted]:to-brand-accent/15 data-[highlighted]:text-brand-primary";

// Disabled state
export const DROPDOWN_ITEM_DISABLED = "data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

// Combined for easy use
export const DROPDOWN_ITEM_STYLES = {
  // For SelectItem (has right padding for checkmark)
  selectItem: `${DROPDOWN_ITEM_BASE} pr-8 ${DROPDOWN_ITEM_STATES} ${DROPDOWN_ITEM_DISABLED}`,
  // For ChipInput and other dropdown items (standard right padding)
  dropdownItem: `${DROPDOWN_ITEM_BASE} pr-3 ${DROPDOWN_ITEM_STATES}`,
  // Legacy support - can be removed once all components are updated
  container: `${DROPDOWN_ITEM_BASE} pr-3 ${DROPDOWN_ITEM_STATES}`,
  text: "text-brand-neutral-800 transition-colors"
} as const;