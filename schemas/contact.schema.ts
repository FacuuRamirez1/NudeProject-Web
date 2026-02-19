import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email format'),
    message: z.string().min(10, 'Message to short'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;