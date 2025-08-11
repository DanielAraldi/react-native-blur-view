import { forwardRef, memo, useMemo, type ComponentRef } from 'react';
import { StyleSheet } from 'react-native';

import { BlurViewAndroid } from '../fabrics';
import type { BlurViewAndroidProps, BlurViewAndroidType } from '../@types';
import { globalStyles } from '../styles';
import { clip } from '../utils';

const BlurView = forwardRef<
  ComponentRef<typeof BlurViewAndroid>,
  BlurViewAndroidProps
>((props, ref) => {
  const { type = 'light', radius = 10, style, ...rest } = props;

  const blurRadius = useMemo(() => clip(radius, 0, 100), [radius]);

  const overlayColors: Record<BlurViewAndroidType, string> = {
    'dark': 'rgba(16, 12, 12, 0.64)',
    'light': 'rgba(255, 255, 255, 0.2)',
    'x-light': 'rgba(255, 255, 255, 0.75)',
  };

  const overlayColor = overlayColors[type] || overlayColors.light;

  return (
    <BlurViewAndroid
      ref={ref}
      overlayColor={overlayColor}
      blurRadius={blurRadius}
      pointerEvents="none"
      style={StyleSheet.compose(globalStyles.container, style)}
      {...rest}
    />
  );
});

export default memo(BlurView);
