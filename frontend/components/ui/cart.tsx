import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { useCart } from "@/hooks/use-cart"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "./button"

export const Cart = () => {

    const cart = useCart();
    const { removeItem } = useCart();

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex flex-row justify-end">
                <ShoppingCart strokeWidth={1.5} className="cursor-pointer" onClick={() => setOpen(true)} />
                <span className="text-[11px] font-semibold m-auto mb-0 px-0.5">{cart.items.length}</span>
            </PopoverTrigger>
            <PopoverContent className="flex w-screen h-screen md:h-[90.9vh] mt-[27px] lg:mt-[28px] p-0 border-none rounded-none z-100">
                <div className=" m-auto mr-0 border-none rounded-none bg-[#D9D9D9]/95 w-full h-full md:w-[30vw] md:h-full flex flex-col gap-4 justify-start items-start">
                    <div className="flex items-center justify-between w-full px-6 py-4 pb-0 text-black">
                        <p className="text-black font-medium text-lg">Cart</p>
                        <X onClick={() => setOpen(false)}/>
                    </div>
                    <div className="flex flex-col items-center w-full px-4 flex-1 overflow-y-auto gap-4 md:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {cart.items.length > 0 ?(
                            cart.items?.map((p) => {
                                const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                                const finalSrc = (backendUrl && p.productImage[0]?.url)
                                    ? `${backendUrl}${p.productImage[0]?.url}`
                                    : "https://imgs.search.brave.com/zSX-b4IcBbc-D94yA96TobUYmBw673Ui54bSy9qCo7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su//i/NTAwcC8z/Mi80NS9uby1pbWFn/ZS1zeW1ib2wtbWlz/c2luZy1hdmFpbGFi/bGUtaWNvbi1nYWxs/ZXJ5LXZlY3Rvci00/NTcwMzI0NS5qcGc"
                                return (
                                    <div key={p.id} className="bg-transparent border border-white flex flex-row w-full min-h-[160px] shrink-0 group cursor-pointer mx-auto">
                                        <div className="relative aspect-4/5 w-[10vw] overflow-hidden bg-transparent">
                                            <Image
                                                src={finalSrc}
                                                alt={p.productName || "No Image"}
                                                fill
                                                unoptimized
                                            />
                                        </div>
                                        <div className="bg-black py-3 px-4 flex flex-col items-start justify-center grow gap-2 border-t border-white/20">
                                            <div className="flex flex-col items-start">
                                                <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-widest">
                                                    {p.productName}
                                                </h3>
                                                <p className="font-semibold text-white/60">{p.Collection}</p>
                                                <p className="mt-2 font-semibold text-sm">${p.Price}</p>
                                            </div>
                                            <div className="w-full flex flex-row justify-between mb-1 items-center mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <Button className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm">
                                                        <Plus size={16}/>
                                                    </Button>
                                                    <span className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white font-semibold text-sm">1</span>
                                                    <Button className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm">
                                                        <Minus size={16}/>
                                                    </Button>
                                                </div>
                                                
                                                <Button onClick={() => {removeItem(p.id)}} className="w-8 h-8 border border-white rounded-full flex items-center justify-center bg-transparent text-white font-semibold text-sm">
                                                    <Trash2 size={16}/>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="w-full h-full text-black flex justify-center items-center">
                                <h3 className="m-auto md:text-3xl font-sans">The cart is empty</h3>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-between w-full h-[15%] py-2 mb-5">
                        <div className="flex flex-row justify-around text-black font-bold border-b w-[90%] border-black">
                            <h3 className="md:text-xl">Total: $totalPrice</h3>
                            <h3 className="md:text-xl">Items: {cart.items.length}</h3>
                        </div>
                        <Button className="w-[90%] text-xl font-bold text-white bg-black rounded-none py-6 hover:bg-black/80">Checkout</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}