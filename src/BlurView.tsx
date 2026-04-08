import { Children, useMemo, useState, useEffect, useCallback } from 'react';
import { findNodeHandle, Platform, StyleSheet, View } from 'react-native';

import Blur from './BlurViewNativeComponent';
import type { BlurViewProps } from './@types';
import { globalStyles } from './styles';

/**
 * @description The `BlurView` component is a React Native component that
 * provides a native blur effect to its children.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#blurview
 *
 * @since 0.1.0
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
export const BlurView = (props: BlurViewProps) => {
  const {
    type = 'light',
    radius = 10,
    downscaleFactor = 6,
    reducedTransparencyFallbackColor = 'white',
    blurTarget,
    style,
    children,
    overlayColor,
    ...rest
  } = props;

  const [targetId, setTargetId] = useState<number | undefined>(undefined);

  const isAndroid = Platform.OS === 'android';
  const backgroundColor = { backgroundColor: overlayColor };

  const updateBlurTarget = useCallback(() => {
    const node = blurTarget ? findNodeHandle(blurTarget.current) : undefined;
    setTargetId(node || undefined);
  }, [blurTarget]);

  const commonProps = useMemo(() => {
    /**
     * When the type is not a primary one, we need to increase the blur radius
     * and decrease the downscale factor to achieve a similar effect on Android.
     */
    const isPrimary = type === 'x-light' || type === 'light' || type === 'dark';
    const _blurRadius = isPrimary ? radius : 35;
    const _downscaleFactor = isPrimary
      ? downscaleFactor
      : downscaleFactor * 0.66;

    return {
      targetId: isAndroid ? targetId : undefined,
      reducedTransparencyFallbackColor,
      downscaleFactor: _downscaleFactor,
      overlayColor: type,
      blurRadius: isAndroid ? _blurRadius : radius,
      ...rest,
    };
  }, [
    type,
    radius,
    downscaleFactor,
    reducedTransparencyFallbackColor,
    targetId,
    rest,
    isAndroid,
  ]);

  useEffect(() => {
    updateBlurTarget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Children.count(children)) {
    return (
      <View style={[globalStyles.container, style]}>
        <Blur
          style={[StyleSheet.absoluteFill, backgroundColor]}
          {...commonProps}
        />
      </View>
    );
  }

  return (
    <View
      style={[globalStyles.container, style, !isAndroid && backgroundColor]}
    >
      {isAndroid ? (
        <Blur style={StyleSheet.absoluteFill} {...commonProps}>
          <View style={[globalStyles.content, style, backgroundColor]}>
            {children}
          </View>
        </Blur>
      ) : (
        <>
          <Blur style={StyleSheet.absoluteFill} {...commonProps} />

          {children}
        </>
      )}
    </View>
  );
};
