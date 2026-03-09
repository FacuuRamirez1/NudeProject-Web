import z from "zod";
export declare const orderItemSchema: z.ZodObject<{
    productId: z.ZodNumber;
    title: z.ZodString;
    price: z.ZodNumber;
    quantity: z.ZodNumber;
    image: z.ZodString;
}, z.core.$strip>;
export declare const createOrderSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodNumber;
        title: z.ZodString;
        price: z.ZodNumber;
        quantity: z.ZodNumber;
        image: z.ZodString;
    }, z.core.$strip>>;
    total: z.ZodNumber;
    checkoutData: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateOrder = z.infer<typeof createOrderSchema>;
