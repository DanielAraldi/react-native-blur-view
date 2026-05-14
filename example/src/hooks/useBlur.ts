import { create } from 'zustand';
import type { UseBlurStoreProps } from '../@types';

export const useBlur = create<UseBlurStoreProps>((set) => ({
  isDark: false,
  radius: 10,
  blurType: 'light',
  effectStyle: 'label',
  onBlurType: (type) => set({ blurType: type, isDark: type.includes('dark') }),
  onEffectStyle: (style) => set({ effectStyle: style }),
  onRadius: (radius) => set({ radius }),
}));
