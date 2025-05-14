import { forwardRef, memo } from 'react';
import { View } from 'react-native';

import type { BlurViewIosProps } from '../@types';

const BlurView = forwardRef<View, BlurViewIosProps>(() => {
  return <View />;
});

export default memo(BlurView);
