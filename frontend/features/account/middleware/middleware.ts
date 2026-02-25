export function accountMiddleware(req: NextRequest) {
    const token = req.cookies.get('token');

    const isProtectedRoute = req.nextUrl.pathname.startWith('/account');

    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new url('/login', req.url));
    };

    return NextResponse.next();
}

export const config = {
    matcher: ['/account/:path*'],
};