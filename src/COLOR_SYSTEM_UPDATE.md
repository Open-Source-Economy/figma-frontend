# Color System Semantic Update

## Summary
Updated the Open Source Economy color system to be more semantically correct by separating highlight/accent colors from true success states.

## Changes Made

### 1. New Color Variables
- **Added `brand-highlight`**: Coral/rose colors (`#fb7185`) for secondary accents, status indicators, and decorative elements
- **Updated `brand-success`**: Now uses proper emerald green (`#10b981`) for actual success states
- **Maintained `brand-accent`**: Purple (`#a78bfa`) for primary interactive elements

### 2. Updated Color Semantics

#### `brand-highlight` (Coral/Rose) - Used for:
- Status indicators (online, active)
- Secondary accents and decorative elements
- Statistical highlights
- Non-success emphasis elements

#### `brand-success` (Emerald Green) - Used for:
- Actual success states (completions, approvals)
- Check marks and confirmations
- Positive validation states
- Form success feedback

#### `brand-accent` (Purple) - Used for:
- Primary interactive elements
- Focus states
- Primary CTAs and highlights

### 3. Updated Components
- **Button Component**: Fixed semantic colors for all variants
  - `default` variant: Now uses `brand-accent` (purple) instead of gradient with success
  - Added `gradient` variant: Preserves brand journey for special use cases
  - Updated all gradients to use `brand-highlight` instead of `brand-success`
- `ExpertMaintainers.tsx`: Status indicator → `brand-highlight`
- `HowItWorksComparison.tsx`: Bullet points and stats → `brand-highlight`
- `HowItWorksLiveSupport.tsx`: Online status and avatar → `brand-highlight`
- `LogoCloud.tsx`: Status indicator → `brand-highlight`
- `HeroSection.tsx`: Brand journey gradients → `brand-highlight`
- `HowItWorksTimeline.tsx`: Timeline gradients → `brand-highlight`
- `HowItWorksCompact.tsx`: CTA backgrounds → `brand-highlight`
- `MaintainerTestimonialsCompact.tsx`: Section backgrounds → `brand-highlight`
- `TypographyComparison.tsx`: Success examples → `brand-success`
- All form components: Success states → `brand-success`

### 4. Color Palette Overview

```
Navy Foundation:     --brand-primary (#334155)
Purple Accents:      --brand-accent (#a78bfa)
Coral Highlights:    --brand-highlight (#fb7185)
Emerald Success:     --brand-success (#10b981)
Amber Warnings:      --brand-warning (#fbbf24)
Red Errors:          --brand-error (#ef4444)
```

### 4. Button Variants Updated
- **`default`**: Primary purple accent (was gradient with success)
- **`gradient`**: New variant for brand journey effect
- **`outline`**, **`ghost`**, **`brand`**: Updated to use highlights correctly
- **`success`**: Remains green for actual success states
- **All variants**: Now semantically aligned with their purpose

## Benefits
- **Semantic Clarity**: Colors now match their intended meaning across all components
- **Button Consistency**: Primary actions use accent purple, not success green
- **Accessibility**: Green success states follow accessibility guidelines  
- **Maintainability**: Clear separation of use cases and component responsibilities
- **Brand Flexibility**: Gradient variant preserves brand journey when needed
- **Brand Consistency**: Coral remains as a signature accent without semantic confusion