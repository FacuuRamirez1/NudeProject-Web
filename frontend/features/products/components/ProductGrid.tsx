import { Product } from "../types/products"
import { ProductCard } from "./ProductCard";

interface Prop {
    products: Product[];
}

export const ProductGrid = ({ products }: Prop) => {
    if(!products.length) {
        return (
            <div className="col-span-full flex items-center justify-center min-h-96 text-center px-4">
                <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700 bg-black/80 p-12 border-black/80 rounded-2xl">
                    <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none select-none pb-6">
                        Sorry!
                    </h2>
                    <div className="flex flex-col gap-2 -mt-8 md:-mt-12">
                        <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest">
                            No Clothing Found
                        </h3>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="ml-2 md:-ml-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 lg:gap-x-7 w-full max-w-4xl px-8 pb-4 items-stretch">
            { products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))

            }
        </div>
    );
};