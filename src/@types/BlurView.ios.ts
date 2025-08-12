import type { ViewProps } from 'react-native';

/**
 * @type {BlurViewNativeIosType}
 *
 * @description Type for the native color type of the overlay in iOS.
 */
export type BlurViewNativeIosType =
  | 'xlight'
  | 'light'
  | 'dark'
  | 'thinMaterial'
  | 'thinMaterialLight'
  | 'thinMaterialDark'
  | 'material'
  | 'materialLight'
  | 'materialDark'
  | 'chromeMaterial'
  | 'chromeMaterialLight'
  | 'chromeMaterialDark'
  | 'thickMaterial'
  | 'thickMaterialLight'
  | 'thickMaterialDark'
  | 'ultraThinMaterial'
  | 'ultraThinMaterialLight'
  | 'ultraThinMaterialDark'
  | 'prominent'
  | 'regular';

/**
 * @type {BlurViewIosType}
 *
 * @description Type for the color type of the overlay in iOS.
 */
export type BlurViewIosType =
  | 'x-light'
  | 'light'
  | 'dark'
  | 'thin-material'
  | 'thin-material-light'
  | 'thin-material-dark'
  | 'material'
  | 'material-light'
  | 'material-dark'
  | 'chrome-material'
  | 'chrome-material-light'
  | 'chrome-material-dark'
  | 'thick-material'
  | 'thick-material-light'
  | 'thick-material-dark'
  | 'ultra-thin-material'
  | 'ultra-thin-material-light'
  | 'ultra-thin-material-dark'
  | 'regular'
  | 'prominent';

/**
 * @interface BlurViewIosProps
 *
 * @description Props for the BlurView component on iOS.
 */
export interface BlurViewIosProps extends ViewProps {
  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   */
  type?: BlurViewIosType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   */
  radius?: number;

  /**
   * @description Style for the `BlurView` component children content. In
   * **Android**, you can use `style` to set blur style content.
   *
   * @default { zIndex: 9999, position: 'absolute' }
   *
   * @platform iOS
   */
  contentStyle?: ViewProps['style'];

  /**
   * @description Style for the `BlurView` component. In **Android**, you can
   * use `style` to set blur style content.
   *
   * @default { zIndex: 9999, backgroundColor: 'transparent', ...StyleSheet.absoluteFill }
   *
   * @platform iOS
   */
  blurStyle?: ViewProps['style'];
}
