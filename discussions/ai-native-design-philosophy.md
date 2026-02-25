# AI-Native Design Philosophy

This document records the design philosophy behind TORICO's approach to design systems in an AI-agent-driven development workflow.

---

## The Shift: Figma → AI Agent

### Before (Traditional)
```
Designer creates Figma mockup → Engineer interprets and implements → Review cycle → Ship
```

**Bottleneck**: Every UI change requires a design pass. Designer availability gates development speed.

### Now (AI-Native)
```
Requirements → AI agent reads CLAUDE.md + patterns → Generates implementation → Review → Ship
```

**Advantages**:
- No design bottleneck — "move fast and break things" becomes possible
- Consistent token usage enforced by documentation-as-guardrails
- Any team member can request UI work via natural language
- AI agents can iterate on UI faster than the design→handoff→implement cycle

**Challenges without guardrails**:
- AI output varies by model, prompt, and context — inconsistent styling across features
- No shared visual language — each feature looks like a different app
- "AI's taste" becomes the design system, which is unpredictable

---

## AI as Data-Informed Designer

A unique advantage of AI-driven design: the AI agent is not limited to static mockups. Because the design system handles systematic decisions (colors, spacing, typography), the AI is free to focus its intelligence on **what matters** — pulling in the right data and context.

An AI agent can:

- **Fetch real data** to inform layout decisions (how long are actual titles? how many items in a typical list? what does the Firestore schema tell us about the data shape?)
- **Access user insights** from analytics, feedback, and usage patterns to prioritize information hierarchy — e.g., "users mostly have 3-5 tags, so a horizontal chip row works better than a full list"
- **Query the codebase** to understand existing patterns and make new screens feel native to the app, not generic
- **Pull from multiple sources** in a single pass — read Firestore data models, check existing screen patterns, reference the design system, and synthesize all of it into a coherent implementation

In a traditional workflow, a designer would need to request this data from engineers, wait for it, then redesign. With AI-native development, **the designer (AI) is also the engineer** — it can freely explore the data layer, understand user behavior patterns, and reflect those insights directly in the UI it builds.

The design system provides the visual constraints, while AI brings the intelligence to make context-aware, data-informed design decisions. This combination — **structured tokens + intelligent, data-driven application** — is more powerful than either alone.

---

## Design System as Guardrails, Not Handcuffs

The role of `@torico/design-system` is to **eliminate systematic decisions** so humans (and AI) can focus on creative ones.

### What the system decides (guardrails)
- Which colors to use → semantic color tokens
- How big text should be → typography presets
- How much spacing → spacing scale
- How rounded corners are → radii scale
- How screens are structured → layout patterns
- How cards, lists, buttons look → component patterns

### What humans decide (creative freedom)
- What story the screen tells
- How to sequence an onboarding flow
- What illustration style to use
- How animations choreograph transitions
- What personality the empty states convey
- How to organize information within a card

**The goal**: Two different AI agents, given the same requirements, should produce screens that feel like the same app — while still having room to make each screen feel intentional and alive.

---

## Why Not a Component Library?

We chose **documentation patterns (markdown)** over a component library because:

1. **Cost**: A component library requires API design, prop interfaces, version management, and maintenance. Pattern markdown achieves ~80% of the consistency at ~10% of the cost.

2. **AI reads markdown**: AI agents consume markdown natively. CLAUDE.md and `patterns/*.md` are the AI-era equivalent of Storybook — they guide implementation without requiring import/render/inspect cycles.

3. **Flexibility**: Patterns show _how to compose_ tokens, not _which component to use_. This gives AI agents (and developers) freedom to adapt patterns to specific needs without fighting a component API.

4. **Iteration speed**: Updating a markdown pattern is a one-line edit. Updating a component library requires code changes, tests, builds, and version bumps across consumers.

---

## The "Boring Design" Problem

A common concern: will strict token usage produce boring, cookie-cutter screens?

**Our answer**: The tokens handle the _boring_ decisions (which shade of teal, how many pixels of padding) precisely so that creative energy goes to the _interesting_ decisions (animation choreography, information hierarchy, empty state personality, onboarding storytelling).

A well-designed screen uses the same 8 colors and 6 spacing values as every other screen — what makes it special is _how_ those building blocks are composed, sequenced, and animated.

---

## Strict / Creative Zones

### Strict Zone (token compliance required)
These decisions are **systematic** — they should be identical across every screen:

- Color usage (semantic tokens only)
- Typography (preset styles only)
- Spacing (scale values only)
- Border radius (scale values only)
- Screen structure (padding, safe areas, scroll behavior)
- Card styling (background, radius, padding, shadow)
- Button styling (colors, radius, padding, states)

### Creative Zone (judgment and taste welcome)
These decisions are **contextual** — they benefit from human (or intelligent AI) input:

- Animation timing, spring configs, gesture choreography
- Illustration and iconography choices
- Content hierarchy within components
- Empty state design and copy
- Onboarding flow design
- Micro-interactions and delight moments
- Information density and progressive disclosure
- How data is visualized (charts, progress, stats)

---

## Source of Truth

| Before | Now |
|--------|-----|
| Figma files | `@torico/design-system` token source code |
| Designer's memory | `CLAUDE.md` + `patterns/*.md` |
| Style guide PDF | Living markdown, versioned with code |
| "Ask the designer" | AI reads the docs, every time, consistently |

**Code + CLAUDE.md is the source of truth.** Figma is no longer the starting point for UI decisions.

---

## Verification Loop

After AI generates UI code:

1. Run `/design-audit <path>` to check token compliance
2. Visual review: does the screen feel like it belongs in the DRAWER family?
3. Cross-prompt test: give the same requirement to a different AI session — is the output recognizably the same app?
4. If not, the gap is in the documentation → improve CLAUDE.md and patterns, not the code

The documentation improves iteratively based on where AI output diverges from expectations.
