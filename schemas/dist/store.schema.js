"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = exports.imageSchema = void 0;
const zod_1 = require("zod");
exports.imageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string(),
});
exports.storeSchema = zod_1.z.object({
    id: zod_1.z.number(),
    storeName: zod_1.z.string(),
    location: zod_1.z.string(),
    openingHours1: zod_1.z.string(),
    openingHours2: zod_1.z.string(),
    openingHours3: zod_1.z.string(),
    storeImage: exports.imageSchema,
});
