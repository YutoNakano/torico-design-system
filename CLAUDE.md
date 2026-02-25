# CLAUDE.md — TORICO Design System

AI agent guide for building consistent UI across DRAWER, Shunsaku, and all TORICO products.
**Read this file before writing any UI code.**

---

## Golden Rule

**Never hardcode design values.** Every color, spacing, font size, border radius, and shadow
must come from `@torico/design-system`. No exceptions.

```typescript
// WRONG
backgroundColor: '#4FD1C5'
padding: 16
fontSize: 14
borderRadius: 12

// RIGHT
import { background, spacing, body, radii } from '@torico/design-system/tokens';
backgroundColor: background.primary
padding: spacing[4]        // 16px
...body.small              // fontSize 14, weight 400, lineHeight 20
borderRadius: radii.lg     // 12px
```

---

## Quick Import Cheatsheet

### React Native (drawer-native, instant-output-native)
```typescript
import {
  // Semantic colors
  background, text, border, interactive, brand, icon,
  drawerGreen, feedbackColors, categoryColors,
  // Typography presets (spread into styles)
  display, heading, body, label, caption, button as buttonType,
  // Spacing & layout
  spacing, componentSpacing, gap,
  // Shape
  radii, radiusAlias, shadows,
  // Animation
  duration, easing, spring,
} from '@torico/design-system/tokens';
```

### Tailwind (drawer-web)
```typescript
// tailwind.config.ts
import { toricoTokens } from '@torico/design-system/tailwind';

export default {
  theme: {
    extend: {
      colors: toricoTokens.colors,
      spacing: toricoTokens.spacing,
      borderRadius: toricoTokens.borderRadius,
    },
  },
};
```

### CSS Custom Properties
```css
@import '@torico/design-system/dist/web/tokens.css';

.card {
  background-color: var(--color-background-card);
  padding: var(--spacing-4);
  border-radius: var(--radius-xl);
}
```

---

## Token Quick Reference

### Semantic Colors

| Token | Value | Use for |
|-------|-------|---------|
| `background.primary` | `#000000` | Main app background |
| `background.secondary` | `#1C1C1E` | Sheets, modals, grouped sections |
| `background.tertiary` | `#2C2C2E` | Elevated cards |
| `background.card` | `rgba(49,74,74,0.95)` | Content cards (teal tint) |
| `background.cardSolid` | `#314A4A` | Cards without transparency |
| `background.surface` | `#2A2A2A` | Inputs, pickers |
| `background.overlay` | `rgba(0,0,0,0.5)` | Modal backdrops |
| `text.primary` | `#FFFFFF` | Main text |
| `text.secondary` | `rgba(255,255,255,0.7)` | Supporting text |
| `text.tertiary` | `rgba(255,255,255,0.5)` | Hints, metadata |
| `text.brand` | `#4FD1C5` | Accent text, links |
| `text.error` | `#FC8181` | Error messages |
| `interactive.primary` | `#4FD1C5` | Buttons, active states |
| `interactive.primaryHover` | `#38B2AC` | Hover/pressed |
| `interactive.destructive` | `#FC8181` | Delete, remove |
| `interactive.ghost` | `transparent` | Ghost buttons |
| `border.default` | `#333333` | Standard borders |
| `border.subtle` | `rgba(255,255,255,0.1)` | Dividers |
| `border.focus` | `#4FD1C5` | Focus rings |
| `brand.primary` | `#4FD1C5` | Brand accent |
| `brand.webPrimary` | `#4A9B8E` | Web-specific (light bg) |

### Typography Presets

Spread into StyleSheet — includes fontSize, fontWeight, lineHeight, fontFamily.

