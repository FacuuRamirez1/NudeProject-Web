"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = exports.storeImageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.storeImageSchema = zod_1.default.object({
    id: zod_1.default.number(),
    url: zod_1.default.string(),
});
exports.storeSchema = zod_1.default.object({
    id: zod_1.default.number(),
    storeName: zod_1.default.string(),
    location: zod_1.default.string(),
    openingHours1: zod_1.default.string(),
    openingHours2: zod_1.default.string(),
    openingHours3: zod_1.default.string(),
    storeImage: exports.storeImageSchema,
});
