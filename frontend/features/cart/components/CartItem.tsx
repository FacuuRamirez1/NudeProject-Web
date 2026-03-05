import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { CartItems } from "../types/cartItems";
import { Minus, Plus, Trash2 } from "lucide-react";

interface Prop {
    product: CartItems;
}

export const CartItem = ({product}: Prop) => {
    const cart = useCart()

    return (
        <div className="flex flex-col w-full md:flex-row items-center gap-4 bg-black last:border-0">

            <div className="relative w-32 h-32 bg-[#F5F5F5] flex items-start justify-center p-4 overflow-hidden">
                <Image 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} 
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover mix-blend-multiply" 
                />
            </div>

            <div className="flex-1 flex flex-col justify-center items-start gap-2 w-full">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold leading-tight">{product.name}</h3>
                    <p className="text-lg font-semibold mt-1">${product.price.toFixed(2)}</p>
                </div>

                <div className="w-[95%] flex flex-row items-center justify-between mt-4 md:mt-0">
                    <div className="flex items-center border-2 border-black rounded-lg overflow-hidden">
                        <button onClick={() => cart.updateQuantity(product.id, product.quantity - 1)} className="p-1 hover:bg-white/20"><Minus size={16}/></button>
                        <span className="px-6 py-1 font-bold">{product.quantity}</span>
                        <button onClick={() => cart.updateQuantity(product.id, product.quantity + 1)} className="p-1 hover:bg-white/20"><Plus size={16}/></button>
                    </div>
                    <button onClick={() => cart.removeItem(product.id)} className="text-sm font-bold uppercase underline p-1 tracking-tighter hover:text-[#492A23]">
                        <Trash2 size={16}/>
                    </button>
                </div>
            </div>
        </div>
    );
}