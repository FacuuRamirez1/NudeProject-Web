import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    const { pathname } = req.nextUrl;

    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
    const isProtectedPage = pathname.startsWith('/account') || pathname.startsWith('/checkout');

    if(!token && isProtectedPage) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(token && isAuthPage) {
        return NextResponse.redirect(new URL('/account', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/account/:path*',
        '/checkout/:path*',
        '/login',
        '/register',
    ],
};