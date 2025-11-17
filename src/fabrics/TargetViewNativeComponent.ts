import type { HostComponent, ViewProps } from 'react-native';
import { requireNativeComponent, Platform, View } from 'react-native';

export interface NativeProps extends ViewProps {
  id: string;
}

// Use old architecture (Paper) as default
// This works with both old and new architecture React Native
// The native layer handles architecture detection automatically

// On iOS, we don't need a native component - just use a regular View
// On Android, use the native TargetView component
const TargetViewNativeComponent: HostComponent<NativeProps> =
  Platform.OS === 'ios'
    ? (View as any)
    : requireNativeComponent<NativeProps>('TargetView');

/* 
 * NEW ARCHITECTURE (Fabric) - Commented out
 * Uncomment this section if you want to use Fabric components explicitly
 *
// eslint-disable-next-line @typescript-eslint/no-var-requires
try {
  // @ts-ignore - Runtime module resolution
  const codegenNativeComponent = require('react-native/Libraries/Utilities/codegenNativeComponent')
    .default;
  TargetViewNativeComponent = codegenNativeComponent<NativeProps>(
    'TargetView',
    {
      excludedPlatforms: ['iOS'],
    }
  );
} catch (e) {
  // Fallback to old architecture
  // @ts-ignore - Runtime module resolution
  const { requireNativeComponent, Platform } = require('react-native');

  // On iOS, we don't need the native component
  if (Platform.OS === 'ios') {
    // @ts-ignore - Runtime module resolution
    const { View } = require('react-native');
    TargetViewNativeComponent = View as any;
  } else {
    TargetViewNativeComponent =
      requireNativeComponent<NativeProps>('TargetView');
  }
}
*/

export default TargetViewNativeComponent;
