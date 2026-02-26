# Design Principles — TORICO

When in doubt about a UI decision, return to these principles. Priority is top to bottom.

---

## 1. Clarity First

Users should know what to do next without thinking. Minimize learning cost.

- **Good**: One primary action per screen. Only one button stands out
- **Bad**: Three equally-sized buttons on the same screen

Decision criteria:
- Is the information hierarchy clear? → Use typography presets to create visual hierarchy
- Is the action priority clear? → One `interactive.primary` per screen, others use `ghost` / `secondary`
- Is it obvious on first use? → Follow platform conventions (iOS HIG)

## 2. Consistent

Same experience across products. Follow tokens and patterns.

- **Good**: Cards use `background.card` + `radii.xl` + `componentSpacing.cardPadding` across all products
- **Bad**: Card corner radius and padding vary subtly between screens

Decision criteria:
- Does an existing pattern (`patterns/`) cover this? → Use it as-is
- Can it be expressed with tokens? → Use tokens, don't create new values
- Does it align across products? → DRAWER / Shunsaku / EnglishJournal use the same tokens

## 3. Delightful

It should feel good to use. Create moments of achievement and joy.

- **Good**: Subtle animation feedback on learning completion
- **Bad**: Flashy animations on every screen transition

Decision criteria:
- Where to add delight: achievements, first-time experiences, empty states, micro-interactions
- Where to restrain: input forms, error handling, settings, repetitive actions
- Does the animation serve a purpose? → Add it if it aids understanding of state changes, skip if purely decorative

---

## Visual Style

### Native Apps (DRAWER, Shunsaku)

- **Minimal dark**: Black base, content stands out
- **iOS-native**: Follow system conventions (gestures, safe areas, Dynamic Type)
- **Liquid Glass (iOS 26+)**: Use system-provided translucent/blur components. Never replicate manually
- **Teal accent**: Use `brand.primary` (#4FD1C5) sparingly as an accent color

### Web (drawer-web)

- **Clean modern**: Layouts with generous whitespace
- **Light theme**: Landing pages, marketing, and coach dashboard all use light backgrounds
- **Web accent**: `brand.webPrimary` (#4A9B8E) — ensures contrast on light backgrounds

---

## Emotional Design Guidelines

### Tone

| Context | Tone | Expression |
|---------|------|------------|
| Learning achievement | Celebratory, affirming | Animation, color shift, short congratulatory message |
| Error | Calm, constructive | `text.error` + specific resolution steps, non-blaming language |
| Empty state | Warm, encouraging | Illustration + call-to-action guiding next step |
| Loading | Reassuring | Skeleton UI, progress indicators |
| Onboarding | Exciting, concise | 3 steps max, skippable |

### Animation Policy

- **Default**: `duration.normal` (200ms) + `easing.ease`
- **Enter**: Fade in + subtle upward slide (8px max)
- **Exit**: Fade out only (fast: `duration.fast` 150ms)
- **Feedback**: Spring animation (`spring` tokens) for tactile feel
- **Forbidden**: Rotation, bounce, excessive scale changes, transitions over 300ms

### Micro-interactions

- Button press: Color shift to `interactive.primaryHover` + subtle scale (0.97)
- List item: Highlight background + haptics (native)
- Toggle: Spring animation for physical feedback
- Pull-to-refresh: Follow system standard (no custom implementation)
