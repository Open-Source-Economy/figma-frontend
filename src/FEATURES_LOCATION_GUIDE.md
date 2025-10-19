# Feature Location Guide

## ✅ YouTube Video Support

### Where to See It:

1. **Blog Post with Video:**
   - Navigate to: Blog → "The Future of Open Source Funding"
   - Scroll down to "The Path Forward" section (H2 heading)
   - You'll see a YouTube video embed with caption

2. **Code Implementation:**
   - **File:** `/components/pages/BlogPostPage.tsx`
   - **Function:** `BlogContentRenderer` (line 371)
   - **Video Rendering:** Lines 509-528
   - **YouTube URL Parser:** Lines 409-427

3. **Data Structure:**
   - **File:** `/data/blogData.ts`
   - **Interface:** `BlogContent` (lines 1-13) - includes `videoId` field
   - **Example:** First blog post, around line 247

### How to Use in Blog Posts:

```typescript
{
  type: 'video',
  content: 'dQw4w9WgXcQ',  // YouTube video ID or full URL
  caption: 'Optional video description'
}
```

---

## ✅ All Heading Levels (H1-H6)

### Where to See Them:

1. **In a Real Blog Post:**
   - Navigate to: Blog → "The Future of Open Source Funding"
   - Scroll to the end - "The Path Forward" section
   - You'll see a complete hierarchy:
     - **H2:** "The Path Forward"
     - **H3:** "Building a Sustainable Future"  
     - **H4:** "Enterprise Adoption Strategy"
     - **H5:** "Policy and Governance Framework"
     - **H6:** "IMPLEMENTATION CHECKLIST"

2. **Dedicated Demo Page:**
   - **File:** `/components/examples/HeadingLevelsDemo.tsx`
   - **Access:** Currently imported in App.tsx
   - Shows all 6 levels with specifications and usage guidelines

3. **Code Implementation:**
   - **File:** `/components/pages/BlogPostPage.tsx`
   - **Lines:** 440-451 (Heading rendering with dynamic level)

4. **Typography System:**
   - **File:** `/styles/globals.css`
   - **Lines:** 220-257 (All heading definitions)

### Heading Specifications:

From the CSS file (`/styles/globals.css`):

- **H1:** 30px (1.875rem), Semibold (600), Line Height 1.375, Letter Spacing -0.025em
- **H2:** 24px (1.5rem), Semibold (600), Line Height 1.375, Letter Spacing -0.025em  
- **H3:** 20px (1.25rem), Medium (500), Line Height 1.5, Letter Spacing 0em
- **H4:** 18px (1.125rem), Medium (500), Line Height 1.5, Letter Spacing 0em
- **H5:** 16px (1rem), Medium (500), Line Height 1.5, Letter Spacing 0em
- **H6:** 14px (0.875rem), Medium (500), Line Height 1.5, Letter Spacing 0.025em, UPPERCASE

### How to Use in Blog Posts:

```typescript
{
  type: 'heading',
  content: 'Your Heading Text',
  level: 2  // Can be 2, 3, 4, 5, or 6
}
```

---

## ✅ Quote Attribution

### Where to See It:

1. **In Blog Posts:**
   - Any blog post with quotes now shows author name and role
   - Example: "The Future of Open Source Funding" - quote by James Rodriguez

2. **Code Implementation:**
   - **File:** `/components/pages/BlogPostPage.tsx`
   - **Lines:** 471-495 (Quote rendering with author/role)

3. **Data Structure:**
   - **File:** `/data/blogData.ts`
   - **Interface:** `BlogContent` includes `author` and `role` fields

### How to Use:

```typescript
{
  type: 'quote',
  content: 'The quote text goes here...',
  author: 'Jane Doe',           // Optional
  role: 'Chief Technology Officer'  // Optional
}
```

---

## Quick Navigation

**To see everything in action:**

1. Run your app
2. Navigate to **Blog** (from the header menu)
3. Click on **"The Future of Open Source Funding"** (first post)
4. Scroll down to see:
   - Various heading levels (H2-H6)
   - A YouTube video embed
   - Quotes with author attribution
   - Images with captions
   - Code blocks
   - Lists
   - Inline links

**To access the heading levels demo page:**
- You can navigate via URL or add a link in your app navigation
- The component is ready at `/components/examples/HeadingLevelsDemo.tsx`
- It's already imported in `App.tsx` with route handler for 'heading-levels'

---

## Summary of New Content Types

Your blog system now supports:

1. ✅ **heading** - Levels 2-6 (H2-H6)
2. ✅ **paragraph** - With inline HTML links support
3. ✅ **subtitle** - Styled introductory text
4. ✅ **list** - Bullet point lists
5. ✅ **quote** - With optional author and role
6. ✅ **code** - Code blocks with syntax
7. ✅ **image** - Images with captions
8. ✅ **video** - YouTube embeds with captions (NEW!)

All content types are fully styled to match your premium dark theme with navy backgrounds, coral accents, and professional typography.
