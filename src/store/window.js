import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // 🟢 OPEN
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.isMinimized = false;
        win.isMaximized = false; // 🔥 reset state
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;

        state.nextZIndex++;
      }),

    // 🔴 CLOSE
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    // 🧠 FOCUS
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    // 🟡 MINIMIZE (🔥 FIXED)
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isMinimized = true;

        // 🔥 CRITICAL FIX
        win.isMaximized = false;
        win.isOpen = true;
      }),

    // 🔄 RESTORE
    restoreWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isMinimized = false;
        win.isMaximized = false; // 🔥 important
        win.isOpen = true;
        win.zIndex = state.nextZIndex;

        state.nextZIndex++;
      }),

    // 🟢 MAXIMIZE / RESTORE
    maximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // 🔄 toggle
        win.isMaximized = !win.isMaximized;

        // 🔥 ensure not minimized
        win.isMinimized = false;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;