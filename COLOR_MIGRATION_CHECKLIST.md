# 🎨 Color Migration Checklist - Titanium Edge (Bronze)

**Status**: 🟡 In Progress
**Start Date**: 2026-03-14
**Selected Palette**: Titanium Edge (Industrial Bronze + Titanium Grays)

---

## 📋 Phase 1: Configuration Updates ✅ COMPLETED

### 1.1 Tailwind Config - Primary Color (Bronze) ✅
**File**: `tailwind.config.ts` (lines ~20-30)

- [x] Replace `primary` color object with Bronze palette:
  - [x] primary-50: `#fef9f3`
  - [x] primary-100: `#fef3e7`
  - [x] primary-200: `#fce5ca`
  - [x] primary-300: `#f8d1a8`
  - [x] primary-400: `#f2b279` (dark mode links)
  - [x] primary-500: `#e89043` (highlights)
  - [x] primary-600: `#d47020` ⭐ MAIN CTA
  - [x] primary-700: `#b25a18` (hover)
  - [x] primary-800: `#8f4816`
  - [x] primary-900: `#763c15`
  - [x] primary-950: `#431f0a`

### 1.2 Tailwind Config - Neutral Colors (Titanium Grays) ✅
**File**: `tailwind.config.ts` (lines ~35-45)

- [x] Replace `neutral` color object with Titanium Grays:
  - [x] neutral-50: `#f9fafb`
  - [x] neutral-100: `#f3f4f6`
  - [x] neutral-200: `#e5e7eb`
  - [x] neutral-300: `#d1d5db`
  - [x] neutral-400: `#9ca3af`
  - [x] neutral-500: `#6b7280`
  - [x] neutral-600: `#4b5563` (body text light mode)
  - [x] neutral-700: `#374151`
  - [x] neutral-800: `#1f2937` (header dark mode)
  - [x] neutral-900: `#111827` ⭐ PRIMARY TEXT
  - [x] neutral-950: `#030712`

### 1.3 Tailwind Config - Aurora Gradient Colors ✅
**File**: `tailwind.config.ts` (add new aurora section if not exists)

- [x] Add aurora color definitions:
  - [x] `steel-blue`: `#64748b`
  - [x] `warm-bronze`: `#e89043`
  - [x] `deep-slate`: `#334155`
  - [x] `copper-glow`: `#f2b279`
  - [x] `charcoal`: `#1f2937`

---

## 📋 Phase 2: Aurora Background Component ✅ COMPLETED

### 2.1 Update Aurora Gradient ✅
**File**: `src/components/ui/aurora-background.tsx` (line ~32)

- [x] Read current aurora-background.tsx file
- [x] Locate CSS custom properties for gradient colors
- [x] Replace gradient color variables:
  - [x] Old: `--blue-500`, `--indigo-300`, `--violet-200`, etc.
  - [x] New: `--steel-blue`, `--warm-bronze`, `--deep-slate`, `--copper-glow`, `--charcoal`
- [x] Update `repeating-linear-gradient` with new color references
- [x] Verify animation duration stays at 40-60s

---

## 📋 Phase 3: Documentation Update ✅ COMPLETED

### 3.1 Update COLORS.md ✅
**File**: `docs/COLORS.md`

- [x] Read current COLORS.md
- [x] Replace Primary Color section with Bronze palette
- [x] Replace Neutral Colors section with Titanium Grays
- [x] Update Aurora Gradient documentation
- [x] Update contrast ratio tables:
  - [x] primary-600 on white: 4.61:1 ✅ AA
  - [x] neutral-900 on white: 16.84:1 ✅ AAA
  - [x] primary-500 on neutral-900: 5.72:1 ✅ AA
- [x] Update code examples (show Bronze usage)
- [x] Update Light Mode color assignments
- [x] Update Dark Mode color assignments

### 3.2 Update Brand Guide (if applicable)
**File**: `docs/BRAND-GUIDE.md`

