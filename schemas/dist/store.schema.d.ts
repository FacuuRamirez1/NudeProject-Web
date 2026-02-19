import { z } from 'zod';
export declare const imageSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    url: string;
}, {
    id: number;
    url: string;
}>;
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
    }, "strip", z.ZodTypeAny, {
        id: number;
        url: string;
    }, {
        id: number;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    location: string;
    id: number;
    storeName: string;
    openingHours1: string;
    openingHours2: string;
    openingHours3: string;
    storeImage: {
        id: number;
        url: string;
    };
}, {
    location: string;
    id: number;
    storeName: string;
    openingHours1: string;
    openingHours2: string;
    openingHours3: string;
    storeImage: {
        id: number;
        url: string;
    };
}>;
export type StoreDto = z.infer<typeof storeSchema>;
