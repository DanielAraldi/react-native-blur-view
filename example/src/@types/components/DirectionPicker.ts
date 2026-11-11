import type { RefObject } from 'react';
import type { View } from 'react-native';
import type { Direction } from '@danielsaraldi/react-native-blur-view';

export interface DirectionPickerProps {
  blurTarget?: RefObject<View | null>;
  value: Direction;
  onValueChange: (value: Direction) => void;
}
