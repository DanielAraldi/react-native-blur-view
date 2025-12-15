import { memo, Children, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Blur } from '../fabrics';
import type { BlurViewProps } from '../@types';
import { globalStyles } from '../styles';

const BlurView = (props: BlurViewProps) => {
  const {
    type = 'light',
    radius = 10,
    targetId,
    style,
    children,
    reducedTransparencyFallbackColor,
    ...rest
  } = props;

  const isAndroid = Platform.OS === 'android';
  const backgroundColor = { backgroundColor: reducedTransparencyFallbackColor };
  const shouldApplyRadius =
    type === 'x-light' || type === 'light' || type === 'dark';

  const commonProps = useMemo(() => {
    const androidBlurRadius = shouldApplyRadius ? radius : 35;

    return {
      targetId,
      overlayColor: type,
      blurRadius: isAndroid ? androidBlurRadius : radius,
      ...rest,
    };
  }, [type, radius, targetId, rest, shouldApplyRadius, isAndroid]);

  if (!Children.count(children)) {
    return (
      <Blur style={style} {...commonProps}>
        <View style={[globalStyles.expand, backgroundColor]} />
      </Blur>
    );
  }

  return (
    <View style={[globalStyles.container, style]}>
      {isAndroid ? (
        <Blur style={StyleSheet.absoluteFill} {...commonProps}>
          <View style={[globalStyles.content, style, backgroundColor]}>
            {children}
          </View>
        </Blur>
      ) : (
        <>
          <Blur style={StyleSheet.absoluteFill} {...commonProps} />

          <View style={[globalStyles.content, backgroundColor]}>
            {children}
          </View>
        </>
      )}
    </View>
  );
};

export default memo(BlurView);
