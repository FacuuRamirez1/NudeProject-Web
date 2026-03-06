import { CartItems } from "@/features/cart/types/cartItems";
import { CheckoutType } from "@nudeproject/schemas";

type CheckoutPayload = {
    items: CartItems[],
    total: number,
    checkoutData: CheckoutType,
};

export async function createCheckoutOrder(payload: CheckoutPayload) {
    const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data: {
                ...payload,
            },
        }),
    });

    if (!res.ok) {
        throw new Error(res.status === 401 ? "UNAUTHORIZED" : "ORDER_FAILED");
    }

    return res.json();
}