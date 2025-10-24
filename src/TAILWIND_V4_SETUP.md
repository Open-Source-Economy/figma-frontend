# Tailwind CSS v4 Setup - Open Source Economy

## ✅ You're Using Tailwind CSS v4

This project uses **Tailwind CSS v4** (the latest version), which has a simpler, more powerful setup than v3.

### Key Differences from v3:

| Tailwind v3 | Tailwind v4 |
|-------------|-------------|
| `@tailwind base;` | `@import "tailwindcss";` |
| Requires `tailwind.config.js` | No config file needed (optional) |
| Requires `postcss.config.js` | Handled automatically |
| Uses `theme.extend.colors` in JS | Define colors as CSS variables |
| Complex color syntax | Simple `--color-name: #hex;` |

## 🎨 How Colors Work in v4

### 1. Define Colors in `globals.css`

```css
:root {
  --brand-primary: #a0522d;    /* Sienna */
  --brand-accent: #ff7f50;     /* Coral */
  --background: #0f172a;       /* Navy */
}
```

### 2. Use Them Automatically

Tailwind v4 automatically converts CSS variables to utility classes:

- `--brand-primary` → `bg-brand-primary`, `text-brand-primary`, `border-brand-primary`
- `--background` → `bg-background`
- `--brand-accent` → `bg-brand-accent`, `text-brand-accent`

**No configuration needed!** Just define the variable and use it.

## 📁 Required Files

### 1. `/styles/globals.css` ✅

Must start with:
```css
@import "tailwindcss";
```

This single line replaces the old three `@tailwind` directives.

### 2. `/App.tsx` ✅

Must import the CSS:
```tsx
import './styles/globals.css';
```

This loads all your Tailwind styles and custom variables.

### 3. No Config Files Needed! ✅

Unlike v3, you **don't need**:
- ❌ `tailwind.config.js`
- ❌ `postcss.config.js`
- ❌ `vite.config.ts` modifications

Everything works automatically in Figma Make!

## 🎯 Your Current Color System

### Brand Colors
```css
--brand-primary: #a0522d;         /* Sienna brown */
--brand-secondary: #0f172a;       /* Deep navy */
--brand-accent: #ff7f50;          /* Coral orange */
--brand-highlight: #daa520;       /* Goldenrod */
```

### Usage Examples
```tsx
// Backgrounds
<div className="bg-brand-primary">         {/* Sienna background */}
<div className="bg-brand-secondary">       {/* Navy background */}
<div className="bg-brand-accent">          {/* Coral background */}

// Text
<h1 className="text-brand-accent">        {/* Coral text */}
<p className="text-brand-primary">        {/* Sienna text */}

// Borders
<div className="border-brand-accent">     {/* Coral border */}

// System colors (auto-mapped)
<div className="bg-background">           {/* Uses --background */}
<div className="bg-card">                 {/* Uses --card */}
<p className="text-foreground">           {/* Uses --foreground */}
```

## 🔧 Troubleshooting

### "I see black and white instead of colors"

**Check 1:** Verify `globals.css` starts with:
```css
@import "tailwindcss";
```

**Check 2:** Verify `App.tsx` imports CSS:
```tsx
import './styles/globals.css';
```

**Check 3:** Refresh preview in Figma Make

### "My custom color isn't working"

Make sure you:
1. Defined it in `:root` in `globals.css`
2. Used double dashes: `--my-color: #hex;`
3. Used the exact variable name in your class: `bg-my-color`

### "Colors work locally but not in Figma Make"

This shouldn't happen, but if it does:
1. Make sure the CSS import is in `App.tsx`
2. Try adding a small change to trigger rebuild
3. Click "Refresh Preview" in Figma Make

## 📚 Advanced Features

### Custom Variants (v4 only)
```css
@custom-variant dark (&:is(.dark *));
```
This enables dark mode support.

### Theme Inline (optional)
You can use `@theme inline` to define utilities inline:
```css
@theme inline {
  --color-custom: #ff0000;
}
```

### No Purging Needed!
Tailwind v4 automatically tree-shakes unused styles. No configuration needed.

## 🎉 What's Fixed

✅ Added `@import "tailwindcss";` to `globals.css`
✅ Added CSS import to `App.tsx`
✅ Your color system is now active!

## 🎨 Expected Result

You should now see:
- **Deep navy background** (#0f172a)
- **Rich blue cards** (#1a2942)
- **Coral orange accents** (#ff7f50)
- **Sienna brown primary** (#a0522d)
- **Goldenrod highlights** (#daa520)
- **Light gray text** (#f1f5f9)

## 🔗 Resources

- [Tailwind CSS v4 Beta Docs](https://tailwindcss.com/docs/v4-beta)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [CSS Variable Reference](https://tailwindcss.com/docs/customizing-colors)

---

**Last Updated:** Tailwind CSS v4 setup completed with full color system integration.
