'use client';
// import { createOrder } from "@/features/account/services/order.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { checkoutSchema, CheckoutType } from "@nudeproject/schemas";
import { toast } from "sonner";
import { createCheckoutOrder } from "../services/checkout.service";
import { useRouter } from "next/navigation";
import { useCart } from "@/features/cart/hooks/useCart";

export const useCheckout = () => {

    const router = useRouter();
    const { items, removeAll } = useCart();

    const form = useForm({
        resolver: zodResolver(checkoutSchema),
    });

    const onSubmit = async (data: CheckoutType) => {

        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

        try {
            await createCheckoutOrder({ items, total, checkoutData: data });
            toast.success("Order created!");
            removeAll();
            router.push("/account");
        } catch (error: unknown) {
            if (error instanceof Error && error.message === "UNAUTHORIZED") {
                toast.error("You must be logged in to checkout");
                router.push("/login");
                return;
            }
            toast.error("Error creating order");
        }
    }

    return { ...form, onSubmit };
}