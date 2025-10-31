# Developer Onboarding Workflow - Design Brainstorm

## Overview
Design document for the developer onboarding process that collects maintainer information, service preferences, and rate configuration for the Open Source Economy platform.

---

## Data Requirements

### 1. Contact Information
- **Email address** (required) - primary contact
- **Full name** (optional but recommended)
- **GitHub username** (for verification and linking)

### 2. Project Information
- **Project(s)** - which open source project(s) they maintain
- **Role** - their position in each project (Maintainer, Core Contributor, etc.)
- **Access rights** - level of access to main branch (Full write access, Requires review, Read-only, etc.)

### 3. Participation Model
**Two distinct paths:**
- **Active Service Provider** - willing to deliver paid services to enterprises
- **Passive Recipient** - only wants to receive funding based on current contributions (no additional services)

### 4. Service Capacity (Active Providers Only)
- **Weekly hours** - average hours per week available for client services
- **Base hourly rate** - default rate in USD/EUR/CHF

### 5. Service Configuration (Active Providers Only)
- **Available services** - which services they can provide (e.g., Bug Fixes, Feature Development, Code Reviews, Consulting, Training, etc.)
- **Project mapping** - which services apply to which projects (all vs. specific subset)
- **Custom rates** - ability to override base rate for specific services

---

## UX Flow Options

### Option A: Multi-Step Wizard (Recommended)
**Progressive disclosure approach with clear steps**

#### Pros:
- ✅ Reduced cognitive load - one focused task per screen
- ✅ Clear progress indication
- ✅ Easy to save progress and resume later
- ✅ Natural flow for conditional logic
- ✅ Better mobile experience
- ✅ Can validate each step before proceeding

#### Cons:
- ❌ More clicks to complete
- ❌ Can't see full picture at once
- ❌ Requires step navigation UI

#### Steps:
1. **Welcome & Contact** (Email, Name, GitHub)
2. **Projects** (Add/select projects with role and access)
3. **Participation Model** (Active vs. Passive)
4. **Availability** (Hours & base rate) - if Active
5. **Services** (Configure service offerings) - if Active
6. **Review & Submit** (Summary with edit options)

---

### Option B: Single Long Form with Sections
**All information on one scrollable page**

#### Pros:
- ✅ See everything at once
- ✅ Easier to review and compare
- ✅ Single submit action
- ✅ Better for desktop users

#### Cons:
- ❌ Overwhelming initial impression
- ❌ Harder to show/hide conditional sections
- ❌ Poor mobile experience
- ❌ Difficult to save partial progress

---

### Option C: Hybrid Accordion Approach
**Expandable sections with validation**

#### Pros:
- ✅ Overview of all sections visible
- ✅ Can expand what you need
- ✅ Progressive disclosure within sections
- ✅ Single page with organization

#### Cons:
- ❌ Can still feel overwhelming
- ❌ Accordion UI can be confusing
- ❌ Validation feedback harder to show

---

## Recommended Approach: Multi-Step Wizard

### Detailed Step Breakdown

#### Step 1: Welcome & Contact
**Purpose:** Establish identity and create account

**Fields:**
- Email address* (required)
- Full name*
- GitHub username* (with verification button)

**Validation:**
- Email format check
- GitHub username exists (API check)
- No duplicate accounts

**UI Elements:**
- Warm welcome message
- Trust signals (security, privacy)
- Progress indicator showing 6 steps

---

#### Step 2: Project Information
**Purpose:** Link maintainer to projects

**Layout:**
- Search/autocomplete for existing projects
- "Add New Project" option
- List of added projects (can add multiple)

**For Each Project:**
- Project name* (autocomplete)
- Your role* (dropdown: Maintainer, Core Contributor, Contributor, Other)
- Main branch access* (dropdown: Full write access, Write with review, Read-only)
- Contribution start date (optional)

**UI Elements:**
- "Add Another Project" button
- Remove project option
- At least 1 project required

**Validation:**
- Must have at least one project
- Verify project exists (GitHub API)

---

#### Step 3: Participation Model
**Purpose:** Choose between active service provision or passive funding

