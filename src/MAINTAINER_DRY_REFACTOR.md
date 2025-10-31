# Maintainer Profile DRY Refactor

## Summary
Refactored maintainer-related pages to follow DRY (Don't Repeat Yourself) principles by extracting reusable UI components from `MaintainerProfilePage` and `OnboardingSuccessPage`.

## New Reusable Components

### 📁 `/components/maintainers/ui/`

#### 1. **QuickStats.tsx**
- **Purpose**: Displays a horizontal list of icon + text statistics
- **Used in**: Maintainer profiles for location, timezone, experience, contributions
- **Props**:
  - `stats`: Array of `{ icon: LucideIcon, label: string }`
  - `className`: Optional additional classes

**Usage Example**:
```tsx
<QuickStats
  stats={[
    { icon: MapPin, label: 'San Francisco, CA' },
    { icon: Clock, label: 'PST (UTC-8)' },
    { icon: Calendar, label: '10 years in open source' },
  ]}
/>
```

---

#### 2. **ContactLinks.tsx**
- **Purpose**: Displays contact and social media links for a maintainer
- **Used in**: Maintainer profile header
- **Props**:
  - `contact`: Object with `{ email, github, twitter?, linkedin? }`
  - `className`: Optional additional classes

**Features**:
- Primary CTA for email (accent background)
- Secondary style for social links
- Optional Twitter and LinkedIn

**Usage Example**:
```tsx
<ContactLinks
  contact={{
    email: 'maintainer@example.com',
    github: 'username',
    twitter: '@username',
    linkedin: 'username'
  }}
/>
```

---

#### 3. **CategoryFilters.tsx**
- **Purpose**: Filterable button group for service categories
- **Used in**: Maintainer profile services section
- **Props**:
  - `categories`: Array of `{ key: string, label: string, icon: LucideIcon }`
  - `selectedCategory`: Currently selected category key (null = all)
  - `onCategoryChange`: Callback function when category changes
  - `className`: Optional additional classes

**Features**:
- "All Services" button (always first)
- Icon + label buttons for each category
- Active state styling with accent color
- Hover effects for inactive buttons

**Usage Example**:
```tsx
<CategoryFilters
  categories={[
    { key: 'support', label: 'Support', icon: Headphones },
    { key: 'development', label: 'Development', icon: CodeIcon },
  ]}
  selectedCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
/>
```

---

#### 4. **MaintainerServiceCard.tsx**
- **Purpose**: Displays a single service offered by a maintainer
- **Used in**: Maintainer profile services grid
- **Props**:
  - `service`: Service object with pricing, availability, description
  - `categoryIcon`: Icon component for the service category
  - `availabilityColor`: Brand color name for availability status
  - `className`: Optional additional classes

**Features**:
- Service icon in colored container
- Availability badge with icon
- Response time display
- Hourly rate with minimum hours
- Hover effect on border

**Usage Example**:
```tsx
<MaintainerServiceCard
  service={{
    id: '1',
    name: 'Bug Fixes',
    description: 'Quick turnaround for critical bugs',
    category: 'development',
    baseRate: 150,
    availability: 'available',
    responseTime: '24h',
    minHours: 2
  }}
  categoryIcon={CodeIcon}
  availabilityColor="success"
/>
```

---

#### 5. **PricingBreakdown.tsx**
- **Purpose**: Shows transparent pricing breakdown visualization
- **Used in**: Maintainer profile pricing section
- **Props**:
  - `averageRate`: Average hourly rate to display example
  - `pricingBreakdown`: Object with allocation percentages
  - `className`: Optional additional classes

**Features**:
- Example calculation in card format
- Visual progress bars for each allocation
- Color-coded categories (project, dependencies, maintainer, platform)
- Success message about ecosystem support

**Pricing Breakdown Structure**:
```typescript
{
  projectAllocation: number;      // % to main project
  dependenciesAllocation: number; // % to dependencies
  maintainerReceives: number;     // % to maintainer
  platformFee: number;            // % to platform
}
```

**Usage Example**:
```tsx
<PricingBreakdown
  averageRate={150}
  pricingBreakdown={{
    projectAllocation: 40,
    dependenciesAllocation: 20,
    maintainerReceives: 35,
    platformFee: 5
  }}
/>
```

---

#### 6. **ExpertiseBadges.tsx**
- **Purpose**: Displays a titled list of expertise/skill badges
- **Used in**: Maintainer profiles for expertise, languages, frameworks, tools
- **Props**:
  - `title`: Section heading (e.g., "Expertise", "Languages")
  - `items`: Array of strings to display as badges
  - `variant`: Badge color variant ('accent' | 'highlight' | 'primary' | 'success')
  - `className`: Optional additional classes

**Features**:
- Consistent badge styling
- Flexible color variants matching brand system
- Wrapping flex layout for responsive display
- Simple API for common use case

**Usage Example**:
```tsx
<div className="grid grid-cols-2 gap-6">
  <ExpertiseBadges
    title="Expertise"
    items={['React', 'TypeScript', 'Node.js']}
    variant="accent"
  />
  <ExpertiseBadges
    title="Languages"
    items={['JavaScript', 'Python', 'Go']}
    variant="highlight"
  />
</div>
```

---

### 📁 `/components/onboarding/`

#### 7. **NextStepsCard.tsx**
- **Purpose**: Displays a "what happens next" card for onboarding success
- **Used in**: OnboardingSuccessPage
- **Props**:
  - `icon`: LucideIcon component
  - `title`: Card heading
  - `description`: Main explanation text
  - `timeline`: Timeline or additional info
  - `brandColor`: 'accent' | 'primary' | 'highlight'
  - `className`: Optional additional classes

**Features**:
- Gradient icon background matching brand color
- Hover effect on card border
- Consistent styling across all step cards

**Usage Example**:
```tsx
<NextStepsCard
  icon={Clock}
  title="We'll Review It"
  description="Our team will take a look at your details."
  timeline="Usually 2-3 business days"
  brandColor="accent"
/>
```

---

## Refactored Pages

### MaintainerProfilePage
**Before**: 507 lines with inline component logic
**After**: ~250 lines using reusable components

**Components Extracted**:
- QuickStats (replaced inline stats 114-131)
- ContactLinks (replaced inline links 135-173)
- ExpertiseBadges (replaced expertise/languages sections 125-158)
- CategoryFilters (replaced filter buttons 237-265)
- MaintainerServiceCard (replaced service cards 268-325)
- PricingBreakdown (replaced pricing section 329-476)

**Benefits**:
- 50% reduction in page code
- Easier to maintain and test
- Reusable across other maintainer-related pages
- Cleaner separation of concerns
- Consistent styling across all similar sections

---

### OnboardingSuccessPage
**Before**: 144 lines with inline card markup
**After**: 144 lines with cleaner structure (same length but more maintainable)

**Components Extracted**:
- NextStepsCard (replaced inline card divs 67-100)

**Benefits**:
- Consistent card styling
- Easy to add/remove steps
- Reusable for other success pages

---

## Design System Alignment

All new components follow the established design system:

✅ Use Tailwind variables from `styles/globals.css`  
✅ Follow brand color conventions (primary, accent, highlight, success)  
✅ Consistent spacing and sizing  
✅ Responsive design patterns  
✅ TypeScript with proper interfaces  
✅ Hover/active states for interactive elements  
✅ Accessibility considerations (semantic HTML, proper ARIA)

---

## Usage Guidelines

### When to use these components:

1. **QuickStats**: Any profile or detail page with icon + label data points
2. **ContactLinks**: Maintainer profiles, team pages, about pages
3. **CategoryFilters**: Any page with filterable categories (services, projects, etc.)
4. **MaintainerServiceCard**: Service listings, marketplace, comparison pages
5. **PricingBreakdown**: Pricing pages, transparency pages, maintainer profiles
6. **NextStepsCard**: Success pages, onboarding flows, confirmation pages

### Component Composition:

These components are designed to work together:

```tsx
// Typical maintainer profile section
<div>
  <QuickStats stats={profileStats} />
  <ContactLinks contact={maintainerContact} />
  
  <CategoryFilters 
    categories={serviceCategories}
    selectedCategory={selected}
    onCategoryChange={setSelected}
  />
  
  <div className="grid">
    {services.map(service => (
      <MaintainerServiceCard 
        key={service.id}
        service={service}
        categoryIcon={getIcon(service.category)}
        availabilityColor={getColor(service.availability)}
      />
    ))}
  </div>
  
  <PricingBreakdown 
    averageRate={calculateAverage(services)}
    pricingBreakdown={maintainer.pricing}
  />
</div>
```

---

## Future Improvements

Potential additional extractions:

1. ~~**ExpertiseBadges**~~ - ✅ **COMPLETED** - Reusable badge list component for skills/languages
2. **ProfileHero** - Standardized hero section with avatar, name, title, badges
3. **AvailabilityCTA** - Reusable bottom CTA with availability info
4. **ServiceStats** - Summary statistics component (total services, avg rate, availability)
5. **SocialLink** - Individual social/contact link component (for even more granularity)

---

## Migration Notes

When updating existing code:

1. Import the new components from `/components/maintainers/ui/`
2. Replace inline JSX with component usage
3. Map data to component props
4. Remove now-unused imports (CheckCircle2, XCircle, etc. in profile page)
5. Verify styling matches original implementation
6. Test responsive behavior on mobile/tablet/desktop

---

## Testing Checklist

- [ ] QuickStats renders correctly with different numbers of items
- [ ] ContactLinks handles optional social links (twitter, linkedin)
- [ ] CategoryFilters updates selected state properly
- [ ] MaintainerServiceCard displays all availability states
- [ ] PricingBreakdown calculates percentages correctly
- [ ] NextStepsCard renders with all brand colors
- [ ] All components are responsive across breakpoints
- [ ] Hover states work as expected
- [ ] TypeScript types are correct
