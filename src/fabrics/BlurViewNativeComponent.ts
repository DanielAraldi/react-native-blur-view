import type { HostComponent, ViewProps } from 'react-native';
import { requireNativeComponent } from 'react-native';

// Type definition compatible with both architectures
export interface NativeProps extends ViewProps {
  targetId: string;
  overlayColor: string;
  blurRadius: number;
}

// Use old architecture (Paper) as default
// This works with both old and new architecture React Native
// The native layer handles architecture detection automatically
const BlurViewNativeComponent: HostComponent<NativeProps> =
  requireNativeComponent<NativeProps>('BlurView');

/* 
 * NEW ARCHITECTURE (Fabric) - Commented out
 * Uncomment this section if you want to use Fabric components explicitly
 * 
// eslint-disable-next-line @typescript-eslint/no-var-requires
try {
  // @ts-ignore - Runtime module resolution
  const codegenNativeComponent = require('react-native/Libraries/Utilities/codegenNativeComponent')
    .default;
  BlurViewNativeComponent = codegenNativeComponent<NativeProps>('BlurView');
} catch (e) {
  // Fallback to old architecture
  // @ts-ignore - Runtime module resolution
  const { requireNativeComponent } = require('react-native');
  BlurViewNativeComponent = requireNativeComponent<NativeProps>('BlurView');
}
*/

export default BlurViewNativeComponent;
