import type { ViewProps, ColorValue } from 'react-native';
import type { BlurType } from './BlurType';

/**
 * @interface VibrancyViewProps
 *
 * @description Props for the `VibrancyView` component.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#properties-2
 *
 * @since 1.2.0
 */
export interface VibrancyViewProps extends ViewProps {
  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   *
   * @since 1.2.0
   */
  type?: BlurType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   *
   * @since 1.2.0
   */
  radius?: number;

  /**
   * @description Set a background color for the blur fallback view.
   *
   * @default undefined
   *
   * @since 1.2.0
   */
  reducedTransparencyFallbackColor?: ColorValue;
}
