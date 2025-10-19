# DRY Components Guide

This guide documents the reusable components created to follow DRY (Don't Repeat Yourself) principles throughout the application.

## Component Overview

### 1. SectionBadge (`/components/ui/section-badge.tsx`)

**Purpose:** Displays a pill-shaped badge with an icon for section labels.

**Usage:**
```tsx
<SectionBadge 
  icon={Code2} 
  text="FOR OPEN SOURCE MAINTAINERS" 
  variant="success" 
  className="mb-6 uppercase tracking-wider" 
/>
```

**Props:**
- `icon`: LucideIcon - The icon component to display
- `text`: string - The badge text
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' (default: 'success')
- `className`: string (optional) - Additional CSS classes

**Variants:**
- `success`: Green theme (brand-success)
- `accent`: Purple theme (brand-accent)
- `highlight`: Gold theme (brand-highlight)
- `warning`: Amber theme (brand-warning)
- `primary`: Sienna theme (brand-primary)

---

### 2. IconBox (`/components/ui/icon-box.tsx`)

**Purpose:** Displays an icon in a rounded, colored container with consistent sizing.

**Usage:**
```tsx
<IconBox 
  icon={Code2} 
  variant="accent" 
  size="lg" 
/>
```

**Props:**
- `icon`: LucideIcon - The icon component to display
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' | 'neutral' (default: 'accent')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (optional) - Additional CSS classes

**Sizes:**
- `sm`: 8x8 (32px) with 4x4 icon
- `md`: 10x10 (40px) with 5x5 icon
- `lg`: 12x12 (48px) with 6x6 icon

---

### 3. PercentageCard (`/components/ui/percentage-card.tsx`)

**Purpose:** Displays payment allocation or percentage-based information in a card format.

**Usage:**
```tsx
<PercentageCard
  icon={DollarSign}
  percentage="40%"
  title="Direct to You"
  description="Your primary income"
  variant="accent"
/>
```

**Props:**
- `icon`: LucideIcon - The icon for the card
- `percentage`: string - The percentage value to display
- `title`: string - The card title
- `description`: string - The card description
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' | 'neutral' (default: 'accent')
- `className`: string (optional) - Additional CSS classes

**Features:**
- Gradient card background (brand-card-blue)
- Hover state with border color transition
- Centered layout with icon, percentage, title, and description

---

### 4. InfoCard (`/components/ui/info-card.tsx`)

**Purpose:** Displays informational content with an icon header in a card format.

**Usage:**
```tsx
<InfoCard
  icon={TrendingUp}
  title="You Fund Others, Others Fund You"
  variant="success"
>
  <p>When you earn, 50% flows back to the ecosystem...</p>
  <p>But when others earn, their payments flow back to you.</p>
</InfoCard>
```

**Props:**
- `icon`: LucideIcon - The icon for the card header
- `title`: string - The card title
- `children`: ReactNode - The card content
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' (default: 'accent')
- `className`: string (optional) - Additional CSS classes

**Features:**
- Icon header with title
- Flexible content area using children
- Gradient card background
- Hover border transition

---

### 5. ValueCard (`/components/ui/value-card.tsx`)

**Purpose:** Displays value propositions or benefits with icon, title, description, and badge.

**Usage:**
```tsx
<ValueCard
  icon={Shield}
  title="100% Non-Profit"
  description="All earnings are reinvested in open-source..."
  badge="Swiss registered non-profit"
  variant="success"
/>
```

**Props:**
- `icon`: LucideIcon - The icon for the card
- `title`: string - The card title
- `description`: string - The main description text
- `badge`: string - The badge text (displayed with checkmark)
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' (default: 'accent')
- `className`: string (optional) - Additional CSS classes

**Features:**
- Large icon container (16x16, 64px)
- Hover scale effect
- Shadow effect on hover
- Checkmark badge at bottom

---

### 6. FeatureListItem (`/components/ui/feature-list-item.tsx`)

**Purpose:** Displays a feature or benefit in a list format with icon, title, and description.

**Usage:**
```tsx
<FeatureListItem
  icon={Layers}
  title="Choose Your Projects"
  description="Select which open source projects to offer services for"
  variant="accent"
/>
```

**Props:**
- `icon`: LucideIcon - The icon for the list item
- `title`: string - The feature title
- `description`: string | ReactNode - The feature description (can include JSX)
- `variant`: 'success' | 'accent' | 'highlight' | 'warning' | 'primary' (default: 'accent')
- `className`: string (optional) - Additional CSS classes

**Features:**
- Compact layout with left-aligned icon
- Supports ReactNode for description (allows inline styling)
- Consistent typography and spacing

---

## Color Variants

All components use consistent color variants based on the brand color system:

| Variant | Color Variable | Use Case |
|---------|---------------|----------|
| **success** | `brand-success` | Positive actions, green theme |
| **accent** | `brand-accent` | Primary accent, purple theme |
| **highlight** | `brand-highlight` | Secondary accent, gold theme |
| **warning** | `brand-warning` | Warnings, amber theme |
| **primary** | `brand-primary` | Primary brand, sienna theme |
| **neutral** | `brand-neutral-*` | Neutral elements |

---

## Tailwind Variables

All branding colors are defined as Tailwind CSS variables in `/styles/globals.css`:

```css
:root {
  /* Brand Colors */
  --brand-primary: #a0522d;           /* Sienna */
  --brand-accent: #ff7f50;            /* Coral Orange */
  --brand-highlight: #daa520;         /* Goldenrod */
  --brand-success: #10b981;           /* Emerald Green */
  --brand-warning: #fbbf24;           /* Amber */
  
  /* Card Colors */
  --brand-card-blue: #1a2942;         /* Rich dark blue */
  --brand-card-blue-light: #213654;
  --brand-card-blue-dark: #0f1829;
  
  /* Neutral Scale */
  --brand-neutral-50: #020617;        /* Ultra deep */
  --brand-neutral-950: #f8fafc;       /* Maximum contrast */
}
```

These are exposed as Tailwind classes:
- `bg-brand-primary`, `text-brand-primary`, `border-brand-primary`
- `bg-brand-accent`, `text-brand-accent`, `border-brand-accent`
- etc.

---

## Best Practices

### 1. Use Components for Repeated Patterns
Instead of copying HTML/CSS, use the appropriate component:
```tsx
// ❌ Don't repeat this pattern
<div className="inline-flex items-center gap-2 bg-brand-success/10 border border-brand-success/30 rounded-full px-4 py-2">
  <Icon className="h-4 w-4 text-brand-success" />
  <span className="text-brand-success text-sm">Text</span>
</div>

// ✅ Use the component
<SectionBadge icon={Icon} text="Text" variant="success" />
```

### 2. Use Tailwind Variables for Colors
```tsx
// ❌ Don't use inline styles or CSS custom properties directly
<div style={{ backgroundColor: '#8b5cf6' }}>...</div>

// ✅ Use Tailwind classes with brand variables
<div className="bg-brand-accent">...</div>
```

### 3. Consistent Variant Names
All components use the same variant names for consistency:
- `success`, `accent`, `highlight`, `warning`, `primary`, `neutral`

### 4. Extend, Don't Modify
Use `className` prop to add additional styles without modifying the component:
```tsx
<InfoCard 
  icon={Heart}
  title="Title"
  variant="success"
  className="mb-8"  // Additional styling
>
  Content
</InfoCard>
```

---

## Examples

### Building a Feature Section
```tsx
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <SectionBadge icon={Sparkles} text="FEATURES" variant="accent" className="mb-6" />
      <h2 className="text-brand-neutral-950 mb-4">Amazing Features</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard icon={Shield} title="Secure" variant="success">
        <p>Enterprise-grade security for your data.</p>
      </InfoCard>
      
      <InfoCard icon={Zap} title="Fast" variant="accent">
        <p>Lightning-fast performance guaranteed.</p>
      </InfoCard>
      
      <InfoCard icon={Heart} title="Reliable" variant="highlight">
        <p>99.9% uptime SLA for peace of mind.</p>
      </InfoCard>
    </div>
  </div>
</section>
```

### Building a Value Proposition Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ValueCard
    icon={Shield}
    title="100% Non-Profit"
    description="All earnings reinvested in open source."
    badge="Swiss registered"
    variant="success"
  />
  
  <ValueCard
    icon={Heart}
    title="Your Values"
    description="We respect free software principles."
    badge="Community-driven"
    variant="accent"
  />
  
  <ValueCard
    icon={Users}
    title="Community First"
    description="You stay in full control."
    badge="Independent"
    variant="highlight"
  />
</div>
```

---

## Migration Guide

To refactor existing code to use these components:

1. **Identify repeated patterns** in your JSX
2. **Choose the appropriate component** from this guide
3. **Extract the props** (icon, title, description, variant)
4. **Replace the pattern** with the component
5. **Test the visual output** to ensure consistency

---

## Component File Locations

All reusable UI components are located in `/components/ui/`:

- `/components/ui/section-badge.tsx`
- `/components/ui/icon-box.tsx`
- `/components/ui/percentage-card.tsx`
- `/components/ui/info-card.tsx`
- `/components/ui/value-card.tsx`
- `/components/ui/feature-list-item.tsx`

---

## Future Enhancements

Potential additions to the DRY component library:

1. **StatCard** - For displaying statistics with large numbers
2. **TestimonialCard** - Standardized testimonial layout
3. **PricingCard** - Pricing tier cards
4. **TimelineItem** - For roadmap/process timelines
5. **ComparisonTable** - Side-by-side feature comparisons

---

## Maintenance

When adding new UI patterns:

1. If a pattern appears 3+ times, create a reusable component
2. Follow the naming convention: `ComponentName.tsx`
3. Use TypeScript interfaces for props
4. Support all brand color variants
5. Add className prop for extensibility
6. Document the component in this guide

---

Last Updated: December 2024
