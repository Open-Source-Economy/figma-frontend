# HelpText Component - DRY Refactor

## Overview
Created a reusable `HelpText` component to standardize help text with optional "learn more" dialogs across the onboarding wizard, replacing duplicated code patterns.

## Component Location
`/components/ui/help-text.tsx`

## Features
- Consistent styling with `caption` text size and `text-brand-neutral-600` color
- Info icon with accent color
- Optional "learn more" link that opens a dialog
- Fully customizable dialog content
- Follows the design system established in Step 4 (Availability)

## Usage

### Basic Help Text (No Dialog)
```tsx
<HelpText>
  Your help text goes here.
</HelpText>
```

### Help Text with Learn More Dialog
```tsx
<HelpText
  learnMoreText="Learn more about this feature"
  learnMoreTitle="Feature Details"
  learnMoreDescription="A detailed explanation of how this works"
  learnMoreContent={<YourCustomDialogContent />}
>
  Brief explanation text that appears inline.
</HelpText>
```

### Custom Icon
```tsx
import { DollarSign } from 'lucide-react';

<HelpText icon={DollarSign}>
  Your help text with custom icon.
</HelpText>
```

## Current Implementations

### 1. Step 4 - Availability (PricingInfoBanner)
**File:** `/components/onboarding/availability/PricingInfoBanner.tsx`

Refactored to use `HelpText` component with `PricingStructureDialogContent`.

**Before:** Custom div with Info icon and PricingStructureDialog component  
**After:** Single `HelpText` component with reusable dialog content

### 2. Step 5 - Services (ServiceModal)
**File:** `/components/onboarding/services/ServiceModal.tsx`

Added `HelpText` with `ServiceRateDialogContent` to explain base vs custom rates.

**Features:**
- Dynamic text based on toggle state (Base vs Custom)
- Shows current base rate from Step 4
- Dialog explains when to use each rate type with examples

## Dialog Content Components

### PricingStructureDialogContent
**File:** `/components/onboarding/availability/PricingStructureDialog.tsx`

Explains how enterprise pricing works and fund distribution.

### ServiceRateDialogContent  
**File:** `/components/onboarding/services/ServiceRateDialog.tsx`

Explains base rate vs custom rate options with use cases.

## Benefits
1. **DRY Principle** - Single source of truth for help text styling
2. **Consistency** - All help text follows same design pattern
3. **Maintainability** - Changes to help text style apply everywhere
4. **Reusability** - Easy to add help text anywhere in the app
5. **Separation of Concerns** - Dialog content separated from presentation

## Design System Alignment
- Uses `text-xs` for caption-sized text
- Uses `text-brand-neutral-600` for muted explanatory text
- Matches styling from FormField `helpText` prop
- Follows BrandModal and InfoMessage patterns
