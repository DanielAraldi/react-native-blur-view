import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { View, ViewProps } from 'react-native';
import { BlurView as BlurViewUntyped } from './components';

export const BlurView = BlurViewUntyped as ForwardRefExoticComponent<
  RefAttributes<View> &
    ViewProps & {
      /**
       * @description Set the color type of the overlay.
       *
       * @type {BlurViewType}
       *
       * @default 'light'
       */
      type?:
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
       * @default { zIndex: 9999, backgroundColor: 'transparent' }
       *
       * @platform iOS
       */
      blurStyle?: ViewProps['style'];
    }
>;

export type {
  BlurViewAndroidProps,
  BlurViewAndroidType,
  BlurViewIosProps,
  BlurViewIosType,
  BlurViewProps,
  BlurViewType,
} from './@types';
