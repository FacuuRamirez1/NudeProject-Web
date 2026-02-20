import { loginSchema } from "@nudeproject/schemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if(!parsed.success) {
        return NextResponse.json(
            { error: 'Invalid data'},
            { status: 400 }
        )
    };

    const res = await fetch(`${process.env.STRAPI_URL}`, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: parsed.data.email,
                password: parsed.data.password
            })
        }
    );

    const data = await res.json();

    if(!res.ok) {
        return NextResponse.json(
            { error: 'Incorrect credentials'},
            { status: 401 }
        )
    };

    const response = NextResponse.json({ user: data.user });

    response.cookies.set('token', data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    });

    return response;
}