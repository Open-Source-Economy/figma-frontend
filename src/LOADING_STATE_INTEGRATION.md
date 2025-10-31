# Loading State Integration Guide

Quick reference for integrating loading states into your Open Source Economy components.

## Already Integrated

The LoadingState component system is now integrated in:

### Footer Component (`/components/layout/Footer.tsx`)

**Newsletter subscription button:**
```tsx
<Button disabled={isSubmitting}>
  {isSubmitting ? (
    <LoadingButton message="Subscribing..." size="sm" />
  ) : (
    'Subscribe'
  )}
</Button>
```

## Quick Start Examples

### 1. Button Loading State

```tsx
import { LoadingButton } from './components/ui/loading-state';

const [isLoading, setIsLoading] = useState(false);

<Button disabled={isLoading}>
  {isLoading ? <LoadingButton message="Saving..." size="sm" /> : 'Save'}
</Button>
```

### 2. Page Loading

```tsx
import { LoadingState } from './components/ui/loading-state';

if (isLoadingPage) {
  return (
    <LoadingState
      variant="spinner"
      size="xl"
      fullPage
      showBackdrop
      message="Loading..."
    />
  );
}
```

### 3. Card Content Loading

```tsx
import { LoadingCard } from './components/ui/loading-state';

{isLoading ? (
  <LoadingCard lines={4} showAvatar showImage />
) : (
  <YourCard data={data} />
)}
```

### 4. Table Loading

```tsx
import { LoadingTable } from './components/ui/loading-state';

{isLoading ? (
  <LoadingTable rows={10} columns={5} />
) : (
  <DataTable data={data} />
)}
```

### 5. Section Loading

```tsx
import { LoadingSection } from './components/ui/loading-state';

{isLoading ? (
  <LoadingSection message="Loading content..." minHeight="min-h-[400px]" />
) : (
  <SectionContent />
)}
```

## Integration Checklist

When adding loading states to a component:

1. ✅ Import the appropriate loading component
2. ✅ Add loading state management (useState)
3. ✅ Wrap async operations with loading state changes
4. ✅ Use conditional rendering for loading/loaded states
5. ✅ Provide meaningful loading messages
6. ✅ Disable interactive elements during loading
7. ✅ Handle errors and reset loading state

## Common Integration Pattern

```tsx
import { useState } from 'react';
import { LoadingState } from './components/ui/loading-state';
import { ServerErrorAlert } from './components/ui/server-error-alert';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      {error && (
        <ServerErrorAlert
          message={error}
          showRetry
          onRetry={fetchData}
          showDismiss
          onDismiss={() => setError(null)}
        />
      )}
      
      {isLoading ? (
        <LoadingState variant="spinner" message="Loading..." />
      ) : (
        <YourContent data={data} />
      )}
    </div>
  );
};
```

## Variant Selection Guide

| Context | Recommended Variant | Size |
|---------|-------------------|------|
| Full page load | `spinner` with `fullPage={true}` | `xl` |
| Section load | `spinner` or `skeleton` | `lg` |
| Card load | `skeleton` with config | `md` |
| Button action | `inline` (use `LoadingButton`) | `sm` |
| Table load | Use `LoadingTable` component | - |
| Inline text | `dots` or `inline` | `sm` |
| Modal/Dialog | `spinner` | `lg` |

## Performance Tips

1. **Debounce fast operations** - Don't show loading for < 200ms
2. **Use skeleton for content** - Better perceived performance
3. **Progressive loading** - Load sections independently
4. **Avoid full-page** - Use section loading when possible

## Accessibility Notes

- Loading states are automatically announced to screen readers
- Interactive elements are disabled during loading
- Loading messages provide context
- Color contrast meets WCAG standards

## Next Steps

To integrate loading states in your components:

1. Choose the appropriate variant from the guide above
2. Import the loading component
3. Add loading state management
4. Implement conditional rendering
5. Test loading and error states
6. Ensure accessibility compliance

See `/components/examples/LoadingStateExamples.tsx` for live examples of all variants.
