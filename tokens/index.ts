/**
 * TORICO Design System Tokens
 *
 * This is the main entry point for all design tokens.
 * Import from here to access primitives, semantic tokens, and themes.
 *
 * @example
 * ```ts
 * // Import specific token groups
 * import { neutral, spacing, typography } from '@torico/design-system/tokens';
 *
 * // Import themes
 * import { darkTheme, lightTheme } from '@torico/design-system/tokens';
 *
 * // Use semantic colors in components
 * import { background, text, interactive } from '@torico/design-system/tokens';
 * ```
 */

// =============================================================================
// Primitive Tokens
// =============================================================================

// Colors
export {
  neutral,
  darkNeutral,
  feedback,
  accent,
  alpha,
  type NeutralScale,
  type DarkNeutralScale,
  type FeedbackColors,
  type AccentColors,
  type AlphaScale,
} from './primitives/colors';

// Typography
export {
  fontSize,
  fontWeight,
  lineHeightMultiplier,
  lineHeight,
  letterSpacing,
  fontFamily,
  webFontFamily,
  type FontSizeScale,
  type FontWeightScale,
  type LineHeightMultiplierScale,
  type LineHeightScale,
  type LetterSpacingScale,
  type FontFamily,
  type WebFontFamily,
} from './primitives/typography';

// Spacing
export {
  spacing,
  spacingAlias,
  componentSpacing,
  gap,
  type SpacingScale,
  type SpacingAlias,
  type ComponentSpacing,
  type GapScale,
} from './primitives/spacing';

// Radii
export {
  radii,
  radiusAlias,
  type RadiiScale,
  type RadiusAlias,
} from './primitives/radii';

// Shadows
export {
  shadows,
  webShadows,
  elevation,
  type ShadowScale,
  type WebShadowScale,
  type ElevationScale,
} from './primitives/shadows';

// Animations
export {
  duration,
  easing,
  bezier,
  spring,
  transition,
  delay,
  type DurationScale,
  type EasingScale,
  type BezierCurves,
  type SpringConfigs,
  type TransitionPresets,
  type DelayScale,
} from './primitives/animations';

// =============================================================================
// Semantic Tokens
// =============================================================================

// Semantic Colors
export {
  brand,
  background,
  text,
  border,
  interactive,
  feedbackColors,
  icon,
  semanticColors,
  type BrandColors,
  type BackgroundColors,
  type TextColors,
  type BorderColors,
  type InteractiveColors,
  type FeedbackSemanticColors,
  type IconColors,
  type SemanticColors,
} from './semantic/colors';

// Semantic Typography
export {
  display,
  heading,
  body,
  label,
  caption,
  button,
  code,
  typography,
  textPresets,
  type TextStyle,
  type DisplayStyles,
  type HeadingStyles,
  type BodyStyles,
  type LabelStyles,
  type CaptionStyles,
  type ButtonStyles,
  type CodeStyles,
  type Typography,
  type TextPresets,
} from './semantic/typography';

// =============================================================================
// Themes
// =============================================================================

export {
  lightTheme,
  darkTheme,
  themes,
  getTheme,
  defaultTheme,
  defaultThemeName,
  type LightTheme,
  type DarkTheme,
  type Theme,
  type ThemeName,
} from './themes';

// =============================================================================
// Convenience Re-exports
// =============================================================================

/**
 * All tokens combined for easy destructuring
 */
export const tokens = {
  // Primitives
  colors: {
    neutral: {} as typeof import('./primitives/colors').neutral,
    darkNeutral: {} as typeof import('./primitives/colors').darkNeutral,
    feedback: {} as typeof import('./primitives/colors').feedback,
    accent: {} as typeof import('./primitives/colors').accent,
    alpha: {} as typeof import('./primitives/colors').alpha,
  },
  typography: {} as typeof import('./primitives/typography'),
  spacing: {} as typeof import('./primitives/spacing'),
  radii: {} as typeof import('./primitives/radii'),
  shadows: {} as typeof import('./primitives/shadows'),
  animations: {} as typeof import('./primitives/animations'),

  // Semantic
  semantic: {
    colors: {} as typeof import('./semantic/colors'),
    typography: {} as typeof import('./semantic/typography'),
  },

  // Themes
  themes: {} as typeof import('./themes'),
} as const;
