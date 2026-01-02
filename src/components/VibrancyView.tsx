import { Children, memo } from 'react';
import { Platform, View } from 'react-native';

import { Vibrancy } from '../fabrics';
import type { VibrancyViewProps } from '../@types';
import { globalStyles } from '../styles';

const VibrancyView = (props: VibrancyViewProps) => {
  const {
    type = 'light',
    radius = 10,
    style,
    children,
    overlayColor,
    ...rest
  } = props;

  if (Platform.OS !== 'ios') {
    return <View {...props} />;
  }

  const commonProps = {
    overlayColor: type,
    blurRadius: radius,
    style: [globalStyles.container, style, { backgroundColor: overlayColor }],
    ...rest,
  };

  if (!Children.count(children)) {
    return (
      <Vibrancy {...commonProps}>
        <View style={globalStyles.expand} />
      </Vibrancy>
    );
  }

  return <Vibrancy {...commonProps}>{children}</Vibrancy>;
};

export default memo(VibrancyView);