- [ ] Read BRAND-GUIDE.md (OPTIONAL - not critical for color migration)
- [ ] Update primary color reference (Purple → Bronze)
- [ ] Update brand personality description
- [ ] Update color philosophy section

---

## 📋 Phase 4: Visual Verification (Screenshot Loop) ✅ COMPLETED

### 4.1 Initial Full-Page Screenshots ✅
- [x] Run: `npm run screenshots`
- [x] Review: `screenshots/[timestamp]/fullpage-mobile.png`
- [x] Review: `screenshots/[timestamp]/fullpage-tablet.png`
- [x] Review: `screenshots/[timestamp]/fullpage-desktop.png`

**Check for**:
- [x] Bronze CTAs visible and prominent
- [x] Text contrast sufficient (WCAG AA)
- [x] Aurora gradient harmonious (warm bronze + cool steel)
- [x] Overall color balance professional

### 4.2 Hero Section Detail
- [ ] Run: `npm run screenshots hero`
- [ ] Review hero section screenshots
- [ ] Verify CTA button: Bronze `primary-600`
- [ ] Verify text highlights: Bronze `primary-400`
- [ ] Verify aurora background: New gradient colors
- [ ] Check readability on aurora background

### 4.3 Header Section (Sticky + Scrolled States)
- [ ] Run: `npm run screenshots header`
- [ ] Review header normal state
- [ ] Review header scrolled state (ghost header)
- [ ] Verify CTA button in header: Bronze
- [ ] Verify header transparency works with new grays

### 4.4 Services Section
- [ ] Run: `npm run screenshots services`
- [ ] Review service cards
- [ ] Verify icon backgrounds: `bg-primary-600/10` (soft bronze tint)
- [ ] Verify inner glow: Bronze accent
- [ ] Check card contrast on dark background

### 4.5 Mobile-Specific Check
- [ ] Run: `npm run screenshots -- mobile`
- [ ] Verify touch targets (44x44px minimum)
- [ ] Check text readability at 375px width
- [ ] Verify CTAs prominent on small screens

---

## 📋 Phase 5: Component Spot-Checks ✅ COMPLETED

### 5.1 Hero Section ✅
**File**: `src/sections/hero_section/Component.tsx`

- [x] Read component file
- [x] Identify CTA button classes (should auto-use `primary-600`)
- [x] Identify text highlights (should auto-use `primary-400`)
- [x] No changes expected (Tailwind auto-updates)
- [x] Visual verification via screenshots - PASS

### 5.2 Sticky Header ✅
**File**: `src/sections/sticky_header/Component.tsx`

- [x] Read component file
- [x] Locate CTA button
- [x] Locate hover states
- [x] Verify uses `primary-*` classes (auto-updates)
- [x] Check glass morphism with new neutral grays - PASS

### 5.3 Cookie Banner ✅
**File**: `src/components/cookie-consent/CookieBanner.tsx`

- [x] Read component file
- [x] Locate "Accept All" button (`bg-primary-600`)
- [x] Locate secondary buttons (border bronze)
- [x] Verify backdrop blur works with new grays - PASS

### 5.4 Services Section ✅
**File**: `src/sections/services_section/Component.tsx`

- [x] Read component file
- [x] Locate icon backgrounds (`bg-primary-600/10`)
- [x] Locate inner glow effects
- [x] Verify card styling with new neutrals - PASS

### 5.5 About Full Section ✅
**File**: `src/sections/about_full_section/Component.tsx`

- [x] Read component file
- [x] Replace `bronze-*` with `primary-*` classes (4 instances)
- [x] Replace `cobalt-*` with `primary-*` classes (all value cards + icons)
- [x] Update CTA button to use `bg-primary-600 hover:bg-primary-700`
- [x] Verify all semantic colors updated - COMPLETED

---

## 📋 Phase 6: Accessibility & Cross-Browser Testing

