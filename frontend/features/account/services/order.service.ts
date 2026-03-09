import { CreateOrder } from "@nudeproject/schemas";
import { cookies } from "next/headers";
import { getCurrentUser } from "./account.service";

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
                } 
            }),
        }
    )

    const data = await strapiRes.json();

    console.log('STRAPI STATUS: ', strapiRes.status);
    console.log('STRAPI RESPOSE: ', data);

    if(!strapiRes.ok) {
        console.log(data);
        throw new Error('Order creation failed in Strapi');
    }

    return data;
}


// GET ORDERS FUCTION
export async function getUserOrders(userId: number) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value;

    const res = await fetch(
        `${process.env.STRAPI_URL}/api/orders?filters[user][id][$eq]=${userId}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        }
    );

    return res.json();
}