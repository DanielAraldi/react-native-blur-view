import type { ComponentType } from 'react';
import { BlurView as BlurViewUntyped } from './components';
import type { BlurViewProps } from './@types';

export const BlurView = BlurViewUntyped as ComponentType<BlurViewProps>;

export type { BlurViewProps, BlurViewType } from './@types';
