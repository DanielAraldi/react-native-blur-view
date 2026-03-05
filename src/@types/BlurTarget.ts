import type { RefObject } from 'react';
import type { View, ViewProps } from 'react-native';

/**
 * @interface BlurTargetProps
 *
 * @description Props for the `BlurTarget` component.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#properties-1
 *
 * @since 1.0.0
 */
export interface BlurTargetProps extends ViewProps {
  /**
   * @description Ref for the `BlurTarget` component to be identified by
   * `BlurView` component in tree. **This is used to link the two components
   * together and it's required for Android.**
   *
   * @platform Android
   *
   * @since 2.0.0
   */
  ref?: RefObject<View | null>;
}
