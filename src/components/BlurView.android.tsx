import { forwardRef, memo, useCallback, type ComponentRef } from 'react';
import { StyleSheet } from 'react-native';

import { BlurViewView } from '../fabrics';
import type { BlurViewAndroidProps, BlurViewAndroidType } from '../@types';
import { globalStyles } from '../styles';
import { clip } from '../utils';

const BlurView = forwardRef<
  ComponentRef<typeof BlurViewView>,
  BlurViewAndroidProps
>((props, ref) => {
  const { type = 'light', radius = 25, style, ...rest } = props;

  const handleClipRadius = useCallback(() => {
    const MAX_RADIUS = 25;
    const equivalentRadius = (MAX_RADIUS * radius) / 100;
    return clip(equivalentRadius, 0, MAX_RADIUS);
  }, [radius]);

  const overlayColors: Record<BlurViewAndroidType, string> = {
    dark: '#100C0cC3',
    light: '#3CFFFFFF',
  };

  const overlayColor = overlayColors[type] || overlayColors.light;
  const blurRadius = handleClipRadius();

  return (
    <BlurViewView
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
