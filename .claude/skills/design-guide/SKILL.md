---
name: design-guide
description: Output design direction before UI implementation. Takes a screen or component description and proposes style direction, token selection, animation, and tone based on design principles.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
context: fork
agent: Plan
---

# Design Guide

Output design direction based on principles and tokens before UI implementation.
Complements `/design-audit` (post-implementation check) as a pre-implementation guide.

## Input

`$ARGUMENTS` — Description of the screen or component to build. Examples:
- `user profile screen`
- `learning completion modal`
- `vocabulary card component`

## Steps

### 1. Load design principles

Read the following file to establish decision criteria:

- `torico-design-system/patterns/principles.md` — Design principles, visual style, emotional design

### 2. Load relevant patterns

Identify and read pattern files relevant to the input:

- `torico-design-system/patterns/screen-layouts.md` — Screen layouts
- `torico-design-system/patterns/cards.md` — Cards
- `torico-design-system/patterns/lists.md` — Lists
- `torico-design-system/patterns/buttons.md` — Buttons
- `torico-design-system/patterns/forms.md` — Forms
- `torico-design-system/patterns/feedback.md` — Feedback
- `torico-design-system/patterns/navigation.md` — Navigation

Only read files relevant to the input. No need to read all.

### 3. Check token reference

Refer to the Token Quick Reference section in `torico-design-system/CLAUDE.md` to identify tokens for the proposal.

### 4. Output design guide

Use the following format:

```
# Design Guide: <screen/component name>

## Overview
<What is being built, 1-2 sentences>

## Visual Direction
- **Style**: <Minimal dark / Clean light / etc.>
- **Background hierarchy**: <Which background tokens to use and why>
- **Layout**: <Screen structure overview — scroll / fixed header / tabs etc.>

## Color Tokens
| Purpose | Token | Rationale |
|---------|-------|-----------|
| Screen background | `background.primary` | Main screen, lowest layer |
| Card background | `background.card` | Branded content display |
| ... | ... | ... |

## Typography
| Element | Preset | Rationale |
|---------|--------|-----------|
| Screen title | `display.large` | One title per screen |
| Section heading | `heading.large` | Major section divider |
| ... | ... | ... |

## Spacing
| Location | Token | Value |
|----------|-------|-------|
| Screen horizontal padding | `componentSpacing.screenPaddingX` | 16px |
| Between sections | `componentSpacing.sectionGap` | 24px |
| ... | ... | ... |

## Component Structure
<List of components composing the screen and which patterns apply>

1. **<Component name>** — Use <pattern name> from `patterns/<file>.md`
2. ...

## Animation & Interaction
| Element | Motion | Token | Rationale |
|---------|--------|-------|-----------|
| Screen transition | Fade in + slide up | `duration.normal` + `easing.ease` | Standard enter |
| ... | ... | ... | ... |

## Emotional Tone
- **Tone for this screen**: <Celebratory / Calm / Warm / etc.>
- **Delight points**: <Specific places to add joy, or "restrain">
- **Caution**: <What not to overdo>

## Principles Check
- [ ] Clarity — Is the primary action clear? Is the information hierarchy correct?
- [ ] Consistent — Does it follow existing patterns? No new values created?
- [ ] Delightful — Is delight in the right places? Not excessive?
```

### 5. Surface ambiguity

If there are choices that cannot be determined, list the options and defer to the user.
Do not guess or make assumptions.
