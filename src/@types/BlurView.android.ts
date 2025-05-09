import { type ViewProps } from 'react-native';

/**
 * @type BlurViewAndroidType `'light'` | `'dark'`
 *
 * @description Type for the color type of the overlay on Android.
 */
export type BlurViewAndroidType = 'light' | 'dark';

/**
 * @interface BlurViewAndroidProps
 *
 * @description Props for the BlurView component on Android.
 */
export interface BlurViewAndroidProps extends ViewProps {
  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   */
  type?: BlurViewAndroidType;

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
