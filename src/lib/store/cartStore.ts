import { create } from 'zustand'
import { IProduct } from '../types/interface'
import { persist, createJSONStorage } from 'zustand/middleware'
interface CartState {
    isOpen: boolean
    cart: IProduct[]
    openModal: () => void
    closeModal: () => void
    addToCart: (product: IProduct) => void
    deleteFromCart: (_id: string) => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            isOpen: false,
            cart: [],
            openModal: () => set({ isOpen: true }),
            closeModal: () => set({ isOpen: false }),
            addToCart: (product: IProduct) =>
                set((state) => ({ cart: [...state.cart, product] })),
            deleteFromCart: (_id: string) =>
                set((state) => ({
                    cart: state.cart.filter((product) => product._id !== _id),
                })),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ cart: state.cart }),
        }
    )
)
