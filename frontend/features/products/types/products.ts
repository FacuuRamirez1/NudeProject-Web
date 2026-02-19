export type Product = {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    price: number;
    isActive?: boolean | null;
    category?: string;
    collection?: string;
    stock: number;
    description: string;
    sizes: string[];
    images: ProductImage[];
    details: ProductDetails[];
};


export type ProductImage = {
    id: number;
    url: string;
};

export type ProductDetails = {
    id:number;
    composition: string;
    fit: string;
    technicalDetails: string;
};