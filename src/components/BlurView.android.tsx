import { memo, Children, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Blur } from '../fabrics';
import type { BlurViewProps } from '../@types';
import { globalStyles } from '../styles';

const BlurView = (props: BlurViewProps) => {
  const { type = 'light', radius = 10, style, children, ...rest } = props;

  const [blurRadius, setBlurRadius] = useState<number>(radius);

  useEffect(() => {
    const isChangeable =
      type === 'x-light' || type === 'light' || type === 'dark';

    if (isChangeable) setBlurRadius(radius);
    else setBlurRadius(35);
  }, [type, radius]);

  if (!Children.count(children)) {
    return (
      <Blur
        overlayColor={type}
        blurRadius={blurRadius}
        pointerEvents="none"
        style={style}
        {...rest}
      />
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
