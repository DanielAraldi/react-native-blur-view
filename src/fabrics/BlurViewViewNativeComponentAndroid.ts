import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { Float } from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from 'react-native';

interface NativeProps extends ViewProps {
  overlayColor?: string;
  blurRadius?: Float;
  autoUpdate?: boolean;
  enabled?: boolean;
}

export default codegenNativeComponent<NativeProps>('BlurViewView', {
  excludedPlatforms: ['iOS'],
});
