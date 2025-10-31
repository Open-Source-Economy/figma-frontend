# Loading State Component System

A comprehensive, reusable loading indicator system for displaying loading states consistently across the Open Source Economy application.

## Overview

The `LoadingState` component provides a standardized way to display loading indicators throughout the application. It includes multiple variants for different contexts, from simple spinners to skeleton loaders, all following the premium dark design system.

## Location

**Component:** `/components/ui/loading-state.tsx`
**Examples:** `/components/examples/LoadingStateExamples.tsx`

## Features

- ✅ **Six variants** - Spinner, Dots, Pulse, Inline, Skeleton, and Overlay
- ✅ **Four sizes** - Small, Medium, Large, and Extra Large
- ✅ **Specialized components** - LoadingCard, LoadingButton, LoadingTable, LoadingSection
- ✅ **Full page overlay** - Optional backdrop with blur
- ✅ **Flexible configuration** - Customizable messages, sizes, and layouts
- ✅ **Premium dark theme** - Consistent with brand colors (navy with coral accents)
- ✅ **Fully typed** - Complete TypeScript support
- ✅ **Accessible** - Semantic HTML and ARIA labels

## Main Component

### LoadingState

The primary loading indicator component with multiple variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `"Loading..."` | Text message to display |
| `variant` | `'spinner' \| 'skeleton' \| 'overlay' \| 'inline' \| 'dots' \| 'pulse'` | `'spinner'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the indicator |
| `className` | `string` | `""` | Additional CSS classes |
| `fullPage` | `boolean` | `false` | Render as full-page overlay |
| `spinnerIcon` | `React.ReactNode` | `undefined` | Custom spinner icon |
| `showBackdrop` | `boolean` | `false` | Show backdrop blur effect |
| `skeletonConfig` | `object` | See below | Skeleton variant configuration |

#### Skeleton Config

```typescript
skeletonConfig?: {
  lines?: number;        // Number of skeleton lines (default: 3)
  showAvatar?: boolean;  // Show avatar placeholder (default: false)
  showImage?: boolean;   // Show image placeholder (default: false)
}
```

## Variants

### 1. Spinner Variant

Classic rotating spinner for general loading states.

```tsx
<LoadingState 
  variant="spinner" 
  size="md"
  message="Loading data..." 
/>
```

**When to use:**
- API requests
- Page transitions
- Data fetching
- General loading states

### 2. Dots Variant

Animated bouncing dots for subtle indication.

```tsx
<LoadingState 
  variant="dots" 
  size="sm"
  message="Processing..." 
/>
```

**When to use:**
- Inline loading in text
- Space-constrained areas
- Subtle background operations
- Status indicators

### 3. Pulse Variant

Gentle pulsing circle for minimal design.

```tsx
<LoadingState 
  variant="pulse" 
  size="md"
  message="Please wait..." 
/>
```

**When to use:**
- Elegant, minimal loading
- Card loading states
- Non-intrusive indicators
- Premium contexts

### 4. Inline Variant

Compact spinner for buttons and inline contexts.

```tsx
<LoadingState 
  variant="inline" 
  size="sm"
  message="Saving..." 
/>
```

**When to use:**
- Inside buttons
- Inline with text
- Navigation loading
- Action feedback

### 5. Skeleton Variant

Content placeholders matching expected layout.

```tsx
<LoadingState 
  variant="skeleton"
  size="md"
  skeletonConfig={{ 
    lines: 4, 
    showAvatar: true,
    showImage: true 
  }}
/>
```

**When to use:**
- Content loading
- Card placeholders
- List items
- Profile previews

### 6. Overlay Variant

Loading overlay for sections or components.

```tsx
<LoadingState 
  variant="overlay"
  size="lg"
  showBackdrop
  message="Loading content..." 
/>
```

**When to use:**
- Section loading
- Modal content
- Tab panels
- Component updates

## Specialized Components

### LoadingCard

Pre-styled loading card for card-based layouts.

```tsx
<LoadingCard 
  lines={3}
  showAvatar
  showImage
  className="w-full"
