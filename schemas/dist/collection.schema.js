"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionSchema = exports.imagesSchema = void 0;
const zod_1 = require("zod");
exports.imagesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string(),
});
exports.collectionSchema = zod_1.z.object({
    id: zod_1.z.number(),
    collectionName: zod_1.z.string(),
    slug: zod_1.z.string(),
    collectionImage: zod_1.z.array(exports.imagesSchema),
    isActive: zod_1.z.boolean().nullable(),
});
