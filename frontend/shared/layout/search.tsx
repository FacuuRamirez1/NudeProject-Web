'use client';
import { useMemo, useState, useEffect } from "react";
import { ProductType } from "@/features/products/types/products";
import { ResponseType } from "@/shared/types/responses";
import { getProduct } from "@/features/products/services/product.service";


import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const SearchProduct = () => {
    const [open, setOpen] = useState(false);
    const [resFilter, setResFilter] = useState("");
    const [searchParam] = useState<(keyof ProductType)[]>(["productName","Collection", "Category"]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const data = await getProduct();
            setProducts(data);

        } catch(error) {
            console.log("Error fetching products: ", error)

        }finally {
            setLoading(false);
        }
      }

      fetchProducts();
    }, []);
    


    const filteredProduct = useMemo(() => {
        if (!products) return [];

        return products.filter((product) => {
            return searchParam.some((key) => {
                const value = product[key];

                if (value !== null && value !== undefined) {
                    return String(value).toLowerCase().includes(resFilter.toLowerCase());
                }
                return false;
            });
        });
    }, [resFilter, products, searchParam]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Search strokeWidth={1.5} className="cursor-pointer"/>
            </PopoverTrigger>
            <PopoverContent className="mt-[27px] lg:mt-[28px] border-none rounded-none bg-black/95 w-screen h-[55vh] flex flex-col gap-4 md:gap-8 justify-start items-start overflow-hidden">
                <div className="flex flex-row w-full m-0 justify-baseline lg:gap-x-[84vw]">
                    <input 
                        type="text" 
                        id="searchProduct"
                        placeholder="Search..." 
                        value={resFilter}
                        onChange={(e) => setResFilter(e.target.value)}
                        className="pl-1 text-white/80 border-b border-white m-auto focus:outline-none focus:shadow-none focus:text-white"
                    />
                    <X onClick={() => setOpen(false)}/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full flex-1 overflow-y-auto pr-4 gap-4 md:gap-10 scrollbar-hide [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                    {loading ? (
                        <h2>Searching for products...</h2>
                    ) : resFilter !== "" ?(
                        filteredProduct?.map((p) => {
                            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                            const finalSrc = (backendUrl && p.productImage[0]?.url)
                                ? `${backendUrl}${p.productImage[0]?.url}`
                                : "https://imgs.search.brave.com/zSX-b4IcBbc-D94yA96TobUYmBw673Ui54bSy9qCo7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su//i/NTAwcC8z/Mi80NS9uby1pbWFn/ZS1zeW1ib2wtbWlz/c2luZy1hdmFpbGFi/bGUtaWNvbi1nYWxs/ZXJ5LXZlY3Rvci00/NTcwMzI0NS5qcGc"
                            return (
                                <div key={p.id} className="bg-transparent border border-white flex flex-col w-full min-w-[60px] max-w-[160px] h-full group cursor-pointer mx-auto">
                                    <div className="relative aspect-4/5 w-full overflow-hidden bg-transparent">
                                        <Image
                                            src={finalSrc}
                                            alt={p.productName || "No Image"}
                                            fill
                                            unoptimized
                                        />
                                    </div>
                                    <div className="bg-black p-3 flex flex-col items-center justify-between grow gap-2 border-t border-white/20">
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text-white font-bold text-[11px] uppercase tracking-widest text-center min-h-[48px] flex items-center">
                                                {p.productName}
                                            </h3>
                                        </div>
                                        <div className="w-full flex justify-center mt-auto">
                                            <Link href={`/products/product/${p.id}`} className="bg-transparent text-white px-2 py-1 font-bold text-[11px] uppercase hover:bg-white/20 transition-all duration-300 border-2 rounded-2xl">
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="w-screen text-white/40 flex justify-center items-start">
                            <h3 className="m-auto mt-20 md:text-5xl font-sans">What are you looking for?</h3>
                        </div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    )
}