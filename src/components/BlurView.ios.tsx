import { forwardRef, memo, useCallback, type ComponentRef } from 'react';
import { StyleSheet } from 'react-native';

import { VibrancyViewView } from '../fabrics';
import type { BlurViewIosProps, BlurViewIosType } from '../@types';
import { globalStyles } from '../styles';
import { clip } from '../utils';

const BlurView = forwardRef<
  ComponentRef<typeof VibrancyViewView>,
  BlurViewIosProps
>((props, ref) => {
  const { type = 'light', radius = 25, style, ...rest } = props;

  const handleClipRadius = useCallback(() => clip(radius, 0, 100), [radius]);

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
  const blurRadius = handleClipRadius();

  return (
    <VibrancyViewView
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
