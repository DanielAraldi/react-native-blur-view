import { Children } from 'react';
import { Platform, View } from 'react-native';

import Vibrancy from './VibrancyViewNativeComponent';
import type { VibrancyViewProps } from './@types';
import { globalStyles } from './styles';

/**
 * @description The `VibrancyView` component is a React Native component that
 * provides a native vibrancy effect to its children.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#vibrancyview
 *
 * @since 1.2.0
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import { View, Text } from 'react-native';
 * import { VibrancyView } from '@danielsaraldi/react-native-blur-view';
 * import { styles } from './styles';
 *
 * const MyComponent = () => {
 *   return (
 *     <View style={styles.container}>
 *       <VibrancyView style={styles.vibrancyView}>
 *         <Text style={styles.vibrancyText}>Vibrant Content</Text>
 *       </VibrancyView>
 *     </View>
 *   );
 * };
 * ```
 */
const VibrancyView = (props: VibrancyViewProps) => {
  const {
    type = 'light',
    effectStyle = 'label',
    radius = 10,
    reducedTransparencyFallbackColor = 'white',
    style,
    children,
    overlayColor,
    ...rest
  } = props;

  if (Platform.OS !== 'ios') {
    return <View {...props} />;
  }

  const commonProps = {
    effectStyle,
    reducedTransparencyFallbackColor,
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

export default VibrancyView;
