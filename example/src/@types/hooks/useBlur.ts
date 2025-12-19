import type { BlurType } from '@danielsaraldi/react-native-blur-view';

export interface UseBlurStoreProps {
  isDark: boolean;
  radius: number;
  mode: BlurType;
  onToggle: (type: BlurType) => void;
  onRadius: (radius: number) => void;
}