/>
```

**Props:**
- `lines` - Number of skeleton lines
- `showAvatar` - Show avatar placeholder
- `showImage` - Show image placeholder
- `className` - Additional classes

### LoadingButton

Loading indicator optimized for buttons.

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <LoadingButton message="Saving..." size="sm" />
  ) : (
    'Save Changes'
  )}
</Button>
```

**Props:**
- `message` - Optional loading message
- `size` - Size variant ('sm', 'md', 'lg')

### LoadingTable

Skeleton loader for table contexts.

```tsx
<LoadingTable 
  rows={10}
  columns={5}
  className="w-full"
/>
```

**Props:**
- `rows` - Number of skeleton rows
- `columns` - Number of skeleton columns
- `className` - Additional classes

### LoadingSection

Full section loading with centered spinner.

```tsx
<LoadingSection 
  message="Loading dashboard..."
  minHeight="min-h-[500px]"
  className="w-full"
/>
```

**Props:**
- `message` - Loading message
- `minHeight` - Minimum height class
- `className` - Additional classes

## Common Patterns

### 1. Page Loading State

```tsx
const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);
  
  if (isLoading) {
    return (
      <LoadingState
        variant="spinner"
        size="xl"
        fullPage
        showBackdrop
        message="Loading page..."
      />
    );
  }
  
  return <YourPageContent />;
};
```

### 2. Button Loading State

```tsx
const SubmitButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Button onClick={handleSubmit} disabled={isSubmitting}>
      {isSubmitting ? (
        <LoadingButton message="Submitting..." size="sm" />
      ) : (
        'Submit Form'
      )}
    </Button>
  );
};
```

### 3. Card Content Loading

```tsx
const DataCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);
  
  return (
    <div className="bg-brand-card-blue rounded-xl p-6">
      {isLoading ? (
        <LoadingState
          variant="skeleton"
          skeletonConfig={{ lines: 4, showAvatar: true }}
        />
      ) : (
        <CardContent data={data} />
      )}
    </div>
  );
};
```

### 4. Table Loading State

```tsx
const DataTable = () => {
  const { data, isLoading } = useQuery('tableData');
  
  if (isLoading) {
    return <LoadingTable rows={10} columns={6} />;
  }
  
  return <Table data={data} />;
};
```

### 5. Section Loading

```tsx
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <section className="py-12">
      {isLoading ? (
        <LoadingSection 
          message="Loading dashboard data..."
          minHeight="min-h-[600px]"
        />
      ) : (
        <DashboardContent />
      )}
    </section>
  );
};
```

### 6. Inline Text Loading

```tsx
const StatusText = ({ isRefreshing }) => (
  <p className="text-brand-neutral-700">
    Data last updated 5 minutes ago
    {isRefreshing && (
      <LoadingState variant="inline" size="sm" message="" />
    )}
  </p>
);
```

### 7. Modal/Dialog Loading

```tsx
const DataModal = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Dialog>
      <DialogContent>
        {isLoading ? (
          <div className="py-12">
            <LoadingState
              variant="spinner"
              size="lg"
              message="Loading details..."
            />
          </div>
        ) : (
          <ModalContent />
        )}
      </DialogContent>
    </Dialog>
  );
};
```

### 8. Card Grid Loading

```tsx
const ProjectGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LoadingCard lines={4} showImage />
        <LoadingCard lines={4} showImage />
        <LoadingCard lines={4} showImage />
      </div>
    );
  }
  
  return <ProjectCards />;
};
```

### 9. Form Submission

```tsx
const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = async (data) => {
    setStatus('submitting');
    try {
      await submitContact(data);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <LoadingButton message="Sending..." size="sm" />
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};
```

### 10. Progressive Content Loading

