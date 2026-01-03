import type { ViewProps, ColorValue } from 'react-native';
import type { BlurType } from './BlurType';

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
   * @description Set an overlay background color about the blur view.
   *
   * @default undefined
   *
   * @since 1.1.0
   */
  overlayColor?: ColorValue;
}
