/**
 * Character Asset Types
 *
 * Shared TypeScript types for TORICO character assets.
 */

/**
 * Character expressions available for the speech bubble mascot
 */
export type CharacterExpression = 'neutral' | 'happy' | 'frustrated' | 'confused';

/**
 * All available character image keys
 */
export type CharacterKey =
  | 'appIcon'
  | 'main'
  | `face-${CharacterExpression}`;
