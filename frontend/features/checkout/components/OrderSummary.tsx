'use client';
import { useCart } from "@/features/cart/hooks/useCart";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const OrderSummary = () => {
    const { items } = useCart();
    
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => { return acc + (item.price * item.quantity)}, 0);

    return (
        <div className="flex flex-col items-center justify-between w-full h-[20%] py-2 mb-5">
            <form className="flex flex-row gap-4 my-2 rounded-lg">
                <Input
                    type="text"
                    name="discount"
                    placeholder="Enter your discount code"
                    className="w-[60%] h-auto p-2"
                />

                <Button type="submit" className="w-{40%} h-auto p-2 bg-[#492A23] text-white font-bold border-white rounded-lg" >APPLY</Button>
            </form>

            <div className="flex flex-row justify-around text-black font-bold border-b w-[90%] border-black">
                <h3 className="md:text-xl">Total: ${totalPrice}</h3>
                <h3 className="md:text-xl">Items: {totalItems}</h3>
            </div>
        </div>
    );
};