import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // ==========================
    // OPEN WINDOW
    // ==========================
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.isMinimized = false;

        // Keep maximize state if reopening
        win.zIndex = state.nextZIndex;

        if (data !== null) {
          win.data = data;
        }

        state.nextZIndex++;
      }),

    // ==========================
    // CLOSE WINDOW
    // ==========================
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.data = null;

        // Restore previous bounds when reopened
        if (win.previousBounds) {
          win.x = win.previousBounds.x;
          win.y = win.previousBounds.y;
          win.width = win.previousBounds.width;
          win.height = win.previousBounds.height;
        }

        win.zIndex = INITIAL_Z_INDEX;
      }),

    // ==========================
    // FOCUS WINDOW
    // ==========================
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    // ==========================
    // MINIMIZE
    // ==========================
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isMinimized = true;
        win.isOpen = true;
      }),

    // ==========================
    // RESTORE
    // ==========================
    restoreWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.isMinimized = false;

        if (win.previousBounds && win.isMaximized) {
          win.x = win.previousBounds.x;
          win.y = win.previousBounds.y;
          win.width = win.previousBounds.width;
          win.height = win.previousBounds.height;
        }

        win.isMaximized = false;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),

    // ==========================
    // MAXIMIZE / RESTORE
    // ==========================
    maximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        if (!win.isMaximized) {
          // Save current size & position
          win.previousBounds = {
            x: win.x,
            y: win.y,
            width: win.width,
            height: win.height,
          };

          // Maximize
          win.x = 0;
          win.y = 0;

          win.width = window.innerWidth;
          win.height = window.innerHeight - 38;

          win.isMaximized = true;
        } else {
          // Restore previous size
          if (win.previousBounds) {
            win.x = win.previousBounds.x;
            win.y = win.previousBounds.y;
            win.width = win.previousBounds.width;
            win.height = win.previousBounds.height;
          }

          win.isMaximized = false;
        }

        win.isMinimized = false;
        win.isOpen = true;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;