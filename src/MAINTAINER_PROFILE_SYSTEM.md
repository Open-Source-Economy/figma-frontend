# Maintainer Profile System

## Overview
A comprehensive system for showcasing open source maintainers, their projects, services, and transparent pricing that demonstrates how funds are distributed across the ecosystem.

## Components Created

### 1. Data Structure (`/data/maintainerProfileData.ts`)
- **MaintainerProfile**: Complete profile data structure
- **MaintainerProject**: Projects with role, contribution level, and years active
- **MaintainerService**: Services offered with pricing and availability
- **PricingBreakdown**: Transparent allocation percentages
- Helper functions for role colors, contribution levels, and pricing calculations

### 2. Profile Page (`/components/pages/MaintainerProfilePage.tsx`)
A compact, enterprise-friendly page featuring:

#### Hero Section
- Avatar, name, title, and bio
- Location, timezone, years in open source, total contributions
- Contact links (email, GitHub, Twitter, LinkedIn)
- Availability badge

#### Expertise & Languages
- Skill tags organized by category
- Programming languages with visual badges

#### Contributing Projects
- Grid of projects with:
  - Project name and role
  - Contribution level (Primary/Active/Occasional)
  - Years active
  - Description
  - Click to view project details

#### Available Services
- Category filter (Support, Development, Advisory, Security & Compliance)
- Service cards showing:
  - Service name and description
  - Availability status (Available/Limited/Unavailable)
  - Response time (if applicable)
  - Hourly rate
  - Minimum hours required

#### Transparent Pricing Breakdown
- Visual representation of fund distribution
- Example calculation showing:
  - **40%** to the project
  - **20%** to dependencies
  - **30%** to maintainer
  - **10%** platform fee
- Progress bars and detailed breakdown
- Clear messaging about ecosystem support

### 3. Maintainer Card (`/components/projects/MaintainerCard.tsx`)
Reusable card component for maintainer listings:
- Avatar and basic info
- Quick stats (location, projects, experience)
- Top expertise and languages
- Starting rate and service count
- Availability badge
- Hover effects and click to view profile

## Routing Integration

Added to App.tsx:
- Route: `maintainer-profile`
- Navigation: Added "Maintainers" link to Header
- Sample data: Uses `sampleMaintainerProfile` for demo

## Key Features

### 1. Compact Design
- Tighter spacing (py-10 vs py-16)
- Smaller padding (p-3, p-4 vs p-6, p-8)
- Reduced gaps (gap-3 vs gap-6)
- More efficient use of space

### 2. Transparent Pricing
- Clear breakdown showing where every dollar goes
- Visual progress bars for each allocation
- Example calculations with actual dollar amounts
- Emphasis on ecosystem support message

### 3. Multi-Category Services
- Services can belong to different categories
- Easy filtering by category
- Clear availability indicators
- Minimum hours and response times displayed

### 4. Project Contributions
- Multiple projects with different roles
- Contribution levels clearly indicated
- Years of activity shown
- Clickable to view project details

### 5. Professional Contact
- Multiple contact methods
- Direct email link
- Social media profiles
- Clear availability information

## Sample Data

The `sampleMaintainerProfile` includes:
- **Name**: Sarah Chen
- **Title**: Core Maintainer & TypeScript Expert
- **Projects**: Vite, Vitest, esbuild, TypeScript, Rollup
- **Services**: 8 different services ranging from $250-$500/hour
- **Expertise**: Developer Tooling, Build Systems, Performance Optimization, etc.
- **Languages**: TypeScript, JavaScript, Rust, Go, Python

## Pricing Distribution Example

For a $300/hour service:
- **$120** (40%) → Project support
- **$60** (20%) → Dependencies ecosystem
- **$90** (30%) → Maintainer compensation
- **$30** (10%) → Platform operations

This transparent breakdown demonstrates the platform's commitment to supporting the entire open source ecosystem, not just individual maintainers.

## Usage

### Navigate to Maintainer Profile
```typescript
// From any page
onNavItemClick('maintainer-profile')
```

### View from Project Page
```typescript
// Click maintainer card or link
onViewProfile(maintainerId)
```

### Integration Points
- Header navigation: "Maintainers" link
- Project detail pages: Link to project maintainers
- Services page: Link to individual maintainers
- Search/directory: Use MaintainerCard components

## Future Enhancements

1. **Maintainer Directory Page**: List all maintainers with filtering
2. **Availability Calendar**: Show real-time availability
3. **Service Booking**: Direct booking system
4. **Reviews/Ratings**: Client testimonials for maintainers
5. **Team Profiles**: Support for maintainer teams
6. **Custom Pricing**: Enterprise contract options
7. **Service Packages**: Bundled service offerings
8. **Real-time Chat**: Direct communication channel

## Design Principles

1. **Compact**: Efficient use of space for professional feel
2. **Transparent**: Clear pricing and fund distribution
3. **Trustworthy**: Verified roles and contributions
4. **Accessible**: Easy navigation and clear hierarchy
5. **Actionable**: Clear CTAs for contact and booking
