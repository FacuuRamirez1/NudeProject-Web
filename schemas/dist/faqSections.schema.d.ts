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
export declare const sectionArticlesSchema: z.ZodObject<{
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    count: number;
}, {
    count: number;
}>;
export declare const sectionDtoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
    image: z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        url: string;
    }, {
        id: number;
        url: string;
    }>;
    faqArticles: z.ZodObject<{
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        count: number;
    }, {
        count: number;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
    image: {
        id: number;
        url: string;
    };
    slug: string;
    faqArticles: {
        count: number;
    };
}, {
    id: number;
    title: string;
    image: {
        id: number;
        url: string;
    };
    slug: string;
    faqArticles: {
        count: number;
    };
}>;
export type SectionDto = z.infer<typeof sectionDtoSchema>;
