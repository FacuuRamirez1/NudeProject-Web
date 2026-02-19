'use client'
import { useCart } from "../hooks/useCart";
import Link from "next/link";

interface Prop {
    buttonText: string,
    path: string,
}

export const CartSummary = ({ buttonText, path }: Prop) => {
    const { items } = useCart();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    return (
        <div className="flex flex-col items-center justify-between w-full h-[15%] py-2 mb-5">
            <div className="flex flex-row justify-around text-black font-bold border-b w-[90%] border-black">
                <h3 className="md:text-xl">Total: ${totalPrice}</h3>
                <h3 className="md:text-xl">Items: {totalItems}</h3>
            </div>
            <Link href={path} className="w-[90%] text-xl font-bold text-white bg-black rounded-none py-2 hover:bg-black/80" /* Enrutar con cart page */>
                {buttonText}
            </Link>
        </div>
    );
}