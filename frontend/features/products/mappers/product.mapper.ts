
import { ProductDto } from "@nudeproject/schemas";
import { Product } from "../types/products";

export const mapProduct = (dto: ProductDto): Product => {
    return {
        id: dto.id,
        documentId: dto.documentId,
        name: dto.productName,
        slug: dto.slug,
        price: dto.Price,
        isActive: dto.isActive && false,
        category: dto.Category,
        collection: dto.Collection,
        stock: dto.stock,
        description: dto.description,
        sizes: dto.size ? dto.size.split(",") : [],
        images: dto.productImage,
        details: dto.details,
        selectedSize: dto.selectedSize,
    };
};