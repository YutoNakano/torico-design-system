/**
 * Character Assets - React Native
 *
 * Uses require() for React Native image bundling.
 */

import type { ImageSourcePropType } from 'react-native';
import type { CharacterExpression } from './types';

export const characters: Record<string, ImageSourcePropType> = {
  appIcon: require('./characters/drawer-app-icon.png'),
  main: require('./characters/drawer-main.png'),
  'face-neutral': require('./characters/drawer-face-neutral.png'),
  'face-happy': require('./characters/drawer-face-happy.png'),
  'face-frustrated': require('./characters/drawer-face-frustrated.png'),
  'face-confused': require('./characters/drawer-face-confused.png'),
};

/**
 * Get character face image by expression
 */
export function getCharacterFace(expression: CharacterExpression): ImageSourcePropType {
  return characters[`face-${expression}`];
}
