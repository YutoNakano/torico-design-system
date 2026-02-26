---
name: design-audit
description: Scan code for hardcoded design values and suggest token replacements from @torico/design-system. Use when auditing files for design system compliance.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash
context: fork
agent: Explore
---

# Design System Audit

Scan files for hardcoded design values (colors, spacing, radii, typography) and report violations with suggested token replacements.

## Target

`$ARGUMENTS` — a file or directory path to audit. Defaults to the current working directory if not provided.

## Steps

### 1. Load the token reference

Read the following TypeScript source files (relative to the monorepo root) to build a lookup table mapping hardcoded values → token paths:

- `torico-design-system/tokens/primitives/colors.ts` — teal, neutral, darkNeutral, feedback, accent, pastel palettes
- `torico-design-system/tokens/semantic/colors.ts` — brand, background, text, border, interactive, icon, drawerGreen, categoryColors
- `torico-design-system/tokens/primitives/typography.ts` — fontSize, fontWeight, lineHeight scales
- `torico-design-system/tokens/semantic/typography.ts` — display, heading, body, label, caption, button presets
- `torico-design-system/tokens/primitives/spacing.ts` — spacing scale
- `torico-design-system/tokens/primitives/radii.ts` — border radius scale and aliases

From these files, extract every exported value and its corresponding token path (e.g., `#4FD1C5` → `teal[300]`, `brand.primary`, `interactive.primary`; `16` in spacing → `spacing[4]`; `fontSize: 14` + `fontWeight: '400'` → `body.small`). Use this mapping for all subsequent violation matching.

### 2. Scan for hardcoded colors

Use Grep to find these patterns in the target path:

- **Hex colors**: `#[0-9A-Fa-f]{3,8}` — matches `#FFF`, `#FFFFFF`, `#FFFFFFFF`
- **rgba/rgb values**: `rgba?\([^)]+\)` — matches `rgba(0, 0, 0, 0.5)`, `rgb(255, 255, 255)`
- **Common string colors in style contexts**: `'white'`, `'black'`, `'transparent'` in StyleSheet/style objects

Exclude files that are part of the design system itself (`@torico/design-system`, `torico-design-system/`).
Exclude non-UI files: `*.md`, `*.json`, `*.lock`, `node_modules/`, `dist/`, `.git/`, image/font assets.
Focus on: `*.ts`, `*.tsx`, `*.js`, `*.jsx`, `*.css`, `*.scss`.

### 3. Scan for hardcoded spacing

Search for numeric literals used in style contexts that match the spacing scale:
- Look for patterns like `padding: N`, `margin: N`, `gap: N`, `top: N`, `borderRadius: N` where N is a raw number
- Flag values that are multiples of 4 (likely should use spacing tokens) or common radii values

### 3b. Scan for hardcoded typography

Search for hardcoded typography values in style contexts:
- **Font sizes**: `fontSize: N` where N is a raw number (10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48)
- **Font weights**: `fontWeight: 'N'` or `fontWeight: N` where N is a numeric weight string ('400', '600', '700', etc.) or keywords ('bold', 'normal')
- **Line heights**: `lineHeight: N` where N is a raw number in style objects

For each match, suggest the appropriate typography preset from the token map:
- If both fontSize and fontWeight are present in the same style, match the specific preset (e.g., `fontSize: 16` + `fontWeight: '600'` → `heading.small`)
- If only fontSize is present, list all matching presets and note the weight context
- Flag fontWeight values that should use `fontWeight` primitives from `@torico/design-system/tokens`

### 4. Classify each violation

For each match, determine severity:

- **EXACT**: The hardcoded value has a direct token equivalent (e.g., `#000000` → `background.primary`, `fontSize: 14` → `body.small`)
- **APPROXIMATE**: The value is close to a token but not exact (e.g., `#1B1B1D` ≈ `background.secondary` which is `#1C1C1E`)
- **UNKNOWN**: No matching token found — may need a new token or is intentionally custom

Skip known false positives:
- Colors inside SVG asset files or image data
- Values already imported from `@torico/design-system`
- CSS custom property definitions (`--token-name:`)
- Comments

### 5. Output the report

Format the output as:

```
# Design Audit Report
Target: <path>

## Summary
- Total violations: N
- Exact matches (easy fixes): N
- Approximate matches: N
- Unknown values: N

## Violations by File

### <file_path>

| Line | Current Value | Severity | Suggested Token | Import |
|------|--------------|----------|-----------------|--------|
| 42 | `#000000` | EXACT | `background.primary` | `import { background } from '@torico/design-system/tokens'` |
| 58 | `#1B1B1D` | APPROX | `background.secondary` (#1C1C1E) | `import { background } from '@torico/design-system/tokens'` |
| 73 | `fontSize: 14` | EXACT | `body.small` (spread preset) | `import { body } from '@torico/design-system/tokens'` |
| 89 | `#FF6B35` | UNKNOWN | — (no token match) | Consider adding to design system |

### <next_file>
...

## Most Common Violations
1. `#FFFFFF` (N occurrences) → `text.primary` / `icon.primary`
2. `#000000` (N occurrences) → `background.primary`
3. `fontSize: 14` (N occurrences) → `body.small` / `label.medium`
4. ...

## Recommended Imports
Add these imports to resolve the EXACT match violations:
- `import { background, text, border } from '@torico/design-system/tokens'`
- `import { spacing, radii } from '@torico/design-system/tokens'`
- `import { body, heading, display, label, caption } from '@torico/design-system/tokens'`
```
