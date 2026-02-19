"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionDtoSchema = exports.sectionArticlesSchema = exports.imagesSchema = void 0;
const zod_1 = require("zod");
exports.imagesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string(),
});
exports.sectionArticlesSchema = zod_1.z.object({
    count: zod_1.z.number(),
});
exports.sectionDtoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    slug: zod_1.z.string(),
    image: exports.imagesSchema,
    faqArticles: exports.sectionArticlesSchema,
});
