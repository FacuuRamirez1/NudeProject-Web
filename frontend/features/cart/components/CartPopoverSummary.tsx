'use client';
import Link from "next/link";
import { useCart } from "../hooks/useCart";

interface Props  {
    onViewCart?: () => void;
};

export const CartPopoverSummary = ({ onViewCart }: Props) => {
    const { items } = useCart();

    const total = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    return (
        <div className="w-full bg-gray-100 px-4 py-4">
            <div className="flex justify-between text-2xl font-bold text-[#492A23] mb-4">
                <span>Items: {items.length}</span>
                <span>Total: ${total}</span>
            </div>

            <div className="w-full bg-[#5a2d22] flex justify-center items-center text-white py-3 font-bold">
                <Link href='/cart' className="text-center" onClick={onViewCart}>
                    View Cart
                </Link>
            </div>
        </div>
    );
};