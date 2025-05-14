import { forwardRef, memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { BlurViewView } from '../fabrics';
import type { BlurViewIosProps } from '../@types';
import { globalStyles, overlayColors } from '../styles';

const BlurView = forwardRef<View, BlurViewIosProps>((props, ref) => {
  const { type = 'light', style, ...rest } = props;

  const overlayColor = overlayColors[type] || overlayColors.light;

  return (
    <BlurViewView
      ref={ref}
      overlayColor={overlayColor}
      pointerEvents="none"
      style={StyleSheet.compose(globalStyles.container, style)}
      {...rest}
    />
  );
});

export default memo(BlurView);
