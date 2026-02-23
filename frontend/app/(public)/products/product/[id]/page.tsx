import { getProductById } from "@/features/products/services/product.service";
import { notFound } from "next/navigation";
import { ProductView } from "@/features/products/components/ProductView";

interface ProductProp {
    params: {
        id: number;
    };
};


const ViewProductPage = async ({ params }: ProductProp) => {
    const product = await getProductById(params.id);

    if(!product) {
        notFound();
    };

    return <ProductView product={product}/>
};

export default ViewProductPage;