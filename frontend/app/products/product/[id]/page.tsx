import { getProductById } from "@/features/products/services/product.service";
import { notFound } from "next/navigation";
import { ProductView } from "@/features/products/components/ProductView";

interface ProductProp {
    params: {
        id: number;
    };
};


export async function ViewProductPage ({ params }: ProductProp) {
    const product = await getProductById(params.id);

    if(!product) {
        notFound();
    };

    return <ProductView product={product}/>
};