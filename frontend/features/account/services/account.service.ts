export async function getCurrentUser() {
    const res = await fetch(`${process.env.STRPI_URL}/api/account`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Unauthorized');
    };

    return res.json();
};