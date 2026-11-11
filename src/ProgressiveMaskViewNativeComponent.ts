import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  direction?: WithDefault<string, 'top'>;
  offset?: WithDefault<Float, 1.0>;
}

export default codegenNativeComponent<NativeProps>('ProgressiveMaskView');
