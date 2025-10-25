import { memo } from 'react';
import { View } from 'react-native';

import type { BlurTargetProps } from '../@types';

const BlurTarget = (props: BlurTargetProps) => <View {...props} />;

export default memo(BlurTarget);
