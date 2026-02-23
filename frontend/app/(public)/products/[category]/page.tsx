import { ProductGrid } from "@/features/products/components/ProductGrid";
import { getProductByCategory } from "@/features/products/services/product.service";

interface CategoryProp {
    params: {
        category: string,
    }
}

const ViewCategoryPage = async ({ params }: CategoryProp) => {
    const products = await getProductByCategory(params.category);

    return (
        <main>
            <div className="w-full min-h-[calc(100vh-4rem)] pb-16 bg-black/50 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
                <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">{params.category}</h1>
                <ProductGrid products={products}/>
            </div>
        </main>
    );
}

export default ViewCategoryPage;