import z from 'zod';
export declare const storeImageSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, z.core.$strip>;
export declare const storeSchema: z.ZodObject<{
    id: z.ZodNumber;
    storeName: z.ZodString;
    location: z.ZodString;
    openingHours1: z.ZodString;
    openingHours2: z.ZodString;
    openingHours3: z.ZodString;
    storeImage: z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type StoreDto = z.infer<typeof storeSchema>;
