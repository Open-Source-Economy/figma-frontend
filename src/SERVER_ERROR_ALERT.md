# Server Error Alert Component

A comprehensive, reusable error alert component for displaying server errors consistently across the Open Source Economy application.

## Overview

The `ServerErrorAlert` component provides a standardized way to display error messages from server requests, API calls, form submissions, and other error scenarios. It follows the brand's premium dark design system with semantic red error colors.

## Location

**Component:** `/components/ui/server-error-alert.tsx`
**Examples:** `/components/examples/ServerErrorExamples.tsx`

## Features

- ✅ **Three variants** - Default, Compact, and Detailed
- ✅ **ApiError integration** - Structured error handling with HTTP status codes
- ✅ **Environment-aware display** - Automatic error detail level based on environment
- ✅ **Semantic error colors** - Uses brand-error colors (#ef4444) appropriately
- ✅ **Optional actions** - Retry and dismiss functionality
- ✅ **Flexible messaging** - Custom titles and messages
- ✅ **Backwards compatible** - Supports both ApiError objects and string messages
- ✅ **Consistent styling** - Follows the premium dark design system
- ✅ **Fully typed** - Complete TypeScript support
- ✅ **Accessible** - ARIA labels and semantic HTML

## Environment-Based Error Display

The component automatically adjusts error detail level based on your runtime environment for security and debugging efficiency:

### Production Mode
- **What shows**: Generic error message only
- **Why**: Protects sensitive information from end users
- **Example**: "An unexpected error occurred. Please try again later."

### Staging Mode  
- **What shows**: HTTP status codes, status text, and detailed error messages
- **Why**: Helps QA teams identify issues without exposing stack traces
- **Example**: "Error 500 - Internal Server Error: Failed to connect to database"

### Development Mode
- **What shows**: Full error details including status codes, messages, AND stack traces
- **Why**: Developers get all information needed for debugging
- **Example**: Shows everything plus complete stack trace in a code block

The environment is detected automatically from:
1. `NODE_ENV` and `REACT_APP_ENV` environment variables
2. Hostname patterns (production domain, staging subdomain, localhost)
3. Development indicators

No configuration needed - it just works!

## Usage

### Basic Import

```tsx
import { ServerErrorAlert } from './components/ui/server-error-alert';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | "An unexpected error occurred..." | Error message to display |
| `title` | `string` | "Error" | Error title (detailed variant only) |
| `showRetry` | `boolean` | `false` | Show retry button |
| `retryText` | `string` | "Try Again" | Text for retry button |
| `onRetry` | `() => void` | `undefined` | Callback when retry is clicked |
| `showDismiss` | `boolean` | `false` | Show dismiss button |
| `onDismiss` | `() => void` | `undefined` | Callback when dismiss is clicked |
| `className` | `string` | `""` | Additional CSS classes |
| `variant` | `'default' \| 'compact' \| 'detailed'` | `'default'` | Visual variant |

## Variants

### Default Variant

Standard error display for most use cases.

```tsx
<ServerErrorAlert 
  message="Failed to submit form. Please try again."
  showRetry
  onRetry={() => handleRetry()}
/>
```

**When to use:**
- General error messages
- Form submission errors
- API request failures
- Standard error scenarios

### Compact Variant

Minimal inline error for tight spaces.

```tsx
<ServerErrorAlert 
  variant="compact"
  message="Invalid email address format."
  showDismiss
  onDismiss={() => clearError()}
/>
```

**When to use:**
- Inline form validation errors
- Tight UI spaces
- Simple error messages
- Non-critical errors

### Detailed Variant

Premium error display with enhanced styling.

```tsx
<ServerErrorAlert 
  variant="detailed"
  title="Connection Error"
  message="We couldn't reach the server. This might be due to network issues."
  showRetry
  onRetry={() => retryConnection()}
  showDismiss
  onDismiss={() => closeError()}
/>
```

**When to use:**
- Critical errors
- Payment failures
- Authentication errors
- Complex error scenarios requiring explanation

## Common Patterns

### 1. API Request Error Handling

```tsx
const [error, setError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(false);

const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    // Process data...
  } catch (err) {
    setError(err.message || 'An error occurred');
  } finally {
    setIsLoading(false);
  }
};

// In render:
{error && (
  <ServerErrorAlert 
    message={error}
    showRetry
    onRetry={fetchData}
    showDismiss
    onDismiss={() => setError(null)}
  />
)}
```

### 2. Form Submission Error

```tsx
const handleSubmit = async (formData: FormData) => {
  try {
    await submitForm(formData);
    // Success handling...
  } catch (err) {
    return (
      <ServerErrorAlert 
        variant="compact"
        message="Failed to submit form. Please check your entries and try again."
      />
    );
  }
};
```

### 3. Authentication Error

```tsx
<ServerErrorAlert 
  variant="detailed"
  title="Authentication Required"
  message="Your session has expired. Please log in again to continue."
  showRetry
  retryText="Go to Login"
  onRetry={() => navigate('/login')}
