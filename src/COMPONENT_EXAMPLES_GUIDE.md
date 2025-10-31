# Component Examples Guide

Quick reference for accessing example pages and component showcases.

## How to Access Examples

All example pages are accessible through the **"Examples"** dropdown in the main navigation header.

### Desktop
Click **"Examples"** in the top navigation bar → Select the example you want to view

### Mobile
Tap the menu icon → Find **"Examples"** section → Tap the example you want to view

## Available Examples

### 1. Server Error Alert Examples
**Path:** Examples → Server Error Alert  
**Route:** `error-examples`

**What you'll see:**
- All 3 variants (Default, Compact, Detailed)
- Interactive demonstrations with retry and dismiss actions
- Common use cases:
  - API request failures
  - Form validation errors
  - Network timeouts
  - Authentication errors
  - Server errors (500)
- Code integration examples
- Real-world scenarios

**Key Features Demonstrated:**
✅ Basic error messages  
✅ Retry functionality  
✅ Dismiss functionality  
✅ Custom error titles  
✅ Multiple action buttons  
✅ Variant comparisons

### 2. Loading State Examples
**Path:** Examples → Loading States  
**Route:** `loading-examples`

**What you'll see:**
- All 6 variants:
  - Spinner (rotating indicator)
  - Dots (bouncing animation)
  - Pulse (pulsing circle)
  - Inline (for buttons/text)
  - Skeleton (content placeholders)
  - Overlay (section/page overlays)
- All 4 sizes (Small, Medium, Large, Extra Large)
- Specialized components:
  - LoadingCard
  - LoadingButton
  - LoadingTable
  - LoadingSection
- Interactive demonstrations
- Code integration examples

**Key Features Demonstrated:**
✅ Button loading states  
✅ Card loading transitions  
✅ Section loading  
✅ Full-page overlay  
✅ Skeleton loaders  
✅ Table placeholders

### 3. Typography Levels
**Path:** Examples → Typography Levels  
**Route:** `heading-levels`

**What you'll see:**
- Complete heading hierarchy (h1-h6)
- Display text variants
- Body text styles
- Typography system demonstration

## Already Integrated Components

These components are already being used in production pages:

### ServerErrorAlert
- **Location:** Footer newsletter subscription
- **File:** `/components/layout/Footer.tsx`
- **Usage:** Compact variant with dismiss functionality

### LoadingButton
- **Location:** Footer newsletter subscription
- **File:** `/components/layout/Footer.tsx`
- **Usage:** Button loading state during form submission

## Quick Integration Reference

### Server Error Alert
```tsx
import { ServerErrorAlert } from './components/ui/server-error-alert';

// Basic usage
<ServerErrorAlert message="Failed to load data." />

// With retry
<ServerErrorAlert 
  message="Connection failed."
  showRetry
  onRetry={() => refetch()}
/>

// Detailed variant
<ServerErrorAlert 
  variant="detailed"
  title="Payment Failed"
  message="Your payment could not be processed."
  showRetry
  onRetry={retryPayment}
/>
```

### Loading States
```tsx
import { LoadingState, LoadingButton, LoadingCard } from './components/ui/loading-state';

// Spinner
<LoadingState variant="spinner" message="Loading..." />

// Button loading
<Button disabled={isLoading}>
  {isLoading ? <LoadingButton message="Saving..." /> : 'Save'}
</Button>

// Card skeleton
<LoadingCard lines={4} showAvatar showImage />

// Full page
<LoadingState
  variant="spinner"
  fullPage
  showBackdrop
  message="Loading application..."
/>
```

## Documentation

Comprehensive documentation is available:

- **Server Error Alert:** `/SERVER_ERROR_ALERT.md`
- **Loading States:** `/LOADING_STATE.md`
- **Loading Integration:** `/LOADING_STATE_INTEGRATION.md`

## Navigation Structure

```
Header Navigation
├── How It Works
├── Mission
├── Services
├── Projects
├── Maintainers
├── Blog
├── FAQ
├── Contact
├── Examples ⭐ (NEW)
│   ├── Server Error Alert
│   ├── Loading States
│   └── Typography Levels
└── Admin
```

## Tips

1. **Use the Examples dropdown** to quickly access component showcases
2. **Inspect the code examples** on each page for integration guidance
3. **Try interactive demos** to see components in different states
4. **Check the documentation files** for comprehensive API references
5. **Look at Footer.tsx** to see real production usage

## Component Files

### Server Error Alert
- **Component:** `/components/ui/server-error-alert.tsx`
- **Examples:** `/components/examples/ServerErrorExamples.tsx`
- **Documentation:** `/SERVER_ERROR_ALERT.md`

### Loading States
- **Component:** `/components/ui/loading-state.tsx`
- **Examples:** `/components/examples/LoadingStateExamples.tsx`
- **Documentation:** `/LOADING_STATE.md`

## Next Steps

1. **Browse the examples** to understand component capabilities
2. **Review the documentation** for detailed API references
3. **Check production usage** in Footer component
4. **Integrate into your pages** following the patterns shown
5. **Maintain consistency** by using these components throughout the app

---

**Last Updated:** December 2024  
**Design System:** Premium Dark Theme with Semantic Colors
