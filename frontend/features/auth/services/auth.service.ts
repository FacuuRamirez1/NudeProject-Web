import { LoginInput, RegisterInput } from "@nudeproject/schemas/dist/auth.schemas";

export async function login (data: LoginInput) {
    return fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export async function register (data: RegisterInput) {
    return fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}