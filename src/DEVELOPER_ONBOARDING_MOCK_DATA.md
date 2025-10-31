# Developer Onboarding Mock Data System

This document describes the comprehensive mock data system for testing the developer onboarding workflow.

## Overview

The developer onboarding wizard includes a built-in mock data system that allows you to quickly test different scenarios and workflow states without manually filling out forms.

## Features

- **9 Pre-configured Scenarios**: Test different stages of the onboarding process
- **One-Click Loading**: Floating button in the bottom-right corner
- **Auto-Save Override**: Mock data replaces any existing draft
- **Production-Ready Data**: Realistic sample data across all fields

## Mock Data Scenarios

### 1. Empty (Fresh Start)
**Scenario**: `'empty'`  
**Description**: No data pre-filled - simulates a brand new user  
**Use Case**: Test the initial onboarding experience from scratch

```typescript
contact: {
  fullName: '',
  email: '',
}
projects: []
participationModel: null
```

### 2. Step 1 Partial
**Scenario**: `'step1'`  
**Description**: Basic contact information entered  
**Use Case**: Test Step 1 form validation and continuation

```typescript
contact: {
  fullName: 'Jordan Smith',
  email: 'jordan.smith@example.com',
}
currentStep: 1
completedSteps: []
```

### 3. Step 2 Testing
**Scenario**: `'step2'`  
**Description**: Contact info complete, has 1 project added  
**Use Case**: Test project management functionality

```typescript
contact: { /* Complete */ }
projects: [
  {
    projectName: 'Vue.js',
    role: 'maintainer',
    mainBranchAccess: 'full_write',
    contributionStartDate: 2018
  }
]
currentStep: 2
completedSteps: [1]
```

### 4. Step 3 Testing
**Scenario**: `'step3'`  
**Description**: Ready for participation model selection  
**Use Case**: Test active vs passive model choice

```typescript
contact: { /* Complete */ }
projects: [ /* 3 projects */ ]
participationModel: null
currentStep: 3
completedSteps: [1, 2]
```

### 5. Step 4 Testing
**Scenario**: `'step4'`  
**Description**: Active model selected with partial availability  
**Use Case**: Test availability and rate configuration

```typescript
participationModel: 'active'
availability: {
  weeklyHours: 10,
  baseHourlyRate: 100,
  currency: 'USD'
}
currentStep: 4
completedSteps: [1, 2, 3]
```

### 6. Step 5 Testing
**Scenario**: `'step5'`  
**Description**: Availability set, ready for service configuration  
**Use Case**: Test service offerings management

```typescript
availability: { /* Complete */ }
services: [
  {
    serviceType: 'Bug Fixes',
    category: 'development',
    enabled: true,
    projectScope: 'all',
    useBaseRate: true
  }
]
currentStep: 5
completedSteps: [1, 2, 3, 4]
```

### 7. Step 6 Testing
**Scenario**: `'step6'`  
**Description**: All steps complete, ready for review  
**Use Case**: Test final review and submission

```typescript
/* All fields complete */
currentStep: 6
completedSteps: [1, 2, 3, 4, 5]
```

### 8. Complete Active Developer
**Scenario**: `'active'`  
**Description**: Full active developer profile with comprehensive data  
**Use Case**: Test complete active developer workflow

```typescript
contact: {
  fullName: 'Sarah Chen',
  email: 'sarah.chen@example.com'
}
projects: [
  { projectName: 'React Query', role: 'core_contributor' },
  { projectName: 'Tailwind CSS', role: 'contributor' },
  { projectName: 'TypeScript Utils', role: 'maintainer' }
]
participationModel: 'active'
availability: {
  weeklyHours: 20,
  baseHourlyRate: 150,
  currency: 'USD',
  minimumEngagement: {
    hoursPerProject: 5,
    minimumDuration: 4
  }
}
services: [
  'Bug Fixes & Maintenance',
  'Feature Development',
  'Code Review',
  'Architecture Consulting',
  'Documentation'
]
```

### 9. Complete Passive Developer
**Scenario**: `'passive'`  
**Description**: Full passive developer profile  
**Use Case**: Test passive participation workflow (no availability/services)

```typescript
contact: {
  fullName: 'Alex Kumar',
  email: 'alex.kumar@example.com'
}
projects: [
  { projectName: 'Next.js', role: 'contributor' }
]
participationModel: 'passive'
/* No availability or services required */
```

## How to Use

### Using the UI Toggle

1. Navigate to the Developer Onboarding page (`/developer-onboarding`)
2. Look for the yellow "Mock Data" button in the bottom-right corner
3. Click to open the mock data selector
4. Choose a scenario from the list
5. The wizard will immediately load with the selected data

