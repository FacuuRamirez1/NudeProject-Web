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
        <div className="w-full h-fit bg-[#D9D9D9] flex justify-center">
            {loading ? (
                <Skeleton />
            ) : filter.length  > 0 || filter == undefined ? (
                <div className="w-full bg-white">
                    {filter.map((product: ProductType) => {
                        const newPrice = new Intl.NumberFormat('es-ES').format(product.Price);
                        
                        return (
                            <div key={product.id} className="flex flex-col md:flex-row items-stretch bg-[#F8F8F8] text-[#3E2327] md:h-[calc(100vh-70px)] overflow-hidden">
                                <div className="flex flex-row w-full md:w-[70%]">
                                    <div className="hidden md:flex flex-col m-auto justify-center w-[50%] border-r border-gray-100">
                                        <div className="relative aspect-4/5 w-full">
                                            <Image src={finalSrc(product, 0)} alt={product.productName || 'Product Image'} fill unoptimized className="object-fill"/>
                                        </div>
                                    </div>
                                    <div className="relative flex-1 aspect-4/5 bg-gray-50">
                                        <Image src={finalSrc(product, 1)} alt={product.productName || 'Product Image'} fill unoptimized className="object-fill"/>
                                    </div>
                                </div>
                                <div className="w-full md:w-[30%] p-6 md:p-8 flex flex-col h-full border-l border-gray-200 bg-white">
                                    <div className="lex-grow overflow-y-auto pr-2 scrollbar-hide [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                                        <div className="flex flex-col gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold uppercase tracking-tight">{product.productName}</h3>
                                                <p className="text-sm text-gray-500">{product.Collection}</p>
                                                <p className="text-lg font-semibold mt-2">${newPrice}</p>
                                            </div>
                                            <p className="text-sm leading-relaxed italic font-semibold pt-2">
                                                {product.description || "Description not found :("}
                                            </p>
                                            <div className="grid grid-cols-5 py-4 border-y-2 justify-items-center border-[#3E2327]">
                                                {["XS","S","M","L","XL"].map((size) => {
                                                    return (
                                                        <Button 
                                                        key={size} 
                                                        onClick={() => setSelectedSize(size)}
                                                        className={`w-12 h-12 font-bold border-2 flex items-center justify-center transition-all ${size === selectedSize ? 'bg-[#3E2723] text-white border-[#3E2723] hover:bg-[#3E2327]/80' : 'bg-[#F8F8F8] text-[#3E2723] border-[#3E2723] hover:bg-gray-100'}`}
                                                        >
                                                            {size}
                                                        </Button>
                                                    )
                                                })}
                                            </div>
                                            <Accordion type="multiple" defaultValue={["details"]} className="w-full my-2  overflow-y-auto scrollbar-hide [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                                                <AccordionItem value="details" className="border-2 border-[#3E2327] px-2">
                                                    <AccordionTrigger>Details</AccordionTrigger>
                                                    <AccordionContent className="pl-4 pt-2 border-t-2 border-[#3E2327]">
                                                        <strong>Composition</strong><br/>
                                                        <p className="pt-2 pb-4">
                                                            {product.details.conposition || "Sorry! This product does not have composition details."}<br/>
                                                        </p>
                                                        <strong>Fit</strong><br/>
                                                        <p className="pt-2 pb-4">
                                                            {product.details.fit || "Sorry! This product does not have fit details."}<br/>
                                                        </p>
                                                        <strong>Technical Details</strong><br/>
                                                        <p className="pt-2">
                                                            {product.details.technicalDetails || "Sorry! This product has not technical details."}<br/>
                                                        </p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="sizes" className="border-2 border-[#3E2327] px-2 mt-4">
                                                    <AccordionTrigger>Sizes</AccordionTrigger>
                                                    <AccordionContent className="pl-4 pt-2 border-t-2 border-[#3E2327]">
                                                        Sorry, the size guide is not available
                                                </AccordionContent>
                                                </AccordionItem>
                                                    <AccordionItem value="shipping,exchange&returns" className="border-2 border-[#3E2327] px-2 mt-4 border-b-2!">
                                                    <AccordionTrigger>Shipping, Exchange & Returns</AccordionTrigger>
                                                    <AccordionContent className="pl-4 pt-2 border-t-2 border-[#3E2327]">
                                                        <p className="mt-2">- Spain & Portugal orders 2-4 working days, approximately. (12-16 for Canary Islands orders)</p>
                                                        <p className="mt-2">- Rest of Europe orders 6-8 working days approximately.</p>
                                                        <p className="mt-2">- International orders 8-10 working days approximately.</p>
                                                        <p className="mt-2">If you have any issues with your order email us at help@nude-project.com and we will be there to help you. Please note, orders placed after 2PM (CET) will be shipped the following business day.</p>
                                                        <p className="underline my-2 font-semibold">Exchanges & Returns:</p>
                                                        <p className="mb-2">You can process your exchange or return through our <a href="https://returns.reveni.io/nude-project" className="underline">returns portal</a>.</p>
                                                        <p>Please find more information <Link href="" className="underline">here</Link>.</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                            <Link href="" className="w-full bg-[#3E2723] text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-[#2D1B19] transition-colors mt-9">
                                                Add to Cart
                                            </Link>
                                        </div>
                                    </div>
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