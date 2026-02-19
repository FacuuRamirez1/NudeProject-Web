"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqArticlesDtoSchema = exports.contentDto = exports.FirstParagraphBlockDto = exports.ButtonBlockDto = exports.TextBlockDto = exports.faqSectionDto = void 0;
const zod_1 = require("zod");
exports.faqSectionDto = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    slug: zod_1.z.string(),
});
exports.TextBlockDto = zod_1.z.object({
    id: zod_1.z.number(),
    text: zod_1.z.string(),
    __component: zod_1.z.string(),
});
exports.ButtonBlockDto = zod_1.z.object({
    id: zod_1.z.number(),
    label: zod_1.z.string(),
    href: zod_1.z.string(),
    __component: zod_1.z.string(),
});
exports.FirstParagraphBlockDto = zod_1.z.object({
    id: zod_1.z.number(),
    importantPhrase: zod_1.z.string(),
    __component: zod_1.z.string(),
});
exports.contentDto = zod_1.z.union([exports.TextBlockDto, exports.ButtonBlockDto, exports.FirstParagraphBlockDto]);
exports.faqArticlesDtoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    slug: zod_1.z.string(),
    excerpt: zod_1.z.string(),
    content: zod_1.z.array(exports.contentDto),
    faqSection: exports.faqSectionDto,
});
