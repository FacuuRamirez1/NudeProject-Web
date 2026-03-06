import z from "zod";
export declare const checkoutSchema: z.ZodObject<{
    cardName: z.ZodString;
    cardNumber: z.ZodString;
    month: z.ZodString;
    year: z.ZodString;
    cvv: z.ZodString;
    address1: z.ZodString;
    address2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
    comments: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CheckoutType = z.infer<typeof checkoutSchema>;
