import z from "zod";

export const checkoutSchema = z.object({
    cardName: z.string().min(3).max(30),
    cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
    month: z.string().regex(/^(0[1-9]|1[0-2])$/),
    year: z.string().regex(/^\d{4}$/),
    cvv: z.string().regex(/^\d{3,4}$/),
    address1: z.string().min(5).max(30),
    address2: z.string().optional(),
    city: z.string().min(2),
    state: z.string().min(2),
    postalCode: z.string().min(3).max(10),
    country: z.string().min(2),
    comments: z.string().max(500).optional()
});

export type CheckoutType = z.infer<typeof checkoutSchema>;