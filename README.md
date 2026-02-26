# TORICO Design System

[**View Token Reference**](https://yutonakano.github.io/torico-design-system/) | [**AI Agent Guide (CLAUDE.md)**](CLAUDE.md)

One place for all design values (colors, fonts, spacing, shapes) used by DRAWER and Shunsaku apps. Works with React Native and web.

## Why?

Without shared rules, AI agents pick different values each time. Screens stop looking like they belong together.

```mermaid
flowchart TD
    subgraph problem[" "]
        direction TB
        AI[AI Agent]
        AI -->|"Build settings"| S1["bg: #1a1a2e<br/>padding: 20<br/>font: 15px<br/>radius: 10"]
        AI -->|"Build profile"| S2["bg: #162447<br/>padding: 16<br/>font: 14px<br/>radius: 8"]
        AI -->|"Build chat"| S3["bg: #1C1C1E<br/>padding: 12<br/>font: 13px<br/>radius: 6"]
    end

    S1 & S2 & S3 --> D["Every screen looks different"]

    style problem fill:#1C1C1E,stroke:#FC8181,color:#FFFFFF
    style D fill:#2D1B1B,color:#FC8181,stroke:#FC8181
    style S1 fill:#2C2C2E,color:#FFFFFF,stroke:#555
    style S2 fill:#2C2C2E,color:#FFFFFF,stroke:#555
    style S3 fill:#2C2C2E,color:#FFFFFF,stroke:#555
```

Before this design system, TORICO products had:

1. **Hardcoded values everywhere** — colors, fonts, and spacing were written directly in code with no shared format
2. **No single source** — the same values were copied across components and slowly drifted apart
3. **Platform split** — React Native and web each had their own copies, so changes had to be made in multiple places

### What This Gives You

- **Neutral-first colors** — clean blacks and grays for UI; brand personality comes from character art and teal accents
- **One source for all platforms** — define values once, use in React Native, Tailwind, and CSS
- **AI-ready workflow** — `CLAUDE.md` + `patterns/` guide AI agents so anyone can request UI work in plain language and get consistent output
- **Type safety** — full TypeScript support with autocomplete
- **Named tokens** — use `text.primary` instead of raw `#FFFFFF`
- **Shared character art** — illustrations exported for all platforms via `@torico/design-system/assets`

## How It Works

```mermaid
sequenceDiagram
    box rgb(38,64,64) AI-Native Workflow
    participant R as Requirements
    participant AI as AI Agent
    participant DS as Design System<br/>(CLAUDE.md + patterns/)
    participant F as Figma<br/>(Human Ideation)
    end

    R->>AI: Natural language request
    AI->>DS: Read tokens & patterns
    DS-->>AI: Rules + code examples
    AI->>AI: Build UI
    AI->>F: Output for ideation
    F->>AI: Design feedback
    AI->>AI: Update UI
    AI->>R: Review & ship
    Note over R,F: Humans explore ideas in Figma using AI output as a starting point
    Note over R,DS: Anyone can request UI work in plain language
```

```mermaid
flowchart LR
    subgraph Inputs["Data Sources"]
        FS[(Firestore<br/>Schema)]
        AN[Analytics &<br/>Usage Data]
        CB[Existing<br/>Codebase]
        DS[Design System<br/>Tokens]
    end

    subgraph Agent["AI Agent"]
        direction TB
        R[Read all sources] --> D[Make design<br/>decisions]
    end

    subgraph Output["Result"]
        UI[Consistent UI]
        CX[Smart layout<br/>choices]
    end

    FS --> Agent
    AN --> Agent
    CB --> Agent
    DS --> Agent
    Agent --> UI
    Agent --> CX

    style DS fill:#314A4A,color:#4FD1C5,stroke:#4FD1C5
    style Agent fill:#1C2A2E,color:#FFFFFF,stroke:#4FD1C5
```

## Folder Structure

```
├── tokens/
│   ├── primitives/          # Base values (colors, sizes, spacing)
│   │   ├── colors.ts        # Neutral palette, teal accents, feedback
│   │   ├── typography.ts    # Font sizes, weights, line heights
│   │   ├── spacing.ts       # 4px base scale
│   │   ├── radii.ts         # Border radius scale
│   │   ├── shadows.ts       # Elevation shadows
│   │   └── animations.ts    # Duration, easing
│   ├── semantic/            # Named tokens (e.g. text.primary)
│   │   ├── colors.ts        # background, text, interactive, drawerGreen
│   │   └── typography.ts    # Text style presets (display–code)
│   └── themes/              # Light / dark
│       ├── light.ts
│       ├── dark.ts
│       └── index.ts
├── assets/                  # Character images
├── patterns/                # UI pattern docs for AI
├── build/
│   └── build-tokens.ts      # Build script
└── dist/
    ├── native/              # React Native output
    ├── web/                 # Tailwind + CSS output
    ├── types/               # TypeScript types
    └── reference.html       # Visual reference page
```

## Usage

### React Native

```typescript
import {
  background, text, interactive, drawerGreen,
  spacing, radii, body, heading,
} from '@torico/design-system';

const styles = StyleSheet.create({
  container: {
    backgroundColor: background.primary,
    padding: spacing[4],
    borderRadius: radii.lg,
  },
  title: { color: text.primary, ...heading.large },
  body: { color: text.secondary, ...body.medium },
});
```

### Tailwind (Web)

```typescript
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
  background-color: var(--color-app-background);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
}
```

## Building

```bash
npm install
npm run build:tokens
```

This creates:
- `dist/native/` — React Native exports
- `dist/web/tailwind.tokens.js` — Tailwind config
- `dist/web/tokens.css` — CSS custom properties
- `dist/types/` — TypeScript types
- `dist/reference.html` — visual reference page ([view online](https://yutonakano.github.io/torico-design-system/))

## Design Decisions

**Why neutral colors?** Earlier versions used teal on every surface. Now we use clean neutrals (#000, #1C1C1E, #2C2C2E) for UI and save teal (`drawerGreen`) for accents. Brand personality comes from character art, not background colors.

**Why dark mode first?** DRAWER and Shunsaku are dark-mode apps. Tokens default to dark values. Light theme is available for web pages and the coach dashboard.

**Why 4px spacing?** It matches iOS guidelines, works well with 8pt grids, and fits the patterns already in the codebase.

## Patterns

The `patterns/` folder has reusable UI patterns with code examples that only use tokens. Think of it as design docs that AI agents can read.

| Pattern | File |
|---------|------|
| Design Direction | [patterns/design-direction.md](patterns/design-direction.md) |
| Principles | [patterns/principles.md](patterns/principles.md) |
| Screen Layouts | [patterns/screen-layouts.md](patterns/screen-layouts.md) |
| Cards | [patterns/cards.md](patterns/cards.md) |
| Lists | [patterns/lists.md](patterns/lists.md) |
| Buttons | [patterns/buttons.md](patterns/buttons.md) |
| Forms | [patterns/forms.md](patterns/forms.md) |
| Feedback | [patterns/feedback.md](patterns/feedback.md) |
| Navigation | [patterns/navigation.md](patterns/navigation.md) |

See `CLAUDE.md` for the full AI agent guide with token tables, decision rules, and anti-patterns.

## Contributing

1. Add base values in `tokens/primitives/`
2. Add named tokens in `tokens/semantic/`
3. Update themes in `tokens/themes/` if needed
4. Re-export from `tokens/index.ts`
5. Update build script if you added a new category
6. Update this README

## License

MIT - Internal TORICO use
