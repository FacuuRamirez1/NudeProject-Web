import { LoginInput, RegisterInput } from "@nudeproject/schemas/dist/auth.schemas";

async function handleResponse (res: Response) {
    if(!res.ok) {
        const error = await res.json().catch(() => null);
        throw new Error(error?.message || 'Something went wrong');
    };

    return res.json();
};

export async function login (data: LoginInput) {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return handleResponse(res);
};

export async function register (data: RegisterInput) {


    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return handleResponse(res);
};