import { create } from 'zustand';
import type { ReactNode } from 'react';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

interface UIState {
  isBottomSheetOpen: boolean;
  bottomSheetContent: ReactNode | null;
  toast: ToastMessage | null;
  openBottomSheet: (content: ReactNode) => void;
  closeBottomSheet: () => void;
  showToast: (message: Omit<ToastMessage, 'id'>) => void;
  hideToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isBottomSheetOpen: false,
  bottomSheetContent: null,
  toast: null,
  openBottomSheet: (content) =>
    set({ isBottomSheetOpen: true, bottomSheetContent: content }),
  closeBottomSheet: () =>
    set({ isBottomSheetOpen: false, bottomSheetContent: null }),
  showToast: (message) =>
    set({ toast: { ...message, id: crypto.randomUUID() } }),
  hideToast: () => set({ toast: null }),
}));
