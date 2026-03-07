'use client'
import { useCart } from "../hooks/useCart";
import Link from "next/link";


export const CartPageSummary = () => {
    const { items } = useCart();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const subTotalPrice = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    const deliveryCost = (subTotalPrice >= 100) ? (subTotalPrice * 0.1) : 0;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-gray-300 font-semibold">Subtotal:</span>
                <span className="md:text-xl font-semibold">${subTotalPrice}</span>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-gray-300 font-semibold">Delivery:</span>
                <span className="bg-white text-black px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-tighter">
                    {deliveryCost == 0 ? 'Free' : `$${deliveryCost.toFixed(2)}`}
                </span>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-gray-300 font-semibold">Items:</span>
                <span className="md:text-xl font-semibold">{totalItems}</span>
            </div>

            <div className="border-t border-white/20 pt-6 mb-8 flex justify-between items-baseline">
                <span className="text-2xl font-black italic uppercase tracking-tighter">TOTAL</span>
                <span className="text-3xl font-black tracking-tight">${subTotalPrice + deliveryCost}</span>
            </div>

            <Link href='./checkout' className="block text-center w-full bg-black hover:bg-zinc-900 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-xl">
                Checkout
            </Link>
        </div>
    );
}