### Programmatic Usage

You can also load mock data programmatically:

```typescript
import { getMockDataByScenario } from './data/developerOnboardingData';

// Load specific scenario
const mockData = getMockDataByScenario('active');

// Use in wizard
<DeveloperOnboardingWizard initialData={mockData} />
```

### In App.tsx

Toggle the mock mode state variable:

```typescript
// Change this value to pre-load different scenarios
const [onboardingMockMode, setOnboardingMockMode] = useState<'empty' | 'active' | 'passive' | ...>('empty');
```

## Mock Data Structure

### Contact Information
```typescript
{
  fullName: string;      // Full legal name
  email: string;         // Valid email address
}
```

### Projects
```typescript
{
  id: string;                          // Unique identifier
  projectName: string;                 // Project name
  githubUrl?: string;                  // GitHub repository URL
  role: 'maintainer' | 'core_contributor' | 'contributor' | 'other';
  mainBranchAccess: 'full_write' | 'write_with_review' | 'read_only';
  contributionStartDate?: number;      // Year (YYYY)
  verified: boolean;                   // Verification status
}
```

### Availability (Active Only)
```typescript
{
  weeklyHours: number;                 // Available hours per week
  baseHourlyRate: number;              // Base rate in currency
  currency: 'USD' | 'EUR' | 'CHF';     // Currency code
  minimumEngagement?: {
    hoursPerProject?: number;          // Min hours per project
    minimumDuration?: number;          // Min weeks commitment
  }
}
```

### Services (Active Only)
```typescript
{
  id: string;                          // Unique identifier
  serviceType: string;                 // Service name
  category: 'development' | 'review' | 'consulting' | 'training';
  enabled: boolean;                    // Service availability
  projectScope: 'all' | string[];      // Project availability
  useBaseRate: boolean;                // Use base rate or custom
  customRate?: number;                 // Custom rate if not base
}
```

## Data Files

### `/data/developerOnboardingData.ts`
Contains all mock data definitions and the `getMockDataByScenario()` helper function.

### `/types/DeveloperOnboarding.ts`
TypeScript type definitions for all onboarding data structures.

### `/components/onboarding/MockDataToggle.tsx`
UI component for the mock data selector.

## Developer Notes

### Auto-Save Behavior
- Loading mock data **clears** any existing localStorage draft
- The wizard will auto-save the loaded mock data after 2 seconds
- You can reload the page to restore the mock data from localStorage

### Validation
- Mock data is designed to pass validation at each step
- Use 'step1', 'step2', etc. scenarios to test validation at specific points
- The 'empty' scenario tests validation errors

### Testing Workflows

**Test Progressive Entry**:
1. Load 'empty' scenario
2. Fill out each step manually
3. Test navigation and validation

**Test Mid-Process Resume**:
1. Load 'step3' or 'step4' scenario
2. Complete remaining steps
3. Test backward navigation

**Test Complete Profiles**:
1. Load 'active' or 'passive' scenario
2. Navigate through all steps
3. Test editing and submission

## Best Practices

1. **Clear Draft Before Testing**: Always start with a fresh state when testing new scenarios
2. **Use Step-Specific Scenarios**: Test validation by loading the appropriate step scenario
3. **Test Both Models**: Use both 'active' and 'passive' scenarios to test different workflows
4. **Verify Auto-Save**: Check that changes persist after reloading the page
5. **Console Logging**: Check browser console for loaded mock data details

## API Integration Notes

When integrating with a real backend:

1. Replace `getMockDataByScenario()` calls with actual API requests
2. Update `onComplete()` handler to POST data to backend
3. Implement real verification for GitHub usernames and projects
4. Add server-side validation for all fields
5. Store draft state in database instead of localStorage

## Related Documentation

- [DEVELOPER_ONBOARDING_WORKFLOW.md](./DEVELOPER_ONBOARDING_WORKFLOW.md) - Complete onboarding system overview
- [DEVELOPER_ONBOARDING_REFINED.md](./DEVELOPER_ONBOARDING_REFINED.md) - 6-step wizard implementation details
- [DRY_COMPONENTS_GUIDE.md](./DRY_COMPONENTS_GUIDE.md) - Reusable component patterns

## Future Enhancements

- [ ] Add more diverse project examples
- [ ] Include edge case scenarios (validation errors, partial data)
- [ ] Add ability to customize mock data in UI
- [ ] Export/import custom mock scenarios
- [ ] Add mock API response delays for realistic testing
- [ ] Include internationalization test scenarios

---

**Last Updated**: January 2024  
**Version**: 1.0.0
