# Maintainer Components Quick Reference

**Quick lookup guide for all maintainer-related reusable components**

---

## 📦 Component Categories

### 🎨 UI Components (`/components/maintainers/ui/`)
Small, focused components for individual UI elements

### 📄 Section Components (`/components/maintainers/sections/`)
Complete page sections that compose UI components

---

## 🎨 UI Components

### QuickStats
**File**: `/components/maintainers/ui/QuickStats.tsx`  
**Purpose**: Icon + text statistics display  
**Usage**:
```tsx
<QuickStats
  stats={[
    { icon: MapPin, label: 'San Francisco' },
    { icon: Clock, label: 'PST (UTC-8)' }
  ]}
/>
```

---

### ContactLinks
**File**: `/components/maintainers/ui/ContactLinks.tsx`  
**Purpose**: Social and contact links  
**Usage**:
```tsx
<ContactLinks
  contact={{
    email: 'dev@example.com',
    github: 'username',
    twitter: '@handle',
    linkedin: 'profile'
  }}
/>
```

---

### ExpertiseBadges
**File**: `/components/maintainers/ui/ExpertiseBadges.tsx`  
**Purpose**: Titled badge list for skills  
**Usage**:
```tsx
<ExpertiseBadges
  title="Expertise"
  items={['React', 'TypeScript', 'Node.js']}
  variant="accent"
/>
```

---

### CategoryFilters
**File**: `/components/maintainers/ui/CategoryFilters.tsx`  
**Purpose**: Filterable button group  
**Usage**:
```tsx
<CategoryFilters
  categories={[
    { key: 'dev', label: 'Development', icon: CodeIcon }
  ]}
  selectedCategory={selected}
  onCategoryChange={setSelected}
/>
```

---

### MaintainerServiceCard
**File**: `/components/maintainers/ui/MaintainerServiceCard.tsx`  
**Purpose**: Individual service display  
**Usage**:
```tsx
<MaintainerServiceCard
  service={{
    id: '1',
    name: 'Bug Fixes',
    description: 'Fast turnaround',
    category: 'development',
    baseRate: 150,
    availability: 'available'
  }}
  categoryIcon={CodeIcon}
  availabilityColor="success"
/>
```

---

### PricingBreakdown
**File**: `/components/maintainers/ui/PricingBreakdown.tsx`  
**Purpose**: Transparent pricing visualization  
**Usage**:
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

## 📄 Section Components

### MaintainerHeroSection
**File**: `/components/maintainers/sections/MaintainerHeroSection.tsx`  
**Purpose**: Complete profile hero  
**Composes**: QuickStats, ContactLinks, Badge  
**Usage**:
```tsx
<MaintainerHeroSection
  name="Jane Doe"
  title="Senior Maintainer"
  bio="Passionate about open source..."
  avatarUrl="/avatar.jpg"
  location="San Francisco"
  timezone="PST"
  yearsInOpenSource={10}
  totalContributions={5000}
  contact={{ email: '...', github: '...' }}
/>
```

---

### MaintainerExpertiseSection
**File**: `/components/maintainers/sections/MaintainerExpertiseSection.tsx`  
**Purpose**: Expertise and languages display  
**Composes**: ExpertiseBadges (x2)  
**Usage**:
```tsx
<MaintainerExpertiseSection
  expertise={['React', 'Node.js']}
  languages={['JavaScript', 'TypeScript']}
/>
```

---

### MaintainerProjectsSection
**File**: `/components/maintainers/sections/MaintainerProjectsSection.tsx`  
**Purpose**: Projects list wrapper  
**Composes**: MaintainerProjectsList  
**Usage**:
```tsx
<MaintainerProjectsSection
  projects={projectsArray}
  maintainerFirstName="Jane"
  onViewProject={(slug) => navigate(slug)}
/>
```

---

### MaintainerServicesSection
**File**: `/components/maintainers/sections/MaintainerServicesSection.tsx`  
**Purpose**: Services with filtering  
**Composes**: CategoryFilters, MaintainerServiceCard  
**State**: Manages category selection internally  
**Usage**:
```tsx
<MaintainerServicesSection
  services={servicesArray}
  categoryOptions={categoriesArray}
  categoryIcons={iconsObject}
/>
```

---

### MaintainerPricingSection
**File**: `/components/maintainers/sections/MaintainerPricingSection.tsx`  
**Purpose**: Pricing transparency section  
**Composes**: PricingBreakdown  
**Usage**:
```tsx
<MaintainerPricingSection
  averageRate={150}
  pricingBreakdown={breakdownObject}
/>
```

---

### MaintainerAvailabilityCTA
**File**: `/components/maintainers/sections/MaintainerAvailabilityCTA.tsx`  
**Purpose**: Bottom CTA with availability  
**Usage**:
```tsx
<MaintainerAvailabilityCTA
  email="dev@example.com"
  availability={{
    hoursPerWeek: 20,
    preferredSchedule: 'Mornings preferred'
  }}
  onViewServices={() => navigate('/services')}
/>
```

---

## 🎯 When to Use What

### Use UI Components When:
- ✅ Building custom page layouts
- ✅ Need fine-grained control
- ✅ Creating non-standard sections
- ✅ Composing new patterns

### Use Section Components When:
- ✅ Building standard maintainer pages
- ✅ Need quick page assembly
- ✅ Want consistent layouts
- ✅ Reducing code duplication

---

## 🏗️ Composition Examples

### Simple Profile Page
```tsx
function SimpleMaintainerPage({ profile }) {
  return (
    <>
      <MaintainerHeroSection {...profile} />
      <MaintainerExpertiseSection {...profile} />
      <MaintainerProjectsSection {...profile} />
    </>
  );
}
```

