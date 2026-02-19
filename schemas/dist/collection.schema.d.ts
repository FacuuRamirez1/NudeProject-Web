import { z } from 'zod';
export declare const imagesSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    url: string;
}, {
    id: number;
    url: string;
}>;
export declare const collectionSchema: z.ZodObject<{
    id: z.ZodNumber;
    collectionName: z.ZodString;
    slug: z.ZodString;
    collectionImage: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        url: string;
    }, {
        id: number;
        url: string;
    }>, "many">;
    isActive: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: number;
    collectionName: string;
    slug: string;
    collectionImage: {
        id: number;
        url: string;
    }[];
    isActive: boolean | null;
}, {
    id: number;
    collectionName: string;
    slug: string;
    collectionImage: {
        id: number;
        url: string;
    }[];
    isActive: boolean | null;
}>;
export type CollectionSchema = z.infer<typeof collectionSchema>;
