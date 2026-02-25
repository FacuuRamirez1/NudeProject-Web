import { createOrderSchema } from "@nudeproject/schemas";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const token = cookies().get('token');

    if(!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const parsed = createOrderSchema.safeParse(body);

    if(!parsed.success) {
        return NextResponse.json({ message: 'Invalid data'} , { status: 400 });
    }

    const orderPayload = {
        data: {
            items: parsed.data.items,
            total: parsed.data.total,
            status: 'paid',
        }
    };

    
}