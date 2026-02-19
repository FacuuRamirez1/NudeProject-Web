import { Button } from "@/shared/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { CartItems } from "../types/cartItems";

interface Prop {
    product: CartItems;
}

export const CartItem = ({product}: Prop) => {
    const cart = useCart()

    return (
        <div className="bg-transparent border border-white flex flex-row w-full min-h-[160px] shrink-0 group cursor-pointer mx-auto">
                                        <div className="relative aspect-4/5 w-[10vw] overflow-hidden bg-transparent">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                                                alt={product.name || "No Image"}
                                                fill
                                                unoptimized
                                            />
                                        </div>
                                        <div className="bg-black py-3 px-4 flex flex-col items-start justify-center grow gap-2 border-t border-white/20">
                                            <div className="flex flex-col items-start">
                                                <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-widest">
                                                    {product.name}
                                                </h3>
                                                <p className="font-semibold text-white/60">{product.collection}</p>
                                                <p className="mt-2 font-semibold text-sm">${product.price}</p>
                                            </div>
                                            <div className="w-full flex flex-row justify-between mb-1 items-center mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <Button className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm" onClick={() => cart.updateQuantity(product.id, product.quantity - 1 )}>
                                                        <Minus size={16}/>
                                                    </Button>
                                                    <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                        {product.quantity}
                                                    </span>
                                                    <Button className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm" onClick={() => cart.updateQuantity(product.id, product.quantity + 1 )}>
                                                    <Plus size={16}/>
                                                    </Button>
                                                </div>
                                                
                                                <Button onClick={() => {cart.removeItem(product.id)}} className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm">
                                                    <Trash2 size={16}/>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
    );
}