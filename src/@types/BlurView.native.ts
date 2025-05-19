import type {
  BlurViewAndroidProps,
  BlurViewAndroidType,
} from './BlurView.android';
import type { BlurViewIosProps, BlurViewIosType } from './BlurView.ios';

/**
 * @type {BlurViewType}
 *
 * @description Type for the color type of the overlay.
 */
export type BlurViewType = BlurViewAndroidType | BlurViewIosType;

/**
 * @interface BlurViewProps
 *
 * @description Props for the BlurView component.
 */
export type BlurViewProps = BlurViewAndroidProps | BlurViewIosProps;
