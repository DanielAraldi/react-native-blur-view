import type { BlurViewProps } from './BlurView';
import type { Direction } from './Direction';

/**
 * @interface ProgressiveBlurViewProps
 *
 * @description Props for the `ProgressiveBlurView` component. It accepts the
 * same props as `BlurView`. On Android, the `blurTarget` prop is required for
 * the blur effect to work correctly.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#properties-1
 *
 * @since 3.3.0
 */
export interface ProgressiveBlurViewProps extends BlurViewProps {
  /**
   * @description Set the edge where the blur effect starts. The blur is
   * strongest at this edge and fades out towards the opposite edge.
   *
   * @default 'top'
   *
   * @since 3.3.0
   */
  direction?: Direction;

  /**
   * @description Set how much of the view is covered by the blur effect,
   * measured from the `direction` edge. It accepts a number between `0` and
   * `1`, where `0` disables the effect and `1` fades it across the whole
   * view.
   *
   * @default 1
   *
   * @since 3.3.0
   */
  offset?: number;
}
