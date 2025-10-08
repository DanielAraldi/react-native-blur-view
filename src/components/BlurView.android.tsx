import { memo, Children } from 'react';
import { StyleSheet, View } from 'react-native';

import { Blur } from '../fabrics';
import type { BlurViewProps } from '../@types';
import { globalStyles } from '../styles';

const BlurView = (props: BlurViewProps) => {
  const { type = 'light', radius = 10, style, children, ...rest } = props;

  const isChangeable =
    type === 'x-light' || type === 'light' || type === 'dark';
  const blurRadius = isChangeable ? radius : 35;

  if (!Children.count(children)) {
    return (
      <Blur
        overlayColor={type}
        blurRadius={blurRadius}
        pointerEvents="none"
        style={style}
        {...rest}
      >
        <View style={globalStyles.expand} />
      </Blur>
    );
  }

  return (
    <View style={[globalStyles.container, style]}>
      <Blur
        overlayColor={type}
        blurRadius={blurRadius}
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        {...rest}
      >
        <View style={[globalStyles.content, style]}>{children}</View>
      </Blur>
    </View>
  );
};

export default memo(BlurView);
