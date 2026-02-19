import z from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    message: string;
    email: string;
}, {
    name: string;
    message: string;
    email: string;
}>;
export type ContactFormValues = z.infer<typeof contactSchema>;
