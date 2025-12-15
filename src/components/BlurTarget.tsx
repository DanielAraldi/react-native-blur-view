import { memo } from 'react';
import { Platform, View } from 'react-native';

import { Target } from '../fabrics';
import type { BlurTargetProps } from '../@types';

const BlurTarget = (props: BlurTargetProps) =>
  Platform.OS !== 'android' ? <View {...props} /> : <Target {...props} />;

export default memo(BlurTarget);
