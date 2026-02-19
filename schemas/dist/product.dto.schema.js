"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDtoSchema = exports.productDetailsSchema = exports.productImageSchema = void 0;
const zod_1 = require("zod");
exports.productImageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string().url(),
});
exports.productDetailsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    composition: zod_1.z.string(),
    fit: zod_1.z.string(),
    technicalDetails: zod_1.z.string(),
});
exports.productDtoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    documentId: zod_1.z.string(),
    productName: zod_1.z.string(),
    slug: zod_1.z.string(),
    Price: zod_1.z.number(),
    isActive: zod_1.z.boolean().nullable(),
    Category: zod_1.z.string(),
    Collection: zod_1.z.string(),
    stock: zod_1.z.number().int(),
    description: zod_1.z.string(),
    size: zod_1.z.string(),
    productImage: zod_1.z.array(exports.productImageSchema),
    details: zod_1.z.array(exports.productDetailsSchema),
});
