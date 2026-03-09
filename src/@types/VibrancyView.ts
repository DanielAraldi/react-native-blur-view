import type { ViewProps, ColorValue } from 'react-native';
import type { BlurType } from './BlurType';
import type { EffectStyle } from './EffectStyle';

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
   * @platform iOS
   *
   * @since 1.2.0
   */
  type?: BlurType;

  /**
   * @description Set the effect style for the vibrancy view.
   *
   * @default 'label'
   *
   * @platform iOS
   *
   * @since 2.1.0
   */
  effectStyle?: EffectStyle;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   *
   * @platform iOS
   *
   * @since 1.2.0
   */
  radius?: number;

  /**
   * @description Set a background color about vibrancy effect.
   *
   * @default undefined
   *
   * @platform iOS
   *
   * @since 1.2.0
   */
  overlayColor?: ColorValue;

  /**
   * @description Set a background color about vibrancy effect when reduced
   * transparency is enabled.
   *
   * @default 'white'
   *
   * @platform iOS
   *
   * @since 1.4.0
   */
  reducedTransparencyFallbackColor?: string;
}
