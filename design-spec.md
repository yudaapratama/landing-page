# Portfolio Landing Page — Design Specification

> **Project:** Personal portfolio landing page  
> **Phase:** Design  
> **Status:** Approved for build  
> **Date:** 2026-05-05

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Sizing](#4-spacing--sizing)
5. [Layout Architecture](#5-layout-architecture)
6. [Section Breakdown](#6-section-breakdown)
7. [Dark / Light Theme Tokens](#7-dark--light-theme-tokens)
8. [Motion & Interaction](#8-motion--interaction)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Accessibility](#10-accessibility)
11. [Design Rules & Anti-Patterns](#11-design-rules--anti-patterns)

---

## 1. Design Philosophy

The page is the product. Every layout decision, every color shift, every spacing rhythm exists to communicate **intentionality**. This is not a template where content is poured into a generic shell — the design language amplifies the person behind the portfolio.

**Key principles:**

- **Restrained warmth.** The palette never shouts. Warm neutrals create a tactile, analog feel that makes the accent sing.
- **Rhythm over grid.** Spacing varies between sections to create a breathing, musical quality. Not every gap is the same.
- **Asymmetry as identity.** The hero avoids the centered-stack cliche. Asymmetric balance signals confidence and originality.
- **Light touch, heavy impact.** Minimal ornament. What little motion exists serves narrative — name reveal, section entrances. Nothing decorative for its own sake.

---

## 2. Color Palette

All colors defined in **OKLCH** for perceptual uniformity. The palette is anchored to a warm hue angle of **65–70** for neutrals (giving a slight paper/warmth tint) and **30–35** for the accent (terracotta range).

### 2.1 Light Theme

| Token | OKLCH Value | Perceptual Role |
|---|---|---|
| `--surface` | `oklch(0.97 0.008 70)` | Warm off-white background |
| `--surface-elevated` | `oklch(0.99 0.004 70)` | Cards, raised elements |
| `--surface-muted` | `oklch(0.93 0.010 70)` | Subtle background shift |
| `--text-primary` | `oklch(0.16 0.012 65)` | Body and heading text |
| `--text-secondary` | `oklch(0.45 0.018 65)` | Supporting copy, metadata |
| `--text-muted` | `oklch(0.62 0.015 65)` | Placeholder, captions |
| `--accent` | `oklch(0.55 0.18 32)` | Primary accent — terracotta |
| `--accent-hover` | `oklch(0.50 0.20 32)` | Accent hover / active |
| `--accent-subtle` | `oklch(0.65 0.10 32)` | Accent backgrounds, underlines |
| `--border` | `oklch(0.87 0.010 70)` | Dividers, subtle strokes |
| `--border-strong` | `oklch(0.78 0.012 70)` | Focus rings, active borders |

### 2.2 Dark Theme

| Token | OKLCH Value | Perceptual Role |
|---|---|---|
| `--surface` | `oklch(0.13 0.010 70)` | Warm near-black background |
| `--surface-elevated` | `oklch(0.17 0.012 70)` | Cards, raised elements |
| `--surface-muted` | `oklch(0.20 0.012 70)` | Subtle background shift |
| `--text-primary` | `oklch(0.93 0.008 70)` | Body and heading text |
| `--text-secondary` | `oklch(0.65 0.015 70)` | Supporting copy, metadata |
| `--text-muted` | `oklch(0.48 0.012 70)` | Placeholder, captions |
| `--accent` | `oklch(0.68 0.16 32)` | Primary accent — lighter terracotta |
| `--accent-hover` | `oklch(0.73 0.14 32)` | Accent hover / active |
| `--accent-subtle` | `oklch(0.55 0.08 32)` | Accent backgrounds, underlines |
| `--border` | `oklch(0.25 0.010 70)` | Dividers, subtle strokes |
| `--border-strong` | `oklch(0.35 0.012 70)` | Focus rings, active borders |

### 2.3 Usage Rules

- **Never use `#000` or `#fff`** — always tint neutrals toward the warm hue (70).
- Accent appears on: links, hover states, section decorations, selected text, and the theme toggle icon.
- Accent never fills large surface areas — it's a pointing device, not a wallpaper.
- The accent hex from `config.js` (user-provided) converts to OKLCH and inherits the luminance/hue adjustments above via CSS `color-mix()` or pre-calculated values.

### 2.4 Acceptable Accent Ranges

For best results, user accent colors should fall within:

- **Hue:** 20–50 (orange-red to warm gold)
- **Chroma:** 0.12–0.22 (saturated but not artificial)
- **Lightness (light):** 0.50–0.62 (readable on light bg)
- **Lightness (dark):** 0.62–0.75 (readable on dark bg)

---

## 3. Typography

### 3.1 Primary Typeface

**Manrope** — a humanist sans-serif with warm, open letterforms. Available in weights 200–800 from Google Fonts.

Reasoning: Not on the restricted list. Warmth complements the tinted palette. Excellent legibility at body sizes. Distinct character without drawing attention to itself.

**Fallback stack:** `'Manrope', 'Segoe UI', system-ui, -apple-system, sans-serif`

### 3.2 Type Scale

Scale ratio: **1.25** (Major Third)

| Step | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `-1` | `0.8rem` (12.8px) | 500 | 1.4 | Captions, meta, small labels |
| `0` (Base) | `1rem` (16px) | 400 | 1.65 | Body text |
| `1` | `1.25rem` (20px) | 400 | 1.5 | Large body, intro paragraphs |
| `2` | `1.563rem` (25px) | 500 | 1.3 | H4, section headings |
| `3` | `1.953rem` (31px) | 600 | 1.2 | H3, project titles |
| `4` | `2.441rem` (39px) | 600 | 1.15 | H2, section headers |
| `5` | `3.052rem` (49px) | 600 | 1.05 | H1, hero title |
| `6` | `3.815rem` (61px) | 700 | 1.0 | Hero name (display) |

**Mobile adjustments:** Scale down by 0.75 ratio at viewports below 640px.

### 3.3 Body Copy Rules

- Max line length: **70ch** (target range 65–75ch)
- Body line height: **1.65** for readability
- Paragraph margin: **1.5rem** between paragraphs
- Links in body text: underline on hover only, accent color

### 3.4 Section Headings

- Preceded by a small uppercase label (e.g., "01 / About") in `--text-muted`, size `-1`, letter-spacing `0.08em`
- Main heading uses `--text-primary`, at the appropriate scale step

---

## 4. Spacing & Sizing

### 4.1 Spacing Scale

Base unit: `0.25rem` (4px)

| Token | Rem | Px | Use |
|---|---|---|---|
| `--space-1` | `0.25rem` | 4px | Micro gaps, icon margins |
| `--space-2` | `0.5rem` | 8px | Tight spacing, small elements |
| `--space-3` | `0.75rem` | 12px | Dense padding |
| `--space-4` | `1rem` | 16px | Body element gaps |
| `--space-5` | `1.25rem` | 20px | Paragraph spacing |
| `--space-6` | `1.5rem` | 24px | Section internal gaps |
| `--space-8` | `2rem` | 32px | Content edge padding |
| `--space-10` | `2.5rem` | 40px | Large element gaps |
| `--space-12` | `3rem` | 48px | Section padding (tight) |
| `--space-16` | `4rem` | 64px | Section padding (standard) |
| `--space-20` | `5rem` | 80px | Section padding (generous) |
| `--space-24` | `6rem` | 96px | Section padding (hero bottom) |

### 4.2 Spacing Rhythm

Spacing varies between sections to avoid monotony:

- **Hero → About:** `--space-24` (96px)
- **About → Work:** `--space-20` (80px)  
- **Work → Contact:** `--space-16` (64px)
- **Contact → Footer:** `--space-12` (48px)

Internal section padding also varies:
- Hero top: `--space-16` (64px) from viewport top
- Hero bottom: `--space-24` (96px)
- About internal: `--space-12` top, `--space-16` bottom
- Work internal: `--space-16` top, `--space-20` bottom
- Contact internal: `--space-12` top, `--space-12` bottom

---

## 5. Layout Architecture

### 5.1 Layout Container

```
. Container (max-width: 1200px, centered)
  |-- padding-left: --space-8
  |-- padding-right: --space-8
  |-- (reduces to --space-4 on mobile)
```

### 5.2 Global Grid

**Desktop (≥1024px):** Implicit asymmetric grid — sections choose their column structure independently.

**Tablet (640–1023px):** Simpler 2-column or single enhanced column.

**Mobile (<640px):** Single column, full-width content.

### 5.3 Page Flow

```
┌─────────────────────────────────┐
│          HERO (100vh)           │
│  ┌──────────┐  ┌──────────┐     │
│  │ Name     │  │ Avatar / │     │
│  │ Title    │  │ Decorative│    │
│  │ Tagline  │  │ Element  │     │
│  │ [CTA]    │  │          │     │
│  └──────────┘  └──────────┘     │
├─────────────────────────────────┤
│          ABOUT (70ch)           │
│  Centered column, bio text      │
├─────────────────────────────────┤
│          WORK / PROJECTS        │
│  ┌─────────────────────────┐    │
│  │ Project 1 (alt layout)  │    │
│  ├─────────────────────────┤    │
│  │ Project 2 (alt layout)  │    │
│  ├─────────────────────────┤    │
│  │ Project 3 (alt layout)  │    │
│  └─────────────────────────┘    │
├─────────────────────────────────┤
│          CONTACT                │
│  Minimal: email + social links  │
├─────────────────────────────────┤
│          FOOTER                 │
│  Small, copyright line          │
└─────────────────────────────────┘
```

---

## 6. Section Breakdown

### 6.1 Hero Section

**Purpose:** Immediate identity statement. The visitor should know who this is and what they do in under 2 seconds.

**Layout (desktop):**
- 2-column asymmetric grid: `3fr 2fr` ratio
- Left column, top: Name in display size (step 6), weight 700
- Left column, below name: Title in step 5, weight 600, `--accent` color
- Left column, below title: Tagline in step 1, weight 400, `--text-secondary`, max-width 45ch
- Left column, bottom: Optional subtle CTA link ("View my work" or resume link)
- Right column: Avatar image (circular, max 280px) or geometric decorative element. On non-avatar configs, a warm-tinted abstract shape or the user's initials in a large, weight 700 treatment
- Bottom of section: Subtle scroll indicator (small arrow or thin line, animating downward)
- Section height: `min-height: 100vh` with `display: flex; flex-direction: column; justify-content: center`
- The decorative element is vertically centered within the right column

**Mobile (<640px):**
- Single column stack
- Name centered (step 5), title below (step 4)
- Tagline centered below, max-width none
- Avatar/decorative element below tagline, smaller (max 180px), centered
- Scroll indicator at bottom

**Entrance animation (hero):**
1. Name: fade up + translateY(30px) → 0, 700ms, cubic-bezier(0.16, 1, 0.3, 1), delay 200ms
2. Title: same, 600ms, delay 400ms
3. Tagline: same, 500ms, delay 600ms
4. Avatar/Decorative: fade in, 700ms, delay 800ms

### 6.2 About Section

**Purpose:** A brief humanizing paragraph. Not a resume — a sense of the person.

**Layout:**
- Section padding: `--space-16` top, `--space-20` bottom
- Narrow centered column, `max-width: 70ch`
- Small section label (e.g., "01 / About") in `--text-muted`, step `-1`, uppercase, letter-spacing 0.08em
- `--space-6` gap between label and heading
- Heading: step 4, weight 600, `--text-primary`
- `--space-8` gap between heading and bio
- Bio paragraph(s): step 0, weight 400, `--text-primary`, line-height 1.65
- Optional: subtle horizontal divider (2px, `--border`, 40% width, centered) after the bio

**Mobile:**
- Same structure, text aligned left
- Divider full width on mobile

### 6.3 Work / Projects Section

**Purpose:** Showcase work in a way that feels curated, not templated.

**Layout (desktop — 3+ projects):**
- Section padding: `--space-20` top, `--space-24` bottom
- Section label + heading (same pattern as About)
- Projects displayed in a staggered vertical list
- **Each project is an asymmetric 2-column row:** `1fr 1fr` with image on one side, text on the other
- Project 1: image left, text right
- Project 2: image right, text left
- Project 3: image left, text right
- (Alternating pattern continues)

**Project card structure:**
```
┌──────────┬────────────────────┐
│          │  Project Title     │  ← Project 1 (img left)
│  Image   │  Description text  │
│  (3:2)   │  [View link →]     │
│          │                    │
└──────────┴────────────────────┘

┌────────────────────┬──────────┐
│  Project Title     │          │  ← Project 2 (img right)
│  Description text  │  Image   │
│  [View link →]     │  (3:2)   │
│                    │          │
└────────────────────┴──────────┘
```

- Image: `aspect-ratio: 3/2`, `object-fit: cover`, rounded corners `8px`, subtle shadow on hover
- Text column: `padding: --space-8` (left or right depending on side), flex-column centered
- Title: step 3, weight 600
- Description: step 0, weight 400, `--text-secondary`, max-width 45ch
- Link: step 0, weight 500, `--accent`, with arrow indicator → on hover
- Gap between projects: `--space-16` (64px)

**Hover effect on project row:**
- Image: slight scale (1.02) + shadow deepen, 400ms ease-out
- Link underline slides in from left, 300ms ease-out
- No lift/translate on the whole card — subtle, restrained

**Tablet (640–1023px):**
- Single column layout for each project
- Image full width on top, text below
- Alternating behavior disabled — all stack the same

**Mobile (<640px):**
- Same as tablet but with smaller padding
- Image aspect ratio maintained
- Text padding reduced to `--space-4`

**Empty state:** If `projects` array is empty, section shows a subtle "Projects coming soon" message in `--text-muted`, centered.

### 6.4 Contact Section

**Purpose:** Make it trivially easy to reach out. No friction.

**Layout:**
- Section padding: `--space-12` top, `--space-12` bottom
- Centered, `max-width: 50ch`
- Small section label: "Get in touch"
- `--space-4` gap
- Email address: step 2, weight 500, `--accent`, displayed as a large clickable link
- `--space-6` below email
- Social links row: icons or plain-text links in `--text-secondary`, step 0, with `--space-6` gap between each
- Hover: all links transition to `--accent`, 300ms ease-out

**Mobile:**
- Same, centered, email at step 1

### 6.5 Footer

**Layout:**
- `padding: --space-8 0`
- `border-top: 1px solid --border`
- `--text-muted`, step `-1`, centered
- Text: "© [Year] [Name]. Crafted with care."
- Year auto-populates via JS `new Date().getFullYear()`

---

## 7. Dark / Light Theme Tokens

### 7.1 CSS Custom Properties Structure

```css
:root {
  /* Light theme (default) */
  --surface: oklch(0.97 0.008 70);
  --surface-elevated: oklch(0.99 0.004 70);
  --surface-muted: oklch(0.93 0.010 70);
  --text-primary: oklch(0.16 0.012 65);
  --text-secondary: oklch(0.45 0.018 65);
  --text-muted: oklch(0.62 0.015 65);
  --accent: oklch(0.55 0.18 32);
  --accent-hover: oklch(0.50 0.20 32);
  --accent-subtle: oklch(0.65 0.10 32);
  --border: oklch(0.87 0.010 70);
  --border-strong: oklch(0.78 0.012 70);
}

[data-theme="dark"] {
  --surface: oklch(0.13 0.010 70);
  --surface-elevated: oklch(0.17 0.012 70);
  --surface-muted: oklch(0.20 0.012 70);
  --text-primary: oklch(0.93 0.008 70);
  --text-secondary: oklch(0.65 0.015 70);
  --text-muted: oklch(0.48 0.012 70);
  --accent: oklch(0.68 0.16 32);
  --accent-hover: oklch(0.73 0.14 32);
  --accent-subtle: oklch(0.55 0.08 32);
  --border: oklch(0.25 0.010 70);
  --border-strong: oklch(0.35 0.012 70);
}
```

### 7.2 Theme Toggle Implementation Notes

- Button in the top-right corner of the viewport, fixed position (`top: --space-6; right: --space-8`)
- Icon: sun/moon glyph, minimal, 24x24px
- Transitions: all themed properties use `transition: background-color 400ms ease-out, color 400ms ease-out, border-color 400ms ease-out`
- Prefers-color-scheme media query respected on first load
- User choice stored in `localStorage`

### 7.3 Accent Color from Config

The config.js `accent_color` hex value is applied by setting a CSS custom property on the document root. The JS reads the hex, optionally adapts luminance for dark mode using a simple lightening function, and sets:

```css
--accent: <converted-oklch>;
--accent-hover: <darkened>;
--accent-subtle: <lightened>;
```

For build simplicity, the provided hex can be used directly in `color` and `background-color` properties, while OKLCH values in the design system serve as defaults. The CSS `color-mix()` function can blend the accent with white/black for hover/subtle variants:

```css
--accent-hover: color-mix(in oklch, var(--accent-hex), black 15%);
--accent-subtle: color-mix(in oklch, var(--accent-hex), white 75%);
```

---

## 8. Motion & Interaction

### 8.1 Motion Curve

All brand-visible motion uses a single, consistent easing curve:

```
cubic-bezier(0.16, 1, 0.3, 1)
```

This is an **exponential ease-out** — starts quickly, decelerates smoothly. It feels natural, never bouncy.

### 8.2 Duration Guidelines

| Element | Duration | Delay | Property |
|---|---|---|---|
| Hero name entrance | 700ms | 200ms | opacity, transform |
| Hero title entrance | 600ms | 400ms | opacity, transform |
| Hero tagline entrance | 500ms | 600ms | opacity, transform |
| Hero decorative element | 700ms | 800ms | opacity |
| Section entrance (scroll) | 500ms | 0ms | opacity, transform |
| Project card entrance | 400ms | staggered 100ms | opacity, transform |
| Link hover | 300ms | 0ms | color |
| Button hover | 300ms | 0ms | color, background |
| Theme toggle | 400ms | 0ms | all themed properties |
| Scroll indicator bounce | 1000ms | infinite | transform |

### 8.3 Scroll-Triggered Animations

Sections animate in when they intersect the viewport:

- **Hero:** Always animated on page load (no scroll trigger needed)
- **About, Work, Contact:** Animate using Intersection Observer
  - Threshold: 0.15 (15% visible)
  - Initial state: `opacity: 0; transform: translateY(24px)`
  - Visible state: `opacity: 1; transform: translateY(0)`
  - Duration: 500ms, curve as above

### 8.4 Reduced Motion

If `prefers-reduced-motion: reduce` is detected:

- All entrance animations resolve instantly (no duration)
- Hover transitions keep 0ms duration
- Scroll indicator animation stops
- Theme toggle remains instant
- The page is fully functional without motion

Implementation: Use a check in JS or `@media (prefers-reduced-motion: reduce)` with `transition: none !important` / `animation: none !important`.

---

## 9. Responsive Breakpoints

| Breakpoint | Name | Layout Behavior |
|---|---|---|
| ≥1024px | Desktop | Full asymmetric hero, alternating project layout |
| 768–1023px | Tablet | Simplified 2-column hero, stacked projects |
| 640–767px | Small tablet | Single-column hero, stacked projects, reduced padding |
| <640px | Mobile | Single column, compact spacing, scaled-down type |

**Edge padding:**
- Desktop: `--space-8` (32px)
- Tablet: `--space-6` (24px)
- Mobile: `--space-4` (16px)

---

## 10. Accessibility

- **Color contrast:** All text/background combinations meet WCAG AA (4.5:1 for body, 3:1 for large text). Design palette verified against this.
- **Focus indicators:** `--border-strong` 2px outline + 4px offset on all interactive elements. Never removed (no `outline: none` without replacement).
- **Semantic HTML:** Use `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>` as appropriate.
- **Images:** All `image_url` values require `alt` text. Config supports alt text per image.
- **Theme toggle:** Accessible button with `aria-label="Switch to dark/light theme"` and `aria-pressed`.
- **Reduced motion:** Respected as described in [8.4](#84-reduced-motion).
- **Skip link:** First focusable element on page, "Skip to content", targeting `<main>`.
- **Font loading:** `font-display: swap` to prevent invisible text during load.

---

## 11. Design Rules & Anti-Patterns

### Do

- Use **varying spacing** between sections for rhythm
- Keep the **accent color as a pointer** — small doses, high impact
- Let **asymmetry** create visual interest
- Use **warm neutrals** for all surfaces and text
- Make the **hero name** the strongest visual element on the page
- Use **OKLCH or color-mix()** for color operations

### Do NOT

- ❌ Use `#000` or `#fff` anywhere — always tint warm
- ❌ Gradient text (keeps things flat and honest)
- ❌ Glassmorphism (backdrop blur, frosted effects)
- ❌ Side-stripe borders (decorative vertical lines)
- ❌ Hero-metric template (big number stats, "10+ years" etc.)
- ❌ Identical card grids (every project card should not look the same)
- ❌ Modal as first thought (no popups, no newsletter signups, no cookie banners on first load)
- ❌ Em dashes (use a spaced en dash or comma instead)
- ❌ Bouncy/elastic motion curves
- ❌ Generic stock avatar illustrations (use real photo or monogram)

---

## Appendix A: Project File Structure

```
landing-page/
├── index.html          (built from design spec — not yet written)
├── style.css           (built from design spec — not yet written)
├── config.js           (user-editable data)
├── CONFIG_GUIDE.md     (user instructions)
├── design-spec.md      (this document)
└── images/             (user-provided assets)
    ├── avatar.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

## Appendix B: User Accent Color Guide

When choosing an accent hex color in `config.js`, aim for:

- **Warm hues** (red-orange through gold): `#a04030` through `#c49040`
- **Cooler accents also work** but reduce the warm-neutral harmony:
  - Deep teal: `#2a6b6b`
  - Muted indigo: `#5a5a8a`
- **Avoid:** Neon, pastel, or very low-chroma colors. The accent needs enough saturation to read as intentional.
- **Test both themes** — a color that works on light may need adjustment for dark.
