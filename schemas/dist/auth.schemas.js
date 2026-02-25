"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.registerSchema = zod_1.default.object({
    Name: zod_1.default.string().min(3),
    email: zod_1.default.email(),
    password: zod_1.default.string().min(8),
    confirmPassword: zod_1.default.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});
exports.loginSchema = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string().min(1),
});