**Options (Radio/Card Selection):**

**Option A: Active Service Provider** 🚀
- Provide paid services to enterprises
- Set your own rates and availability
- Work directly with companies on their needs
- Higher earning potential

**Option B: Passive Recipient** 📊
- Receive funding based on dependency usage
- No additional service commitments
- Continue your current contribution pattern
- Simpler, hands-off approach

**UI Elements:**
- Large, clear cards with icons
- Expandable "Learn more" for each option
- Can change later notice

**Next Steps:**
- If Active → Go to Step 4 (Availability)
- If Passive → Skip to Step 6 (Review)

---

#### Step 4: Service Availability (Active Only)
**Purpose:** Establish capacity and base pricing

**Fields:**
- **Average weekly hours*** (slider/input: 0-40 hours)
  - Helper text: "This is indicative and can vary week-to-week"
  - Visual indicator (0-10: Part-time, 10-20: Regular, 20-40: Full-time)
  
- **Base hourly rate*** (currency input)
  - Currency selector (USD, EUR, CHF)
  - Range suggestions based on role/location
  - "Market rate guidance" tooltip
  
- **Minimum engagement** (optional)
  - Minimum hours per project
  - Minimum contract duration

**UI Elements:**
- Slider with labels
- Real-time calculation: "~X hours/month = ~Y hours/year"
- Rate benchmarking info
- Privacy note about rates

---

#### Step 5: Service Configuration (Active Only)
**Purpose:** Define which services for which projects at what rates

**Layout Concept A: Service-First Matrix**

```
Services                    Projects              Custom Rate
┌─────────────────────┐    ┌──────────────┐      ┌──────────┐
│ ☑ Bug Fixes         │ → │ ☑ All         │      │ $150/hr  │
│ ☑ Feature Dev       │ → │ ☑ All         │      │ Default  │
│ ☑ Code Reviews      │ → │ ☐ All         │      │ $100/hr  │
│                     │    │ ☑ Project A   │      │          │
│ ☐ Architecture      │ → │ ☐ Project B   │      │ -        │
│ ☐ Training          │ → │ -             │      │ -        │
└─────────────────────┘    └──────────────┘      └──────────┘
```

**Layout Concept B: Project-First Grouping**

```
For each project:
  Project A
    ☑ Bug Fixes ($150/hr)
    ☑ Feature Development (default)
    ☑ Code Reviews ($100/hr)
    ☐ Architecture Consulting
    
  Project B
    ☑ Bug Fixes ($150/hr)
    ☐ Feature Development
    ☑ Code Reviews ($100/hr)
    ☐ Training
```

**Service Categories:**
- **Development** (Bug Fixes, Feature Development, Performance Optimization)
- **Review & Quality** (Code Reviews, Architecture Review, Security Audit)
- **Consulting** (Technical Consulting, Migration Support, Integration Help)
- **Knowledge Transfer** (Training, Documentation, Workshops)

**For Each Service:**
- Enable/disable toggle
- Project scope (All projects OR select specific ones)
- Custom rate (optional, shows "Default: $X/hr" when empty)

**Smart Defaults:**
- All common services enabled
- Applied to all projects
- Use base rate

**UI Elements:**
- "Apply to all projects" quick toggle
- "Copy from another service" helper
- "Use base rate" checkbox
- Visual rate comparison
- Estimated monthly earnings calculator

---

#### Step 6: Review & Submit
**Purpose:** Confirm all information and submit

**Layout:**
- Summary cards for each section:
  - Contact Information (edit)
  - Projects (2 projects) (edit)
  - Participation Model: Active Service Provider (edit)
  - Availability: 15 hrs/week @ $150/hr (edit)
  - Services: 8 services across 2 projects (edit)

**Actions:**
- Edit button for each section (returns to that step)
- Terms & Conditions checkbox*
- Privacy Policy checkbox*
- Submit button (large, prominent)

**Post-Submit:**
- Success confirmation
- "What's next" guidance
- Email verification notice
- Dashboard access

---

## Data Model

