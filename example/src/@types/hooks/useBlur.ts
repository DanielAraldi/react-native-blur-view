import type { BlurViewType } from '@danielsaraldi/react-native-blur-view';

export interface UseBlurStoreProps {
  isChangeable: boolean;
  isDark: boolean;
  radius: number;
  mode: BlurViewType;
  onToggle: (type: BlurViewType) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}
