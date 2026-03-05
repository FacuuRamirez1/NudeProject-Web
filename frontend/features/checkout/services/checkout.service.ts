import { CartItems } from "@/features/cart/types/cartItems";

export async function createCheckoutOrder(items: CartItems[], total: number) {
    const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data: {
                items,
                total,
                orderStatus: "pending",
            },
        }),
    });

    if (!res.ok) {
        throw new Error(res.status === 401 ? "UNAUTHORIZED" : "ORDER_FAILED");
    }

    return res.json();
}