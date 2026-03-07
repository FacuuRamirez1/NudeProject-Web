import { CreateOrder } from "@nudeproject/schemas";

export async function createOrder(orderPayload: CreateOrder, token: string) {
    const strapiRes = await fetch(`${process.env.STRAPI_URL}/api/orders`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ 
                data: {
                    items: orderPayload.items,
                    total: orderPayload.total, 
                    orderStatus: 'pending'
                } 
            }),
        }
    )

    const data = await strapiRes.json();

    if(!strapiRes.ok) {
        console.log(data);
        throw new Error('Order creation failed in Strapi');
    }

    return data;
}