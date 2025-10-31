# Developer Onboarding Workflow - REFINED PROPOSAL

## Executive Summary

After analyzing the requirements, I recommend a **5-step progressive wizard** with smart defaults and a flexible service configuration approach. This balances completeness with usability while handling the complexity of multi-project, multi-service configurations.

---

## 🎯 Refined Step Flow (5 Steps)

### **Step 1: Identity & Contact**
**Goal:** Establish who they are and how to reach them

**Fields:**
- Full Name* (text input)
- Email Address* (email input with validation)
- GitHub Username* (text input with real-time verification)

**Features:**
- GitHub API integration to verify username exists
- Auto-check for existing account (email or GitHub username)
- Visual feedback on verification (green checkmark)
- Privacy assurance message

**Validation:**
- Email format and uniqueness
- GitHub username exists (API call)
- No duplicate registration

**UI Notes:**
- Clean, focused single-column layout
- Large input fields with modern form styling
- Progress: "Step 1 of 5"
- Primary CTA: "Continue"

---

### **Step 2: Your Projects**
**Goal:** Link maintainer to their open source projects

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  Your Open Source Projects                      │
│                                                  │
│  [Search for project...]  [+ Add Custom]        │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │  React                                   │   │
│  │  facebook/react                          │   │
│  │  ─────────────────────────────────────   │   │
│  │  Your Role: [Maintainer ▼]              │   │
│  │  Main Branch Access: [Full write ▼]     │   │
│  │  Since: [2020 ▼] (optional)             │   │
│  │                              [Remove]    │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  [+ Add Another Project]                        │
└─────────────────────────────────────────────────┘
```

**Fields per Project:**
- Project Search/Name* (autocomplete with GitHub API)
- Your Role* (dropdown: Maintainer, Core Contributor, Contributor, Other)
- Main Branch Access* (dropdown: Full write access, Write with review, Read-only)
- Contributing Since (optional year dropdown)

**Features:**
- Autocomplete search using GitHub API
- Option to add unlisted projects
- Minimum 1 project required
- Can add multiple projects
- Each project becomes a removable card
- Drag to reorder (optional enhancement)

**Smart Defaults:**
- If GitHub API shows commit access → suggest "Maintainer" + "Full write"
- If no commit access → suggest "Contributor" + "Read-only"

**Validation:**
- At least 1 project required
- Project name required for each entry
- Role and access level required for each

**UI Notes:**
- Card-based layout for added projects
- Clear visual hierarchy
- Easy to add/remove projects
- Progress: "Step 2 of 5"

---

### **Step 3: Participation Model** 🔀
**Goal:** Choose between active service provision or passive funding

**Layout:**
```
┌────────────────────────────────────────────────────────────┐
│  How would you like to participate?                        │
│                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│  │ 🚀 Active Provider      │  │ 📊 Passive Recipient    │ │
│  │                         │  │                         │ │
│  │ Offer paid services     │  │ Receive funding based   │ │
│  │ to enterprises          │  │ on project usage        │ │
│  │                         │  │                         │ │
│  │ • Set your own rates    │  │ • No service commitments│ │
│  │ • Direct client work    │  │ • Simpler approach      │ │
│  │ • Higher potential      │  │ • Ecosystem support     │ │
│  │                         │  │                         │ │
│  │ [Select Active] ←       │  │     [Select Passive]    │ │
│  └─────────────────────────┘  └─────────────────────────┘ │
│                                                             │
│  💡 You can change this later in your settings              │
└────────────────────────────────────────────────────────────┘
```

**Options:**
1. **Active Service Provider** (default, recommended)
   - Provide paid services to enterprises
   - Configure rates and availability
   - Leads to Steps 4-5

2. **Passive Recipient**
   - Receive ecosystem funding only
   - No service commitments
   - Skips to Step 6 (Review)

**Features:**
- Large, clickable cards with icons
- Clear benefit bullets
- "Learn more" expandable sections
- Visual indication of selection
- Reassurance that choice can be changed

**UI Notes:**
- Side-by-side cards on desktop
- Stacked cards on mobile
- Hover effects and smooth transitions
- Progress: "Step 3 of 5"

**Next Step Logic:**
- If Active → Go to Step 4
- If Passive → Skip to Step 5 (Review)

---

### **Step 4: Availability & Base Rate** 
**Goal:** Set capacity and default pricing (Active Providers Only)

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  Your Availability                               │
│                                                  │
│  Average Weekly Hours for Client Work*          │
│  ┌────────────────────────────────────────┐    │
│  │ ●━━━━━━━━━━━━○──────────────────       │    │
│  │ 15 hours/week                           │    │
│  └────────────────────────────────────────┘    │
│  💡 Part-time availability (~60 hrs/month)      │
│                                                  │
│  Your Base Hourly Rate*                         │
│  ┌──────┐  ┌──────────────────────────┐        │
│  │ USD ▼│  │ $ 150                     │        │
│  └──────┘  └──────────────────────────┘        │
│  📊 Market rate for senior maintainers: $120-200│
│                                                  │
│  Minimum Engagement (Optional)                  │
│  ┌──────────────────────────┐                   │
│  │ 5 hours per engagement   │                   │
│  └──────────────────────────┘                   │
└─────────────────────────────────────────────────┘
```

