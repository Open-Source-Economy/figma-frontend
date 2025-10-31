# Brand Modal System

## Overview

The Brand Modal System provides reusable, scrollable modal components that follow the **Premium Dark Blue Card System** branding. These components ensure consistent styling and behavior across all modals in the application.

## Components

### 1. BrandModal

The main modal wrapper component with built-in scrollable content area.

**Features:**
- Premium dark blue styling matching the brand card system
- Automatic content scrolling when content exceeds viewport (max-height: 85vh)
- Fixed header and footer for better UX
- Multiple size options
- Consistent styling across all modals

**Usage:**

```tsx
import { BrandModal } from './components/ui/brand-modal';
import { Button } from './components/ui/button';

<BrandModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  description="Optional description text"
  size="3xl" // sm, md, lg, xl, 2xl, 3xl
  footer={
    <>
      <Button variant="outline" onClick={onClose}>Cancel</Button>
      <Button onClick={onSave}>Save</Button>
    </>
  }
>
  {/* Modal content - automatically scrolls if too large */}
  <div className="space-y-6">
    Content goes here...
  </div>
</BrandModal>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | Required | Controls modal visibility |
| `onClose` | `() => void` | Required | Callback when modal is closed |
| `title` | `React.ReactNode` | Required | Modal title |
| `description` | `React.ReactNode` | Optional | Modal description/subtitle |
| `children` | `React.ReactNode` | Required | Modal content |
| `footer` | `React.ReactNode` | Optional | Footer content (buttons, etc) |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'lg'` | Modal width |
| `className` | `string` | Optional | Additional CSS classes for the modal |
| `headerClassName` | `string` | Optional | Additional CSS classes for header |
| `contentClassName` | `string` | Optional | Additional CSS classes for content area |
| `footerClassName` | `string` | Optional | Additional CSS classes for footer |

**Size Reference:**
- `sm`: ~384px max width
- `md`: ~448px max width
- `lg`: ~512px max width (default)
- `xl`: ~576px max width
- `2xl`: ~672px max width
- `3xl`: ~768px max width

---

### 2. BrandModalSection

Section wrapper for organizing modal content with icon headers.

**Features:**
- Consistent section headers with icons
- Premium card background styling
- Color-coded icon backgrounds
- Clean typography hierarchy

**Usage:**

```tsx
import { BrandModalSection } from './components/ui/brand-modal';
import { Github, User, ShieldCheck } from 'lucide-react';

<BrandModalSection
  icon={<Github />}
  title="Project Information"
  description="Identify the project and provide a link"
  iconColor="accent" // accent, highlight, success, warning, error
>
  {/* Section content */}
  <div className="space-y-4">
    Form fields or other content...
  </div>
</BrandModalSection>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | Optional | Icon element (from lucide-react) |
| `title` | `React.ReactNode` | Required | Section title |
| `description` | `React.ReactNode` | Optional | Section description |
| `iconColor` | `'accent' \| 'highlight' \| 'success' \| 'warning' \| 'error'` | `'accent'` | Icon background color theme |
| `children` | `React.ReactNode` | Required | Section content |
| `className` | `string` | Optional | Additional CSS classes |

**Icon Colors:**
- `accent`: Coral orange (primary brand accent)
- `highlight`: Goldenrod (secondary accent)
- `success`: Emerald green
- `warning`: Amber
- `error`: Red

---

### 3. BrandModalAlert

Alert/info box component for important notices within modals.

**Features:**
- Color-coded alert types
- Icon support
- Semantic styling
- Clean typography

**Usage:**

```tsx
import { BrandModalAlert } from './components/ui/brand-modal';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

<BrandModalAlert
  type="success" // success, warning, error, info
  icon={<AlertCircle />}
  title="Verification Process"
>
  <p>We'll verify your project contributions through your GitHub profile.</p>
  <ul className="text-xs space-y-1 ml-4 list-disc mt-2">
    <li>Verification typically takes 24-48 hours</li>
    <li>You'll receive an email notification once verified</li>
  </ul>
</BrandModalAlert>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | Required | Alert type/severity |
| `icon` | `React.ReactNode` | Optional | Icon element |
| `title` | `React.ReactNode` | Optional | Alert title |
| `children` | `React.ReactNode` | Required | Alert content |
| `className` | `string` | Optional | Additional CSS classes |

