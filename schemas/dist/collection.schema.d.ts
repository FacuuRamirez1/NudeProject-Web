import z from "zod";
export declare const imagesSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, z.core.$strip>;
export declare const collectionSchema: z.ZodObject<{
    id: z.ZodNumber;
    collectionName: z.ZodString;
    slug: z.ZodString;
    collectionImage: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, z.core.$strip>>;
    isActive: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
export type CollectionSchema = z.infer<typeof collectionSchema>;
