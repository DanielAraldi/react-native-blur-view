import type { ViewProps } from 'react-native';

/**
 * @interface BlurTargetProps
 *
 * @description Props for the `BlurTarget` component.
 */
export interface BlurTargetProps extends ViewProps {
  /**
   * @description Id for the `BlurTarget` component to be identified by
   * `BlurView` component in tree. **This is used to link the two components
   * together and it's required for Android.**
   *
   * @platform Android
   */
  id: string;
}
