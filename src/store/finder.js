    // store/finderStore.js
import { create } from "zustand"

const useFinderStore = create((set) => ({
  selectedIds: [],
  positions: {},

  select: (id, multi = false) =>
    set((state) => ({
      selectedIds: multi
        ? [...state.selectedIds, id]
        : [id],
    })),

  clearSelection: () => set({ selectedIds: [] }),

  setPosition: (id, pos) =>
    set((state) => ({
      positions: {
        ...state.positions,
        [id]: pos,
      },
    })),
}))

export default useFinderStore