```tsx
const ProfilePage = () => {
  const [loadingStages, setLoadingStages] = useState({
    profile: true,
    projects: true,
    activity: true
  });
  
  return (
    <div className="space-y-6">
      {loadingStages.profile ? (
        <LoadingCard lines={3} showAvatar />
      ) : (
        <ProfileCard />
      )}
      
      {loadingStages.projects ? (
        <LoadingSection message="Loading projects..." />
      ) : (
        <ProjectsList />
      )}
      
      {loadingStages.activity ? (
        <LoadingTable rows={5} columns={3} />
      ) : (
        <ActivityFeed />
      )}
    </div>
  );
};
```

## Design Guidelines

### Colors

The loading components use semantic, brand-appropriate colors:

- **Spinner/Dots:** `brand-accent` (#ff7f50 - coral orange)
- **Skeleton:** `brand-neutral-300/30` (subtle gray with opacity)
- **Text:** `brand-neutral-600` (muted text color)
- **Background:** `brand-card-blue` (rich navy for cards)

### Sizes

Choose sizes based on context:

- **sm** - Inline text, small buttons, compact spaces
- **md** - Default, most common use case
- **lg** - Section headers, important loading states
- **xl** - Full page loading, hero sections

### Animation

All animations use:
- Smooth, professional timing
- Staggered delays for skeleton lines
- Consistent spin/bounce speeds
- Subtle, non-distracting motion

## Accessibility

- Uses semantic HTML elements
- Includes descriptive text when needed
- Maintains proper color contrast
- Keyboard accessible (no interactive elements)
- Works with screen readers

## Best Practices

### DO ✅

- Use skeleton loaders for content-heavy sections
- Show full-page loading for critical operations
- Provide helpful loading messages
- Match skeleton structure to actual content
- Use inline loading for button actions
- Consider using dots for subtle indication

### DON'T ❌

- Don't stack multiple loading indicators
- Don't use loading states without user action trigger
- Don't block the entire UI for minor operations
- Don't use overly long loading messages
- Don't forget to clear loading state on error
- Don't use spinner variant for content placeholders

## Size Reference

| Size | Spinner | Text | Best For |
|------|---------|------|----------|
| sm | 16px | 14px | Buttons, inline text, icons |
| md | 24px | 16px | Cards, sections, default |
| lg | 32px | 18px | Hero sections, important actions |
| xl | 48px | 20px | Full page, critical operations |

## Migration Guide

### From Generic Spinners

**Before:**
```tsx
<div className="flex items-center justify-center py-8">
  <Loader2 className="w-6 h-6 animate-spin text-brand-accent" />
  <span className="ml-2 text-brand-neutral-600">Loading...</span>
</div>
```

**After:**
```tsx
<LoadingState variant="spinner" message="Loading..." />
```

### From Custom Skeletons

**Before:**
```tsx
<div className="space-y-3">
  <div className="h-4 bg-gray-700 rounded animate-pulse" />
  <div className="h-4 bg-gray-700 rounded animate-pulse" />
  <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />
</div>
```

**After:**
```tsx
<LoadingState variant="skeleton" skeletonConfig={{ lines: 3 }} />
```

## Performance Tips

1. **Lazy Load Components** - Use loading states while components load
2. **Debounce Loading** - Avoid flickering for fast operations
3. **Progressive Loading** - Load sections independently
4. **Skeleton First** - Use skeleton loaders for perceived performance
5. **Minimal Animation** - Keep animations lightweight

## Related Components

- **ServerErrorAlert** - Error state complement
- **Button** - For loading button states
- **Card** - For card-based loading
- **Table** - For table loading states

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS animations fully supported
- Graceful degradation for older browsers

## Future Enhancements

Potential additions:

- Progress bar variant
- Percentage-based loading
- Custom animation speeds
- Theme variants
- Loading analytics
- Auto-timeout warnings

---

**Last Updated:** December 2024  
**Component Version:** 1.0.0  
**Design System:** Premium Dark Theme with Coral Accents
