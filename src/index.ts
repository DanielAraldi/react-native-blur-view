import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { View, ViewProps } from 'react-native';
import { BlurView as BlurViewUntyped } from './components';

export const BlurView = BlurViewUntyped as ForwardRefExoticComponent<
  RefAttributes<View> &
    ViewProps & {
      /**
       * @description Set the color type of the overlay.
       *
       * @type {BlurViewAndroidType} - `'light'` | `'dark'`
       *
       * @default 'light'
       */
      type?: 'dark' | 'light';

      /**
       * @description Set the blur radius. It accepts a number between `0` and `25`.
       *
       * @default 10
       */
      radius?: number;

      /**
       * @description Set the enabled state of the blur view.
       *
       * @default true
       */
      isEnabled?: boolean;
    }
>;

export type {
  BlurViewAndroidProps,
  BlurViewAndroidType,
  BlurViewIosProps,
  BlurViewIosType,
  BlurViewProps,
} from './@types';
