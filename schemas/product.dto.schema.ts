import z from 'zod';

export const productImageSchema = z.object({
    id: z.number(),
    url: z.string().url(),
});

export const productDetailsSchema = z.object({
    id: z.number(),
    composition: z.string(),
    fit: z.string(),
    technicalDetails: z.string(),
})

export const productDtoSchema = z.object({
    id: z.number(),
    documentId: z.string(),
    productName: z.string(),
    slug: z.string(),
    Price: z.number(),
    isActive: z.boolean(),
    Category: z.string(),
    Collection: z.string(),
    stock: z.number().int(),
    description: z.string(),
    size: z.string(),
    productImage: z.array(productImageSchema),
    details: z.array(productDetailsSchema),
    selectedSize: z.string().min(1).max(1),
});


export type ProductDto = z.infer<typeof productDtoSchema>;