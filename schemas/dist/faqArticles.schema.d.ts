import { z } from 'zod';
export declare const faqSectionDto: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
    slug: string;
}, {
    id: number;
    title: string;
    slug: string;
}>;
export declare const TextBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    text: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    text: string;
    __component: string;
}, {
    id: number;
    text: string;
    __component: string;
}>;
export declare const ButtonBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    href: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    label: string;
    __component: string;
    href: string;
}, {
    id: number;
    label: string;
    __component: string;
    href: string;
}>;
export declare const FirstParagraphBlockDto: z.ZodObject<{
    id: z.ZodNumber;
    importantPhrase: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    __component: string;
    importantPhrase: string;
}, {
    id: number;
    __component: string;
    importantPhrase: string;
}>;
export declare const contentDto: z.ZodUnion<[z.ZodObject<{
    id: z.ZodNumber;
    text: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    text: string;
    __component: string;
}, {
    id: number;
    text: string;
    __component: string;
}>, z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    href: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    label: string;
    __component: string;
    href: string;
}, {
    id: number;
    label: string;
    __component: string;
    href: string;
}>, z.ZodObject<{
    id: z.ZodNumber;
    importantPhrase: z.ZodString;
    __component: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    __component: string;
    importantPhrase: string;
}, {
    id: number;
    __component: string;
    importantPhrase: string;
}>]>;
export declare const faqArticlesDtoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodString;
    content: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        id: z.ZodNumber;
        text: z.ZodString;
        __component: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        text: string;
        __component: string;
    }, {
        id: number;
        text: string;
        __component: string;
    }>, z.ZodObject<{
        id: z.ZodNumber;
        label: z.ZodString;
        href: z.ZodString;
        __component: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        label: string;
        __component: string;
        href: string;
    }, {
        id: number;
        label: string;
        __component: string;
        href: string;
    }>, z.ZodObject<{
        id: z.ZodNumber;
        importantPhrase: z.ZodString;
        __component: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        __component: string;
        importantPhrase: string;
    }, {
        id: number;
        __component: string;
        importantPhrase: string;
    }>]>, "many">;
    faqSection: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title: string;
        slug: string;
    }, {
        id: number;
        title: string;
        slug: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    content: ({
        id: number;
        text: string;
        __component: string;
    } | {
        id: number;
        label: string;
        __component: string;
        href: string;
    } | {
        id: number;
        __component: string;
        importantPhrase: string;
    })[];
    title: string;
    slug: string;
    excerpt: string;
    faqSection: {
        id: number;
        title: string;
        slug: string;
    };
}, {
    id: number;
    content: ({
        id: number;
        text: string;
        __component: string;
    } | {
        id: number;
        label: string;
        __component: string;
        href: string;
    } | {
        id: number;
        __component: string;
        importantPhrase: string;
    })[];
    title: string;
    slug: string;
    excerpt: string;
    faqSection: {
        id: number;
        title: string;
        slug: string;
    };
}>;
export type ArticleDto = z.infer<typeof faqArticlesDtoSchema>;
