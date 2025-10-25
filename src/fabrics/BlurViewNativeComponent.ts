import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { Float } from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  targetId: string;
  overlayColor: string;
  blurRadius: Float;
}

export default codegenNativeComponent<NativeProps>('BlurView');
