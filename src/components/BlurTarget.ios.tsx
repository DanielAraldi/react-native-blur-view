import { memo, Fragment, type FragmentProps } from 'react';

const BlurTarget = (props: FragmentProps) => <Fragment {...props} />;

export default memo(BlurTarget);
