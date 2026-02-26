import { createOrder } from "@/features/account/services/order.service";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const cookiesStore = await cookies();
        const token = cookiesStore.get('token')?.value;

        if(!token) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            )
        };

        const order = await createOrder(body, token);

        return NextResponse.json(order);
        
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Order failed'},
            { status: 500 }
        );
    };
};