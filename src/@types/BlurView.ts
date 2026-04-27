import type { ViewProps, ColorValue, View } from 'react-native';
import type { BlurType } from './BlurType';
import type { RefObject } from 'react';

/**
 * @interface BlurViewProps
 *
 * @description Props for the `BlurView` component.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#properties
 *
 * @since 0.1.0
 */
export interface BlurViewProps extends ViewProps {
  /**
   * @description Ref of the `BlurTarget` component to be identified by the
   * `BlurView` component in the tree. **This is used to link the two components
   * together and it's required for Android.**
   *
   * @platform Android
   *
   * @since 2.0.0
   */
  blurTarget?: RefObject<View | null>;

  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   *
   * @since 0.1.0
   */
  type?: BlurType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   *
   * @since 0.1.0
   */
  radius?: number;

  /**
   * @description Set the downscale factor for the blur effect. It accepts a
   * number between `0` and `100`. The higher the value, the more blurred the
   * effect will be, but it may also impact performance.
   *
   * @default 6
   *
   * @platform Android
   *
   * @since 1.3.3
   */
  downscaleFactor?: number;

  /**
   * @description Set a background color about blur effect.
   *
   * @default undefined
   *
   * @since 1.1.0
   */
  overlayColor?: ColorValue;

  /**
   * @description Overrides the color type of the overlay on Android. It accepts
   * a color value that will be used as the background color for the blur effect,
   * instead of the default color associated with the `type` prop. This can be
   * useful when you want to achieve a specific look or when you want to match
   * the blur effect with other elements in your app.
   *
   * @default undefined
   *
   * @platform Android
   *
   * @since 2.2.0
   */
  androidColor?: ColorValue;

  /**
   * @description Set a background color about blur effect when reduced
   * transparency is enabled.
   *
   * @default 'white'
   *
   * @platform iOS
   *
   * @since 1.4.0
   */
  reducedTransparencyFallbackColor?: ColorValue;
}
