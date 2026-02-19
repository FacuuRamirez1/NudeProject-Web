import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast  } from "sonner";
import { Product } from "@/features/products/types/products";
import { CartItems } from "../types/cartItems";


interface CartStore {
    items: CartItems[];
    addItem: (data: Product) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
    updateQuantity: (id: number, quantity: number) => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
        const currentItem = get().items
        const existingItem = currentItem.find((item) => item.id === data.id)

        if (existingItem) {
            return get().updateQuantity(data.id, existingItem.quantity + 1)
        }

        set({ items: [...currentItem, { ...data, quantity: 1 }]})
        toast("Product added to cart.")
    }, 

    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)]})
        toast("Product removed to cart.")
    },

    updateQuantity: (id: number, quantity: number) => {
        const items = get().items;
        const product = items.find(items => items.id == id)

        if (!product) return;
        if (quantity <= 0) return get().removeItem(id);
        if (quantity > product.stock) return toast.error("No more stock available");

        const newItems = items.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );
        set({ items: newItems });
    },

    removeAll: () => set({ items: []})
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))