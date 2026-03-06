'use client';
import { CartList } from "@/features/cart/components/CartList";
import { useCart } from "@/features/cart/hooks/useCart";

export const OrderSummary = () => {
    const { items } = useCart();
    
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    const FREE_SHIPPING_THRESHOLD = 150;
    const SHIPPING_RATE = 0.1; 

    const shippingCost = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : totalPrice * SHIPPING_RATE;
    const totalWithShipping = totalPrice + shippingCost;

    return (
        <div className="flex flex-col bg-[#492A23] text-white rounded-xl items-center justify-between w-full py-4 mb-5">
            <span className="text-white font-semibold text-2xl pb-4 pl-4">Your items</span>
            <div>
                <CartList />
            </div>

            <div className="w-[90%] text-white mb-2 mt-6 space-y-2">
                <div className="flex flex-row justify-between">
                    <span className="md:text-base">Subtotal</span>
                    <span className="md:text-base">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="md:text-base">Shipping</span>
                    <span className="md:text-base">
                        {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                    </span>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="md:text-base">Items</span>
                    <span className="md:text-base">{totalItems}</span>
                </div>
                <div className="flex flex-row justify-between font-bold border-t border-white pt-3 mt-2">
                    <span className="md:text-lg">Total</span>
                    <span className="md:text-lg">${totalWithShipping.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};