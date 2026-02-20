"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionDtoSchema = exports.sectionArticlesSchema = exports.imagesSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.imagesSchema = zod_1.default.object({
    id: zod_1.default.number(),
    url: zod_1.default.string(),
});
exports.sectionArticlesSchema = zod_1.default.object({
    count: zod_1.default.number(),
});
exports.sectionDtoSchema = zod_1.default.object({
    id: zod_1.default.number(),
    title: zod_1.default.string(),
    slug: zod_1.default.string(),
    image: exports.imagesSchema,
    faqArticles: exports.sectionArticlesSchema,
});
