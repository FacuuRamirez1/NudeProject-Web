import z from 'zod';

export const storeImageSchema = z.object({
    id: z.number(),
    url: z.string(),
});

export const storeSchema = z.object({
    id: z.number(),
    storeName: z.string(),
    location: z.string(),
    openingHours1: z.string(),
    openingHours2: z.string(),
    openingHours3: z.string(),
    storeImage: storeImageSchema,
});

export type StoreDto = z.infer<typeof storeSchema>;