```typescript
interface DeveloperOnboarding {
  // Step 1: Contact
  contact: {
    email: string;
    fullName: string;
    githubUsername: string;
    emailVerified: boolean;
  };
  
  // Step 2: Projects
  projects: Array<{
    id: string;
    projectName: string;
    role: 'maintainer' | 'core_contributor' | 'contributor' | 'other';
    mainBranchAccess: 'full_write' | 'write_with_review' | 'read_only';
    contributionStartDate?: Date;
    verified: boolean;
  }>;
  
  // Step 3: Participation Model
  participationModel: 'active' | 'passive';
  
  // Step 4: Availability (if active)
  availability?: {
    weeklyHours: number;
    baseHourlyRate: number;
    currency: 'USD' | 'EUR' | 'CHF';
    minimumEngagement?: {
      hoursPerProject?: number;
      minimumDuration?: number; // weeks
    };
  };
  
  // Step 5: Services (if active)
  services?: Array<{
    serviceType: string; // 'bug_fixes', 'feature_dev', etc.
    enabled: boolean;
    projectScope: 'all' | string[]; // 'all' or array of project IDs
    customRate?: number; // if null, use base rate
  }>;
  
  // Metadata
  createdAt: Date;
  lastModified: Date;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  currentStep: number;
}
```

---

## Technical Considerations

### State Management
- Use React Context or state management for multi-step data
- Save to localStorage for draft persistence
- Clear localStorage after successful submit

### Validation
- Step-level validation before allowing "Next"
- Real-time validation for critical fields
- Show validation summary if step invalid

### Progress Saving
- Auto-save draft every 30 seconds
- "Resume draft" option if user returns
- Clear indication of saved vs. unsaved

### Accessibility
- Keyboard navigation between steps
- Screen reader announcements for step changes
- Clear error messages
- Focus management

### Mobile Optimization
- Stack form fields vertically
- Large touch targets
- Sticky navigation
- Progress indicator adapted for mobile

---

## Open Questions for Discussion

1. **Project Verification**: How do we verify that someone is actually a maintainer of a project?
   - GitHub API check for commit access?
   - Manual admin approval?
   - Email verification to project contact?

2. **Rate Privacy**: Should other developers see each other's rates?
   - Fully private?
   - Show ranges/averages only?
   - Completely transparent?

3. **Service Taxonomy**: What's the definitive list of services?
   - Start with predefined list vs. free-form?
   - Allow custom services?
   - Different categories by project type?

4. **Multi-Project Complexity**: If someone maintains 10 projects, is the service config too complex?
   - Template/copy feature?
   - "Same for all" quick option?
   - Group projects by service offering?

5. **Draft Persistence**: How long should we keep incomplete registrations?
   - 7 days? 30 days?
   - Email reminder to complete?

6. **Rate Updates**: After onboarding, how easy should it be to change rates?
   - Instant updates?
   - Pending approval?
   - Affect existing contracts?

7. **Passive to Active Switch**: Can passive recipients later become active?
   - Yes, with new onboarding flow?
   - Seamless upgrade path?

---

## Next Steps

**Phase 1: Design Review**
- Review this document
- Answer open questions
- Finalize step flow

**Phase 2: UI/UX Design**
- Create wireframes for each step
- Design system components (step indicator, progress bar)
- Mobile adaptations

**Phase 3: Implementation**
- Build multi-step wizard container
- Create individual step components
- Implement validation
- Add persistence layer

**Phase 4: Testing**
- User testing with real maintainers
- Accessibility audit
- Mobile testing
- Edge case handling

---

## Alternative Considerations

### Quick Start vs. Comprehensive
- Offer "Quick Registration" (minimal fields) with "Complete Profile Later"
- Trade-off: Easier entry vs. incomplete data

### Guided vs. Self-Service
- AI-assisted suggestions for rates based on experience
- Trade-off: Helpful vs. privacy concerns

### Templates
- Pre-filled templates for common scenarios
- "I'm a solo maintainer" vs. "I'm part of a team"
- Trade-off: Speed vs. customization

---

**Document Status:** Draft for review
**Last Updated:** 2025-10-23
**Next Review:** After initial feedback
