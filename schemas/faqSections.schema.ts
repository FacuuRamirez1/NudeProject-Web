import z from 'zod';

export const imageSchema = z.object({
    id: z.number(),
    url: z.string(),
});

export const sectionArticlesSchema = z.object({
    count: z.number(),
});

export const sectionDtoSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    image: imageSchema,
    faqArticles: sectionArticlesSchema,
});

export type SectionDto = z.infer<typeof sectionDtoSchema>;