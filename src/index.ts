import type { ComponentType } from 'react';
import {
  BlurView as BlurViewUntyped,
  VibrancyView as VibrancyViewUntyped,
} from './components';
import type { BlurViewProps, VibrancyViewProps } from './@types';

/**
 * @description The `BlurView` component is a React Native component that provides a
 * native blur effect to its children.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#blurview
 *
 * @since 0.1.0
 */
export const BlurView = BlurViewUntyped as ComponentType<BlurViewProps>;

/**
 * @description The `VibrancyView` component is a React Native component that
 * provides a native vibrancy effect to its children.
 *
 * @see https://github.com/DanielAraldi/react-native-blur-view?tab=readme-ov-file#vibrancyview
 *
 * @since 1.2.0
 */
export const VibrancyView =
  VibrancyViewUntyped as ComponentType<VibrancyViewProps>;

export type { BlurType, BlurViewProps, VibrancyViewProps } from './@types';
