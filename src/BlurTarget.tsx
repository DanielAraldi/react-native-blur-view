import { Platform, View } from 'react-native';

import Target from './TargetViewNativeComponent';
import type { BlurTargetProps } from './@types';

/**
 * @description The `BlurTarget` component is used in conjunction with
 * `BlurView` to specify the area that should be blurred. It acts as a target
 * for the blur effect. It's **required** for Android.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#blurtarget
 *
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * import React, { useRef } from 'react';
 * import { View, Text } from 'react-native';
 * import { BlurView, BlurTarget } from '@danielsaraldi/react-native-blur-view';
 * import { styles } from './styles';
 *
 * const MyComponent = () => {
 *   const blurTargetRef = useRef(null);
 *
 *   return (
 *     <View style={styles.container}>
 *       <BlurTarget ref={blurTargetRef} style={styles.blurTarget} />
 *
 *       <BlurView blurTarget={blurTargetRef} style={styles.blurView}>
 *         <Text style={styles.blurText}>Blurred Content</Text>
 *       </BlurView>
 *     </View>
 *   );
 * };
 * ```
 */
export const BlurTarget = (props: BlurTargetProps) =>
  Platform.OS !== 'android' ? <View {...props} /> : <Target {...props} />;
