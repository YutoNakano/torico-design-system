/**
 * Primitive Border Radius Tokens
 *
 * Border radius values for rounded corners throughout TORICO products.
 */

/**
 * Border radius scale
 */
export const radii = {
  /** No rounding (0px) */
  none: 0,
  /** Subtle rounding (2px) */
  xs: 2,
  /** Small rounding (4px) */
  sm: 4,
  /** Default rounding (8px) */
  md: 8,
  /** Medium-large rounding (12px) */
  lg: 12,
  /** Large rounding (16px) */
  xl: 16,
  /** Extra large rounding (20px) */
  '2xl': 20,
  /** 2x Extra large rounding (24px) */
  '3xl': 24,
  /** Fully rounded (9999px) - for pills and circles */
  full: 9999,
} as const;

/**
 * Component-specific radius aliases
 */
export const radiusAlias = {
  /** Button border radius */
  button: radii.lg,
  /** Card border radius */
  card: radii.xl,
  /** Input field border radius */
  input: radii.md,
  /** Modal border radius */
  modal: radii['2xl'],
  /** Badge/tag border radius */
  badge: radii.full,
  /** Avatar border radius */
  avatar: radii.full,
  /** FAB border radius */
  fab: radii.full,
  /** Tooltip border radius */
  tooltip: radii.sm,
} as const;

export type RadiiScale = typeof radii;
export type RadiusAlias = typeof radiusAlias;
