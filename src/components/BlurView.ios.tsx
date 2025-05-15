import { forwardRef, memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { BlurViewView } from '../fabrics';
import type { BlurViewIosProps, BlurViewIosType } from '../@types';
import { globalStyles } from '../styles';

const BlurView = forwardRef<View, BlurViewIosProps>((props, ref) => {
  const { type = 'light', style, ...rest } = props;

  const overlayColors: Record<BlurViewIosType, string> = {
    'x-light': 'xlight',
    'light': 'light',
    'dark': 'dark',
    'thin-material': 'thinMaterial',
    'thin-material-light': 'thinMaterialLight',
    'thin-material-dark': 'thinMaterialDark',
    'material': 'material',
    'material-light': 'materialLight',
    'material-dark': 'materialDark',
    'chrome-material': 'chromeMaterial',
    'chrome-material-light': 'chromeMaterialLight',
    'chrome-material-dark': 'chromeMaterialDark',
    'thick-material': 'thickMaterial',
    'thick-material-light': 'thickMaterialLight',
    'thick-material-dark': 'thickMaterialDark',
    'ultra-thin-material': 'ultraThinMaterial',
    'ultra-thin-material-light': 'ultraThinMaterialLight',
    'ultra-thin-material-dark': 'ultraThinMaterialDark',
    'prominent': 'prominent',
    'regular': 'regular',
  };

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
