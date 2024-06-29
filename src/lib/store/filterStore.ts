import { create } from 'zustand'
interface FilterState {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const useFilterStore = create<FilterState>()((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}))
