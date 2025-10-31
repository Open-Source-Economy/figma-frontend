# Maintainers Directory System

## Overview
The Maintainers Directory provides a comprehensive listing of all open-source project maintainers registered in the platform. It includes search, filtering, verification (attestation), and pagination features.

## Features

### 1. Maintainer Listing
- **Display Format**: Grid layout with maintainer cards
- **Information Shown**:
  - Name and username
  - Profile picture/avatar
  - Verification (attestation) status
  - Location and join date
  - Bio/description
  - Associated projects with roles and merging rights
  
### 2. Search Functionality
- **Live Search**: Debounced search (300ms delay) for better performance
- **Search Scope**: Name and username fields
- **Clear Search**: Quick button to clear search query

### 3. Verification (Attestation) System
- **Purpose**: Admin verification of maintainer roles and merging rights
- **Visual Indicator**: Green shield badge for verified maintainers
- **Admin Controls**:
  - "Verify Maintainer" button for unverified maintainers
  - "Remove Attestation" button for verified maintainers
- **Terminology**: Uses "attestation" to emphasize role/rights confirmation rather than identity verification

### 4. Filtering
- **Verification Filter**:
  - All (default)
  - Verified only
  - Unverified only
  
### 5. Sorting
- **Sort Options**:
  - Verified First (default)
  - Name (A-Z)
  - Most Projects
  - Recently Joined

### 6. Pagination
- **Implementation**: "Load More" button
- **Items Per Page**: 12 maintainers
- **Progress Indicator**: Shows "X of Y maintainers"

### 7. Project-Maintainer Relationships
Each maintainer can have multiple projects with:
- **Project Name**: Name of the open-source project
- **Role**: Core Team, Maintainer, Contributor, Reviewer, Admin
- **Merging Rights**: none, review, merge, admin

## Components

### Main Components
- `MaintainersDirectoryPage`: Main page component
- `MaintainerDirectoryCard`: Individual maintainer card
- `MaintainerFilters`: Search, filter, and sort controls

### Data Structure
Located in `/data/maintainersDirectoryData.ts`:
```typescript
interface MaintainerDirectoryEntry {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  isVerified: boolean;
  verifiedAt?: string;
  verifiedBy?: string;
  projects: MaintainerProject[];
  joinedDate: string;
  location?: string;
  bio?: string;
}

interface MaintainerProject {
  projectName: string;
  projectSlug: string;
  role: 'Maintainer' | 'Contributor' | 'Reviewer' | 'Admin' | 'Core Team';
  mergingRights: 'none' | 'review' | 'merge' | 'admin';
}
```

## Enabling Admin Mode

To enable admin verification controls, update the route in `/App.tsx`:

```typescript
if (currentPage === 'maintainers-directory') {
  return (
    <MaintainersDirectoryPage
      onNavigateHome={() => setCurrentPage('home')}
      onNavItemClick={handleNavigation}
      isAdmin={true} // Change to true to enable admin controls
    />
  );
}
```

When admin mode is enabled:
1. "Verify Maintainer" and "Remove Attestation" buttons appear on each card
2. An admin notice banner is displayed at the bottom of the page
3. Admin can click to verify/unverify maintainers (updates state locally for demo)

## Navigation

The Maintainers Directory is accessible from:
- **Header Navigation**: Maintainers dropdown → "Browse Directory"
- **Direct Link**: `maintainers-directory`

## Design System

Follows the premium dark theme with:
- **Primary Foundation**: Navy (#1e293b)
- **Accent Color**: Coral Orange (#ff7f50)
- **Success Color**: Emerald Green (#10b981) for verification badges
- **Card Background**: Rich dark blue (#1a2942)
- **Hover Effects**: Accent border glow on card hover
- **Typography**: Consistent with global typography system

## Mock Data

The system includes 12 mock maintainers with varied:
- Verification statuses (8 verified, 4 unverified)
- Project counts (1-3 projects each)
- Roles and merging rights
- Locations and backgrounds

## Future Enhancements

Potential additions:
- Export maintainer list
- Advanced filtering (by project, role, merging rights)
- Maintainer comparison
- Email/contact integration
- Activity timeline
- Skills/expertise tags
- GitHub integration
- Bulk verification actions
- Audit log for verification actions
