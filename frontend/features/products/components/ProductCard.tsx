import Image from "next/image";
import { Product } from "../types/products"
import Link from "next/link";

interface Prop {
    product: Product;
};

export const ProductCard = async ({ product } : Prop) => {
    const formatedPrice = new Intl.NumberFormat('en-US').format(product.price);

    return (
        <div className="bg-[#3E2723] flex flex-col w-full h-full group cursor-pointer">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[#3E2723] p-3">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt={product.name || "No Image"}
                    fill
                    unoptimized
                />
            </div>
            <div className="bg-[#3E2723] py-5 flex flex-col items-center justify-center flex-1 gap-2 border-t border-gray-300">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-400 font-medium text-[11px] uppercase tracking-widest text-center px-2">{product.collection}</p>
                    <h3 className="text-white font-bold text-[12px] uppercase tracking-widest text-center min-h-[32px] flex items-center">
                        {product.name}
                    </h3>
                    <p className="text-white font-bold text-[12px] uppercase tracking-widest text-center px-2">${formatedPrice}</p>
                </div>
                <div className="w-full flex justify-center mt-auto">
                    <Link href={`/products/product/${product.id}`} className="bg-[#3E2723] text-white px-4 py-2 md:px-10 md:py-4 text-xs md:text-sm font-bold uppercase hover:bg-[#755550] transition-all duration-300 border-2 rounded-2xl">
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    );
};