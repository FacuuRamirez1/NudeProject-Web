'use client'

import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "@/components/ui/skeleton";
import { use } from "react";
import { useGetProductCategory } from "@/app/api/useGetProducts";

const ViewCategoryPage = ({ params }: { params: Promise<{ category: string }> }) => {
    const { category } = use(params)
    const cleanCategory = decodeURIComponent(category).replaceAll("_", " ").trim()
    const { loading, req }: ResponseType<ProductType[]> = useGetProductCategory(cleanCategory)
    const titlePage = decodeURIComponent(category).replaceAll("_", " ").toUpperCase()
    console.log(req)

    const filteredProduct = req?.filter((product) => {
        const filterCategory = cleanCategory.toLowerCase()
        return product.Category?.toLowerCase() === filterCategory;

    }) || [];

    return (
        <main>
            <div className="w-full min-h-[calc(100vh-4rem)] bg-black/40 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
                <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">{titlePage}</h1>
                {loading ? (
                    <Skeleton />
                ) : filteredProduct.length > 0 || filteredProduct == undefined ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-3 w-full max-w-4xl px-4 pb-6 items-stretch">
                        {filteredProduct.map((product) => {

                            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                            const finalSrc = (backendUrl && product.productImage[0]?.url)
                                ? `${backendUrl}${product.productImage[0]?.url}`
                                : "https://imgs.search.brave.com/zSX-b4IcBbc-D94yA96TobUYmBw673Ui54bSy9qCo7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su//i/NTAwcC8z/Mi80NS9uby1pbWFn/ZS1zeW1ib2wtbWlz/c2luZy1hdmFpbGFi/bGUtaWNvbi1nYWxs/ZXJ5LXZlY3Rvci00/NTcwMzI0NS5qcGc";

                            const newPrice = new Intl.NumberFormat('es-ES').format(product.Price);

                            return (
                                <div key={product.id} className="bg-[#3E2723] flex flex-col w-full h-full group cursor-pointer">
                                    <div className="relative aspect-4/5 w-full overflow-hidden p-2">
                                        <Image
                                            src={finalSrc}
                                            alt={product.productName || "No Image"}
                                            fill
                                        />
                                    </div>
                                    <div className="bg-[#3E2723] p-2 flex flex-col flex-1 border-t border-white/10">
                                        <div className="flex flex-col grow items-center justify-start mb-3">
                                            <p className="text-gray-400 font-medium text-[9px] uppercase tracking-widest text-center px-2">{product.Collection}</p>
                                            <h3 className="text-white font-bold text-[10px] uppercase tracking-tight text-center leading-tight my-1 min-h-[24px] flex items-center">
                                                {product.productName}
                                            </h3>
                                            <p className="text-white font-bold text-[10px] sm:text-[11px] uppercase text-center">${newPrice}</p>
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <Link href="" className="bg-[#3E2723] text-white px-10 py-4 text-xs md:text-sm font-bold uppercase hover:bg-[#755550] transition-all duration-300 border-2 rounded-2xl">
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="col-span-full flex items-center justify-center min-h-96 text-center px-4">
                        <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
                            <h2 className="text-7xl md:text-9xl font-black text-white/10 uppercase tracking-tighter leading-none select-none">
                                Sorry!
                            </h2>
                            <div className="flex flex-col gap-2 -mt-8 md:-mt-12">
                                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest">
                                    No Clothing Found
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ViewCategoryPage;