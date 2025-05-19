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
       * @default 25
       */
      radius?: number;
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
