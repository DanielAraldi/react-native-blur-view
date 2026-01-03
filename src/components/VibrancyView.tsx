import { Children, memo } from 'react';
import { Platform, View } from 'react-native';

import BlurView from './BlurView';
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
    console.warn(
      '[react-native-blur-view][VibrancyView] VibrancyView is only supported on iOS. Falling back to BlurView.'
    );
    return <BlurView {...props} />;
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
