import { ProductGrid } from "@/features/products/components/ProductGrid";
import { getProduct } from "@/features/products/services/product.service";

interface Prop {
    params: {
        slug: string,
    }
}

export async function ViewCollectionPage ({ params }: Prop) {
    const cleanSlug = decodeURIComponent(params.slug).toLowerCase().replace(/-/g, ' ').trim();
    const collectionName = cleanSlug.toUpperCase();

    const products = await getProduct();

    return (
        <main className="w-full min-h-[calc(100vh-4rem)] pb-16 bg-black/40 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
            <h1 className="font-bold text-5xl text-center md:text-5xl mb-6 mt-5 lg:mt-3">{collectionName.toUpperCase()}</h1>
            <ProductGrid products={products}/>
        </main>
    );
}
