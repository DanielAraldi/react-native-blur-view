import type { ViewProps } from 'react-native';
import type { BlurViewType } from './BlurView.native';

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
  type?: BlurViewType;

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
