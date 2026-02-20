"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionSchema = exports.imagesSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.imagesSchema = zod_1.default.object({
    id: zod_1.default.number(),
    url: zod_1.default.string(),
});
exports.collectionSchema = zod_1.default.object({
    id: zod_1.default.number(),
    collectionName: zod_1.default.string(),
    slug: zod_1.default.string(),
    collectionImage: zod_1.default.array(exports.imagesSchema),
    isActive: zod_1.default.boolean().nullable(),
});
