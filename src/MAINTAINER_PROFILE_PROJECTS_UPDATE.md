# Maintainer Profile Projects Section - UI Update

## Overview
Updated the Maintainer Profile Page to gracefully handle maintainers with many projects through a new reusable component with advanced filtering, sorting, and pagination features.

## Problem Solved
Previously, the profile page displayed all projects in a simple 2-column grid, which could become overwhelming when a maintainer has 10+ projects (common for active open source maintainers).

## New Component: MaintainerProjectsList

### Location
`/components/maintainers/MaintainerProjectsList.tsx`

### Features

#### 1. **Search Functionality**
- Real-time search across project names, roles, and descriptions
- Instant filtering as user types
- Clear search button when active

#### 2. **View Modes**
- **Grid View**: Traditional 2-column card layout (default)
  - Shows full project details
  - Larger cards with complete descriptions
  - Best for browsing fewer projects
  
- **Compact View**: Dense list layout
  - Shows projects in a compact list format
  - Displays essential info in one line
  - Best for scanning many projects quickly

#### 3. **Filtering by Contribution Level**
- **All**: Shows all projects (default)
- **Primary**: Core team, co-maintainers (highest contribution)
- **Secondary**: Regular contributors, plugin developers
- **Occasional**: Community contributors, advisors

Each filter button shows the count of projects in that category.

#### 4. **Sorting Options**
- **By Contribution Level**: Primary → Secondary → Occasional (default)
- **By Name (A-Z)**: Alphabetical sorting
- **By Years Active**: Most active projects first

#### 5. **Pagination**
- Shows 6 projects initially
- "Load More Projects" button loads 6 more at a time
- "Show All (X)" button to expand everything at once
- Progress indicator: "Showing X of Y projects"
- Pagination resets when filters/search change

#### 6. **Smart Empty States**
- Shows message when no projects match search
- Provides "Clear Search" button to reset

## Usage in MaintainerProfilePage

### Before
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {profile.projects.map((project, idx) => (
    // Large inline project card component
  ))}
</div>
```

### After
```tsx
<MaintainerProjectsList
  projects={profile.projects}
  maintainerFirstName={profile.name.split(' ')[0]}
  onViewProject={onViewProject}
/>
```

## Updated Sample Data

Extended `sampleMaintainerProfile` from 5 to 16 projects, including:
- 5 Primary contributions (Vite, Vitest, SWC, pnpm, tsup)
- 5 Secondary contributions (esbuild, webpack, Babel, Turborepo, ts-node)
- 6 Occasional contributions (TypeScript, Rollup, ESLint, Prettier, Rome, Nx)

This demonstrates how the UI scales with many projects.

## Design System Integration

### Colors
- **Primary Badge**: `brand-success` (green) for high contribution
- **Secondary Badge**: `brand-highlight` (goldenrod) for medium contribution
- **Occasional Badge**: `brand-warning` (amber) for occasional contribution
- **Accent**: `brand-accent` (coral) for selected filters and hover states

### Typography
- Follows global typography system (no font size/weight classes)
- Uses semantic heading hierarchy

### Interactions
- Smooth transitions on hover
- Arrow icon translates on hover
- Filter buttons with clear active states
- Accessible keyboard navigation

## Performance Considerations

1. **Memoization**: `useMemo` for filtered/sorted results
2. **Pagination**: Only renders visible items in DOM
3. **Efficient Re-renders**: Minimal state updates
4. **Search Debouncing**: Could be added if needed for very large datasets

## Responsive Design

- **Desktop**: 2-column grid, full controls visible
- **Tablet**: 2-column grid, wrapped controls
- **Mobile**: Single column, stacked controls

## Accessibility

- Semantic HTML structure
- ARIA labels for view mode toggles
- Keyboard accessible filters and buttons
- Clear focus states
- Readable color contrasts

## Future Enhancements

Potential additions:
- Debounced search (300ms delay) for large datasets
- Export project list
- Grouping by project type (build tools, testing, etc.)
- Visual indicators for verified projects
- Project statistics (commits, PRs, issues resolved)
- Timeline view showing contribution history
- Bulk actions (share, export selected)

## Testing the Feature

1. Navigate to Maintainers → View Profile Example
2. Scroll to "Contributing Projects" section
3. Try:
   - Searching for projects (e.g., "TypeScript", "build")
   - Switching between Grid and Compact views
   - Filtering by contribution level
   - Sorting by different criteria
   - Loading more projects
   - Showing all projects at once

## Component Reusability

The `MaintainerProjectsList` component is:
- **Standalone**: No tight coupling to parent
- **Configurable**: Accepts projects array and callbacks
- **Styled**: Follows brand design system
- **Tested**: Works with 1 to 100+ projects

Can be reused in:
- Maintainers Directory page
- Developer Dashboard
- Project search results
- Admin panels
