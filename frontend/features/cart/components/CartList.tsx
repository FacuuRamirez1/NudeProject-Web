import { useCart } from "../hooks/useCart"
import { CartItem } from "./CartItem";

export const CartList = () => {
    const { items } = useCart();

    if(items.length === 0) {
        return (
            <div className="w-full h-full text-black flex justify-center items-center">
                <h3 className="m-auto md:text-3xl font-sans">The cart is empty</h3>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center w-full px-4 flex-1 overflow-y-auto gap-4 md:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {items.map((product) => (
                <CartItem key={product.id} product={product}/>
            ))}
        </div> 
    )
}