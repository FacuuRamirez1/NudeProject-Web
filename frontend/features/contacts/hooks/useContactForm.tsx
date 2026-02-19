'use client'
import { useState } from "react";
import { toast } from "sonner";
import { sendContactForm } from "../services/contacts.service";
import { contactSchema } from "@nudeproject/schemas";

export const useContactForm = () => {
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formElement = e.currentTarget;
        setIsPending(true);

        const form = new FormData(formElement);

        const result = contactSchema.safeParse({
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message'),
        });

        if(!result.success) {
            const errors = result.error.flatten().fieldErrors;

            if(errors.name) toast.error(errors.name[0]);
            if(errors.email) toast.error(errors.email[0]);
            if(errors.message) toast.error(errors.message[0]);

            setIsPending(false);
            return;
        }

        try{
            await sendContactForm(result.data);

            toast.success('Message send successfully!');
            formElement.reset();
        } catch(error) {
            toast.error('Network error');
            console.log(error);
        } finally {
            setIsPending(false);
        }
    }

    return { handleSubmit, isPending};
}