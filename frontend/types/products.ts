export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    Price: number;
    active?: boolean | null;
    Category?: string;
    Collection?: string;
    stock: number;
    description: string;
    productImage: [
        {
            id: number;
            url: string;
        },
        {
            id: number;
            url: string;
        },
        {
            id: number;
            url: string;
        }
    ];
};