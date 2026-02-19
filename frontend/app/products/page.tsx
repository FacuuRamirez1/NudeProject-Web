import { getProduct } from "@/features/products/services/product.service";
import { ProductGrid } from "@/features/products/components/ProductGrid";

export async function ViewAllPage () {
    const products = await getProduct();

    return (
        <main className="w-full min-h-screen pb-16 bg-black/50 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">VIEW ALL</h1>
            <ProductGrid products={products}/>
        </main>
    );
};
