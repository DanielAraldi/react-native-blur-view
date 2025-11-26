import { memo } from 'react';
import { View } from 'react-native';

import type { VibrancyViewProps } from '../@types';

const VibrancyView = (props: VibrancyViewProps) => <View {...props} />;

export default memo(VibrancyView);