**Fields:**
- **Average Weekly Hours*** (slider: 0-40, or text input)
  - Visual indicator: 0-10 = Part-time, 10-20 = Regular, 20-40 = Full-time
  - Helper: Shows monthly/yearly equivalents
  
- **Base Hourly Rate*** (number input with currency)
  - Currency selector (USD, EUR, CHF)
  - Market rate guidance tooltip
  - Real-time calculation preview
  
- **Minimum Engagement** (optional number input)
  - Minimum hours per project/contract
  - Helper text explaining purpose

**Features:**
- Interactive slider with real-time feedback
- Currency conversion hints (optional)
- Benchmark rate suggestions
- Privacy assurance about rate visibility
- "This is your default - you can customize per service in the next step"

**Smart Defaults:**
- 10 hours/week (reasonable part-time)
- $150/hour USD (mid-range)
- USD currency

**Validation:**
- Hours: 1-40 range
- Rate: > 0, reasonable maximum ($1000/hr)
- Minimum engagement: optional, if provided must be > 0

**UI Notes:**
- Large, touch-friendly slider
- Clear typography hierarchy
- Helpful context without clutter
- Progress: "Step 4 of 5"

---

### **Step 5: Service Configuration** ⚡
**Goal:** Define which services for which projects at what rates (Active Only)

**THE KEY CHALLENGE:** If someone maintains 5 projects and offers 10 services, that's 50 potential configurations!

**RECOMMENDED SOLUTION: Template-Based Approach**

**Layout - Option A: "Apply to All" Default (RECOMMENDED)**

```
┌────────────────────────────────────────────────────────────┐
│  Configure Your Services                                    │
│                                                              │
│  Select which services you'd like to offer:                 │
│  ☑ Apply all services to all projects by default           │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Development Services                                  │  │
│  │  ────────────────────────────────────────────────────  │  │
│  │  ☑ Bug Fixes & Patches              All Projects  ▼   │  │
│  │     Rate: [Use base rate ($150)]    Custom: [$___]    │  │
│  │                                                        │  │
│  │  ☑ Feature Development              All Projects  ▼   │  │
│  │     Rate: [Use base rate ($150)]    Custom: [$___]    │  │
│  │                                                        │  │
│  │  ☑ Performance Optimization         All Projects  ▼   │  │
│  │     Rate: [Use base rate ($150)]    Custom: [$___]    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Review & Consulting                                   │  │
│  │  ────────────────────────────────────────────────────  │  │
│  │  ☑ Code Reviews                     All Projects  ▼   │  │
│  │     Rate: [Use base rate ($150)]    Custom: [$120]    │  │
│  │                                                        │  │
│  │  ☐ Architecture Consulting          -              -   │  │
│  │                                                        │  │
│  │  ☐ Security Audits                  -              -   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  💡 Tip: Start broad, you can customize later!              │
│  📊 You've selected 4 services across 3 projects            │
└────────────────────────────────────────────────────────────┘
```

**Service Categories & Types:**

**1. Development Services**
- Bug Fixes & Patches
- Feature Development
- Performance Optimization
- Dependency Updates
- Migration Support

**2. Review & Quality**
- Code Reviews
- Architecture Review
- Security Audits
- Quality Assurance

