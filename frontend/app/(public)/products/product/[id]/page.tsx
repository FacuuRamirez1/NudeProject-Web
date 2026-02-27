import { getProductById } from "@/features/products/services/product.service";
import { notFound } from "next/navigation";
import { ProductView } from "@/features/products/components/ProductView";

interface ProductProp {
    params: Promise<{
        id: number;
    }>;
};


const ViewProductPage = async ({ params }: ProductProp) => {
    const { id } = await params;
    const product = await getProductById(Number(id));
    console.log('Console log desde page: ', product);
    if(!product) {
        notFound();
    };

    return <ProductView product={product}/>
};

export default ViewProductPage;