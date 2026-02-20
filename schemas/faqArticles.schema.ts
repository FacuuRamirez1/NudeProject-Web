import z from 'zod';

export const faqSectionDto = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
});

export const TextBlockDto = z.object({
    id: z.number(),
    text: z.string(),
    __component: z.string(),
});

export const ButtonBlockDto = z.object({
    id: z.number(),
    label: z.string(),
    href: z.string(),
    __component: z.string(),
});

export const FirstParagraphBlockDto = z.object({
    id: z.number(),
    importantPhrase: z.string(),
    __component: z.string(),
});

export const contentDto = z.union([TextBlockDto, ButtonBlockDto, FirstParagraphBlockDto]);

export const faqArticlesDtoSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    content: z.array(contentDto),
    faqSection: faqSectionDto,
});

export type ArticleDto = z.infer<typeof faqArticlesDtoSchema>;