export async function createOrder(orderPayload: unknown, token: string) {
    const strapiRes = await fetch(`${process.env.STRAPI_URL}/api/orders`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(orderPayload),
        }
    )

    if(!strapiRes.ok) {
        throw new Error('Order creation failed in Strapi');
    }

    return strapiRes.json();
}