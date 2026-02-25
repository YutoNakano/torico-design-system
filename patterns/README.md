# Pattern Catalog

Reusable UI patterns for TORICO products. Each pattern shows structure, token usage, variants, and anti-patterns.

**These patterns are for React Native (drawer-native, instant-output-native).** Web patterns follow the same token values via Tailwind.

## Index

| Pattern | File | Use when... |
|---------|------|-------------|
| **Screen Layouts** | [screen-layouts.md](screen-layouts.md) | Starting any new screen |
| **Cards** | [cards.md](cards.md) | Displaying content units, stats, actions |
| **Lists** | [lists.md](lists.md) | Settings, navigation menus, data lists |
| **Buttons** | [buttons.md](buttons.md) | Any tappable action |
| **Forms** | [forms.md](forms.md) | Text inputs, toggles, validation |
| **Feedback** | [feedback.md](feedback.md) | Loading, errors, toasts, empty states |
| **Navigation** | [navigation.md](navigation.md) | Headers, tab bars, bottom sheets |

## How to Use

1. Identify which pattern applies to your UI need
2. Copy the structure from the pattern file
3. Adapt content and layout to your specific requirements
4. All tokens are already correct — do not change color/spacing/radius values
5. Run `/design-audit` to verify compliance

## Pattern Format

Each pattern file follows this structure:

```
# Pattern: [Name]
## When to use
## Structure (JSX + StyleSheet)
## Variants
## Do NOT
```
