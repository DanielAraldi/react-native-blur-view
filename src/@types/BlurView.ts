import type { ViewProps, ColorValue } from 'react-native';

/**
 * @type {BlurViewType}
 *
 * @description Type for the color type of the overlay.
 */
export type BlurViewType =
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
 * @interface BlurViewProps
 *
 * @description Props for the `BlurView` component.
 */
export interface BlurViewProps extends ViewProps {
  /**
   * @description Id for the `BlurView` component to be identifier the
   * `BlurTarget` component in tree. **This is used to link the two components
   * together and it's required for Android.**
   *
   * @platform Android
   */
  targetId: string;

  /**
   * @description Set the color type of the overlay.
   *
   * @default 'light'
   */
  type?: BlurViewType;

  /**
   * @description Set the blur radius. It accepts a number between `0` and
   * `100`.
   *
   * @default 10
   */
  radius?: number;

  /**
   * @description Set a background color for the blur fallback view.
   *
   * @default undefined
   */
  reducedTransparencyFallbackColor?: ColorValue;
}
