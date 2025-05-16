import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { Float } from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from 'react-native';

interface NativeProps extends ViewProps {
  autoUpdate?: boolean;
  overlayColor?: string;
  blurRadius?: Float;
}

export default codegenNativeComponent<NativeProps>('BlurViewView');
