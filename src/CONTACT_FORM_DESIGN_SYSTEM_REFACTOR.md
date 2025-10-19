# Contact Form Design System Refactor

## Overview
Refactored the ContactPage to use design system components instead of raw HTML elements, following DRY principles. Updated design system components to match the clean, simple styling of the contact forms.

## Updated Design System Components

### 1. Input Component (`/components/ui/input.tsx`)
- **Simplified default variant** to match contact form styling
- Removed complex hover effects, shadows, and transforms
- Clean styling: `bg-form-background border border-form-border rounded-lg px-4 py-3`
- Simple focus state: `focus:border-brand-accent focus:outline-none transition-colors`
- Maintains support for other variants (outline, filled, ghost, success, error, warning)
- Supports left/right icons and loading states

### 2. Textarea Component (`/components/ui/textarea.tsx`)
- **Simplified default variant** to match contact form styling
- Added `resize-y` for vertical resizing (matches contact form)
- Clean, minimal styling consistent with Input component
- Same focus behavior as Input

### 3. Label Component (`/components/ui/label.tsx`)
- **Updated default styling** to match contact form
- Clean styling: `block text-brand-neutral-700 mb-2`
- Removed complex flex/gap styling
- Simple, readable label style

### 4. Checkbox Component (`/components/ui/checkbox.tsx`)
- **Added native accent-color support** using `accentColor: 'var(--brand-accent)'`
- Displays in warm coral brand color (#ff7f50) when checked
- Simplified variants in `/components/ui/form-variants.tsx`
- Clean styling: `w-5 h-5 rounded cursor-pointer transition-all hover:scale-110`
- Removed complex border states and shadows

## ContactPage Refactoring

### Components Now Used
1. **Input** - All text, email, url, and date inputs
2. **Textarea** - All message/description fields
3. **Label** - All form labels with consistent styling
4. **Checkbox** - Meeting preference checkboxes in all three forms
5. **Button** - Submit buttons (already using design system)

### Native Elements Retained
- **`<select>`** elements - Kept native for simplicity and better browser compatibility
- Uses same styling classes as other form elements for consistency

### Forms Refactored
1. **Enterprise Form** - All fields now use design system components
2. **OSS Developer Form** - All fields now use design system components
3. **Generic Form** - All fields now use design system components (Foundation, Press, Investors, Commercial OSS, Other)

### Benefits
✅ **DRY Compliance** - No duplicate form styling code
✅ **Consistency** - All forms use same components with same styling
✅ **Maintainability** - Changes to form styling only need to be made in one place
✅ **Brand Alignment** - All components use warm brand colors (Sienna → Coral → Goldenrod)
✅ **Accessibility** - Proper label/input associations with `htmlFor` and `id`
✅ **Type Safety** - TypeScript props and validation

### Styling Approach
The design system components now use a **simple, clean default variant** that:
- Removes unnecessary visual complexity
- Focuses on readability and usability
- Uses design tokens from `globals.css` (--form-background, --form-border, etc.)
- Maintains consistent spacing and sizing
- Provides clear focus states without distractions

### Color System Integration
All form components now properly use:
- **Form background**: `var(--form-background)` (#1a2942 - Rich dark blue)
- **Form border**: `var(--form-border)` (#334155 - Subtle dark border)
- **Focus accent**: `var(--brand-accent)` (#ff7f50 - Coral Orange)
- **Text color**: `var(--brand-neutral-900)` (Primary text)
- **Label color**: `var(--brand-neutral-700)` (Body text)
- **Placeholder**: `var(--form-text-placeholder)` (#64748b - Refined placeholder)

## Migration Notes
If updating existing forms to use this pattern:
1. Import design system components: `Input`, `Textarea`, `Label`, `Checkbox`
2. Replace raw `<input>` with `<Input>`
3. Replace raw `<textarea>` with `<Textarea>`
4. Replace raw `<label>` with `<Label>`
5. Replace raw checkbox inputs with `<Checkbox>` using `onCheckedChange` prop
6. Add proper `id` and `htmlFor` attributes for accessibility
7. Remove duplicate className styling (handled by components)
8. Keep native `<select>` elements or migrate to Radix Select as needed