/>
```

### 4. Network Timeout

```tsx
<ServerErrorAlert 
  variant="detailed"
  title="Request Timeout"
  message="The server took too long to respond. Please check your connection and try again."
  showRetry
  retryText="Retry Request"
  onRetry={retryRequest}
  showDismiss
  onDismiss={closeError}
/>
```

### 5. Payment Error

```tsx
<ServerErrorAlert 
  variant="detailed"
  title="Payment Processing Error"
  message="There was an issue processing your payment. No charges were made to your account."
  showRetry
  retryText="Try Different Method"
  onRetry={changePaymentMethod}
  showDismiss
  onDismiss={closeCheckout}
/>
```

## State Management Examples

### With useState

```tsx
const [errorState, setErrorState] = useState<{
  message: string;
  visible: boolean;
} | null>(null);

const handleError = (message: string) => {
  setErrorState({ message, visible: true });
};

const clearError = () => {
  setErrorState(null);
};

// In render:
{errorState?.visible && (
  <ServerErrorAlert 
    message={errorState.message}
    showDismiss
    onDismiss={clearError}
  />
)}
```

### With React Hook Form

```tsx
import { useForm } from 'react-hook-form@7.55.0';

const { handleSubmit, setError, clearErrors } = useForm();

const onSubmit = async (data) => {
  try {
    await submitData(data);
  } catch (err) {
    setError('root.serverError', {
      message: err.message
    });
  }
};

// In render:
{errors.root?.serverError && (
  <ServerErrorAlert 
    message={errors.root.serverError.message}
    showRetry
    onRetry={handleSubmit(onSubmit)}
    showDismiss
    onDismiss={() => clearErrors('root.serverError')}
  />
)}
```

## Styling Guidelines

### Semantic Color Usage

The component uses **brand-error** colors (`#ef4444`) semantically - only for actual error states. This follows the design system principle of using color with meaning.

### Premium Dark Theme

The component integrates seamlessly with the premium dark design system:
- Dark blue backgrounds with red accents
- Subtle gradients in detailed variant
- Consistent with other alert components

### Responsive Design

All variants are fully responsive and work well on mobile and desktop devices.

## Accessibility

- Uses semantic HTML (`<Alert>` component)
- Includes ARIA labels for dismiss buttons
- Proper color contrast for readability
- Keyboard accessible (dismiss and retry buttons)

## Examples in Production

The component is already integrated in:

1. **Footer Newsletter Subscription** (`/components/layout/Footer.tsx`)
   - Uses compact variant with dismiss functionality
   - Shows server validation errors

2. **Example Showcase** (`/components/examples/ServerErrorExamples.tsx`)
   - Comprehensive examples of all variants
   - Real-world use case demonstrations

## Best Practices

### DO ✅

- Use compact variant for inline validation errors
- Use detailed variant for critical errors that need explanation
- Provide retry functionality for recoverable errors
- Clear error messages that explain what went wrong
- Include actionable next steps in detailed variant

### DON'T ❌

- Don't use for non-error states (use appropriate components)
- Don't stack multiple error alerts (consolidate messages)
- Don't use error colors for warnings or info messages
- Don't make error messages too technical (user-friendly language)
- Don't forget to clear errors when user takes action

## Migration Guide

### Replacing Inline Alert Components

**Before:**
```tsx
<Alert className="border-brand-error bg-brand-error/10">
  <AlertCircle className="h-4 w-4 text-brand-error" />
  <AlertDescription className="text-brand-error">
    {errorMessage}
  </AlertDescription>
</Alert>
```

**After:**
```tsx
<ServerErrorAlert message={errorMessage} />
```

### Benefits of Migration

- Consistent error styling across the app
- Built-in retry and dismiss functionality
- Less code duplication
- Easier maintenance
- Better user experience

## Related Components

- **Alert** (`/components/ui/alert.tsx`) - Base alert component
- **Form components** (`/components/forms/*`) - Form-specific error handling
- **Validation components** - Input validation feedback

## Future Enhancements

Potential future additions:

- Auto-dismiss timer option
- Error logging integration
- Custom icon support
- Animation variants
- Toast notification variant
- Error boundary integration

## Support

For questions or issues with the ServerErrorAlert component:

1. Check the examples in `/components/examples/ServerErrorExamples.tsx`
2. Review this documentation
3. Check existing usage in Footer component
4. Follow DRY principles and design system guidelines

---

**Last Updated:** December 2024  
**Component Version:** 1.0.0  
**Design System:** Premium Dark Theme with Semantic Colors
