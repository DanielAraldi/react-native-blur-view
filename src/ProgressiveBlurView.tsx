import { forwardRef } from 'react';
import { View } from 'react-native';

import { BlurView } from './BlurView';
import ProgressiveMask from './ProgressiveMaskViewNativeComponent';
import type { ProgressiveBlurViewProps } from './@types';
import { globalStyles } from './styles';

/**
 * @description The `ProgressiveBlurView` component is a React Native component
 * that provides a native blur effect which fades out progressively from one
 * edge of the view.
 *
 * On Android, the `blurTarget` prop is **required** for the blur effect to work
 * correctly, like in the `BlurView` component.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#progressiveblurview
 *
 * @since 3.3.0
 *
 * @example
 * ```tsx
 * import React, { useRef } from 'react';
 * import { View, Text } from 'react-native';
 * import {
 *   BlurTarget,
 *   ProgressiveBlurView,
 * } from '@danielsaraldi/react-native-blur-view';
 * import { styles } from './styles';
 *
 * const MyComponent = () => {
 *   const blurTargetRef = useRef<View | null>(null);
 *
 *   return (
 *     <View style={styles.container}>
 *       <BlurTarget ref={blurTargetRef} style={styles.blurTarget} />
 *
 *       <ProgressiveBlurView
 *         blurTarget={blurTargetRef}
 *         direction="top"
 *         offset={0.6}
 *         style={styles.progressiveBlurView}
 *       >
 *         <Text style={styles.blurText}>Blurred Content</Text>
 *       </ProgressiveBlurView>
 *     </View>
 *   );
 * };
 * ```
 */
export const ProgressiveBlurView = forwardRef<View, ProgressiveBlurViewProps>(
  (props, ref) => {
    const {
      type = 'light',
      radius = 20,
      reducedTransparencyFallbackColor = 'white',
      direction = 'top',
      offset = 1,
      style,
      children,
      overlayColor,
      blurTarget,
      downscaleFactor,
      androidColor,
      ...rest
    } = props;

    return (
      <View style={[globalStyles.container, style]}>
        <ProgressiveMask
          ref={ref}
          direction={direction}
          offset={offset}
          style={globalStyles.absoluteFill}
          {...rest}
        >
          <BlurView
            blurTarget={blurTarget}
            type={type}
            radius={radius}
            downscaleFactor={downscaleFactor}
            androidColor={androidColor}
            overlayColor={overlayColor}
            reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
            style={globalStyles.absoluteFill}
          />
        </ProgressiveMask>

        {children}
      </View>
    );
  }
);