| Preset | Size | Weight | Use for |
|--------|------|--------|---------|
| `display.large` | 32px | bold | Screen titles, hero text |
| `display.medium` | 28px | bold | Large feature headings |
| `display.small` | 24px | bold | Modal titles |
| `heading.large` | 20px | bold | Section headings |
| `heading.medium` | 18px | semibold | Subsection headings |
| `heading.small` | 16px | semibold | Card titles |
| `body.large` | 18px | regular | Emphasized body text |
| `body.medium` | 16px | regular | Standard body text |
| `body.small` | 14px | regular | Secondary body text |
| `label.large` | 16px | medium | Form labels |
| `label.medium` | 14px | medium | Button labels, tags |
| `label.small` | 12px | medium | Section headers (uppercase) |
| `caption.medium` | 12px | regular | Timestamps, metadata |
| `caption.small` | 10px | regular | Micro text, badges |

### Spacing Scale (4px base)

| Token | Value | Common use |
|-------|-------|------------|
| `spacing[1]` | 4px | Icon-to-label gap |
| `spacing[2]` | 8px | Compact padding, list item gap |
| `spacing[3]` | 12px | Input padding, between list items |
| `spacing[4]` | 16px | Card padding, screen horizontal padding |
| `spacing[5]` | 20px | Comfortable padding |
| `spacing[6]` | 24px | Section gaps, screen vertical padding |
| `spacing[8]` | 32px | Large section spacing |
| `spacing[12]` | 48px | Page-level spacing |

**Component-specific aliases** (prefer these for standard layouts):
- `componentSpacing.screenPaddingX` → 16px
- `componentSpacing.screenPaddingY` → 24px
- `componentSpacing.cardPadding` → 16px
- `componentSpacing.sectionGap` → 24px
- `componentSpacing.listItemGap` → 12px
- `componentSpacing.inputPadding` → 12px
- `componentSpacing.buttonPaddingX` → 16px
- `componentSpacing.buttonPaddingY` → 12px
- `componentSpacing.headerHeight` → 56px
- `componentSpacing.tabBarHeight` → 64px

### Border Radius

| Token | Value | Use for |
|-------|-------|---------|
| `radii.sm` | 4px | Tooltips, tags |
| `radii.md` | 8px | Inputs |
| `radii.lg` | 12px | Buttons |
| `radii.xl` | 16px | Cards |
| `radii['2xl']` | 20px | Modals |
| `radii.full` | 9999px | Avatars, pills, FABs |

**Aliases**: `radiusAlias.button` (12), `radiusAlias.card` (16), `radiusAlias.input` (8), `radiusAlias.modal` (20), `radiusAlias.badge` (9999)

### Shadows

| Token | Elevation | Use for |
|-------|-----------|---------|
| `shadows.none` | 0 | Flat elements |
| `shadows.sm` | 1 | Subtle lift (cards) |
| `shadows.md` | 2 | Default elevation (buttons) |
| `shadows.lg` | 4 | Floating elements |
| `shadows.xl` | 8 | Modals, popovers |

---

## Component Pattern Index

See `patterns/` for full examples. Each pattern includes JSX structure, StyleSheet with tokens, variants, and anti-patterns.

| Pattern | File | When to use |
|---------|------|-------------|
| Screen layouts | [patterns/screen-layouts.md](patterns/screen-layouts.md) | Every new screen |
| Cards | [patterns/cards.md](patterns/cards.md) | Content display, stats, actions |
| Lists | [patterns/lists.md](patterns/lists.md) | Settings, navigation, data lists |
| Buttons | [patterns/buttons.md](patterns/buttons.md) | All interactive buttons |
| Forms | [patterns/forms.md](patterns/forms.md) | Text inputs, switches, validation |
| Feedback | [patterns/feedback.md](patterns/feedback.md) | Toast, loading, error states |
| Navigation | [patterns/navigation.md](patterns/navigation.md) | Headers, tab bars, sheets |

---

## Typography Decision Rules

