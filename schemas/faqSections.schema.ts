import z from 'zod';

export const imagesSchema = z.object({
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
    image: imagesSchema,
    faqArticles: sectionArticlesSchema,
});

export type SectionDto = z.infer<typeof sectionDtoSchema>;