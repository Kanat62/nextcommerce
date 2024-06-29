import { create } from 'zustand'

interface LoginState {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useLoginStore = create<LoginState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))
