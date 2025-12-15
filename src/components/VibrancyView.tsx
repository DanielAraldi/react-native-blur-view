import { Children, memo } from 'react';
import { Platform, View, type StyleProp, type ViewStyle } from 'react-native';

import { Vibrancy } from '../fabrics';
import type { VibrancyViewProps } from '../@types';
import { globalStyles } from '../styles';

const VibrancyView = (props: VibrancyViewProps) => {
  const {
    type = 'light',
    radius = 10,
    style,
    children,
    reducedTransparencyFallbackColor,
    ...rest
  } = props;

  if (Platform.OS !== 'ios') {
    return <View {...props} />;
  }

  const commonProps = {
    overlayColor: type,
    blurRadius: radius,
    style: [globalStyles.container, style],
    ...rest,
  };

  const viewStyle: StyleProp<ViewStyle> = [
    globalStyles.expand,
    { backgroundColor: reducedTransparencyFallbackColor },
  ];

  if (!Children.count(children)) {
    return (
      <Vibrancy {...commonProps}>
        <View style={viewStyle} />
      </Vibrancy>
    );
  }

  return (
    <Vibrancy {...commonProps}>
      <View style={viewStyle}>{children}</View>
    </Vibrancy>
  );
};

export default memo(VibrancyView);
