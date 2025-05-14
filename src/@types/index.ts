import type { BlurViewAndroidProps } from './BlurView.android';
import type { BlurViewIosProps } from './BlurView.ios';

/**
 * @interface BlurViewProps
 *
 * @description Props for the BlurView component.
 */
export type BlurViewProps = BlurViewAndroidProps | BlurViewIosProps;

export type { BlurViewAndroidProps } from './BlurView.android';
export type { BlurViewIosProps } from './BlurView.ios';
export type { BlurViewType } from './BlurView.native';
