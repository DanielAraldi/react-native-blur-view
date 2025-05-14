import type { ViewProps } from 'react-native';

/**
 * @type {BlurViewIosType} `'light'` | `'dark'`
 *
 * @description Type for the color type of the overlay on iOS.
 */
export type BlurViewIosType = 'light' | 'dark';

/**
 * @interface BlurViewIosProps
 *
 * @description Props for the BlurView component on iOS.
 */
export interface BlurViewIosProps extends ViewProps {
  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   */
  type?: BlurViewIosType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and `25`.
   *
   * @default 10
   */
  radius?: number;

  /**
   * @description Set the enabled state of the blur view.
   *
   * @default true
   */
  isEnabled?: boolean;
}
