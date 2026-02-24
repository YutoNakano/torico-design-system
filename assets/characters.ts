/**
 * Character Assets - Web
 *
 * Exports path strings for web usage.
 */

import type { CharacterExpression } from './types';

const BASE_PATH = '@torico/design-system/assets/characters';

export const characters: Record<string, string> = {
  appIcon: `${BASE_PATH}/drawer-app-icon.png`,
  main: `${BASE_PATH}/drawer-main.png`,
  'face-neutral': `${BASE_PATH}/drawer-face-neutral.png`,
  'face-happy': `${BASE_PATH}/drawer-face-happy.png`,
  'face-frustrated': `${BASE_PATH}/drawer-face-frustrated.png`,
  'face-confused': `${BASE_PATH}/drawer-face-confused.png`,
};

/**
 * Get character face image path by expression
 */
export function getCharacterFace(expression: CharacterExpression): string {
  return characters[`face-${expression}`];
}
