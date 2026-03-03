import { memo, Children, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Blur } from '../fabrics';
import type { BlurViewProps } from '../@types';
import { globalStyles } from '../styles';

const BlurView = (props: BlurViewProps) => {
  const {
    type = 'light',
    radius = 10,
    downscaleFactor = 6,
    reducedTransparencyFallbackColor = 'white',
    targetId,
    style,
    children,
    overlayColor,
    ...rest
  } = props;

  const isAndroid = Platform.OS === 'android';
  const backgroundColor = { backgroundColor: overlayColor };

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
      targetId,
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

          <View style={globalStyles.content}>{children}</View>
        </>
      )}
    </View>
  );
};

export default memo(BlurView);
