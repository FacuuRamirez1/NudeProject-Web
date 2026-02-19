import { ContactForm } from "../types/contactType";

const STRAPI_URL = 'http://localhost:1337/api/contact';

export const sendContactForm = async (body: ContactForm) => {
    const response = await fetch(STRAPI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: body }),
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    return await response.json();
};