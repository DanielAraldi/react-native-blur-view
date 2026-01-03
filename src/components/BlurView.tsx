import { memo, Children, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Blur } from '../fabrics';
import type { BlurViewProps } from '../@types';
import { globalStyles } from '../styles';

const BlurView = (props: BlurViewProps) => {
  const {
    type = 'light',
    radius = 10,
    style,
    children,
    overlayColor,
    ...rest
  } = props;

  const isAndroid = Platform.OS === 'android';
  const backgroundColor = { backgroundColor: overlayColor };

  const commonProps = useMemo(() => {
    const isFixedRadius =
      type === 'x-light' || type === 'light' || type === 'dark';
    const androidBlurRadius = isFixedRadius ? radius : 40;

    return {
      overlayColor: type,
      blurRadius: isAndroid ? androidBlurRadius : radius,
      ...rest,
    };
  }, [type, radius, rest, isAndroid]);

  if (!Children.count(children)) {
    return (
      <Blur style={style} {...commonProps}>
        <View style={[globalStyles.expand, backgroundColor]} />
      </Blur>
    );
  }

  if (isAndroid) {
    return (
      <Blur style={style} {...commonProps}>
        <View style={[StyleSheet.absoluteFill, backgroundColor]} />

        {children}
      </Blur>
    );
  }

  return (
    <View style={[globalStyles.container, style]}>
      <Blur style={StyleSheet.absoluteFill} {...commonProps} />

      <View style={[globalStyles.content, backgroundColor]}>{children}</View>
    </View>
  );
};

export default memo(BlurView);
