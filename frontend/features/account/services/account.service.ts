import { cookies } from "next/headers";

export async function getCurrentUser() {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;

    if(!token) {
        throw new Error('Unauthorized');
    }

    const res = await fetch(`${process.env.STRAPI_URL}/api/users/me?populate=orders`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`},
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Unauthorized');
    };

    return res.json();
};

export async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
}