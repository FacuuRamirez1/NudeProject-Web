import z from "zod";

export const orderItemSchema = z.object({
    productId: z.number(),
    title: z.string(),
    price: z.number(),
    quantity: z.number(),
    image: z.string(),
});

export const createOrderSchema = z.object({
    items: z.array(orderItemSchema),
    total: z.number().positive(),
});

export type CreateOrder = z.infer<typeof createOrderSchema>;