**3. Consulting & Support**
- Technical Consulting
- Integration Support
- Best Practices Guidance
- Priority Support

**4. Knowledge Transfer**
- Training Sessions
- Documentation
- Workshops
- Onboarding Support

**Per Service:**
- ☑ Enable/Disable toggle (checkbox)
- Project Scope dropdown:
  - "All Projects" (default)
  - Individual project selection (multi-select)
- Rate options:
  - Radio: "Use base rate ($X)" (default)
  - Radio: "Custom rate" → Number input

**Smart Features:**
1. **"Apply to All" Master Toggle**
   - One click enables common services for all projects
   - Easy starting point
   
2. **Category-Based Organization**
   - Services grouped logically
   - Collapsible categories
   
3. **Default to Base Rate**
   - Most services use base rate
   - Only override when needed
   
4. **Progressive Disclosure**
   - Start with common services visible
   - "Show more services" to expand
   
5. **Bulk Actions**
   - "Enable all Development services"
   - "Set same rate for all Review services"
   
6. **Summary Counter**
   - "You've enabled 8 services"
   - "Available across 3 projects"
   - "Total configurations: 12"

**Alternative Layout - Option B: Project-First Tabs**

```
┌────────────────────────────────────────────────────┐
│  [All Projects] [React] [Vue.js] [TypeScript]      │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  Services for: All Projects                        │
│                                                     │
│  Development                                       │
│  ☑ Bug Fixes                    $150/hr           │
│  ☑ Feature Development          $150/hr           │
│  ☑ Performance                  $150/hr           │
│                                                     │
│  Consulting                                        │
│  ☑ Code Reviews                 $120/hr           │
│  ☐ Architecture                 -                  │
│                                                     │
│  [Copy to specific projects...]                    │
└────────────────────────────────────────────────────┘
```

**RECOMMENDATION: Use Option A (Service-First with "Apply to All")**

**Why:**
- Simpler cognitive model
- Fewer clicks for common case
- Easy to customize later
- Better mobile experience
- Less overwhelming

**Validation:**
- At least 1 service must be enabled
- If custom rate is selected, must provide value
- Custom rate must be > 0

**UI Notes:**
- Organized, scannable layout
- Clear visual grouping
- Helpful summary feedback
- Progress: "Step 5 of 5"
- Primary CTA: "Review & Submit"

---

### **Step 6: Review & Submit**
**Goal:** Confirm all information and submit

**Layout:**
```
┌──────────────────────────────────────────────────┐
│  Review Your Information                          │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │ 👤 Contact Information          [Edit]     │ │
│  │ John Doe • john@example.com                │ │
│  │ GitHub: @johndoe                           │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │ 📦 Projects (3)                  [Edit]     │ │
│  │ • React - Maintainer                       │ │
│  │ • Vue.js - Core Contributor                │ │
│  │ • TypeScript - Contributor                 │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │ 🚀 Active Service Provider       [Edit]     │ │
│  │ 15 hours/week • $150/hour USD              │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │ ⚡ Services (8 enabled)          [Edit]     │ │
│  │ Bug Fixes, Feature Dev, Code Reviews...    │ │
│  │ Across all 3 projects                      │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ☑ I agree to the Terms of Service*              │
│  ☑ I agree to the Privacy Policy*                │
│  ☐ Send me platform updates (optional)           │
│                                                   │
│  [← Back]              [Submit Application]      │
└──────────────────────────────────────────────────┘
```

**Features:**
- Collapsible summary cards
- Edit button for each section (returns to that step)
- Required agreement checkboxes
- Optional newsletter opt-in
- Clear submission button

**Validation:**
- Both agreement checkboxes must be checked
- All previous steps must be valid

**Post-Submission:**
- Show success confirmation
- Email verification sent
- Next steps guidance
- "What happens next" timeline
- Link to dashboard/profile

---

## 📊 Data Flow Summary

```
Step 1: Identity
  ↓
Step 2: Projects (multiple)
  ↓
Step 3: Participation Model
  ├─→ Active → Step 4
  └─→ Passive → Step 6 (skip 4-5)
        ↓
Step 4: Availability & Rate (Active only)
  ↓
Step 5: Service Config (Active only)
  ↓
Step 6: Review & Submit
  ↓
Success → Dashboard
```

---

## 🎨 UI/UX Principles