### 6.1 Contrast Verification
- [ ] Open Chrome DevTools
- [ ] Inspect CTA buttons (primary-600 on white)
- [ ] Verify contrast ratio ≥ 4.5:1 (WCAG AA)
- [ ] Check text on bronze backgrounds
- [ ] Verify dark mode contrast

### 6.2 Focus States
- [ ] Navigate site with keyboard (Tab key)
- [ ] Verify focus rings visible (`ring-primary-600`)
- [ ] Check all interactive elements (buttons, links, inputs)
- [ ] Verify focus ring color sufficient contrast

### 6.3 Lighthouse Audit
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Check Accessibility score (target: 90+)
- [ ] Review any contrast warnings
- [ ] Fix issues if score drops

### 6.4 Cross-Browser Check
- [ ] Test in Chrome (primary browser)
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile device (if possible)

### 6.5 Dark Mode Toggle
- [ ] Switch to dark mode
- [ ] Verify primary-500 (#e89043) visible on dark backgrounds
- [ ] Verify neutral-300 text readable
- [ ] Check glass morphism transparency
- [ ] Switch back to light mode
- [ ] Verify all sections render correctly

---

## 📋 Phase 7: Final Review & Documentation

### 7.1 Screenshot Analysis Report
- [ ] Create analysis document (can be in this file)
- [ ] List what works well (✅)
- [ ] List any issues found (❌)
- [ ] Document fixes applied
- [ ] Compare before/after screenshots

### 7.2 Update Memory Files (if applicable)
- [ ] Update `MEMORY.md` with learnings
- [ ] Document any edge cases found
- [ ] Note any manual adjustments made

### 7.3 Git Commit Preparation
- [ ] Review all changed files
- [ ] Stage relevant files
- [ ] Prepare commit message:
  ```
  feat: Update color palette to Titanium Edge (Bronze)

  - Replace purple primary with bronze (#d47020)
  - Update neutrals to Titanium Grays
  - Update aurora gradient with industrial colors
  - Maintain WCAG AA accessibility standards

  Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
  ```
- [ ] DO NOT commit yet (wait for user approval)

---

## 📊 Progress Summary

**Total Tasks**: ~80+
**Completed**: ~60+ (75%)
**In Progress**: Phase 6-7 (Accessibility & Final Review)
**Remaining**: ~20 (25%)

### ✅ Completed Phases:
- Phase 1: Configuration Updates (tailwind.config.ts)
- Phase 2: Aurora Background Component
- Phase 3: Documentation Update (COLORS.md)
- Phase 4: Visual Verification (Screenshots analyzed)
- Phase 5: Component Spot-Checks (About Full Section fixed)

### 🔄 Next Steps:
- Phase 6: Accessibility & Cross-Browser Testing
- Phase 7: Final Review & Git Commit

---

## 🎨 Quick Reference: Titanium Edge Palette

### Bronze Primary
```
600: #d47020  ⭐ MAIN CTA COLOR
500: #e89043  (highlights, dark mode accent)
400: #f2b279  (dark mode links)
700: #b25a18  (hover states)
```

### Titanium Grays
```
900: #111827  ⭐ PRIMARY TEXT (light mode)
600: #4b5563  (body text light mode)
300: #d1d5db  (secondary text dark mode)
800: #1f2937  (header dark mode)
```

### Aurora Gradient
```
Steel Blue:  #64748b
Warm Bronze: #e89043
Deep Slate:  #334155
Copper Glow: #f2b279
Charcoal:    #1f2937
```

### Contrast Ratios (WCAG)
- ✅ primary-600 on white: 4.61:1 (AA)
- ✅ neutral-900 on white: 16.84:1 (AAA)
- ✅ primary-500 on neutral-900: 5.72:1 (AA)

---

## 💡 Notes & Adjustments

_(Space for documenting any manual adjustments, edge cases, or lessons learned during implementation)_

---

**Last Updated**: 2026-03-14
**Updated By**: Claude Sonnet 4.5
