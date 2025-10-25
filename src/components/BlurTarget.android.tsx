import { memo } from 'react';

import { Target } from '../fabrics';
import type { BlurTargetProps } from '../@types';

const BlurTarget = (props: BlurTargetProps) => <Target {...props} />;

export default memo(BlurTarget);