### Visual Design
- **Premium dark theme** (consistent with your brand)
- **Navy card backgrounds** (`--brand-card-blue`)
- **Coral orange accents** for CTAs (`--brand-accent`)
- **Warm gradient overlays** for depth
- **Modern form styling** from your design system

### Progressive Disclosure
- Show only what's needed at each step
- Expand/collapse for optional details
- Smart defaults reduce cognitive load

### Feedback & Validation
- Real-time validation where possible
- Clear error messages
- Success states with visual feedback
- Progress indication (Step X of 5)

### Mobile-First
- Single column layouts
- Large touch targets
- Sticky navigation
- Responsive breakpoints

### Accessibility
- Keyboard navigation
- Screen reader support
- Clear focus states
- ARIA labels
- High contrast compliance

---

## 🔧 Technical Implementation

### State Management
```typescript
interface DeveloperOnboardingState {
  currentStep: number; // 1-6
  
  // Step 1
  identity: {
    fullName: string;
    email: string;
    githubUsername: string;
    githubVerified: boolean;
  };
  
  // Step 2
  projects: Array<{
    id: string;
    name: string;
    githubUrl?: string;
    role: 'maintainer' | 'core_contributor' | 'contributor' | 'other';
    mainBranchAccess: 'full_write' | 'write_with_review' | 'read_only';
    contributingSince?: number;
  }>;
  
  // Step 3
  participationModel: 'active' | 'passive' | null;
  
  // Step 4 (Active only)
  availability?: {
    weeklyHours: number;
    baseHourlyRate: number;
    currency: 'USD' | 'EUR' | 'CHF';
    minimumEngagement?: number;
  };
  
  // Step 5 (Active only)
  services?: Array<{
    id: string;
    serviceType: string;
    category: 'development' | 'review' | 'consulting' | 'training';
    enabled: boolean;
    projectScope: 'all' | string[]; // 'all' or project IDs
    useBaseRate: boolean;
    customRate?: number;
  }>;
  
  // Metadata
  completedSteps: number[];
  isDraft: boolean;
  lastSaved?: Date;
}
```

### Persistence Strategy
1. **LocalStorage for Drafts**
   - Auto-save every 30 seconds
   - Save on step navigation
   - Restore on return visit
   
2. **Backend API**
   - Save draft endpoint
   - Submit final application endpoint
   - Retrieve draft endpoint

3. **Cleanup**
   - Clear localStorage on successful submit
   - Optional: Keep for 7 days for incomplete

### API Integration
- **GitHub API**: Verify username, check commit access
- **Email Validation**: Real-time availability check
- **Rate Benchmarking**: Fetch market rate data (optional)

### Components to Build
1. `DeveloperOnboardingWizard` - Main container
2. `WizardStepIndicator` - Progress display
3. `WizardNavigation` - Back/Next buttons
4. `StepIdentity` - Step 1 component
5. `StepProjects` - Step 2 component
6. `StepParticipation` - Step 3 component
7. `StepAvailability` - Step 4 component
8. `StepServices` - Step 5 component
9. `StepReview` - Step 6 component
10. `ProjectCard` - Reusable project entry
11. `ServiceConfigRow` - Reusable service config
12. `OnboardingSuccess` - Success confirmation

---

## 🚀 Answers to Open Questions

### 1. Project Verification
**Recommendation: Hybrid Approach**
- **Automatic**: GitHub API check for public commit access
- **Manual**: Admin review for edge cases
- **Email**: Optional verification email to project contacts
- **Trust-based**: Initial approval, verify later if needed

### 2. Rate Privacy
**Recommendation: Private with Aggregates**
- Individual rates are **private**
- Show aggregated ranges (e.g., "Most maintainers charge $120-200/hr")
- Enterprises see rates when matched, not in directory
- Transparency about privacy policy

### 3. Service Taxonomy
**Recommendation: Predefined + Custom**
- Start with **curated list** of 12-15 common services
- Organize into **4 categories**
- Allow **"Other/Custom"** option with text input
- Periodically review and formalize popular custom services

### 4. Multi-Project Complexity
**Recommendation: Smart Defaults + Bulk Actions**
- **Default**: "Apply to all projects" is checked
- **Bulk actions**: Enable category across all projects
- **Templates**: Save configurations as templates
- **Copy feature**: "Copy services from React to Vue.js"
- Most maintainers offer same services across projects

