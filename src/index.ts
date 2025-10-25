import type { ComponentType } from 'react';
import {
  BlurView as BlurViewUntyped,
  BlurTarget as BlurTargetUntyped,
} from './components';
import type { BlurTargetProps, BlurViewProps } from './@types';

export const BlurView = BlurViewUntyped as ComponentType<BlurViewProps>;
export const BlurTarget = BlurTargetUntyped as ComponentType<BlurTargetProps>;

export type { BlurViewProps, BlurViewType, BlurTargetProps } from './@types';
