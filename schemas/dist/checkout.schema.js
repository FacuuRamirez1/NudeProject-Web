"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.checkoutSchema = zod_1.default.object({
    cardName: zod_1.default.string().min(3).max(30),
    cardNumber: zod_1.default.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
    month: zod_1.default.string().regex(/^(0[1-9]|1[0-2])$/),
    year: zod_1.default.string().regex(/^\d{4}$/),
    cvv: zod_1.default.string().regex(/^\d{3,4}$/),
    address1: zod_1.default.string().min(5).max(30),
    address2: zod_1.default.string().optional(),
    city: zod_1.default.string().min(2),
    state: zod_1.default.string().min(2),
    postalCode: zod_1.default.string().min(3).max(10),
    country: zod_1.default.string().min(2),
    comments: zod_1.default.string().max(500).optional()
});
