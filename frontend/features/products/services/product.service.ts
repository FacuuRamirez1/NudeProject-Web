import { mapProduct } from "../mappers/product.mapper";
import { ProductDto } from "@nudeproject/schemas";
import { Product } from "../types/products";


const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// CALL TO FETCH ALL PRODUCTS
export const getProduct = async () => {
    const res = await fetch(`${BASE_URL}/api/products?[isActive][$eq]=true&populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data: ProductDto[] = await res.json();
    return data.map(mapProduct);
};

// CALL TO FETCH PRODUCT FOR CATEGORIES
export const getProductByCategory = async (category: string) => {
    const res = await fetch(`${BASE_URL}/api/products?[Category][$eq]=${category}&populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch product by category");
    }

    const data: ProductDto[] = await res.json();
    return data.map(mapProduct);
}

// CALL TO FETCH PRODUCT FOR ID
export const getProductById = async (id: number): Promise<Product | null> => {
    const res = await fetch(`${BASE_URL}/api/products/${id}`)

    if(!res.ok) {
        throw new Error("Failed to fetch product by id");
    }

    const data: ProductDto = await res.json();
    return mapProduct(data);
}

// ?filters[id][$eq]=${id}&populate[details][populate]=*&populate[productImage]=true&populate[collectionItem]=true