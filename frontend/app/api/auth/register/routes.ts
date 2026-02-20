import { registerSchema } from "@nudeproject/schemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if(!parsed.success) {
        return NextResponse.json(
            { error: 'Invalid data'},
            { status: 500 }
        )
    };

    const res = await fetch(`${process.env.STRAPI_URL}/api/auth/local/register`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parsed.data),
        }
    );

    const data = await res.json();

    if(!res.ok) {
        return NextResponse.json(
            { error: data.error?.message },
            { status: 400 }
        )
    };

    const response = NextResponse.json({ user: data.user });

    response.cookies.set("token", data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    });

    return response;
}