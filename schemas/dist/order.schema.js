"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSchema = exports.orderItemSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.orderItemSchema = zod_1.default.object({
    productId: zod_1.default.number(),
    title: zod_1.default.string(),
    price: zod_1.default.number(),
    quantity: zod_1.default.number(),
    image: zod_1.default.string(),
});
exports.createOrderSchema = zod_1.default.object({
    items: zod_1.default.array(exports.orderItemSchema),
    total: zod_1.default.number().positive(),
});
