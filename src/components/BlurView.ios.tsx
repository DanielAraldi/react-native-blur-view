import { forwardRef, memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { BlurViewView } from '../fabrics';
import type { BlurViewIosProps, BlurViewIosType } from '../@types';
import { globalStyles } from '../styles';
import { clip } from '../utils';

const BlurView = forwardRef<View, BlurViewIosProps>((props, ref) => {
  const {
    type = 'light',
    radius = 10,
    style,
    blurStyle,
    contentStyle,
    children,
    ...rest
  } = props;

  const blurRadius = useMemo(() => clip(radius, 0, 100), [radius]);

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
    <View
      ref={ref}
      pointerEvents="none"
      style={StyleSheet.compose(globalStyles.container, style)}
    >
      <BlurViewView
        overlayColor={overlayColor}
        blurRadius={blurRadius}
        pointerEvents="none"
        style={StyleSheet.compose(globalStyles.vibrancy, blurStyle)}
        {...rest}
      />

      <View
        pointerEvents="none"
        style={StyleSheet.compose(globalStyles.content, contentStyle)}
      >
        {children}
      </View>
    </View>
  );
});

export default memo(BlurView);
