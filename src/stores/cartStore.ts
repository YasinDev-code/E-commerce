import { cartStoreActionsType, cartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create<cartStoreStateType & cartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],
            hasHydrated: false,
            addToCart: (product) => set((state) => {
                const existingProduct = state.cart.findIndex(item =>
                    item.id === product.id &&
                    item.selectedSize === product.selectedSize &&
                    item.selectedColor === product.selectedColor)

                if (existingProduct !== -1) {
                    const updatedCart = [...state.cart]
                    updatedCart[existingProduct].quantity += product.quantity || 1
                    return { cart: updatedCart }
                }

                return { cart: [...state.cart, product] }
            }),
            removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
            )) })),
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if(state) {
                    state.hasHydrated = true;
                }
            }
        }
    )
)

export default useCartStore;