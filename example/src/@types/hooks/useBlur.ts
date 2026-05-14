import type {
  BlurType,
  EffectStyle,
} from '@danielsaraldi/react-native-blur-view';

export interface UseBlurStoreProps {
  isDark: boolean;
  radius: number;
  blurType: BlurType;
  effectStyle: EffectStyle;
  onBlurType: (type: BlurType) => void;
  onEffectStyle: (style: EffectStyle) => void;
  onRadius: (radius: number) => void;
}
