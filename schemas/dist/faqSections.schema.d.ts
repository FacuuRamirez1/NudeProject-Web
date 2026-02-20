import z from 'zod';
export declare const imagesSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
}, z.core.$strip>;
export declare const sectionArticlesSchema: z.ZodObject<{
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const sectionDtoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
    image: z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
    }, z.core.$strip>;
    faqArticles: z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SectionDto = z.infer<typeof sectionDtoSchema>;
