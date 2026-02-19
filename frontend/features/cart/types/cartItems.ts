import { Product } from "@/features/products/types/products";

export type CartItems = Product & {
    quantity: number;
};