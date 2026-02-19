import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/features/cart/hooks/useCart"
import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../../../shared/ui/popover"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"

export const CartPopover = () => {

    const cart = useCart();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open])

    const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex flex-row justify-end">
                <ShoppingCart strokeWidth={1.5} className="cursor-pointer" onClick={() => setOpen(true)} />
                <span className="text-[11px] font-semibold m-auto mb-0 px-0.5">{totalItems}</span>
            </PopoverTrigger>

            <PopoverContent className="flex w-screen h-[101vh] mt-[27px] lg:mt-[29px] p-0 border-none rounded-none z-100 bg-black/80">
                <div className=" m-auto mr-0 border-none rounded-none bg-[#D9D9D9]/95 w-full h-full md:w-[30vw] md:h-screen flex flex-col gap-4 justify-start items-start">
                    <div className="flex items-center justify-between w-full px-6 py-4 pb-0 text-black">
                        <p className="text-black font-medium text-lg">Cart</p>
                        <X onClick={() => setOpen(false)}/>
                    </div>
                    
                    <CartList />
                    <CartSummary buttonText="View Cart" path="/Cart"/>
                </div>
            </PopoverContent>
        </Popover>
    )
}