| Context | Preset | Notes |
|---------|--------|-------|
| Screen title | `display.large` | Top of screen, 1 per screen |
| Modal title | `display.small` | Modal/sheet headers |
| Section heading | `heading.large` | Main content sections |
| Card title | `heading.small` | Inside cards |
| Section label | `label.small` + uppercase | "SETTINGS", "RECENT" etc. |
| Body text | `body.medium` | Default for content |
| Secondary text | `body.small` | Descriptions, subtitles |
| Form label | `label.medium` | Above inputs |
| Button label | `label.medium` | Inside buttons |
| Metadata | `caption.medium` | Dates, counts, tags |
| Micro text | `caption.small` | Badge counts, fine print |

---

## Spacing Decision Rules

| Context | Token | Value |
|---------|-------|-------|
| Screen horizontal padding | `componentSpacing.screenPaddingX` | 16px |
| Screen vertical padding | `componentSpacing.screenPaddingY` | 24px |
| Card internal padding | `componentSpacing.cardPadding` | 16px |
| Between sections | `componentSpacing.sectionGap` | 24px |
| Between list items | `componentSpacing.listItemGap` | 12px |
| Between icon and label | `spacing[2]` | 8px |
| Between title and subtitle | `spacing[1]` | 4px |
| Input internal padding | `componentSpacing.inputPadding` | 12px |
| Button padding | `buttonPaddingX` / `buttonPaddingY` | 16px / 12px |

---

## Design Decision Framework

### Background hierarchy (dark mode, top to bottom)
1. `background.primary` (#000000) — fullscreen base
2. `background.secondary` (#1C1C1E) — grouped sections, sheets
3. `background.tertiary` (#2C2C2E) — elevated cards on secondary
4. `background.card` (rgba teal tint) — branded content cards
5. `background.surface` (#2A2A2A) — inputs, pickers on any background

### Modal vs full screen?
- **Modal** (`background.secondary` + `radiusAlias.modal`): quick actions, confirmations, short forms
- **Full screen** (`background.primary`): complex flows, content browsing, primary tasks

### Card vs flat?
- **Card** (background + border + radius + shadow): distinct content units, tappable items
- **Flat** (no background, divider only): settings rows, dense lists, inline content

### Web light vs dark?
- Landing pages, marketing: light theme with `brand.webPrimary`
- Coach dashboard: light backgrounds with `neutral` palette
- Native apps: always dark theme (default tokens)

---

## Strict vs Creative Zones

### Strict (always use tokens, never improvise)
- Colors — every color from semantic tokens
- Spacing — every margin/padding from spacing scale
- Typography — every text style from presets
- Border radius — from radii scale
- Screen structure — follow screen layout patterns
- Card styling — follow card patterns

### Creative (use judgment, express brand personality)
- Illustrations and graphics
- Animation choreography (timing, sequence, spring configs)
- Content hierarchy within a card (what info to emphasize)
- Empty state messaging and personality
- Onboarding flow design
- Micro-interactions beyond tap feedback
- Icon selection and composition

---

## Anti-patterns

```typescript
// DO NOT: Create local color objects
const COLORS = { primary: '#4FD1C5', ... };        // WRONG
const AppColors = { background: '#000000', ... };   // WRONG
import Colors from '@/constants/Colors';             // WRONG

// DO NOT: Use values outside the spacing scale
padding: 15    // WRONG — not on 4px grid. Use spacing[4] (16) or spacing[3.5] (14)
marginTop: 30  // WRONG — use spacing[7] (28) or spacing[8] (32)

// DO NOT: Hardcode font sizes
fontSize: 13   // WRONG — not on scale. Use body.small (14) or caption.medium (12)

// DO NOT: Mix raw hex with semantic tokens
color: text.primary           // RIGHT
backgroundColor: '#1C1C1E'   // WRONG — use background.secondary

// DO NOT: Create one-off border radius values
borderRadius: 10  // WRONG — use radii.md (8) or radii.lg (12)
```

---

## Audit

Run the design audit skill to scan for violations:

```
/design-audit <path>
```

This scans for hardcoded colors, spacing, and typography values and suggests token replacements.
Run after completing any UI work to verify compliance.
