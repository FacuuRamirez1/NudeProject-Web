'use client'
import Image from "next/image";
import Link from "next/link";
// import { useGetProducts } from "@/app/api/useGetProducts";
// import { ProductType } from "@/types/products";
// import { ResponseType } from "@/types/responses";
import { use } from "react";

const ViewProductPage = ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = use(params)



    return (
        <main>
            <div className="w-full min-h-[calc(100vh-4rem)] m-0 p-0 bg-[#D9D9D9] text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
                <div key={id}>
                    <div>
                        <Image src="" alt="" />
                        <Image src="" alt="" />
                    </div>
                    <Image src="" alt="" />
                </div>
                <div>
                    <h3>Product name</h3>
                    <p>Collection</p>
                    <p>$Product-price</p>

                    <p>Product description</p>

                    <div>
                        SIZES CONTAINER
                    </div>
                    <div>
                        Product info,details,etc
                    </div>

                    <Link href="">Add to Cart</Link>
                </div>
            </div>
        </main>
    );
}

export default ViewProductPage;