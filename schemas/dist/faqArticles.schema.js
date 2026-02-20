"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqArticlesDtoSchema = exports.contentDto = exports.FirstParagraphBlockDto = exports.ButtonBlockDto = exports.TextBlockDto = exports.faqSectionDto = void 0;
const zod_1 = __importDefault(require("zod"));
exports.faqSectionDto = zod_1.default.object({
    id: zod_1.default.number(),
    title: zod_1.default.string(),
    slug: zod_1.default.string(),
});
exports.TextBlockDto = zod_1.default.object({
    id: zod_1.default.number(),
    text: zod_1.default.string(),
    __component: zod_1.default.string(),
});
exports.ButtonBlockDto = zod_1.default.object({
    id: zod_1.default.number(),
    label: zod_1.default.string(),
    href: zod_1.default.string(),
    __component: zod_1.default.string(),
});
exports.FirstParagraphBlockDto = zod_1.default.object({
    id: zod_1.default.number(),
    importantPhrase: zod_1.default.string(),
    __component: zod_1.default.string(),
});
exports.contentDto = zod_1.default.union([exports.TextBlockDto, exports.ButtonBlockDto, exports.FirstParagraphBlockDto]);
exports.faqArticlesDtoSchema = zod_1.default.object({
    id: zod_1.default.number(),
    title: zod_1.default.string(),
    slug: zod_1.default.string(),
    excerpt: zod_1.default.string(),
    content: zod_1.default.array(exports.contentDto),
    faqSection: exports.faqSectionDto,
});
