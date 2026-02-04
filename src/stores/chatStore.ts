import { create } from 'zustand';

interface ChatState {
  unreadCount: number;
  activeRoomId: string | null;
  setUnreadCount: (count: number) => void;
  incrementUnread: () => void;
  setActiveRoom: (roomId: string | null) => void;
  reset: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  unreadCount: 0,
  activeRoomId: null,
  setUnreadCount: (count) => set({ unreadCount: count }),
  incrementUnread: () => set((state) => ({ unreadCount: state.unreadCount + 1 })),
  setActiveRoom: (roomId) => set({ activeRoomId: roomId }),
  reset: () => set({ unreadCount: 0, activeRoomId: null }),
}));