### 5. Draft Persistence
**Recommendation: 30 Days + Reminders**
- Keep drafts for **30 days**
- Send **reminder email** after 7 days
- **2nd reminder** after 21 days
- Auto-delete after 30 days (with final warning)

### 6. Rate Updates
**Recommendation: Instant with Protections**
- **Instant updates** for new requests
- **Existing contracts** honor original rate
- Option to **"Apply to pending only"** vs **"Apply to all future"**
- Clear messaging about impact
- Rate history tracked for transparency

### 7. Passive to Active Switch
**Recommendation: Seamless Upgrade**
- **Yes, anytime** via dashboard
- Opens **Steps 4-5 only** (skip 1-3)
- Pre-fill with sensible defaults
- Requires review before activation
- Can switch back anytime (reversible)

---

## 📈 Success Metrics

**Completion Rate**
- Target: >70% of users who start complete the flow
- Measure: Drop-off rate per step

**Time to Complete**
- Target: <10 minutes for Active, <5 for Passive
- Measure: Average time per step

**Error Rate**
- Target: <5% validation errors per field
- Measure: Failed submissions

**User Satisfaction**
- Target: >8/10 rating
- Measure: Post-submission survey

---

## 🎯 Implementation Phases

### Phase 1: Core Wizard (Week 1-2)
- [ ] Wizard container with step navigation
- [ ] Steps 1-3 (Identity, Projects, Participation)
- [ ] Step 6 (Review)
- [ ] Basic validation
- [ ] LocalStorage persistence
- [ ] Success confirmation

**Deliverable:** Working onboarding for Passive recipients

### Phase 2: Active Provider Flow (Week 3-4)
- [ ] Step 4 (Availability & Rate)
- [ ] Step 5 (Service Configuration - basic)
- [ ] Enhanced validation
- [ ] Rate calculations
- [ ] Service templates

**Deliverable:** Complete onboarding for Active providers

### Phase 3: Polish & Enhancement (Week 5)
- [ ] GitHub API integration
- [ ] Smart defaults based on GitHub data
- [ ] Bulk actions for services
- [ ] Copy/template features
- [ ] Mobile optimization
- [ ] Accessibility audit

**Deliverable:** Production-ready onboarding

### Phase 4: Advanced Features (Week 6+)
- [ ] Draft resume functionality
- [ ] Email reminders for incomplete
- [ ] Rate benchmarking
- [ ] Service analytics
- [ ] A/B testing variants

**Deliverable:** Optimized, data-driven onboarding

---

## 💡 Key Recommendations

### 1. **Start Simple, Iterate**
- Launch with basic service config (Option A)
- Gather usage data
- Add complexity only if needed

### 2. **Optimize for Common Case**
- Most maintainers will offer similar services across all projects
- Default to "Apply to All"
- Make customization easy but optional

### 3. **Reduce Cognitive Load**
- One focused task per step
- Smart defaults everywhere
- Clear progress indication
- Save frequently

### 4. **Build Trust**
- Clear privacy messaging
- Transparent about what happens next
- Show examples and guidance
- Reassure that changes are possible

### 5. **Mobile Matters**
- Many developers will onboard from mobile
- Touch-friendly controls
- Responsive layouts
- Test thoroughly on devices

---

## 🎨 Design Mockup Priorities

**High Priority:**
1. Step 3 (Participation Model cards)
2. Step 5 (Service Configuration)
3. Step 6 (Review summary)
4. Success confirmation

**Medium Priority:**
5. Step 2 (Project cards)
6. Step 4 (Availability slider)
7. Progress indicator

**Low Priority:**
8. Step 1 (standard form)
9. Error states
10. Empty states

---

## Next Steps for Discussion

1. **Review Step 5 approach** - Do you prefer Service-First or Project-First?
2. **Validate service categories** - Do these 4 categories cover your needs?
3. **Confirm project verification approach** - Is hybrid manual+auto acceptable?
4. **Rate privacy policy** - Confirm private rates approach
5. **Timeline expectations** - Is 6-week phased approach realistic?

---

**Status:** Ready for Review
**Recommendation:** Approve Option A (Service-First) and proceed to Phase 1
**Next:** Create wireframes for Steps 3, 5, and 6
