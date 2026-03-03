import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  overlayColor?: WithDefault<string, 'light'>;
  blurRadius?: WithDefault<Float, 10.0>;
  reducedTransparencyFallbackColor?: WithDefault<string, 'white'>;
}

export default codegenNativeComponent<NativeProps>('VibrancyView', {
  excludedPlatforms: ['android'],
});
