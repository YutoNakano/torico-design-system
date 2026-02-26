# TORICO Design System

[**View Token Reference**](https://yutonakano.github.io/torico-design-system/) | [**AI Agent Guide (CLAUDE.md)**](CLAUDE.md)

Single source of truth for all TORICO products (DRAWER, Shunsaku). Tokens for colors, typography, spacing, and shape across React Native and web.

## Why This Design System?

```mermaid
flowchart TD
    subgraph problem[" "]
        direction TB
        AI[AI Agent]
        AI -->|"Build settings"| S1["bg: #1a1a2e<br/>padding: 20<br/>font: 15px<br/>radius: 10"]
        AI -->|"Build profile"| S2["bg: #162447<br/>padding: 16<br/>font: 14px<br/>radius: 8"]
        AI -->|"Build chat"| S3["bg: #1C1C1E<br/>padding: 12<br/>font: 13px<br/>radius: 6"]
    end

    S1 & S2 & S3 --> D["Every screen diverges<br/>No unity across the product"]

    style problem fill:#1C1C1E,stroke:#FC8181,color:#FFFFFF
    style D fill:#2D1B1B,color:#FC8181,stroke:#FC8181
    style S1 fill:#2C2C2E,color:#FFFFFF,stroke:#555
    style S2 fill:#2C2C2E,color:#FFFFFF,stroke:#555
    style S3 fill:#2C2C2E,color:#FFFFFF,stroke:#555
```

`CLAUDE.md` + `patterns/` give AI agents guardrails so every generated screen uses the same tokens — consistent UI without manual review.

## Design Process

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
    DS-->>AI: Guardrails + code examples
    AI->>AI: Generate implementation
    AI->>F: Output for ideation
    F->>AI: Refined design direction
    AI->>AI: Generate final implementation
    AI->>R: Review & ship
    Note over R,F: Human explores visual ideas in Figma using AI output as starting point
    Note over R,DS: Any team member can request UI work via natural language
```

```mermaid
flowchart LR
    subgraph Inputs["Data Sources"]
        FS[(Firestore<br/>Schema)]
        AN[Analytics &<br/>Usage Patterns]
        CB[Existing<br/>Codebase]
        DS[Design System<br/>Tokens]
    end

    subgraph Agent["AI Agent"]
        direction TB
        R[Read & Synthesize] --> D[Make Data-Informed<br/>Design Decisions]
    end

    subgraph Output["Implementation"]
        UI[Consistent UI<br/>with Token Compliance]
        CX[Context-Aware<br/>Layout Decisions]
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

## Architecture

```
├── tokens/
│   ├── primitives/          # Raw design values
│   ├── semantic/            # Context-aware tokens
│   └── themes/              # Light / dark
├── assets/                  # Character illustrations
├── patterns/                # AI-readable UI pattern docs
├── build/
│   └── build-tokens.ts      # Generate platform outputs
└── dist/
    ├── native/              # React Native output
    ├── web/                 # Tailwind + CSS output
    ├── types/               # TypeScript declarations
    └── reference.html       # Visual token reference page
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

## Pattern Catalog

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

## License

MIT - Internal TORICO use
