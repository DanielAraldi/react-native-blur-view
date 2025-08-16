import type { ViewProps } from 'react-native';

/**
 * @type {BlurViewAndroidType}
 *
 * @description Type for the color type of the overlay in Android.
 */
export type BlurViewAndroidType = 'light' | 'dark' | 'x-light';

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
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   */
  radius?: number;

  /**
   * @description Style for the `BlurView` component. In **iOS**, this style
   * will be applied to the `BlurView` itself. But, in **Android**, this
   * will be applied to the children.
   *
   * @default StyleSheet.absoluteFill
   */
  blurStyle?: ViewProps['style'];
}
