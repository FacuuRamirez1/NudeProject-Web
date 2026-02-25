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
}, z.core.$strip>;
export type CreateOrder = z.infer<typeof createOrderSchema>;
