import { Product } from "@/features/products/types/products";
import { CheckoutType } from "@nudeproject/schemas";

export type OrderAddress = Pick <CheckoutType, "address1" | "address2" | "city" | "state" | "postalCode" | "country" | "comments">;

export type Orders = {
    id: number,
    total: string,
    items: Product[]
    checkoutData: OrderAddress
};