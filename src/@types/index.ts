import type { BlurViewAndroidProps } from './BlurView.android';
import type { BlurViewIosProps } from './BlurView.ios';

/**
 * @interface BlurViewProps
 *
 * @description Props for the BlurView component.
 */
export type BlurViewProps = BlurViewAndroidProps | BlurViewIosProps;

export type {
  BlurViewAndroidType,
  BlurViewAndroidProps,
} from './BlurView.android';
export type { BlurViewIosType, BlurViewIosProps } from './BlurView.ios';
