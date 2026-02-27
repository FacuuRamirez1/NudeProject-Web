'use client';

import { useState } from "react";
import { Product } from "../types/products";
import { useCart } from "@/features/cart/hooks/useCart";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import Link from "next/link";

interface Prop {
    product: Product;
}

export const ProductView = ({ product }: Prop) => {
    const [selectedSize, setSelectedSize] = useState("")
    const { addItem, items } = useCart();
    
    const ProductCart = items.some(items => items.id === product.id);
    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Choose a size!");
            return;
        }

        addItem({ ...product, selectedSize });
    }

    console.log('images: ', product.images)

    const formatedPrice = new Intl.NumberFormat('en-US').format(product.price);
    return (
        <div key={product?.id} className="flex flex-col md:flex-row items-stretch bg-[#F8F8F8] text-[#3E2327] md:h-[calc(100vh-70px)] overflow-hidden">
            <div className="flex flex-row w-full md:w-[70%]">
                <div className="hidden md:flex flex-col m-auto justify-center w-[50%] border-r border-gray-100">
                    <div className="relative aspect-4/5 w-full">
                        <Image src={product?.images[0].url} alt={product.name || 'Product Image'} fill unoptimized className="object-fill" loading="eager"/>
                    </div>
                </div>
                <div className="relative flex-1 aspect-4/5 bg-gray-50">
                    <Image src={product?.images[1].url} alt={product.name || 'Product Image'} fill unoptimized className="object-fill" loading="eager"/>
                </div>
            </div>
            <div className="w-full md:w-[30%] p-6 md:p-8 flex flex-col h-full border-l border-gray-200 bg-white">
                <div className="grow overflow-y-auto pr-2 scrollbar-hide [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.collection}</p>
                            <p className="text-lg font-semibold mt-2">${formatedPrice}</p>
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
                            {product.details && product.details.length > 0 ? (
                                product.details.map((item, index) => (
                                    <Accordion type="multiple" defaultValue={["details"]} key={item.id ?? index} className="w-full my-2">
                                        <AccordionItem value="details" className="border-2 border-[#3E2327] px-2">
                                            <AccordionTrigger>Details</AccordionTrigger>
                                            <AccordionContent className="pl-4 pt-2 border-t-2 border-[#3E2327]">
                                                <strong>Composition</strong><br/>
                                                <p className="pt-2 pb-4 font-semibold">
                                                    {item.composition || "Sorry! This product does not have composition details."}<br/>
                                                </p>
                                                <strong>Fit</strong><br/>
                                                <p className="pt-2 pb-4 font-semibold">
                                                    {item.fit || "Sorry! This product does not have fit details."}<br/>
                                                </p>
                                                <strong>Technical Details</strong><br/>
                                                <p className="pt-2 font-semibold">
                                                    {item.technicalDetails || "Sorry! This product has not technical details."}<br/>
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
                                ))
                            ) : (
                                <p>Sorry! This product does not have any details.</p>
                            )}
                    </div>
                </div>
                <Button onClick={handleAddToCart} className="w-full bg-[#3E2723] text-white text-center py-4 md:py-6 font-bold uppercase tracking-widest hover:bg-[#2D1B19] transition-colors mt-9">
                    { ProductCart ? "Added to Cart": "Add to Cart"}
                </Button>
            </div>
        </div>
    )
}