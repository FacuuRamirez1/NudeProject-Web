'use client';

import { useRouter } from "next/navigation";
import { useCart } from "../hooks/useCart";
import { Button } from "@/shared/ui/button";

interface Props  {
    onViewCart?: () => void;
};

export const CartPopoverSummary = ({ onViewCart }: Props) => {
    const { items } = useCart();
    const router = useRouter();

    const total = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    const clickViewCart = () => {
        onViewCart?.()
        router.push('/cart');
    };

    return (
        <div className="w-full bg-gray-100 px-4 py-6">
            <div className="flex justify-between text-2xl font-bold text-[#492A23] mb-4">
                <span>Items: {items.length}</span>
                <span>Total: ${total}</span>
            </div>

            <Button className="text-center w-full bg-[#5a2d22] hover:bg-[#492A23] flex justify-center text-white py-3 font-bold" onClick={clickViewCart}>
                View Cart
            </Button>
        </div>
    );
};