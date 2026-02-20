import z from 'zod';
export declare const faqSectionDto: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
}, z.core.$strip>;
export declare const TextBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    text: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>;
export declare const ButtonBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    href: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>;
export declare const FirstParagraphBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    importantPhrase: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>;
export declare const contentDto: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodNumber;
    text: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    href: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodNumber;
    importantPhrase: z.ZodString;
    __component: z.ZodString;
}, z.core.$strip>]>;
export declare const faqArticlesDtoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodString;
    content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        id: z.ZodNumber;
        text: z.ZodString;
        __component: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodNumber;
        label: z.ZodString;
        href: z.ZodString;
        __component: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodNumber;
        importantPhrase: z.ZodString;
        __component: z.ZodString;
    }, z.core.$strip>]>>;
    faqSection: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        slug: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ArticleDto = z.infer<typeof faqArticlesDtoSchema>;
