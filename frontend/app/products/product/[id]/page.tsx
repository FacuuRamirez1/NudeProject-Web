'use client'
import { useGetProducts } from "@/app/api/useGetProducts";
import Skeleton from "@/components/ui/skeleton";
import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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



    return (
        <main>
            <div className="w-full min-h-[calc(100vh-4rem)] m-0 p-0 bg-[#D9D9D9] text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
                {loading ? (
                    <Skeleton />
                ) : (
                    req?.map((product: ProductType) => {

                        const newPrice = new Intl.NumberFormat('es-ES').format(product.Price);

                        return (
                            <div key={id}>
                                <div>
                                    <Image src={finalSrc(product, 0)} alt={product.productName || 'Product Image'} />
                                    <Image src={finalSrc(product, 1)} alt={product.productName || 'Product Image'} />
                                </div>
                                <Image src={finalSrc(product, 2)} alt={product.productName || 'Product Image'} />
                            </div>
                            <div>
                                <h3>{product.productName}</h3>
                                <p>{product.Collection}</p>
                                <p>${newPrice}</p>

                                <p>{product.description}</p>

                                <div>
                                    SIZES CONTAINER
                                </div>
                                <div>
                                    Product info,details,etc
                                </div>

                                <Link href="">Add to Cart</Link>
                            </div>
                        )
                    })
                )}
            </div>
        </main>
    );
}

export default ViewProductPage;