import z from 'zod';
export declare const productImageSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, z.core.$strip>;
export declare const productDetailsSchema: z.ZodObject<{
    id: z.ZodNumber;
    composition: z.ZodString;
    fit: z.ZodString;
    technicalDetails: z.ZodString;
}, z.core.$strip>;
export declare const productDtoSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    productName: z.ZodString;
    slug: z.ZodString;
    Price: z.ZodNumber;
    isActive: z.ZodBoolean;
    Category: z.ZodString;
    Collection: z.ZodString;
    stock: z.ZodNumber;
    description: z.ZodString;
    size: z.ZodString;
    productImage: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, z.core.$strip>>;
    details: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        composition: z.ZodString;
        fit: z.ZodString;
        technicalDetails: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProductDto = z.infer<typeof productDtoSchema>;
