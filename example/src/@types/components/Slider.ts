import type { RefObject } from 'react';
import type { View } from 'react-native';

export interface SliderProps {
  blurTarget?: RefObject<View | null>;
  label?: string;
  maximumValue?: number;
  value: number;
  onValueChange: (value: number) => void;
}
