# Contact Form States - Visual Guide

## State Overview

The contact form has comprehensive error and success handling that provides clear visual feedback to users at every stage of the submission process.

---

## 1. Default State (Idle)

**What it looks like:**
- Clean form with all fields ready for input
- Demo toggle panel at top (remove in production)
- "Send Message" button with Send icon
- Privacy policy acknowledgment at bottom

**User actions:**
- Fill out form fields
- Toggle demo error mode (optional)
- Click submit when ready

---

## 2. Loading State

**What it looks like:**
- Submit button shows spinning Loader2 icon
- Button text changes to "Sending..."
- Button is disabled (prevents double-submission)
- All form fields remain visible

**Duration:**
- Shows during API call (simulated 1.5 seconds in demo)

---

## 3. Success State - Inline Alert

**What it looks like:**
```
┌─────────────────────────────────────────────┐
│ ✓ Success!                                  │
│ Your form has been submitted successfully.  │
│ We'll get back to you within 24-48 hours.  │
└─────────────────────────────────────────────┘
```

**Visual details:**
- Green background (`brand-success/10`)
- Green border (`border-brand-success`)
- CheckCircle2 icon in green
- Appears above the form
- Form is still visible below

**Purpose:**
- Immediate confirmation
- User can see what they submitted
- Transitions to full success screen

---

## 4. Success State - Full Screen

**What it looks like:**
```
┌───────────────────────────────────────┐
│                                       │
│          ┌───────┐                    │
│          │   ✓   │   (large icon)     │
│          └───────┘                    │
│                                       │
│          Thank You!                   │
│                                       │
│   We've received your message and     │
│   will get back to you within         │
│   24-48 hours.                        │
│                                       │
│   [We'll include a Calendly link...]  │
│   (if meeting was requested)          │
│                                       │
│   [ Submit Another ] [ Back to Home ] │
│                                       │
└───────────────────────────────────────┘
```

**Visual details:**
- Centered card with generous padding
- Large CheckCircle2 icon in success badge (16x16 container)
- Green border on card
- Two action buttons for next steps
- Personalized message if meeting requested

---

## 5. Error State

**What it looks like:**
```
┌──────────────────────────────────────────────┐
│ ⚠ Submission Failed                          │
│ Unable to submit your form. The server       │
│ encountered an error processing your         │
│ request. Please try again later or contact   │
│ support@opensourceeconomy.org                │
└──────────────────────────────────────────────┘

[Form remains visible below with all data preserved]
```

**Visual details:**
- Red background (`brand-error/10`)
- Red border (`border-brand-error`)
- AlertCircle icon in red
- Appears above the form
- Form data is preserved
- User can immediately retry

**User actions:**
- Error clears automatically when user starts typing
- User can correct and resubmit
- Contact support if issue persists

---

## 6. Demo Mode Panel

**What it looks like when inactive:**
```
┌───────────────────────────────────────────────┐
│ 🎭 Demo Mode                   [ Test Error ] │
│ Click to test error handling on next          │
│ submission                                     │
└───────────────────────────────────────────────┘
```

**What it looks like when active:**
```
┌───────────────────────────────────────────────┐
│ 🎭 Demo Mode [Active]        [ Disable Error ]│
│ Next form submission will simulate a           │
│ server error                                   │
└───────────────────────────────────────────────┘
```

**Visual details:**
- Light background (`brand-neutral-200`)
- Red "Active" badge when error mode enabled
- Button changes from outline to default variant
- Icons: AlertCircle (test) and XCircle (disable)

**Important:**
- **REMOVE THIS PANEL BEFORE PRODUCTION**
- It's only for testing/demonstration
- Helps QA verify error handling

---

## Color System Used

### Success Colors
- Background: `bg-brand-success/10` (subtle green tint)
- Border: `border-brand-success` (#10b981)
- Text: `text-brand-success`
- Icon: CheckCircle2 in `text-brand-success`

### Error Colors
- Background: `bg-brand-error/10` (subtle red tint)
- Border: `border-brand-error` (#ef4444)
- Text: `text-brand-error`
- Icon: AlertCircle in `text-brand-error`

### Loading Colors
- Icon: Loader2 with `animate-spin`
- Uses button's default styling

### Demo Panel Colors
- Background: `bg-brand-neutral-200`
- Border: `border-brand-neutral-300`
- Active badge: `bg-brand-error text-white`

---

## Responsive Behavior

### Mobile (< 768px)
- Form switches to single column
- Alerts stack nicely above form
- Buttons remain full-width
- Demo panel text wraps gracefully

### Tablet (768px - 1024px)
- Form uses 2-column grid where appropriate
- Alerts maintain full width
- Optimal reading width

### Desktop (> 1024px)
- Form centered with max-width
- All elements maintain proportions
- Comfortable spacing throughout

---

## Animation Details

### Loading State
- Loader2 icon spins continuously
- Smooth rotation animation
- No jarring transitions

### Alert Appearance
- Alerts appear instantly (no fade-in)
- Clear, immediate feedback
- Screen readers announce them

### Success Screen Transition
- Instant replacement of form
- No loading or transition
- Clear state change

---

## Accessibility Features

### Screen Readers
- Alerts use `role="alert"` for announcements
- Success/error states are immediately announced
- Button states clearly communicated

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order maintained
- Error doesn't trap focus

### Color Contrast
- All text meets WCAG AA standards
- Icons have sufficient contrast
- Success green: bright enough on dark backgrounds
- Error red: clearly distinguishable

### Focus Management
- Focus preserved through state changes
- Submit button disabled state clear
- No focus loss on error

---

## Testing Checklist

### ✅ Success Flow
- [ ] Submit form with valid data
- [ ] See loading spinner
- [ ] See inline success alert
- [ ] Transition to success screen
- [ ] CheckCircle2 icon visible
- [ ] Meeting note shows if requested
- [ ] Both action buttons work

### ✅ Error Flow
- [ ] Enable demo error mode
- [ ] Submit form
- [ ] See loading spinner
- [ ] See inline error alert
- [ ] Form data preserved
- [ ] Error message readable
- [ ] Support email visible
- [ ] Error clears on typing

### ✅ Demo Panel
- [ ] "Test Error" button toggles state
- [ ] "Active" badge appears when on
- [ ] Icons change appropriately
- [ ] Next submission triggers error
- [ ] Error mode auto-disables after use

### ✅ Responsive
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768-1024px)
- [ ] Test on desktop (> 1024px)
- [ ] All states work at all sizes

### ✅ Accessibility
- [ ] Screen reader announces alerts
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast sufficient
- [ ] Disabled states clear

---

## Production Deployment Notes

### Remove Before Launch
```typescript
{/* Demo Error Toggle - Remove in production */}
<div className="mb-6 p-4 bg-brand-neutral-200 border border-brand-neutral-300 rounded-lg">
  {/* ... entire demo panel ... */}
</div>
```

### Update API Integration
Replace the simulated API call in `handleSubmit` with your actual endpoint.

### Error Messages
Map specific API error codes to user-friendly messages:
- Network errors → "Connection issue. Please check your internet."
- Validation errors → Specific field feedback
- Server errors → Generic message with support contact
- Rate limiting → "Too many requests. Please try again in a few minutes."

### Analytics
Add tracking for:
- Form submissions (success)
- Form errors (with error type)
- Field abandonment
- Time to complete
- Demo mode usage (to verify it's removed)
