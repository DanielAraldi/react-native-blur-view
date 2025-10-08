import { create } from 'zustand';
import type { UseBlurStoreProps } from '../@types';

export const useBlur = create<UseBlurStoreProps>((set) => ({
  isChangeable: true,
  isDark: false,
  radius: 10,
  mode: 'light',
  onToggle: (type) => set({ mode: type, isDark: type.includes('dark') }),
  onIncrement: () =>
    set((state) => ({ radius: state.radius >= 100 ? 100 : state.radius + 5 })),
  onDecrement: () =>
    set((state) => ({ radius: state.radius <= 0 ? 0 : state.radius - 5 })),
}));
