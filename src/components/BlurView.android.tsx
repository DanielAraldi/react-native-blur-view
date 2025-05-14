import { forwardRef, memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { BlurViewView } from '../fabrics';
import type { BlurViewAndroidProps } from '../@types';
import { globalStyles, overlayColors } from '../styles';

const BlurView = forwardRef<View, BlurViewAndroidProps>((props, ref) => {
  const {
    type = 'light',
    radius = 10,
    isEnabled = true,
    style,
    ...rest
  } = props;

  const handleClipRadius = useCallback(() => {
    if (radius <= 0) return 0;
    if (radius >= 25) return 25;
    return radius;
  }, [radius]);

  const overlayColor = overlayColors[type] || overlayColors.light;
  const blurRadius = handleClipRadius();

  return (
    <BlurViewView
      ref={ref}
      overlayColor={overlayColor}
      blurRadius={blurRadius}
      enabled={isEnabled}
      autoUpdate
      pointerEvents="none"
      style={StyleSheet.compose(globalStyles.container, style)}
      {...rest}
    />
  );
});

export default memo(BlurView);
