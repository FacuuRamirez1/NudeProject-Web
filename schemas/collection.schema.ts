import z from "zod";


export const imagesSchema = z.object({
    id: z.number(),
    url: z.string(),
});

export const collectionSchema = z.object({
    id: z.number(),
    collectionName: z.string(),
    slug: z.string(),
    collectionImage: z.array(imagesSchema),
    isActive: z.boolean().nullable(),
});

export type CollectionSchema = z.infer<typeof collectionSchema>;