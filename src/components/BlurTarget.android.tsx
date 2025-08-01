import { forwardRef, memo, type ComponentRef } from 'react';
import { type ViewProps } from 'react-native';

import { BlurViewTarget } from '../fabrics';

const BlurTarget = forwardRef<ComponentRef<typeof BlurViewTarget>, ViewProps>(
  (props, ref) => <BlurViewTarget ref={ref} {...props} />
);

export default memo(BlurTarget);
