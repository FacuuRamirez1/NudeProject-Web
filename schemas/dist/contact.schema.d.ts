import z from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export type ContactFormValues = z.infer<typeof contactSchema>;
