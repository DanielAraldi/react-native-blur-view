import { StyleSheet } from 'react-native';
import type { BlurViewType } from '../@types';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export const overlayColors: Record<BlurViewType, string> = {
  dark: '#100C0cC3',
  light: '#3CFFFFFF',
};