**Alert Types:**
- `success`: Green-tinted background for success messages
- `warning`: Amber-tinted background for warnings
- `error`: Red-tinted background for errors
- `info`: Accent-tinted background for informational messages

---

## Complete Example

Here's a complete example showing all components working together:

```tsx
import React from 'react';
import { BrandModal, BrandModalSection, BrandModalAlert } from './components/ui/brand-modal';
import { Button } from './components/ui/button';
import { FormField } from './components/forms/FormField';
import { Github, User, ShieldCheck, AlertCircle } from 'lucide-react';

export const ProjectDialog = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BrandModal
      open={open}
      onClose={() => setOpen(false)}
      title="Add Open Source Project"
      description="Share details about an open source project where you actively contribute."
      size="3xl"
      footer={
        <>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Add Project
          </Button>
        </>
      }
    >
      <div className="space-y-8 py-2 pb-6">
        {/* Section 1: Project Information */}
        <BrandModalSection
          icon={<Github />}
          title="Project Information"
          description="Identify the project and provide a link"
          iconColor="accent"
        >
          <div className="space-y-4">
            <FormField label="GitHub Repository URL" required>
              <input type="url" className="..." />
            </FormField>
          </div>
        </BrandModalSection>

        {/* Section 2: Your Role */}
        <BrandModalSection
          icon={<User />}
          title="Your Contribution"
          description="Tell us about your role and permissions"
          iconColor="highlight"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Form fields */}
          </div>
        </BrandModalSection>

        {/* Section 3: Verification Notice */}
        <BrandModalSection
          icon={<ShieldCheck />}
          title="Verification"
          description="How we'll confirm your contributions"
          iconColor="success"
        >
          <BrandModalAlert
            type="success"
            icon={<AlertCircle />}
            title="Verification Process"
          >
            <p>We'll verify your contributions through your GitHub profile.</p>
          </BrandModalAlert>
        </BrandModalSection>
      </div>
    </BrandModal>
  );
};
```

---

## Scrolling Behavior

The BrandModal automatically handles scrolling when content is too large:

**Fixed Elements:**
- Header (title + description)
- Footer (action buttons)

**Scrollable Area:**
- Main content area
- Maximum height: 85vh (85% of viewport height)
- Automatic scrollbar when content exceeds height

**Benefits:**
- Header and footer always visible
- Clean scroll behavior
- Mobile-friendly
- Prevents modal from growing too large

---

## Design System Integration

All components follow the **Premium Dark Blue Card System**:

**Colors Used:**
- Background: `brand-secondary-dark` (#020617)
- Card backgrounds: `brand-card-blue` (#1a2942)
- Borders: `brand-neutral-300/10`
- Text: `brand-neutral-900`, `brand-neutral-700`, `brand-neutral-600`
- Icons: Brand accent colors (accent, highlight, success, etc.)

**Typography:**
- Uses the global typography system
- Consistent heading hierarchy
- Proper spacing and line-heights

**Spacing:**
- Consistent padding and margins
- 8px grid system
- Proper section separation

---

## Migration Guide

To convert existing modals to use BrandModal:

### Before:
```tsx
<Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
  <DialogContent className="sm:max-w-3xl bg-brand-secondary-dark border border-brand-neutral-300/10">
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    
    <div className="space-y-6">
      Content
    </div>
    
    <DialogFooter>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSave}>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### After:
```tsx
<BrandModal
  open={open}
  onClose={onClose}
  title="Title"
  description="Description"
  size="3xl"
  footer={
    <>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSave}>Save</Button>
    </>
  }
>
  <div className="space-y-6">
    Content
  </div>
</BrandModal>
```

---

## Best Practices

1. **Always provide a title** - helps with accessibility and clarity
2. **Use descriptions for context** - explain what the modal is for
3. **Choose appropriate sizes** - don't make modals unnecessarily large
4. **Use BrandModalSection for organization** - group related content
5. **Use BrandModalAlert for important notices** - draw attention to key info
6. **Keep footer actions simple** - typically just Cancel + Primary action
7. **Use semantic icon colors** - match icon color to section purpose

---

## Related Components

- `/components/ui/dialog.tsx` - Base Radix UI dialog (wrapped by BrandModal)
- `/components/ui/button.tsx` - Button component for footer actions
- `/components/forms/FormField.tsx` - Form fields for modal content
- `/components/forms/SelectField.tsx` - Select fields for modal content

---

## File Location

`/components/ui/brand-modal.tsx`

All three components are exported from this single file for easy importing.
