'use client'

import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";
import { useGetProducts } from "../api/useGetProducts";
import Skeleton from "@/components/ui/skeleton";

const ViewAllPage = () => {
    const { loading, req }: ResponseType<ProductType[]> = useGetProducts()

    return (
        <div className="w-full min-h-[calc(100vh-4rem)] pb-16 bg-black/40 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">VIEW ALL</h1>
            <div className="ml-2 md:-ml-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 lg:gap-x-7 w-full max-w-4xl px-8 pb-4 items-stretch">
                {loading ? (
                    <Skeleton />
                ) : (
                    req?.map((product) => {
                        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                        const finalSrc = (backendUrl && product.productImage[0]?.url)
                            ? `${backendUrl}${product.productImage[0]?.url}`
                            : "https://imgs.search.brave.com/zSX-b4IcBbc-D94yA96TobUYmBw673Ui54bSy9qCo7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su//i/NTAwcC8z/Mi80NS9uby1pbWFn/ZS1zeW1ib2wtbWlz/c2luZy1hdmFpbGFi/bGUtaWNvbi1nYWxs/ZXJ5LXZlY3Rvci00/NTcwMzI0NS5qcGc";
                        const newPrice = new Intl.NumberFormat('es-ES').format(product.Price);
                        return (
                            <div key={product.id} className="bg-[#3E2723] flex flex-col w-full h-full group cursor-pointer">
                                <div className="relative aspect-4/5 w-full overflow-hidden bg-[#3E2723] p-3">
                                    <Image
                                        src={finalSrc}
                                        alt={product.productName || "No Image"}
                                        fill
                                        unoptimized
                                    />
                                </div>
                                <div className="bg-[#3E2723] py-5 flex flex-col items-center justify-center flex-1 gap-2 border-t border-gray-300">
                                    <div className="flex flex-col flex-1 items-center justify-center">
                                        <p className="text-gray-400 font-medium text-[9px] uppercase tracking-widest text-center px-2">{product.Collection}</p>
                                        <h3 className="text-white font-bold text-[11px] uppercase tracking-widest text-center min-h-[48px] flex items-center">
                                            {product.productName}
                                        </h3>
                                        <p className="text-white font-bold text-[11px] uppercase tracking-widest text-center px-2">${newPrice}</p>
                                    </div>
                                    <div className="w-full flex justify-center mt-auto">
                                        <Link href={`/products/product/${product.id}`} className="bg-[#3E2723] text-white px-4 py-2 md:px-10 md:py-4 text-xs md:text-sm font-bold uppercase hover:bg-[#755550] transition-all duration-300 border-2 rounded-2xl">
                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    );
}

export default ViewAllPage;