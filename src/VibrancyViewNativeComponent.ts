import type { ColorValue, ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  overlayColor?: WithDefault<string, 'light'>;
  effectStyle?: WithDefault<string, 'label'>;
  radius?: WithDefault<Float, 10.0>;
  reducedTransparencyFallbackColor?: ColorValue;
}

export default codegenNativeComponent<NativeProps>('VibrancyView', {
  excludedPlatforms: ['android'],
});