### Full Profile Page
```tsx
function FullMaintainerPage({ profile }) {
  return (
    <>
      <MaintainerHeroSection {...profile} />
      <MaintainerExpertiseSection {...profile} />
      <MaintainerProjectsSection {...profile} />
      <MaintainerServicesSection {...profile} />
      <MaintainerPricingSection {...profile} />
      <MaintainerAvailabilityCTA {...profile} />
    </>
  );
}
```

### Custom Layout with UI Components
```tsx
function CustomMaintainerPage({ profile }) {
  return (
    <>
      <div className="hero">
        <QuickStats stats={statsArray} />
        <ContactLinks contact={profile.contact} />
      </div>
      <div className="services">
        <CategoryFilters {...filterProps} />
        <div className="grid">
          {services.map(s => (
            <MaintainerServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </>
  );
}
```

---

## 📊 Component Size Reference

| Component | Lines | Type | Complexity |
|-----------|-------|------|------------|
| QuickStats | 31 | UI | Low |
| ContactLinks | 67 | UI | Low |
| ExpertiseBadges | 37 | UI | Low |
| CategoryFilters | 56 | UI | Medium |
| MaintainerServiceCard | 87 | UI | Medium |
| PricingBreakdown | 181 | UI | High |
| MaintainerHeroSection | 97 | Section | Medium |
| MaintainerExpertiseSection | 39 | Section | Low |
| MaintainerProjectsSection | 38 | Section | Low |
| MaintainerServicesSection | 85 | Section | Medium |
| MaintainerPricingSection | 35 | Section | Low |
| MaintainerAvailabilityCTA | 51 | Section | Low |

---

## 🎨 Styling Patterns

### All Components Support:
- ✅ `className` prop for custom styling
- ✅ Design system tokens/variables
- ✅ Responsive breakpoints
- ✅ Tailwind CSS utilities

### Color Variants:
- **UI Components**: 'accent' | 'highlight' | 'primary' | 'success'
- **Sections**: Use branded colors from design system

---

## 🔗 Dependencies

### UI Components Depend On:
- `lucide-react` for icons
- `/components/ui/badge.tsx` for badges
- Design system variables

### Section Components Depend On:
- UI components (QuickStats, ContactLinks, etc.)
- Existing components (MaintainerProjectsList)
- Data utilities (getAvailabilityColor)

---

## 📝 Props Quick Reference

### Common Props Across All Components:
- `className?: string` - Additional CSS classes

### Common Patterns:

**Icon + Label Data**:
```typescript
{ icon: LucideIcon, label: string }
```

**Contact Info**:
```typescript
{
  email: string;
  github: string;
  twitter?: string;
  linkedin?: string;
}
```

**Service Object**:
```typescript
{
  id: string;
  name: string;
  description: string;
  category: string;
  baseRate: number;
  availability: 'available' | 'limited' | 'unavailable';
  responseTime?: string;
  minHours?: number;
}
```

**Pricing Breakdown**:
```typescript
{
  projectAllocation: number;
  dependenciesAllocation: number;
  maintainerReceives: number;
  platformFee: number;
}
```

---

## 🚀 Import Paths

```typescript
// UI Components
import { QuickStats } from './components/maintainers/ui/QuickStats';
import { ContactLinks } from './components/maintainers/ui/ContactLinks';
import { ExpertiseBadges } from './components/maintainers/ui/ExpertiseBadges';
import { CategoryFilters } from './components/maintainers/ui/CategoryFilters';
import { MaintainerServiceCard } from './components/maintainers/ui/MaintainerServiceCard';
import { PricingBreakdown } from './components/maintainers/ui/PricingBreakdown';

// Section Components
import { MaintainerHeroSection } from './components/maintainers/sections/MaintainerHeroSection';
import { MaintainerExpertiseSection } from './components/maintainers/sections/MaintainerExpertiseSection';
import { MaintainerProjectsSection } from './components/maintainers/sections/MaintainerProjectsSection';
import { MaintainerServicesSection } from './components/maintainers/sections/MaintainerServicesSection';
import { MaintainerPricingSection } from './components/maintainers/sections/MaintainerPricingSection';
import { MaintainerAvailabilityCTA } from './components/maintainers/sections/MaintainerAvailabilityCTA';
```

---

## 💡 Tips & Tricks

### Performance
- Section components are larger, consider lazy loading
- UI components are small, safe to import directly
- Use React.memo for components that rarely change

### Customization
- All components accept `className` prop
- Can override styles with Tailwind classes
- Section components have semantic HTML

### Testing
- UI components: Unit test in isolation
- Section components: Integration test with mock data
- Both: Test responsive behavior at all breakpoints

---

## 🆘 Troubleshooting

### "Component not rendering"
- ✅ Check all required props are passed
- ✅ Verify data types match interface
- ✅ Check for console errors/warnings

### "Styling looks wrong"
- ✅ Ensure design system CSS is loaded
- ✅ Check Tailwind config includes component paths
- ✅ Verify no conflicting global styles

### "TypeScript errors"
- ✅ Import types from correct location
- ✅ Check prop types match interface
- ✅ Ensure optional props use `?` correctly

---

## 📚 Related Documentation

- `/MAINTAINER_DRY_REFACTOR.md` - Detailed UI components docs
- `/MAINTAINER_SECTIONS_REFACTOR.md` - Section architecture guide
- `/MAINTAINER_DRY_SUMMARY.md` - Complete refactor summary
- `/DRY_COMPONENTS_GUIDE.md` - General DRY principles

---

**Last Updated**: [Current Date]  
**Version**: 2.0.0  
**Components**: 13 (7 UI + 6 Sections)
