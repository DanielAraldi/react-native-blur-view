import type { BlurType } from '@danielsaraldi/react-native-blur-view';

export interface UseBlurStoreProps {
  isChangeable: boolean;
  isDark: boolean;
  radius: number;
  mode: BlurType;
  onToggle: (type: BlurType) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}
