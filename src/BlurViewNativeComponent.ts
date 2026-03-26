import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  Int32,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  targetId?: WithDefault<Int32, null>;
  overlayColor?: WithDefault<string, 'light'>;
  blurRadius?: WithDefault<Float, 10.0>;
  downscaleFactor?: WithDefault<Float, 6.0>;
  reducedTransparencyFallbackColor?: WithDefault<string, 'white'>;
}

export default codegenNativeComponent<NativeProps>('BlurView');
