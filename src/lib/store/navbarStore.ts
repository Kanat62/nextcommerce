import { create } from 'zustand'
interface NavbarState {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const useNavbarStore = create<NavbarState>()((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}))
