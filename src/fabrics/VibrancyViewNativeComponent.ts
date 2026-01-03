import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  blurRadius?: WithDefault<Float, 10>;
  overlayColor?: WithDefault<string, 'light'>;
}

export default codegenNativeComponent<NativeProps>('VibrancyView', {
  excludedPlatforms: ['android'],
});
