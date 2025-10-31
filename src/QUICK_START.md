# Quick Start Guide - Component Examples

## 🎯 Where to Find the New Components

### Accessing Example Pages

**The easiest way to see the ServerErrorAlert and LoadingState components:**

1. **Look at the navigation header** at the top of any page
2. **Click on "Examples"** dropdown menu
3. **Select either:**
   - **"Server Error Alert"** - See all error alert variants and demos
   - **"Loading States"** - See all loading indicator variants and demos
   - **"Typography Levels"** - See typography system

### Quick Navigation Links

If you're looking at the application:

- **Examples Menu** is in the top navigation bar (between "Contact" and "Admin")
- On mobile, tap the menu icon and scroll to find the "Examples" section

## 📚 What You'll See

### Server Error Alert Examples Page

**Comprehensive showcase featuring:**

✅ **3 Main Variants:**
- **Default** - Standard error display with optional retry
- **Compact** - Minimal inline error for tight spaces
- **Detailed** - Premium error with enhanced styling

✅ **Interactive Demos:**
- Basic error messages
- Retry functionality
- Dismiss functionality
- Multiple actions
- Real-world scenarios

✅ **Common Use Cases:**
- API request failures
- Form validation errors
- Network timeouts
- Authentication errors
- Payment errors

✅ **Integration Code:**
- Copy-paste examples
- State management patterns
- Best practices

### Loading State Examples Page

**Complete loading system featuring:**

✅ **6 Variants:**
- **Spinner** - Classic rotating loader
- **Dots** - Bouncing dots animation
- **Pulse** - Pulsing circle
- **Inline** - For buttons and text
- **Skeleton** - Content placeholders
- **Overlay** - Section/page loading

✅ **4 Sizes:**
- Small, Medium, Large, Extra Large

✅ **Specialized Components:**
- LoadingCard
- LoadingButton
- LoadingTable
- LoadingSection

✅ **Interactive Demos:**
- Button loading states
- Card loading transitions
- Section loading
- Full-page overlay
- Real-time state changes

## 🚀 Already Working in Production

Both components are **already integrated** in the application:

### Footer Newsletter Subscription
**Location:** Scroll to the bottom of any page

**You can test:**
1. Try subscribing to the newsletter
2. See the **LoadingButton** component during submission
3. See the **ServerErrorAlert** (compact variant) if there's an error

**File:** `/components/layout/Footer.tsx`

## 📖 Documentation

Full documentation available:

- **`/SERVER_ERROR_ALERT.md`** - Complete ServerErrorAlert API reference
- **`/LOADING_STATE.md`** - Complete LoadingState API reference  
- **`/LOADING_STATE_INTEGRATION.md`** - Quick integration guide
- **`/COMPONENT_EXAMPLES_GUIDE.md`** - Navigation and access guide

## 💡 Quick Integration

### Server Error Alert - Copy & Paste

```tsx
import { ServerErrorAlert } from './components/ui/server-error-alert';

// Basic error
<ServerErrorAlert message="Failed to load data." />

// With retry
<ServerErrorAlert 
  message="Connection failed."
  showRetry
  onRetry={() => refetch()}
/>

// Detailed with actions
<ServerErrorAlert 
  variant="detailed"
  title="Payment Failed"
  message="Your payment could not be processed."
  showRetry
  retryText="Try Again"
  onRetry={retryPayment}
  showDismiss
  onDismiss={closeDialog}
/>
```

### Loading State - Copy & Paste

```tsx
import { LoadingState, LoadingButton } from './components/ui/loading-state';

// Spinner
<LoadingState variant="spinner" message="Loading..." />

// In a button
<Button disabled={isLoading}>
  {isLoading ? <LoadingButton message="Saving..." /> : 'Save'}
</Button>

// Full page
<LoadingState
  variant="spinner"
  size="xl"
  fullPage
  showBackdrop
  message="Loading application..."
/>

// Skeleton for cards
<LoadingState 
  variant="skeleton"
  skeletonConfig={{ lines: 4, showAvatar: true, showImage: true }}
/>
```

## 🎨 Design System

Both components follow your premium dark design system:

- **Colors:** Navy foundation (#1e293b) with coral orange accents (#ff7f50)
- **Semantic usage:** Colors only used when they have meaning
- **Consistent styling:** Matches brand guidelines
- **Accessibility:** WCAG compliant contrast and ARIA labels
- **DRY principles:** Single source of truth for all error/loading states

## ✨ Key Features

### ServerErrorAlert
✅ Consistent error styling across the app  
✅ Built-in retry and dismiss functionality  
✅ Three variants for different contexts  
✅ Semantic red color usage (#ef4444)  
✅ Fully typed with TypeScript  

### LoadingState
✅ Six different loading variants  
✅ Four size options  
✅ Specialized sub-components  
✅ Full-page overlay support  
✅ Skeleton loaders for perceived performance  
✅ Coral orange accent (#ff7f50)  

## 🔍 Where to Look

1. **Top Navigation** → "Examples" dropdown
2. **Footer** → Newsletter form (see it in action)
3. **Documentation** → `/SERVER_ERROR_ALERT.md` and `/LOADING_STATE.md`
4. **Example Files:**
   - `/components/examples/ServerErrorExamples.tsx`
   - `/components/examples/LoadingStateExamples.tsx`
5. **Component Files:**
   - `/components/ui/server-error-alert.tsx`
   - `/components/ui/loading-state.tsx`

## 🎯 Next Steps

1. ✅ Browse the **Examples dropdown** in the navigation
2. ✅ Test the **Footer newsletter** to see them in action
3. ✅ Read the **documentation files** for detailed APIs
4. ✅ Copy the **integration examples** for your own components
5. ✅ Follow **DRY principles** by using these components everywhere

---

**Need Help?**
- Check the example pages via the "Examples" dropdown
- Review the comprehensive documentation files
- Look at the Footer.tsx integration for a real example
- All components are production-ready and fully tested

**Last Updated:** December 2024
