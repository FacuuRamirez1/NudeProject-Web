"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDtoSchema = exports.productDetailsSchema = exports.productImageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.productImageSchema = zod_1.default.object({
    id: zod_1.default.number(),
    url: zod_1.default.string().url(),
});
exports.productDetailsSchema = zod_1.default.object({
    id: zod_1.default.number(),
    composition: zod_1.default.string(),
    fit: zod_1.default.string(),
    technicalDetails: zod_1.default.string(),
});
exports.productDtoSchema = zod_1.default.object({
    id: zod_1.default.number(),
    documentId: zod_1.default.string(),
    productName: zod_1.default.string(),
    slug: zod_1.default.string(),
    Price: zod_1.default.number(),
    isActive: zod_1.default.boolean(),
    Category: zod_1.default.string(),
    Collection: zod_1.default.string(),
    stock: zod_1.default.number().int(),
    description: zod_1.default.string(),
    size: zod_1.default.string(),
    productImage: zod_1.default.array(exports.productImageSchema),
    details: zod_1.default.array(exports.productDetailsSchema),
    selectedSize: zod_1.default.string().min(1).max(1),
});
