import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast  } from "sonner";

import { ProductType } from "@/types/products";

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItem = get().items
        const existingItem = currentItem.find((item) => item.id === data.id)

        if (existingItem) {
            toast.error("The product is already in the cart.")
            return
        }

        set({
            items: [...get().items, data]
        })
        toast("Product added to cart.")
    }, 

    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)]})
        toast("Product deleted to cart.")
    },

    removeAll: () => set({ items: []})
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))