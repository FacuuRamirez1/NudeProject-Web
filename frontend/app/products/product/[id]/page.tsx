'use client'
import { useGetProducts } from "@/app/api/useGetProducts";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export const finalSrc = (product: ProductType, index: number = 0): string => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (backendUrl && product?.productImage?.[index]?.url) {
        return `${backendUrl}${product?.productImage?.[index]?.url}`;
    }

    return "https://imgs.search.brave.com/zSX-b4IcBbc-D94yA96TobUYmBw673Ui54bSy9qCo7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su//i/NTAwcC8z/Mi80NS9uby1pbWFn/ZS1zeW1ib2wtbWlz/c2luZy1hdmFpbGFi/bGUtaWNvbi1nYWxs/ZXJ5LXZlY3Rvci00/NTcwMzI0NS5qcGc";
};


const ViewProductPage = ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = use(params)
    const { loading, req }: ResponseType<ProductType[]> = useGetProducts()
    const [selectedSize, setSelectedSize] = useState("")

    const filter = req?.filter((product) => {
        return Number(product.id) === Number(id)
    }) || [];

    return (
        <div className="w-full min-h-[81vh] bg-[#D9D9D9] flex justify-center">
            {loading ? (
                <Skeleton />
            ) : filter.length  > 0 || filter == undefined ? (
                <div className="w-full bg-white min-h-screen">
                    {filter.map((product: ProductType) => {
                        const newPrice = new Intl.NumberFormat('es-ES').format(product.Price);
                        
                        return (
                            <div key={product.id} className="flex flex-col md:flex-row items-start text-[#3E2327]">
                                <div className="flex flex-row w-full md:w-[65%] h-full">
                                    <div className="hidden md:flex flex-col w-[40%] border-r border-gray-100">
                                        <div className="relative aspect-3/4 w-full">
                                            <Image src={finalSrc(product, 0)} alt={product.productName || 'Product Image'} fill unoptimized className="object-cover"/>
                                        </div>
                                        <div className="relative aspect-3/4 w-full">
                                            <Image src={finalSrc(product, 1)} alt={product.productName || 'Product Image'} fill unoptimized className="object-cover"/>
                                        </div>
                                    </div>
                                    <div className="relative flex-1 aspect-3/4 bg-gray-50">
                                        <Image src={finalSrc(product, 2)} alt={product.productName || 'Product Image'} fill unoptimized className="object-cover"/>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full md:w-[35%] p-8 md:p-12 gap-6 md:sticky md:top-0 h-full">
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight">{product.productName}</h3>
                                        <p className="text-sm text-gray-500">{product.Collection}</p>
                                        <p className="text-lg font-semibold mt-2">${newPrice}</p>
                                    </div>
                                    <p className="text-sm leading-relaxed italic border-t border-gray-300 pt-4">
                                        {product.description || "Description not found :("}
                                    </p>
                                    <div className="grid grid-cols-5 gap-2 py-4 border-y border-gray-200">
                                        {["XS","S","M","L","XL"].map((size) => {
                                            return (
                                                <Button 
                                                key={size} 
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-12 h-12 border flex items-center justify-center transition-all ${size === selectedSize ? 'bg-[#3E2723] text-white border-[#3E2723]' : 'bg-white text-[#3E2723] border-[#3E2723] hover:bg-gray-100'}`}
                                                >
                                                    {size}
                                                </Button>
                                            )
                                        })}
                                    </div>
                                    <Accordion type="multiple" defaultValue={["details"]} className="max-w-lg">
                                        <AccordionItem value="details">
                                            <AccordionTrigger>Details</AccordionTrigger>
                                            <AccordionContent>
                                                <strong>Composition</strong><br/>
                                                {product.details.conposition || "Sorry! This product does not have composition details."}<br/>
                                                <strong>Fit</strong><br/>
                                                {product.details.fit || "Sorry! This product does not have fit details."}<br/>
                                                <strong>Technical Details</strong><br/>
                                                {product.details.technicalDetails || "Sorry! This product has not technical details."}<br/>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="returns">
                                            <AccordionTrigger>Sizes</AccordionTrigger>
                                            <AccordionContent>
                                                Sorry, the size guide is not available
                                        </AccordionContent>
                                        </AccordionItem>
                                            <AccordionItem value="support">
                                            <AccordionTrigger>Shipping, Exchange & Returns</AccordionTrigger>
                                            <AccordionContent>
                                                <p>- Spain & Portugal orders 2-4 working days, approximately. (12-16 for Canary Islands orders)</p>
                                                <p>- Rest of Europe orders 6-8 working days approximately.</p>
                                                <p>- International orders 8-10 working days approximately.</p>
                                                <p>If you have any issues with your order email us at help@nude-project.com and we will be there to help you. Please note, orders placed after 2PM (CET) will be shipped the following business day.</p>
                                                <p className="text-decoration:underline mb-2">Exchanges & Returns:</p>
                                                <p>You can process your exchange or return through our <a href="https://returns.reveni.io/nude-project">returns portal</a>.</p>
                                                <p>Please find more information <Link href="">here</Link>.</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Link href="" className="w-full bg-[#3E2723] text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-[#2D1B19] transition-colors">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        )
                })}
            </div>
        ): (
            <div className="flex items-center justify-center text-center">
                    <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
                        <h2 className="text-7xl md:text-9xl font-black text-[#3E2723] uppercase tracking-tighter leading-none select-none">
                            Sorry!
                        </h2>
                        <div className="flex flex-col gap-2 -mt-8 md:-mt-12">
                            <h3 className="text-2xl md:text-4xl font-bold text-[#3E2723] uppercase tracking-widest">
                                Product not found
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewProductPage;