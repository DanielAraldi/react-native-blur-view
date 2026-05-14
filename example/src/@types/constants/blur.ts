import type {
  BlurType,
  EffectStyle,
} from '@danielsaraldi/react-native-blur-view';

export interface BlurTypeData {
  type: BlurType;
  label: string;
}

export interface EffectStyleData {
  style: EffectStyle;
  label: string;
}

export interface BlurRadiusData {
  radius: number;
  label: string;
}
