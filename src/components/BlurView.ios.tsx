import { Children, memo } from 'react';
import { StyleSheet, View } from 'react-native';

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

  const backgroundColor = { backgroundColor: reducedTransparencyFallbackColor };

  if (!Children.count(children)) {
    return (
      <Blur
        targetId={targetId}
        overlayColor={type}
        blurRadius={radius}
        pointerEvents="none"
        style={style}
        {...rest}
      >
        <View style={[globalStyles.expand, backgroundColor]} />
      </Blur>
    );
  }

  return (
    <View style={[globalStyles.container, style]}>
      <Blur
        targetId={targetId}
        overlayColor={type}
        blurRadius={radius}
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        {...rest}
      />

      <View style={[globalStyles.content, backgroundColor]}>{children}</View>
    </View>
  );
};

export default memo(BlurView);
