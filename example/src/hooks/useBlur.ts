import { create } from 'zustand';
import type { UseBlurStoreProps } from '../@types';

export const useBlur = create<UseBlurStoreProps>((set) => ({
  isDark: false,
  radius: 10,
  mode: 'light',
  onToggle: (type) => set({ mode: type, isDark: type.includes('dark') }),
  onRadius: (radius) => set({ radius }),
}));
