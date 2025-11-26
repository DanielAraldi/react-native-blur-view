import type { ComponentType } from 'react';
import {
  BlurView as BlurViewUntyped,
  BlurTarget as BlurTargetUntyped,
  VibrancyView as VibrancyViewUntyped,
} from './components';
import type {
  BlurTargetProps,
  BlurViewProps,
  VibrancyViewProps,
} from './@types';

export const BlurView = BlurViewUntyped as ComponentType<BlurViewProps>;
export const BlurTarget = BlurTargetUntyped as ComponentType<BlurTargetProps>;
export const VibrancyView =
  VibrancyViewUntyped as ComponentType<VibrancyViewProps>;

export type {
  BlurViewProps,
  BlurViewType,
  BlurTargetProps,
  VibrancyViewProps,
} from './@types';
