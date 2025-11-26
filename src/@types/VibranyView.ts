import type { ViewProps, ColorValue } from 'react-native';
import type { BlurViewType } from './BlurView';

/**
 * @interface VibrancyViewProps
 *
 * @description Props for the `VibrancyView` component.
 */
export interface VibrancyViewProps extends ViewProps {
  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   */
  type?: BlurViewType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   */
  radius?: number;

  /**
   * @description Set a background color for the blur fallback view.
   *
   * @default undefined
   */
  reducedTransparencyFallbackColor?: ColorValue;
}
