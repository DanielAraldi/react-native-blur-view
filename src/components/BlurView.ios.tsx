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
    ...rest
  } = props;

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
        <View style={globalStyles.expand} />
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

      <View style={globalStyles.content}>{children}</View>
    </View>
  );
};

export default memo(BlurView);
